// @ts-check
/** @type {import('next-seo').DefaultSeoProps} */
export default {
  titleTemplate: '%s | Stealth',
  title: 'Stealth',
  defaultTitle: 'Stealth',
  description:
    'Swap, earn, stack yields, lend, borrow & leverage, all on one decentralized, community driven platform. Welcome home to DeFi.',
  //   canonical: 'https://www.sushi.com/pool',
  //   mobileAlternate: {
  //     media: '',
  //     href: '',
  //   },
  //   languageAlternates: [{ hrefLang: "en", href: "https://www.sushi.com/pool" }],
  twitter: {
    handle: '@StealthSend',
    site: '@StealthSend',
    cardType: 'summary_large_image',
  },
  openGraph: {
    url: 'https://stealth.org/',
    type: 'website',
    title: 'Stealth',
    description:
      'Swap, earn, stack yields, lend, borrow & leverage, all on one decentralized, community driven platform. Welcome home to DeFi.',
    images: [
      {
        url: '-',
        width: 1200,
        height: 630,
        alt: 'Stealth',
      },
    ],
    // videos: [],
    // locale: 'en_IE',
    site_name: 'Stealth',
  },
}
