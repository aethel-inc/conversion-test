import type { AboutContent } from '@/types/content';

export const aboutContent: AboutContent = {
  meta: {
    title: 'About Disort', // TODO:CONTENT - Replace with client about page title
    description:
      'Disort transforms raw data into meaningful intelligence that empowers businesses to make smarter, faster, and more human decisions.', // TODO:CONTENT - Replace with client about description
    keywords: [
      'about disort',
      'data intelligence',
      'business analytics',
      'data-driven decisions',
    ],
  },
  hero: {
    headingPrefix: 'Disort is creating first Data for', // TODO:CONTENT - Replace with client headline
    headingHighlight: 'fixed income', // TODO:CONTENT - Replace with client highlight text
    ctaText: 'Get Started Now', // TODO:CONTENT - Replace with client CTA text
    ctaHref: '/contact-01', // TODO:CONTENT - Replace with client CTA destination
    leftImage: {
      src: '/images/about/hero-image-1.avif',
      alt: 'Two people standing behind a wooden desk with a laptop, a book, and a potted plant, with a blue and white abstract artwork on the wall.',
      width: 984,
      height: 980,
    },
    rightImage: {
      src: '/images/about/hero-image-2.avif',
      alt: 'Two people sitting at a desk with laptops and stacks of papers, focused on their work.',
      width: 1272,
      height: 980,
    },
    sectionDividerImage: {
      src: '/images/shared/section-divider.svg',
      alt: '',
      width: 1238,
      height: 92,
    },
  },
};
