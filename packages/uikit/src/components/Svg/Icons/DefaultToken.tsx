import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const DefaultTokenIcon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="40" height="40" rx="20" fill="currentColor" />
      <mask id="mask0_15183_6588" maskUnits="userSpaceOnUse" x="2" y="2" width="37" height="37">
        <path
          d="M38.0555 20.1389C38.0555 30.034 30.0339 38.0555 20.1388 38.0555C10.2437 38.0555 2.22217 30.034 2.22217 20.1389C2.22217 10.2438 10.2437 2.22219 20.1388 2.22219C30.0339 2.22219 38.0555 10.2438 38.0555 20.1389Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_15183_6588)">
        <path
          d="M23.0776 24.8435L23.0776 24.2131L23.0776 24.1983C23.0776 24.1983 23.0776 24.1983 23.0776 24.1983V24.2131V24.8435ZM30.0135 14.9104C26.1473 14.9104 23.1196 18.8831 23.0526 24.1983H23.0506H23.0482H23.0457H23.0432H23.0405H23.0377H23.0349H23.0319H23.0289H23.0258H23.0226H23.0192H23.0158H23.0123H23.0087H23.0051H23.0013H22.9974H22.9935H22.9894H22.9853H22.981H22.9767H22.9723H22.9678H22.9633H22.9586H22.9538H22.949H22.9441H22.9391H22.934H22.9288H22.9235H22.9182H22.9127H22.9072H22.9016H22.8959H22.8902H22.8843H22.8784H22.8724H22.8663H22.8601H22.8539H22.8476H22.8411H22.8347H22.8281H22.8214H22.8147H22.8079H22.801H22.7941H22.787H22.7799H22.7728H22.7655H22.7582H22.7508H22.7433H22.7357H22.7281H22.7204H22.7126H22.7048H22.6968H22.6889H22.6808H22.6727H22.6645H22.6562H22.6478H22.6394H22.6309H22.6224H22.6138H22.6051H22.5963H22.5875H22.5786H22.5697H22.5607H22.5516H22.5424H22.5332H22.524H22.5146H22.5052H22.4957H22.4862H22.4766H22.467H22.4572H22.4475H22.4376H22.4277H22.4178H22.4077H22.3977H22.3875H22.3773H22.3671H22.3568H22.3464H22.336H22.3255H22.3149H22.3043H22.2937H22.283H22.2722H22.2614H22.2505H22.2396H22.2286H22.2176H22.2065H22.1954H22.1842H22.1729H22.1617H22.1503H22.1389H22.1275H22.116H22.1044H22.0928H22.0812H22.0695H22.0578H22.046H22.0342H22.0223H22.0104H21.9984H21.9864H21.9743H21.9622H21.9501H21.9379H21.9256H21.9134H21.901H21.8887H21.8763H21.8638H21.8513H21.8388H21.8262H21.8136H21.801H21.7883H21.7755H21.7628H21.75H21.7371H21.7242H21.7113H21.6984H21.6854H21.6723H21.6593H21.6462H21.633H21.6199H21.6067H21.5934H21.5801H21.5668H21.5535H21.5401H21.5267H21.5133H21.4998H21.4863H21.4728H21.4592H21.4457H21.432H21.4184H21.4047H21.391H21.3773H21.3635H21.3497H21.3359H21.3221H21.3082H21.2943H21.2804H21.2665H21.2525H21.2385H21.2245H21.2105H21.1964H21.1823H21.1682H21.1541H21.14H21.1258H21.1116H21.0974H21.0832H21.0689H21.0547H21.0404H21.0261H21.0117H20.9974H20.983H20.9687H20.9543H20.9399H20.9254H20.911H20.8965H20.8821H20.8676H20.8531H20.8386H20.8241H20.8095H20.795H20.7804H20.7658H20.7513H20.7367H20.7221H20.7074H20.6928H20.6782H20.6635H20.6489H20.6342H20.6196H20.6049H20.5902H20.5755H20.5608H20.5461H20.5314H20.5167H20.502H20.4872H20.4725H20.4578H20.443H20.4283H20.4136H20.3988H20.3841H20.3693H20.3546H20.3398H20.3251H20.3103H20.2956H20.2808H20.2661H20.2513H20.2366H20.2218H20.2071H20.1924H20.1776H20.1629H20.1482H20.1335H20.1187H20.104H20.0893H20.0746H20.0599H20.0452H20.0306H20.0159H20.0012H19.9866H19.9719H19.9573H19.9427H19.928H19.9134H19.8988H19.8842H19.8697H19.8551H19.8406H19.826H19.8115H19.797H19.7825H19.768H19.7535H19.739H19.7246H19.7102H19.6958H19.6814H19.667H19.6526H19.6383H19.624H19.6096H19.5954H19.5811H19.5668H19.5526H19.5384H19.5242H19.51H19.4959H19.4817H19.4676H19.4535H19.4395H19.4254H19.4114H19.3974H19.3834H19.3695H19.3556H19.3417H19.3278H19.314H19.3001H19.2863H19.2726H19.2588H19.2451H19.2314H19.2178H19.2042H19.1906H19.177H19.1635H19.15H19.1365H19.123H19.1096H19.0962H19.0829H19.0696H19.0563H19.0431H19.0298H19.0167H19.0035H18.9904H18.9773H18.9643H18.9513H18.9383H18.9254H18.9125H18.8996H18.8868H18.874H18.8613H18.8486H18.8359H18.8233H18.8107H18.7982H18.7857H18.7732H18.7608H18.7484H18.7361H18.7238H18.7115H18.6993H18.6872H18.6751H18.663H18.651H18.639H18.627H18.6151H18.6033H18.5915H18.5798H18.5681H18.5564H18.5448H18.5332H18.5217H18.5103H18.4989H18.4875H18.4762H18.465H18.4537H18.4426H18.4315H18.4205H18.4095H18.3985H18.3876H18.3768H18.366H18.3553H18.3446H18.334H18.3235H18.313H18.3025H18.2921H18.2818H18.2715H18.2613H18.2512H18.2411H18.231H18.221H18.2111H18.2013H18.1915H18.1817H18.1721H18.1625H18.1529H18.1434H18.134H18.1246H18.1153H18.1061H18.0969H18.0878H18.0788H18.0698H18.0609H18.0521H18.0433H18.0346H18.026H18.0174H18.0089H18.0005H17.9921H17.9838H17.9756H17.9675H17.9594H17.9514H17.9434H17.9356H17.9278H17.92H17.9124H17.9048H17.8973H17.8899H17.8825H17.8752H17.868H17.8609H17.8539H17.8469H17.84H17.8332H17.8264H17.8197H17.8132H17.8066H17.8002H17.7939H17.7876H17.7814H17.7753H17.7692H17.7633H17.7574H17.7516H17.7459H17.7403H17.7348H17.7293H17.7239H17.7186H17.7134H17.7083H17.7033H17.6983H17.6935H17.6887H17.684C17.1841 24.1983 16.4481 24.382 15.9084 24.5342C15.623 24.6147 15.3641 24.695 15.1767 24.755C15.17 24.7572 15.1633 24.7593 15.1568 24.7614C15.961 22.0813 16.5203 19.5884 16.3316 17.6681C16.2324 16.6592 15.9218 15.7469 15.2753 15.052C14.6236 14.3513 13.7003 13.9464 12.5257 13.8215C11.1059 13.6706 10.0128 14.2972 9.27168 15.2769C8.55074 16.2299 8.15459 17.5172 8.01574 18.7962C7.906 19.807 7.87767 21.3437 7.93966 22.811C8.00034 24.2472 8.15085 25.7182 8.43644 26.5714C8.43148 26.5797 8.42258 26.592 8.40778 26.6069C8.38945 26.6253 8.3649 26.6446 8.3347 26.662C7.32109 27.2469 6.07539 28.5441 5.15237 30.224C4.2273 31.9077 3.58746 34.0456 3.86486 36.3485C3.87623 39.8206 5.37053 42.8776 8.21147 45.0532C11.0484 47.2258 15.1849 48.4895 20.4477 48.4935H20.4481L20.4546 48.4935H20.4605H20.4664L20.4728 48.4935H20.4733C25.7361 48.4895 29.8725 47.2258 32.7095 45.0532C35.5613 42.8693 37.0562 39.7971 37.0562 36.3085C37.0562 32.9742 35.5757 30.5738 33.868 28.9272C32.1717 27.2916 30.2405 26.3861 29.2666 25.9982C29.2594 25.9953 29.2512 25.9887 29.246 25.9777C29.2436 25.9728 29.243 25.969 29.2428 25.9672C29.2427 25.9658 29.2428 25.9652 29.2432 25.964C29.5852 24.9576 30.4952 24.1909 31.5696 23.2902C32.0801 22.8622 32.6239 22.4029 33.0664 21.8965C33.5132 21.3852 33.8912 20.7885 34.0351 20.0691C34.3337 18.5762 34.0526 17.2717 33.2831 16.3321C32.5161 15.3957 31.3361 14.9104 30.0135 14.9104Z"
          stroke="#BDC2C4"
          stroke-width="1.29041"
          stroke-linejoin="round"
        />
        <path
          d="M17.2396 31.5104C17.2779 33.2018 16.5389 34.0971 15.6027 34.1146C14.6665 34.1322 13.8877 33.2655 13.8494 31.574C13.8112 29.8825 14.5502 28.9873 15.4864 28.9697C16.4225 28.9522 17.2014 29.8189 17.2396 31.5104Z"
          fill="#BDC2C4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6442 29.9002C15.9355 30.363 16.1052 31.0132 16.0422 31.736C16.015 32.048 16.282 32.3282 16.6385 32.3619C16.995 32.3957 17.306 32.1702 17.3332 31.8582C17.4128 30.9434 17.2059 30.063 16.773 29.3752C16.3427 28.6917 15.6428 28.139 14.736 28.0532C13.8291 27.9674 13.0451 28.3796 12.5038 28.9712C11.9592 29.5665 11.6035 30.3936 11.5238 31.3084C11.4806 31.8044 11.5218 32.2872 11.6355 32.7335C11.714 33.0416 12.0604 33.2434 12.4092 33.1843C12.758 33.1251 12.9771 32.8273 12.8986 32.5192C12.814 32.1873 12.7811 31.818 12.8148 31.4306C12.8778 30.7077 13.1569 30.1001 13.5234 29.6995C13.8933 29.2953 14.2967 29.1506 14.6376 29.1828C14.9785 29.2151 15.3503 29.4332 15.6442 29.9002Z"
          fill="#BDC2C4"
        />
        <path
          d="M28.1098 31.5104C28.148 33.2018 27.409 34.0971 26.4728 34.1146C25.5366 34.1322 24.7578 33.2655 24.7195 31.574C24.6813 29.8825 25.4203 28.9873 26.3565 28.9697C27.2927 28.9522 28.0715 29.8189 28.1098 31.5104Z"
          fill="#BDC2C4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.5144 29.9002C26.8057 30.363 26.9753 31.0132 26.9123 31.736C26.8852 32.048 27.1521 32.3282 27.5086 32.3619C27.8651 32.3957 28.1761 32.1702 28.2033 31.8582C28.283 30.9434 28.076 30.063 27.6431 29.3752C27.2128 28.6917 26.5129 28.139 25.6061 28.0532C24.6992 27.9674 23.9153 28.3796 23.374 28.9712C22.8293 29.5665 22.4736 30.3936 22.3939 31.3084C22.3507 31.8044 22.3919 32.2872 22.5056 32.7335C22.5841 33.0416 22.9305 33.2434 23.2793 33.1843C23.6281 33.1251 23.8472 32.8273 23.7687 32.5192C23.6841 32.1873 23.6512 31.818 23.6849 31.4306C23.7479 30.7077 24.027 30.1001 24.3935 29.6995C24.7634 29.2953 25.1668 29.1506 25.5077 29.1828C25.8486 29.2151 26.2204 29.4332 26.5144 29.9002Z"
          fill="#BDC2C4"
        />
        <path
          d="M19.6239 13.8839C19.3011 13.8839 19.0706 13.8147 18.9322 13.6764C18.7939 13.538 18.7247 13.319 18.7247 13.0192V12.8463C18.7247 12.143 18.8919 11.5608 19.2262 11.0996C19.5605 10.627 20.1024 10.1427 20.8518 9.64699C21.3591 9.32418 21.6876 9.08207 21.8375 8.92066C21.9874 8.75925 22.0623 8.52867 22.0623 8.22892C22.0623 7.9061 21.9355 7.65823 21.6819 7.4853C21.4282 7.31236 21.0478 7.22589 20.5405 7.22589C20.1024 7.22589 19.6816 7.29507 19.2781 7.43341C18.8746 7.56023 18.5114 7.73317 18.1886 7.95222C18.0387 8.04445 17.9234 8.09057 17.8427 8.09057C17.7274 8.09057 17.6294 8.01563 17.5487 7.86575L16.7878 6.55144C16.7071 6.41309 16.6667 6.30933 16.6667 6.24016C16.6667 6.12487 16.7359 6.01534 16.8743 5.91158C17.4161 5.53112 18.0214 5.2429 18.6901 5.0469C19.3703 4.83938 20.1485 4.73562 21.0247 4.73562C22.3852 4.73562 23.4804 5.04114 24.3105 5.65218C25.1406 6.26322 25.5556 7.11637 25.5556 8.21162C25.5556 8.90337 25.3942 9.47405 25.0714 9.92369C24.7486 10.3733 24.2471 10.7941 23.5669 11.1861C23.0596 11.4859 22.708 11.7568 22.512 11.9989C22.316 12.241 22.218 12.535 22.218 12.8809V13.0192C22.218 13.319 22.1488 13.538 22.0105 13.6764C21.8721 13.8147 21.6358 13.8839 21.3014 13.8839H19.6239ZM19.8315 16.7546C19.428 16.7546 19.1224 16.6797 18.9149 16.5298C18.7189 16.3799 18.6209 16.1667 18.6209 15.89V15.4922C18.6209 15.2155 18.7189 15.0022 18.9149 14.8524C19.1224 14.6909 19.428 14.6102 19.8315 14.6102H21.0939C21.4974 14.6102 21.8029 14.6909 22.0105 14.8524C22.218 15.0022 22.3217 15.2155 22.3217 15.4922V15.89C22.3217 16.1667 22.218 16.3799 22.0105 16.5298C21.8029 16.6797 21.4974 16.7546 21.0939 16.7546H19.8315Z"
          fill="#BDC2C4"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.991 20.6055L38.7416 20.5684C38.7472 20.3797 38.75 20.1902 38.75 20C38.75 19.8098 38.7472 19.6203 38.7416 19.4316L39.991 19.3944C39.997 19.5956 40 19.7974 40 20C40 20.2026 39.997 20.4044 39.991 20.6055ZM39.9191 18.1888L38.6741 18.3005C38.6402 17.9224 38.595 17.5476 38.539 17.1764L39.775 16.9899C39.8347 17.3858 39.8829 17.7856 39.9191 18.1888ZM39.5584 15.8008L38.336 16.062C38.2568 15.6912 38.1666 15.3245 38.0658 14.9622L39.2701 14.6272C39.3776 15.0138 39.4739 15.4051 39.5584 15.8008ZM38.911 13.4736L37.7293 13.8813C37.6059 13.5236 37.4719 13.1707 37.3277 12.8231L38.4824 12.3442C38.6362 12.7152 38.7792 13.0918 38.911 13.4736ZM37.9859 11.2428L36.8624 11.7908C36.6966 11.4508 36.5207 11.1165 36.3352 10.7883L37.4234 10.1733C37.6213 10.5234 37.8089 10.88 37.9859 11.2428ZM36.7974 9.13986L35.7483 9.81952C35.5428 9.50224 35.3279 9.19153 35.104 8.8878L36.1102 8.14618C36.349 8.47008 36.5781 8.80145 36.7974 9.13986ZM35.3645 7.19557L34.4046 7.99634C34.1625 7.70615 33.9118 7.42337 33.6529 7.1484L34.5629 6.29145C34.839 6.58463 35.1063 6.88614 35.3645 7.19557ZM33.7085 5.4371L32.8516 6.34712C32.5766 6.08819 32.2938 5.83747 32.0037 5.59537L32.8044 4.63554C33.1139 4.89369 33.4154 5.16102 33.7085 5.4371ZM31.8538 3.88977L31.1122 4.896C30.8085 4.67214 30.4978 4.45724 30.1805 4.25168L30.8601 3.2026C31.1985 3.42185 31.5299 3.65104 31.8538 3.88977ZM29.8267 2.57657L29.2117 3.66478C28.8835 3.47929 28.5492 3.30342 28.2092 3.13755L28.7572 2.01409C29.12 2.19106 29.4766 2.37869 29.8267 2.57657ZM27.6558 1.51761L27.1769 2.67227C26.8293 2.52811 26.4764 2.39413 26.1187 2.27068L26.5264 1.08905C26.9082 1.22079 27.2848 1.36378 27.6558 1.51761ZM25.3728 0.729919L25.0378 1.93418C24.6755 1.83339 24.3088 1.74321 23.938 1.66398L24.1992 0.441573C24.5949 0.526113 24.9862 0.622355 25.3728 0.729919ZM23.0101 0.225027L22.8236 1.46102C22.4524 1.405 22.0776 1.35984 21.6995 1.3259L21.8112 0.0809058C22.2144 0.117099 22.6142 0.165259 23.0101 0.225027ZM20.6055 0.00899217C20.4044 0.0030115 20.2026 0 20 0C19.7974 0 19.5956 0.00301151 19.3944 0.00899221L19.4316 1.25844C19.6203 1.25283 19.8098 1.25 20 1.25C20.1902 1.25 20.3797 1.25283 20.5684 1.25844L20.6055 0.00899217ZM18.1888 0.080906L18.3005 1.3259C17.9224 1.35984 17.5476 1.405 17.1764 1.46103L16.9899 0.225027C17.3858 0.165259 17.7856 0.117099 18.1888 0.080906ZM15.8008 0.441574L16.062 1.66398C15.6912 1.74321 15.3245 1.83339 14.9622 1.93418L14.6272 0.729919C15.0138 0.622355 15.4051 0.526113 15.8008 0.441574ZM13.4736 1.08905L13.8813 2.27068C13.5236 2.39413 13.1707 2.52812 12.8231 2.67227L12.3442 1.51761C12.7152 1.36378 13.0918 1.22079 13.4736 1.08905ZM11.2428 2.01409L11.7908 3.13755C11.4508 3.30342 11.1165 3.47929 10.7883 3.66478L10.1733 2.57657C10.5234 2.37869 10.88 2.19107 11.2428 2.01409ZM9.13986 3.2026L9.81952 4.25168C9.50224 4.45724 9.19153 4.67214 8.8878 4.896L8.14618 3.88977C8.47008 3.65104 8.80145 3.42185 9.13986 3.2026ZM7.19557 4.63554L7.99634 5.59537C7.70615 5.83747 7.42337 6.08819 7.1484 6.34712L6.29145 5.4371C6.58463 5.16102 6.88614 4.8937 7.19557 4.63554ZM5.4371 6.29145L6.34712 7.14841C6.08819 7.42337 5.83747 7.70615 5.59537 7.99634L4.63554 7.19557C4.89369 6.88614 5.16102 6.58463 5.4371 6.29145ZM3.88977 8.14618L4.896 8.8878C4.67214 9.19153 4.45724 9.50224 4.25168 9.81953L3.2026 9.13986C3.42185 8.80145 3.65104 8.47009 3.88977 8.14618ZM2.57657 10.1733L3.66478 10.7883C3.47929 11.1165 3.30342 11.4508 3.13755 11.7908L2.01409 11.2428C2.19106 10.88 2.37869 10.5234 2.57657 10.1733ZM1.51761 12.3442L2.67227 12.8231C2.52811 13.1707 2.39413 13.5236 2.27068 13.8813L1.08905 13.4736C1.22079 13.0918 1.36378 12.7152 1.51761 12.3442ZM0.729919 14.6272L1.93418 14.9622C1.83339 15.3245 1.74321 15.6912 1.66398 16.062L0.441573 15.8008C0.526113 15.4051 0.622355 15.0138 0.729919 14.6272ZM0.225027 16.9899L1.46102 17.1764C1.405 17.5476 1.35984 17.9224 1.3259 18.3005L0.0809057 18.1888C0.117099 17.7856 0.165259 17.3858 0.225027 16.9899ZM0.00899217 19.3945C0.0030115 19.5956 0 19.7974 0 20C0 20.2026 0.00301151 20.4044 0.00899222 20.6055L1.25844 20.5684C1.25283 20.3797 1.25 20.1902 1.25 20C1.25 19.8098 1.25283 19.6203 1.25844 19.4316L0.00899217 19.3945ZM0.080906 21.8112L1.3259 21.6995C1.35984 22.0776 1.405 22.4524 1.46103 22.8236L0.225028 23.0101C0.165259 22.6142 0.117099 22.2144 0.080906 21.8112ZM0.441574 24.1992L1.66398 23.938C1.74321 24.3088 1.83339 24.6755 1.93418 25.0378L0.72992 25.3728C0.622355 24.9862 0.526113 24.5949 0.441574 24.1992ZM1.08905 26.5264L2.27068 26.1187C2.39413 26.4764 2.52812 26.8293 2.67227 27.1769L1.51761 27.6558C1.36378 27.2848 1.22079 26.9082 1.08905 26.5264ZM2.01409 28.7572L3.13755 28.2092C3.30342 28.5492 3.47929 28.8835 3.66478 29.2117L2.57657 29.8267C2.37869 29.4766 2.19107 29.12 2.01409 28.7572ZM3.2026 30.8601L4.25168 30.1805C4.45724 30.4978 4.67214 30.8085 4.896 31.1122L3.88977 31.8538C3.65104 31.5299 3.42185 31.1985 3.2026 30.8601ZM4.63554 32.8044L5.59537 32.0037C5.83747 32.2939 6.08819 32.5766 6.34712 32.8516L5.4371 33.7085C5.16102 33.4154 4.8937 33.1139 4.63554 32.8044ZM6.29145 34.5629L7.14841 33.6529C7.42337 33.9118 7.70615 34.1625 7.99634 34.4046L7.19557 35.3645C6.88614 35.1063 6.58463 34.839 6.29145 34.5629ZM8.14618 36.1102L8.8878 35.104C9.19153 35.3279 9.50224 35.5428 9.81953 35.7483L9.13986 36.7974C8.80145 36.5781 8.47009 36.349 8.14618 36.1102ZM10.1733 37.4234L10.7883 36.3352C11.1165 36.5207 11.4508 36.6966 11.7908 36.8624L11.2428 37.9859C10.88 37.8089 10.5234 37.6213 10.1733 37.4234ZM12.3442 38.4824L12.8231 37.3277C13.1707 37.4719 13.5236 37.6059 13.8813 37.7293L13.4736 38.911C13.0918 38.7792 12.7152 38.6362 12.3442 38.4824ZM14.6272 39.2701L14.9622 38.0658C15.3245 38.1666 15.6912 38.2568 16.062 38.336L15.8008 39.5584C15.4051 39.4739 15.0138 39.3776 14.6272 39.2701ZM16.9899 39.775L17.1764 38.539C17.5476 38.595 17.9224 38.6402 18.3005 38.6741L18.1888 39.9191C17.7856 39.8829 17.3858 39.8347 16.9899 39.775ZM19.3945 39.991L19.4316 38.7416C19.6203 38.7472 19.8098 38.75 20 38.75C20.1902 38.75 20.3797 38.7472 20.5684 38.7416L20.6055 39.991C20.4044 39.997 20.2026 40 20 40C19.7974 40 19.5956 39.997 19.3945 39.991ZM21.8112 39.9191L21.6995 38.6741C22.0776 38.6402 22.4524 38.595 22.8236 38.539L23.0101 39.775C22.6142 39.8347 22.2144 39.8829 21.8112 39.9191ZM24.1992 39.5584L23.938 38.336C24.3088 38.2568 24.6755 38.1666 25.0378 38.0658L25.3728 39.2701C24.9862 39.3776 24.5949 39.4739 24.1992 39.5584ZM26.5264 38.911L26.1187 37.7293C26.4764 37.6059 26.8293 37.4719 27.1769 37.3277L27.6558 38.4824C27.2848 38.6362 26.9082 38.7792 26.5264 38.911ZM28.7572 37.9859L28.2092 36.8624C28.5492 36.6966 28.8835 36.5207 29.2117 36.3352L29.8267 37.4234C29.4766 37.6213 29.12 37.8089 28.7572 37.9859ZM30.8601 36.7974L30.1805 35.7483C30.4978 35.5428 30.8085 35.3279 31.1122 35.104L31.8538 36.1102C31.5299 36.349 31.1985 36.5781 30.8601 36.7974ZM32.8044 35.3645L32.0037 34.4046C32.2939 34.1625 32.5766 33.9118 32.8516 33.6529L33.7085 34.5629C33.4154 34.839 33.1139 35.1063 32.8044 35.3645ZM34.5629 33.7085L33.6529 32.8516C33.9118 32.5766 34.1625 32.2938 34.4046 32.0037L35.3645 32.8044C35.1063 33.1139 34.839 33.4154 34.5629 33.7085ZM36.1102 31.8538L35.104 31.1122C35.3279 30.8085 35.5428 30.4978 35.7483 30.1805L36.7974 30.8601C36.5781 31.1985 36.349 31.5299 36.1102 31.8538ZM37.4234 29.8267L36.3352 29.2117C36.5207 28.8835 36.6966 28.5492 36.8624 28.2092L37.9859 28.7572C37.8089 29.12 37.6213 29.4766 37.4234 29.8267ZM38.4824 27.6558L37.3277 27.1769C37.4719 26.8293 37.6059 26.4764 37.7293 26.1187L38.911 26.5264C38.7792 26.9082 38.6362 27.2848 38.4824 27.6558ZM39.2701 25.3728L38.0658 25.0378C38.1666 24.6755 38.2568 24.3088 38.336 23.938L39.5584 24.1992C39.4739 24.5949 39.3776 24.9862 39.2701 25.3728ZM39.775 23.0101L38.539 22.8236C38.595 22.4524 38.6402 22.0776 38.6741 21.6995L39.9191 21.8112C39.8829 22.2144 39.8347 22.6142 39.775 23.0101Z"
        fill="#BDC2C4"
      />
    </Svg>
  );
};

export default DefaultTokenIcon;