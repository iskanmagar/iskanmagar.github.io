/**
 * Single source of truth for site-wide constants used across SEO, nav, and footer.
 */
export const SITE = {
  name: 'Iskanmagar Broadcast Network',
  shortName: 'Iskanmagar',
  url: 'https://iskanmagar.com',
  tagline: 'Broadcasting from the edge',
  description:
    'Iskanmagar is a broadcast from underrepresented, multilingual communities building at the edge of technology, creativity, and community. Stories, podcasts, and transmissions from builders learning in public.',
  locale: 'en_US',
  lang: 'en',
  defaultOgImage: '/og/default.png',
  themeColor: '#07080a',
  author: {
    name: 'Taha Bouhsine',
    url: 'https://www.tahabouhsine.com',
    twitter: '@tahabouhsine',
  },
} as const;

/** Verified external links. Update handles here — nowhere else. */
export const SOCIAL = {
  youtube: 'https://youtube.com/@iskanmagar',
  twitter: 'https://twitter.com/tahabouhsine',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Guests', href: '/guests' },
  { label: 'About', href: '/about' },
] as const;
