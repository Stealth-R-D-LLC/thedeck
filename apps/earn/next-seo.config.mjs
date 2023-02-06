// @ts-check
/** @type {import('next-seo').DefaultSeoProps} */
const config = {
  titleTemplate: '%s | Stealth',
  title: 'Earn',
  defaultTitle: 'Earn',
  description: 'Earn fees by providing liquidity and staking TEMPORARY into xTEMPORARY.',
  twitter: {
    handle: '@StealthSend',
    site: '@StealthSend',
    cardType: 'summary_large_image',
  },
  openGraph: {
    url: 'https://www.stealth.org/earn',
    type: 'website',
    title: 'Earn',
    description: 'Earn fees by providing liquidity and staking TEMPORARY into xTEMPORARY.',
    images: [
      {
        url: 'https://www.stealth.org/earn/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Earn',
      },
    ],
    // videos: [],
    // locale: 'en_IE',
    site_name: 'Stealth',
  },
}
export default config
