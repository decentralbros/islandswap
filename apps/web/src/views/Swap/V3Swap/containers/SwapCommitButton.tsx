import { TradeType } from '@pancakeswap/sdk'
import { SmartRouterTrade } from '@pancakeswap/smart-router'
import { Currency, CurrencyAmount, Token } from '@pancakeswap/swap-sdk-core'
import { Box, Button, Dots, useModal } from '@pancakeswap/uikit'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'

import { useTranslation } from '@pancakeswap/localization'
import { getUniversalRouterAddress } from '@pancakeswap/universal-router-sdk'
import { useUserSlippage } from '@pancakeswap/utils/user'
import { parseUnits } from '@pancakeswap/utils/viem/parseUnits'
import { ConfirmModalState } from '@pancakeswap/widgets-internal'
import { sendTransaction, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { CommitButton } from 'components/CommitButton'
import ConnectWalletButton from 'components/ConnectWalletButton'
import SettingsModal, { withCustomOnDismiss } from 'components/Menu/GlobalSettings/SettingsModal'
import { SettingsMode } from 'components/Menu/GlobalSettings/types'
import { BIG_INT_ZERO } from 'config/constants/exchange'
import { useCurrency } from 'hooks/Tokens'
import { useIsTransactionUnsupported } from 'hooks/Trades'
import useWrapCallback, { WrapType } from 'hooks/useWrapCallback'
import qs from 'qs'
import { Field } from 'state/swap/actions'
import { useSwapState } from 'state/swap/hooks'
import { useSwapActionHandlers } from 'state/swap/useSwapActionHandlers'
import { useCurrencyBalances } from 'state/wallet/hooks'
import { warningSeverity } from 'utils/exchange'
import { config } from 'utils/wagmi'
import { useAccount, useChainId } from 'wagmi'
import { abi } from '../abi'
import { useParsedAmounts, useSlippageAdjustedAmounts, useSwapInputError } from '../hooks'
import { useConfirmModalState } from '../hooks/useConfirmModalState'
import { useSwapConfig } from '../hooks/useSwapConfig'
import { useSwapCurrency } from '../hooks/useSwapCurrency'
import { CommitButtonProps } from '../types'
import { computeTradePriceBreakdown } from '../utils/exchange'
import { ConfirmSwapModal } from './ConfirmSwapModal'

const SettingsModalWithCustomDismiss = withCustomOnDismiss(SettingsModal)

interface SwapCommitButtonPropsType {
  trade?: SmartRouterTrade<TradeType>
  tradeError?: Error
  tradeLoading?: boolean
  // setLock: (lock: boolean) => void
}

const useSettingModal = (onDismiss) => {
  const [openSettingsModal] = useModal(
    <SettingsModalWithCustomDismiss customOnDismiss={onDismiss} mode={SettingsMode.SWAP_LIQUIDITY} />,
  )
  return openSettingsModal
}

const useSwapCurrencies = () => {
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId) as Currency
  const outputCurrency = useCurrency(outputCurrencyId) as Currency

  return { inputCurrency, outputCurrency }
}

const WrapCommitButtonReplace: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation()
  const { inputCurrency, outputCurrency } = useSwapCurrencies()
  const { typedValue } = useSwapState()
  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(inputCurrency, outputCurrency, typedValue)
  const showWrap = wrapType !== WrapType.NOT_APPLICABLE

  if (!showWrap) return children

  return (
    <CommitButton width="100%" disabled={Boolean(wrapInputError)} onClick={onWrap}>
      {wrapInputError ?? (wrapType === WrapType.WRAP ? t('Wrap') : wrapType === WrapType.UNWRAP ? t('Unwrap') : null)}
    </CommitButton>
  )
}

const ConnectButtonReplace = ({ children }) => {
  const { address: account } = useAccount()

  if (!account) {
    return <ConnectWalletButton width="100%" />
  }
  return children
}

