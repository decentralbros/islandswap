import Home from '../views/Home'

const IndexPage = () => {
  return <Home />
}

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient()
//   const results = await getTotalTvl()
//   queryClient.setQueryData(['totalTx30Days'], results.totalTx30Days)
//   queryClient.setQueryData(['tvl'], results.tvl)
//   queryClient.setQueryData(['addressCount30Days'], results.addressCount30Days)
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }

IndexPage.chains = []
IndexPage.isShowV4IconButton = false

export default IndexPage
