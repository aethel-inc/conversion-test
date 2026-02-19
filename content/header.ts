import type { HeaderContent } from '@/types/components';

export const headerContent: HeaderContent = {
  logoSrc: '/images/shared/disort-nav-logo.svg',
  logoAlt: 'Disort Nav Logo',
  logoHref: '/',
  dropdownIconSrc: '/icons/nav-dropdown-icon.svg',
  ctaText: 'Get Started', // TODO:CONTENT - Replace with client CTA text
  ctaHref: '/contact', // TODO:CONTENT - Replace with client CTA link
  navItems: [
    {
      type: 'dropdown',
      config: {
        label: 'Pages',
        variant: '', // default variant
        sections: [
          {
            title: 'PRODUCTS',
            items: [
              { label: 'Home 01', href: '/' },
              { label: 'Home 02', href: '/' },
              { label: 'Home 03', href: '/' },
            ],
          },
          {
            title: 'RESOURCES',
            items: [
              { label: 'Blog 01', href: '/blog' },
              { label: 'Blog 02', href: '/blog' },
              { label: 'Blog 03', href: '/blog' },
              { label: 'Blog Single', href: '/blog/sample-post' },
            ],
          },
          {
            title: 'COMPANY',
            items: [
              { label: 'Career Page', href: '/career' },
              { label: 'Career Single', href: '/career/sample' },
              { label: 'Pricing 01', href: '/pricing' },
              { label: 'Pricing 02', href: '/pricing' },
              { label: 'Pricing 03', href: '/pricing' },
              { label: 'About', href: '/about' },
              { label: 'Contact 01', href: '/contact' },
              { label: 'Contact 02', href: '/contact' },
              { label: 'Contact 03', href: '/contact' },
            ],
          },
          {
            title: 'UTILITIES',
            items: [
              { label: 'Style Guide', href: '/reference/style-guide' },
              { label: 'License', href: '/reference/license' },
              { label: 'Changelog', href: '/reference/changelog' },
              { label: 'Log in', href: '/sign-in' },
              { label: 'Sign up', href: '/sign-up' },
            ],
          },
        ],
        featuredBlog: {
          title: 'Deal Acceleration Tactics to Shorten Your Sales Cycle.',
          href: '/blog/deal-acceleration-tactics',
          image: {
            src: '/images/shared/blog-image-08.avif',
            alt: 'Deal Acceleration Tactics to Shorten Your Sales Cycle.',
          },
        },
      },
    },
    {
      type: 'dropdown',
      config: {
        label: 'Products',
        variant: 'v2',
        sections: [
          {
            title: 'PRODUCTS',
            items: [
              { label: 'Home 01', href: '/' },
              { label: 'Home 02', href: '/' },
              { label: 'Home 03', href: '/' },
            ],
          },
        ],
        // TODO:IMAGE - Products dropdown featured image not available in export
        // featuredImage: { src: '/images/shared/nav-image.avif', alt: '...' },
      },
    },
    {
      type: 'dropdown',
      config: {
        label: 'Company',
        variant: 'v4',
        sections: [
          {
            title: 'COMPANY',
            items: [
              { label: 'About Page', href: '/about' },
              { label: 'Pricing 01', href: '/pricing' },
              { label: 'Pricing 02', href: '/pricing' },
              { label: 'Pricing 03', href: '/pricing' },
              { label: 'Contact 01', href: '/contact' },
              { label: 'Contact 02', href: '/contact' },
              { label: 'Contact 03', href: '/contact' },
              { label: 'Career', href: '/career' },
              { label: 'Career Single', href: '/career/sample' },
            ],
          },
        ],
        featuredBlog: {
          title: 'Deal Acceleration Tactics to Shorten Your Sales Cycle.',
          href: '/blog/deal-acceleration-tactics',
          image: {
            src: '/images/shared/blog-image-08.avif',
            alt: 'Deal Acceleration Tactics to Shorten Your Sales Cycle.',
          },
        },
      },
    },
    {
      type: 'dropdown',
      config: {
        label: 'Pricing',
        variant: 'v3',
        sections: [
          {
            title: 'PRICING',
            items: [
              { label: 'Pricing Page 01', href: '/pricing' },
              { label: 'Pricing Page 02', href: '/pricing' },
              { label: 'Pricing Page 03', href: '/pricing' },
            ],
          },
        ],
      },
    },
    {
      type: 'dropdown',
      config: {
        label: 'Resources',
        variant: 'v3',
        sections: [
          {
            title: 'RESOURCES',
            items: [
              { label: 'Blog 01', href: '/blog' },
              { label: 'Blog 02', href: '/blog' },
              { label: 'Blog 03', href: '/blog' },
              { label: 'Blog Single', href: '/blog/sample-post' },
            ],
          },
        ],
      },
    },
  ],
};
