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

export interface HomeTrustedBrandLogo {
  /** Path to the brand logo image (SVG or other format) */
  src: string;
  /** Alt text describing the brand — use brand name for accessibility */
  alt: string;
  /** Intrinsic width of the logo image in pixels */
  width: number;
  /** Intrinsic height of the logo image in pixels */
  height: number;
}

export interface HomeTrustedBrandsContent {
  /** The heading text before the highlighted portion */
  headingPrefix: string;
  /** The highlighted portion of the heading (displayed with special-heading class) */
  headingHighlight: string;
  /** Array of brand logos to display in the scrolling marquee */
  logos: HomeTrustedBrandLogo[];
}

/** A single tab item in the DevCloud tabbed section */
export interface HomeDevCloudTabItem {
  /** The short label displayed on the tab button */
  tabLabel: string;
  /** The full title displayed in the tab content pane */
  title: string;
  /** Description text displayed below the title */
  description: string;
  /** Background image displayed behind the cover image */
  backgroundImage: ImageContent;
  /** Cover/overlay image displayed on top of the background */
  coverImage: ImageContent;
}

/** Content for the decorative section divider between major sections */
export interface HomeSectionDividerContent {
  /** Path to the decorative SVG/image used as divider */
  image: ImageContent;
}

/** Content for the "The cloud that works for developers" section */
export interface HomeDevCloudContent {
  /** The heading text before the highlighted portion */
  headingPrefix: string;
  /** The highlighted portion of the heading (displayed with special-heading class) */
  headingHighlight: string;
  /** Decorative top border image inside the tab area */
  topBorderImage: ImageContent;
  /** Array of tab items — each represents one tab with its content */
  tabs: HomeDevCloudTabItem[];
}

export interface HomeContent {
  meta: PageMeta;
  hero: HomeHeroContent;
  trustedBrands: HomeTrustedBrandsContent;
  sectionDivider: HomeSectionDividerContent;
  devCloud: HomeDevCloudContent;
}
