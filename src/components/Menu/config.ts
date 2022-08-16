import { MenuEntry } from '@smartdev1990/newbrc-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.riceprotocol.org',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.riceprotocol.org/farms',
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: 'https://app.riceprotocol.org/nests',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://ricenft.store'
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: '/',
    items: [
      {
        label: 'Coming Soon',
        href: '/'
      },
    ]
  },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: 'https://www.goosedefi.com/nests'
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Rice Website',
        href: 'https://riceprotocol.org',
      },

      {
       label: 'Whitepaper',
        href: 'https://drive.google.com/file/d/1NAyxEYKIfNttICl6AMZTWUfrNOCJubhO/view',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/',
      },
    ]
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/goosedefi/",
  //     },
  //     {
  //       label: "Docs",
  //       href: "https://goosedefi.gitbook.io/goose-finance/",
  //     },
  //     {
  ///       label: "Blog",
  //       href: "https://goosefinance.medium.com/",
  //     },
  //   ],
  // },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