const UnsupportedSwapButtonReplace = ({ children }) => {
  const { t } = useTranslation()
  const { inputCurrency, outputCurrency } = useSwapCurrencies()
  const swapIsUnsupported = useIsTransactionUnsupported(inputCurrency, outputCurrency)

  if (swapIsUnsupported) {
    return (
      <Button width="100%" disabled>
        {t('Unsupported Asset')}
      </Button>
    )
  }
  return children
}

const SwapCommitButtonComp: React.FC<SwapCommitButtonPropsType & CommitButtonProps> = (props) => {
  return (
    <UnsupportedSwapButtonReplace>
      <ConnectButtonReplace>
        <WrapCommitButtonReplace>
          <SwapCommitButtonInner {...props} />
        </WrapCommitButtonReplace>
      </ConnectButtonReplace>
    </UnsupportedSwapButtonReplace>
  )
}

export const SwapCommitButton = memo(SwapCommitButtonComp)

const SwapCommitButtonInner = memo(function SwapCommitButtonInner({
  trade,
  tradeError,
  tradeLoading,
  beforeCommit,
  afterCommit,
}: SwapCommitButtonPropsType & CommitButtonProps) {
  const { address: account } = useAccount()
  const { t } = useTranslation()
  const chainId = useChainId()
  const [allowedSlippage] = useUserSlippage()
  const [loadSwap, setLoadSwap] = useState<boolean>(false)

  // form data
  const { independentField, typedValue } = useSwapState()
  const [inputCurrency, outputCurrency] = useSwapCurrency()
  const { isExpertMode } = useSwapConfig()
  const slippageAdjustedAmounts = useSlippageAdjustedAmounts(trade)
  const amountToApprove = useMemo(
    () => (inputCurrency?.isNative ? undefined : slippageAdjustedAmounts[Field.INPUT]),
    [inputCurrency?.isNative, slippageAdjustedAmounts],
  )
  const tradePriceBreakdown = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  // warnings on slippage
  const priceImpactSeverity = warningSeverity(
    tradePriceBreakdown ? tradePriceBreakdown.priceImpactWithoutFee : undefined,
  )

  const relevantTokenBalances = useCurrencyBalances(account ?? undefined, [
    inputCurrency ?? undefined,
    outputCurrency ?? undefined,
  ])

  const currencyBalances = {
    [Field.INPUT]: relevantTokenBalances[0],
    [Field.OUTPUT]: relevantTokenBalances[1],
  }
  const parsedAmounts = useParsedAmounts(trade, currencyBalances, false)
  const parsedIndependentFieldAmount = parsedAmounts[independentField]
  const swapInputError = useSwapInputError(trade, currencyBalances)
  const [tradeToConfirm, setTradeToConfirm] = useState<SmartRouterTrade<TradeType> | undefined>(undefined)
  const [indirectlyOpenConfirmModalState, setIndirectlyOpenConfirmModalState] = useState(false)

  const { callToAction, confirmState, txHash, confirmActions, errorMessage, resetState } = useConfirmModalState(
    isExpertMode ? trade : tradeToConfirm,
    amountToApprove?.currency.isToken ? (amountToApprove as CurrencyAmount<Token>) : undefined,
    getUniversalRouterAddress(chainId),
  )

  const { onUserInput } = useSwapActionHandlers()
  const reset = useCallback(() => {
    afterCommit?.()
    if (confirmState === ConfirmModalState.COMPLETED) {
      onUserInput(Field.INPUT, '')
    }
    resetState()
  }, [afterCommit, confirmState, onUserInput, resetState])

  const handleAcceptChanges = useCallback(() => {
    setTradeToConfirm(trade)
  }, [trade])

  const isValid = useMemo(() => !swapInputError && !tradeLoading, [swapInputError, tradeLoading])

  const userHasSpecifiedInputOutput = Boolean(
    inputCurrency && outputCurrency && parsedIndependentFieldAmount?.greaterThan(BIG_INT_ZERO),
  )

  const onConfirm = useCallback(() => {
    beforeCommit?.()
    callToAction()
  }, [beforeCommit, callToAction])

  // modals
  const onSettingModalDismiss = useCallback(() => {
    setIndirectlyOpenConfirmModalState(true)
  }, [])
  const openSettingModal = useSettingModal(onSettingModalDismiss)
  const [openConfirmSwapModal] = useModal(
    <ConfirmSwapModal
      trade={trade}
      originalTrade={tradeToConfirm}
      txHash={txHash}
      confirmModalState={confirmState}
      pendingModalSteps={confirmActions ?? []}
      swapErrorMessage={errorMessage}
      currencyBalances={currencyBalances}
      onAcceptChanges={handleAcceptChanges}
      onConfirm={onConfirm}
      openSettingModal={openSettingModal}
      customOnDismiss={reset}
    />,
    true,
    true,
    'confirmSwapModal',
  )

  useEffect(() => {
    if (indirectlyOpenConfirmModalState) {
      setIndirectlyOpenConfirmModalState(false)
      openConfirmSwapModal()
    }
  }, [indirectlyOpenConfirmModalState, openConfirmSwapModal])

  const handleSwap = async () => {
    if (!currencyBalances || !inputCurrency || !outputCurrency) return

    try {
      setLoadSwap(true)

      if (!inputCurrency.isNative) {
        const hash = await writeContract(config, {
          abi,
          address: inputCurrency.address as `0x${string}`, // contract
          functionName: 'approve',
          args: [
            account as `0x${string}`, // spender
            parseUnits(typedValue, inputCurrency.decimals),
          ],
          chainId,
        })

        await waitForTransactionReceipt(config, {
          confirmations: 1,
          hash: hash as `0x${string}`,
          chainId,
        })
      }

      let chain: string = ''

      switch (chainId) {
        case 42161:
          chain = 'arb'
          break
        case 8453:
          chain = 'base'
          break
        case 56:
          chain = 'bsc'
          break
        case 1:
          chain = 'mainnet'
          break
        case 11155111:
          chain = 'sepolia'
          break

        default:
          break
      }

      let sellToken: string = ''

      if (inputCurrency.isNative) {
        sellToken =
          inputCurrency.chainId !== 56
            ? '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            : '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
      } else {
        sellToken = inputCurrency.address
      }

      let buyToken: string = ''

      if (outputCurrency.isNative) {
        buyToken =
          inputCurrency.chainId !== 56
            ? '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
            : '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
      } else {
        buyToken = outputCurrency.address
      }

      const params = {
        chainId,
        sellToken,
        buyToken,
        sellAmount: BigInt(parseFloat(typedValue) * 10 ** inputCurrency.decimals),
        taker: account as string,
        slippagePercentage: allowedSlippage / 100,
        buyTokenPercentageFee: 0.01, // 1%
        feeRecipient: '0xd2A2B2fa9b97da9cB5AB80717AaDA9bF86eB8103',
      }

      const response = await fetch(`/api/quote-${chain}?${qs.stringify(params)}`)
      const quote = await response.json()

      const tx = await sendTransaction(config, {
        account,
        chainId: quote.chainId,
        gasPrice: BigInt(quote.gasPrice * 2),
        to: quote.to,
        value: quote.value,
        data: quote.data,
      })

      await waitForTransactionReceipt(config, {
        confirmations: 1,
        hash: tx as `0x${string}`,
        chainId,
      })
      setLoadSwap(false)
    } catch (error) {
      setLoadSwap(false)
    }
  }

  return (
    <Box mt="0.25rem">
      <CommitButton
        id="swap-button"
        width="100%"
        data-dd-action-name="Swap commit button"
        variant={isValid && priceImpactSeverity > 2 && !errorMessage ? 'danger' : 'primary'}
        disabled={loadSwap}
        onClick={handleSwap}
      >
        {(loadSwap && <Dots>{t('Swap')}</Dots>) || t('Swap')}
      </CommitButton>
    </Box>
  )
})
