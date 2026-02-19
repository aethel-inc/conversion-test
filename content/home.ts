import type { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  meta: {
    title: 'Disort - Automate Manual Data Collection', // TODO:CONTENT - Replace with client headline
    description:
      'Disort is a clean, modern platform built for SaaS teams to automate data workflows and showcase their product with clarity. Smooth interactions, flexible layouts, and a polished visual style.', // TODO:CONTENT - Replace with client description
    keywords: [
      'data automation',
      'SaaS',
      'data collection',
      'workflow automation',
      'data analytics',
    ], // TODO:CONTENT - Replace with client target keywords
  },
  hero: {
    heading: 'The spreadsheet to automate manual', // TODO:CONTENT - Replace with client headline
    headingHighlight: 'data collection', // TODO:CONTENT - The highlighted/styled portion of the heading
    subheading:
      "Cursor's codebase embedding model gives Agent deep understanding and recall. Built for human by human.", // TODO:CONTENT - Replace with client subheading
    ctaText: 'Get Started Now', // TODO:CONTENT - Replace with client CTA label
    ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
    imageSection: {
      mainImage: {
        src: '/images/home/hero-image.avif',
        alt: 'Side profile of a person in a black turtleneck with short dark hair blurred with red light streaks against a gradient pink and blue background.',
        width: 600,
        height: 600,
      },
      cardImage: {
        src: '/images/home/hero-card.avif',
        alt: 'Security task configuration screen showing toggles for Internal Only enabled and Optional disabled, with a Submit Candidate button.',
        width: 400,
        height: 300,
      },
      cardBottomImage: {
        src: '/images/home/hero-card-1.avif',
        alt: 'Total overview showing 25% with a +15% increase indicator, and two colored bars representing 50% Data and 35% Business.',
        width: 400,
        height: 200,
      },
      trustedUsers: [
        {
          src: '/images/home/trusted-user-03.avif',
          alt: 'Trusted User Image',
        },
        {
          src: '/images/home/trusted-user-02.avif',
          alt: 'Trusted User Image',
        },
        {
          src: '/images/home/trusted-user-01.avif',
          alt: 'Trusted User Image',
        },
      ],
      trustedUsersOverflowLabel: '+ more', // TODO:CONTENT - Replace with actual overflow count if needed
      stats: {
        upperDigits: ['2', '2', '3', '4', '5', '6', '7', '8', '9', '2'],
        lowerDigits: ['4', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        suffix: 'K+',
        description: 'Used by millions of teams and professionals.', // TODO:CONTENT - Replace with client stat description
      },
    },
  },
};
