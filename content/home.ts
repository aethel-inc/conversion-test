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
  collectedData: {
    headingPrefix: 'Build your business by using ', // TODO:CONTENT - Replace with client heading
    headingHighlight: 'collected data', // TODO:CONTENT - Replace with client highlight text
    subheading:
      'From creative tools to customer support, your AI chat.', // TODO:CONTENT - Replace with client subheading
    buttonArrowIcon: '/images/home/button-arrow-icon.svg',
    items: [
      {
        id: 'ai-workflows',
        icon: '/images/home/collected-workflow.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title: 'AI Workflows', // TODO:CONTENT - Replace with client feature title
        description:
          'Automate advanced workflows with the full building power of Disort. Fast for real-time agents and dynamic apps.', // TODO:CONTENT - Replace with client feature description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
      },
      {
        id: 'data-integrate',
        icon: '/images/home/collected-data.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title: 'Data Integrate', // TODO:CONTENT - Replace with client feature title
        description:
          'Automate advanced workflows with the full building power of Disort. Fast for real-time agents and dynamic apps.', // TODO:CONTENT - Replace with client feature description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
      },
      {
        id: 'customize-design',
        icon: '/images/home/collected-design.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title: 'Customize Design', // TODO:CONTENT - Replace with client feature title
        description:
          'Automate advanced workflows with the full building power of Disort. Fast for real-time agents and dynamic apps.', // TODO:CONTENT - Replace with client feature description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
      },
    ],
  },
  automation: {
    label: 'Data + automation', // TODO:CONTENT - Replace with client section label
    headingPrefix: 'Data and automation all in ', // TODO:CONTENT - Replace with client heading
    headingHighlight: 'one place', // TODO:CONTENT - Replace with client highlight text
    subheading:
      'Disort integrates workflows and AI for seamless IT helpdesks and onboarding.', // TODO:CONTENT - Replace with client subheading
    bulletPoints: [
      {
        text: 'Save time with automated workflows.', // TODO:CONTENT - Replace with client bullet point
      },
      {
        text: 'Procurement that runs without delays.', // TODO:CONTENT - Replace with client bullet point
      },
    ],
    image: {
      src: '/images/home/automation-bg.avif',
      alt: 'Blurred image of a person walking past rows of empty chairs with warm light streaks in the background.',
      width: 800,
      height: 500,
    },
    buttonArrowIcon: '/images/home/button-arrow-icon.svg',
    processItems: [
      {
        id: 'revenue-decisions',
        icon: '/images/home/automation-icon-01.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title:
          'Drive Revenue with Faster Decisions and Fewer False Positives', // TODO:CONTENT - Replace with client process title
        description: 'Create workflows with logic and AI.', // TODO:CONTENT - Replace with client process description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
      },
      {
        id: 'store-manage-data',
        icon: '/images/home/automation-icon-02.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title:
          'Store and manage data that powers your automations', // TODO:CONTENT - Replace with client process title
        description: 'Create workflows with logic and AI.', // TODO:CONTENT - Replace with client process description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
        variant: true,
      },
      {
        id: 'custom-interfaces',
        icon: '/images/home/automation-icon-03.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title:
          'Create custom interfaces anyone can use no coding required', // TODO:CONTENT - Replace with client process title
        description: 'Create workflows with logic and AI.', // TODO:CONTENT - Replace with client process description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
      },
      {
        id: 'scale-workflows',
        icon: '/images/home/automation-icon-04.svg',
        iconAlt: '', // Decorative icon — empty alt is intentional
        title:
          'Scale from personal productivity to company-wide workflows', // TODO:CONTENT - Replace with client process title
        description: 'Create workflows with logic and AI.', // TODO:CONTENT - Replace with client process description
        ctaText: 'Learn more', // TODO:CONTENT - Replace with client CTA label
        ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
        variant: true,
      },
    ],
  },
  appLayer: {
    headingPrefix: 'Build on the app layer for your ', // TODO:CONTENT - Replace with client heading
    headingHighlight: 'business today', // TODO:CONTENT - Replace with client highlight text
    subheading:
      'Delivers results in less than 1 second, fast for real-time agents', // TODO:CONTENT - Replace with client subheading
    marqueeRows: [
      {
        variant: false,
        items: [
          {
            id: 'lead-finder-1',
            icon: '/images/home/app-icon-01.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'lead-finder-2',
            icon: '/images/home/app-icon-02.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'realtor-1',
            icon: '/images/home/app-icon-04.svg',
            alt: 'Realtor',
            label: 'Realtor', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'bug-report',
            icon: '/images/home/app-icon-03.svg',
            alt: 'Bug Report',
            label: 'Bug Report', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'confirmation',
            icon: '/images/home/app-icon-05.svg',
            alt: 'Confirmation',
            label: 'Confirmation', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'user-onboard',
            icon: '/images/home/app-icon-06.svg',
            alt: 'User Onboard',
            label: 'User Onboard', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'realtor-2',
            icon: '/images/home/app-icon-08.svg',
            alt: 'Realtor',
            label: 'Realtor', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'lead-finder-3',
            icon: '/images/home/app-icon-07.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
        ],
      },
      {
        variant: true,
        items: [
          {
            id: 'lead-finder-4',
            icon: '/images/home/app-icon-01.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'lead-finder-5',
            icon: '/images/home/app-icon-02.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'realtor-3',
            icon: '/images/home/app-icon-04.svg',
            alt: 'Realtor',
            label: 'Realtor', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'bug-report-2',
            icon: '/images/home/app-icon-03.svg',
            alt: 'Bug Report',
            label: 'Bug Report', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'confirmation-2',
            icon: '/images/home/app-icon-05.svg',
            alt: 'Confirmation',
            label: 'Confirmation', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'user-onboard-2',
            icon: '/images/home/app-icon-06.svg',
            alt: 'User Onboard',
            label: 'User Onboard', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'realtor-4',
            icon: '/images/home/app-icon-08.svg',
            alt: 'Realtor',
            label: 'Realtor', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'lead-finder-6',
            icon: '/images/home/app-icon-07.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
        ],
      },
      {
        variant: false,
        items: [
          {
            id: 'lead-finder-7',
            icon: '/images/home/app-icon-01.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'lead-finder-8',
            icon: '/images/home/app-icon-02.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'realtor-5',
            icon: '/images/home/app-icon-04.svg',
            alt: 'Realtor',
            label: 'Realtor', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'bug-report-3',
            icon: '/images/home/app-icon-03.svg',
            alt: 'Bug Report',
            label: 'Bug Report', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'confirmation-3',
            icon: '/images/home/app-icon-05.svg',
            alt: 'Confirmation',
            label: 'Confirmation', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'user-onboard-3',
            icon: '/images/home/app-icon-06.svg',
            alt: 'User Onboard',
            label: 'User Onboard', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'realtor-6',
            icon: '/images/home/app-icon-08.svg',
            alt: 'Realtor',
            label: 'Realtor', // TODO:CONTENT - Replace with client app name
          },
          {
            id: 'lead-finder-9',
            icon: '/images/home/app-icon-07.svg',
            alt: 'Lead Finder',
            label: 'Lead Finder', // TODO:CONTENT - Replace with client app name
          },
        ],
      },
    ],
    testimonialHeadingPrefix: 'People love building with ', // TODO:CONTENT - Replace with client testimonial heading
    testimonialHeadingHighlight: 'Disort', // TODO:CONTENT - Replace with client brand name
    testimonials: [
      {
        id: 'esther-howard',
        quote:
          '"TheDisort team ships. I wanted types for their node SDK, and less than an hour later, I got them."', // TODO:CONTENT - Replace with client testimonial quote
        clientName: 'Esther Howard', // TODO:CONTENT - Replace with client name
        clientRole: 'Web Designer', // TODO:CONTENT - Replace with client role
        clientImage: {
          src: '/images/home/testimonial-esther-howard.avif',
          alt: 'Smiling man with curly hair, beard, glasses, and a floral shirt against a light background.',
          width: 48,
          height: 48,
        },
        companyLogo: {
          src: '/images/home/testimonial-logo-scale.svg',
          alt: 'Scale company logo', // TODO:CONTENT - Replace with actual company name
          width: 100,
          height: 32,
        },
      },
      {
        id: 'kendra-murasaki',
        quote:
          '"Disort\'s platform transformed our data workflow. The team is incredibly responsive, providing solutions faster than we could have hoped for."', // TODO:CONTENT - Replace with client testimonial quote
        clientName: 'Kendra Murasaki', // TODO:CONTENT - Replace with client name
        clientRole: 'Data Analyst', // TODO:CONTENT - Replace with client role
        clientImage: {
          src: '/images/home/testimonial-kendra-murasaki.avif',
          alt: 'Man with glasses, beard, and yellow sweater against a blue background.',
          width: 48,
          height: 48,
        },
        companyLogo: {
          src: '/images/home/testimonial-logo-overcut.svg',
          alt: 'Overcut company logo', // TODO:CONTENT - Replace with actual company name
          width: 100,
          height: 32,
        },
      },
    ],
    sliderArrowLeft: {
      primary: '/images/home/slider-arrow-left-01.svg',
      secondary: '/images/home/slider-arrow-left-02.svg',
    },
    sliderArrowRight: {
      primary: '/images/home/slider-arrow-right-01.svg',
      secondary: '/images/home/slider-arrow-right-02.svg',
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
