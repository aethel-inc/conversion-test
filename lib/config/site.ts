export const siteConfig = {
  name: 'Disort', // TODO:CONTENT - Replace with client business name
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  description:
    'Disort is a clean, modern platform built for SaaS teams to automate data workflows and showcase their product with clarity.', // TODO:CONTENT - Replace with client description
  logo: '/images/shared/disort-logo.svg',
  navLogo: '/images/shared/disort-nav-logo.svg',
  ogImage: '/images/shared/og-image.jpg', // TODO:IMAGE - Create OG image for production
  twitterImage: '/images/shared/og-image.jpg', // TODO:IMAGE - Create Twitter image for production
  favicon: '/images/shared/favicon.png',
  social: {
    twitter: '@disort', // TODO:CONTENT - Replace with client Twitter handle
    linkedin: 'https://www.linkedin.com/', // TODO:CONTENT - Replace with client LinkedIn URL
    facebook: 'https://www.facebook.com/', // TODO:CONTENT - Replace with client Facebook URL
    instagram: 'https://www.instagram.com/', // TODO:CONTENT - Replace with client Instagram URL
    x: 'https://x.com/', // TODO:CONTENT - Replace with client X/Twitter URL
    profiles: [
      // TODO:CONTENT - Add client social profile URLs
    ],
  },
} as const;
