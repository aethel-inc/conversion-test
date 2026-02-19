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
  trustedBrands: {
    headingPrefix: 'Trusted by thousands from ', // TODO:CONTENT - Replace with client trust statement
    headingHighlight: 'leading brands', // TODO:CONTENT - Replace with client highlight text
    logos: [
      {
        src: '/images/home/brand-logo-01.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-03.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-04.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-02.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-06.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-05.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-08.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
      {
        src: '/images/home/brand-logo-07.svg',
        alt: 'Brand partner logo', // TODO:CONTENT - Replace with actual brand name
        width: 200,
        height: 64,
      },
    ],
  },
  sectionDivider: {
    image: {
      src: '/images/home/section-divider.svg',
      alt: '', // Decorative divider — empty alt is intentional
      width: 1200,
      height: 24,
    },
  },
  devCloud: {
    headingPrefix: 'The cloud that works for ', // TODO:CONTENT - Replace with client heading
    headingHighlight: 'developers', // TODO:CONTENT - Replace with client highlight text
    topBorderImage: {
      src: '/images/home/collection-top-border.svg',
      alt: '', // Decorative border — empty alt is intentional
      width: 1200,
      height: 16,
    },
    tabs: [
      {
        tabLabel: 'Data Collection', // TODO:CONTENT - Replace with client tab label
        title: 'Data Collection & Integration', // TODO:CONTENT - Replace with client tab title
        description:
          'We gather data from multiple sources websites, platforms, analytics tools, CRMs, and more and unify it into one clean, structured system.', // TODO:CONTENT - Replace with client tab description
        backgroundImage: {
          src: '/images/home/collection-bg.avif',
          alt: 'Blurred image of a person working on a computer with bright screen light in a dark room.',
          width: 800,
          height: 500,
        },
        coverImage: {
          src: '/images/home/collection-data-collection.avif',
          alt: 'Diagram showing data flow from Agents, Developers, and Users into a container labeled with Developers Data, Agents Data, Users Data, and Resource Data.',
          width: 800,
          height: 500,
        },
      },
      {
        tabLabel: 'Cleaning & Preparation', // TODO:CONTENT - Replace with client tab label
        title: 'Cleaning & Preparation', // TODO:CONTENT - Replace with client tab title
        description:
          'We gather data from multiple sources websites, platforms, analytics tools, CRMs, and more and unify it into one clean, structured system.', // TODO:CONTENT - Replace with client tab description
        backgroundImage: {
          src: '/images/home/collection-bg.avif',
          alt: 'Blurred image of a person working on a computer with bright screen light in a dark room.',
          width: 800,
          height: 500,
        },
        coverImage: {
          src: '/images/home/collection-cleaning.avif',
          alt: "Illustration of a document icon labeled 'Doc.x' surrounded by four circular icons with abstract symbols, all on a light background with browser window controls visible at the top left.",
          width: 800,
          height: 500,
        },
      },
      {
        tabLabel: 'Analysis & Insights', // TODO:CONTENT - Replace with client tab label
        title: 'Analysis & Insights', // TODO:CONTENT - Replace with client tab title
        description:
          'We gather data from multiple sources websites, platforms, analytics tools, CRMs, and more and unify it into one clean, structured system.', // TODO:CONTENT - Replace with client tab description
        backgroundImage: {
          src: '/images/home/collection-bg.avif',
          alt: 'Blurred image of a person working on a computer with bright screen light in a dark room.',
          width: 800,
          height: 500,
        },
        coverImage: {
          src: '/images/home/collection-analysis-insights.avif',
          alt: "Browser window mockup showing a process with 'Searched' for 'Stripe founders' and 'Read' items including Reteropiea, Jhumpy, and Default media, with options for Competitors and Q1 Web Traffic.",
          width: 800,
          height: 500,
        },
      },
      {
        tabLabel: 'Custom Dashboards', // TODO:CONTENT - Replace with client tab label
        title: 'Custom Dashboards', // TODO:CONTENT - Replace with client tab title
        description:
          'We gather data from multiple sources websites, platforms, analytics tools, CRMs, and more and unify it into one clean, structured system.', // TODO:CONTENT - Replace with client tab description
        backgroundImage: {
          src: '/images/home/collection-bg.avif',
          alt: 'Blurred image of a person working on a computer with bright screen light in a dark room.',
          width: 800,
          height: 500,
        },
        coverImage: {
          src: '/images/home/collection-custom-dashboards.avif',
          alt: 'Dashboard interface showing a data table with columns Title, Project, and Deadline, listing sample data testing, pro data example, data strategy, and analytics project with respective tags and due dates.',
          width: 800,
          height: 500,
        },
      },
    ],
  },
};
