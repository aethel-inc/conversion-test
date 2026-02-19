export interface ImageContent {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export interface SectionContent {
  heading?: string;
  subheading?: string;
  body?: string;
  image?: ImageContent;
}

export interface HomeHeroTrustedUser {
  src: string;
  alt: string;
}

export interface HomeHeroStatsContent {
  /** The digits displayed in the animated upper counter row */
  upperDigits: string[];
  /** The digits displayed in the animated lower counter row */
  lowerDigits: string[];
  /** Suffix characters after the counter (e.g. "K+") */
  suffix: string;
  /** Description text beneath the counter */
  description: string;
}

export interface HomeHeroImageSectionContent {
  mainImage: ImageContent;
  cardImage: ImageContent;
  cardBottomImage: ImageContent;
  trustedUsers: HomeHeroTrustedUser[];
  trustedUsersOverflowLabel: string;
  stats: HomeHeroStatsContent;
}

export interface HomeHeroContent {
  heading: string;
  headingHighlight: string;
  subheading: string;
  ctaText: string;
  ctaHref: string;
  imageSection: HomeHeroImageSectionContent;
}

export interface HomeContent {
  meta: PageMeta;
  hero: HomeHeroContent;
}
