import type { FooterContent } from '@/types/components';

export const footerContent: FooterContent = {
  logoSrc: '/images/shared/disort-logo.svg',
  logoAlt: 'Disort',
  logoHref: '/',
  description:
    'Disort a creative agency that blends strategy, design, and innovation to help brands grow with meaning.', // TODO:CONTENT - Replace with client description
  linkBlocks: [
    {
      title: 'Overview',
      links: [
        { label: 'Home 01', href: '/' },
        { label: 'Home 02', href: '/' },
        { label: 'Home 03', href: '/' },
        { label: 'Contact 01', href: '/contact' },
        { label: 'Contact 02', href: '/contact' },
        { label: 'Contact 03', href: '/contact' },
        { label: 'About us', href: '/about' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Pricing 01', href: '/pricing' },
        { label: 'Pricing 02', href: '/pricing' },
        { label: 'Pricing 03', href: '/pricing' },
        { label: 'Career', href: '/career' },
        { label: 'Career single', href: '/career/sample' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog 01', href: '/blog' },
        { label: 'Blog 02', href: '/blog' },
        { label: 'Blog 03', href: '/blog' },
        { label: 'Blog single', href: '/blog/sample-post' },
      ],
    },
    {
      title: 'Utilities',
      links: [
        { label: '404', href: '/404' },
        { label: 'Log in', href: '/sign-in' },
        { label: 'Sign up', href: '/sign-up' },
        { label: 'Style guide', href: '/reference/style-guide' },
        { label: 'License', href: '/reference/license' },
        { label: 'Changelog', href: '/reference/changelog' },
      ],
    },
  ],
  copyrightText: 'All rights reserved.', // TODO:CONTENT - Replace with client copyright text
  copyrightLinks: [
    { label: 'Basecom', href: 'https://www.basecom.co/' },
    { label: 'Webflow', href: 'https://webflow.com/' },
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      href: 'https://www.linkedin.com/', // TODO:CONTENT - Replace with client LinkedIn URL
      iconSrc: '/icons/linkedin.svg',
      iconAlt: 'LinkedIn',
    },
    {
      platform: 'Facebook',
      href: 'https://www.facebook.com/', // TODO:CONTENT - Replace with client Facebook URL
      iconSrc: '/icons/facebook.svg',
      iconAlt: 'Facebook',
    },
    {
      platform: 'X',
      href: 'https://x.com/', // TODO:CONTENT - Replace with client X/Twitter URL
      iconSrc: '/icons/x-twitter.svg',
      iconAlt: 'X (Twitter)',
    },
    {
      platform: 'Instagram',
      href: 'https://www.instagram.com/', // TODO:CONTENT - Replace with client Instagram URL
      iconSrc: '/icons/instagram.svg',
      iconAlt: 'Instagram',
    },
  ],
};
