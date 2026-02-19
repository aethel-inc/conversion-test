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

/** A single card/feature item in the "collected data" section */
export interface HomeCollectedDataItem {
  /** Unique identifier for the card */
  id: string;
  /** Path to the icon SVG displayed at the top of the card */
  icon: string;
  /** Alt text for the icon (empty string if decorative) */
  iconAlt: string;
  /** Feature title displayed as a heading */
  title: string;
  /** Description text below the title */
  description: string;
  /** Text label for the CTA link */
  ctaText: string;
  /** Destination URL for the CTA link */
  ctaHref: string;
}

/** Content for the "Build your business by using collected data" section */
export interface HomeCollectedDataContent {
  /** The heading text before the highlighted portion */
  headingPrefix: string;
  /** The highlighted portion of the heading (displayed with special-heading class) */
  headingHighlight: string;
  /** Subheading text displayed below the main heading */
  subheading: string;
  /** Path to the arrow icon used in CTA buttons */
  buttonArrowIcon: string;
  /** Array of feature cards displayed in the grid */
  items: HomeCollectedDataItem[];
}

/** A single process card in the "Data and automation all in one place" section */
export interface HomeAutomationProcessItem {
  /** Unique identifier for the process card */
  id: string;
  /** Path to the icon SVG displayed at the top of the card */
  icon: string;
  /** Alt text for the icon (empty string if decorative) */
  iconAlt: string;
  /** Process title displayed as a heading */
  title: string;
  /** Brief description below the title */
  description: string;
  /** Text label for the CTA link */
  ctaText: string;
  /** Destination URL for the CTA link */
  ctaHref: string;
  /** Whether this card uses the alternate "v1" style variant */
  variant?: boolean;
}

/** A single bullet point in the automation section's left column */
export interface HomeAutomationBulletPoint {
  /** The text content of the bullet point */
  text: string;
}

/** Content for the "Data and automation all in one place" section */
export interface HomeAutomationContent {
  /** Small label text above the heading (e.g. "Data + automation") */
  label: string;
  /** The heading text before the highlighted portion */
  headingPrefix: string;
  /** The highlighted portion of the heading (displayed with special-heading class) */
  headingHighlight: string;
  /** Subheading text displayed below the main heading */
  subheading: string;
  /** Bullet points displayed below the subheading in the left column */
  bulletPoints: HomeAutomationBulletPoint[];
  /** Background/feature image displayed in the right column */
  image: ImageContent;
  /** Path to the arrow icon used in CTA buttons */
  buttonArrowIcon: string;
  /** Array of process cards displayed in the bottom grid */
  processItems: HomeAutomationProcessItem[];
}

/** A single app item in the app layer marquee grid */
export interface HomeAppLayerAppItem {
  /** Unique identifier for the app */
  id: string;
  /** Path to the app icon SVG */
  icon: string;
  /** Alt text for the app icon — use the app name for accessibility */
  alt: string;
  /** Display label shown beneath the icon */
  label: string;
}

/** A single marquee row in the app layer section */
export interface HomeAppLayerMarqueeRow {
  /** Whether this row uses the reversed-direction "v1" variant */
  variant: boolean;
  /** The app items displayed in this row (duplicated internally for seamless looping) */
  items: HomeAppLayerAppItem[];
}

/** A single testimonial in the app layer testimonial slider */
export interface HomeAppLayerTestimonial {
  /** Unique identifier for the testimonial */
  id: string;
  /** The testimonial quote text */
  quote: string;
  /** Client's display name */
  clientName: string;
  /** Client's job title or role */
  clientRole: string;
  /** Client's avatar/photo image */
  clientImage: ImageContent;
  /** Company logo displayed alongside the testimonial */
  companyLogo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

/** Content for the "Build on the app layer for your business today" section */
export interface HomeAppLayerContent {
  /** The heading text before the highlighted portion */
  headingPrefix: string;
  /** The highlighted portion of the heading (displayed with special-heading _02 class) */
  headingHighlight: string;
  /** Subheading text displayed below the main heading */
  subheading: string;
  /** Marquee rows of scrolling app icons */
  marqueeRows: HomeAppLayerMarqueeRow[];
  /** Testimonial sub-section heading text before the highlight */
  testimonialHeadingPrefix: string;
  /** The highlighted portion of the testimonial heading */
  testimonialHeadingHighlight: string;
  /** Array of testimonials displayed in the slider */
  testimonials: HomeAppLayerTestimonial[];
  /** Left slider arrow icons (two for hover animation) */
  sliderArrowLeft: { primary: string; secondary: string };
  /** Right slider arrow icons (two for hover animation) */
  sliderArrowRight: { primary: string; secondary: string };
}

/** A category tag displayed on blog list items */
export interface HomeBlogShowcaseCategoryTag {
  /** Display label for the category (e.g. "Trends", "Business") */
  label: string;
  /** CSS background color for the tag container */
  backgroundColor: string;
  /** CSS text color for the tag label */
  textColor: string;
}

/** The featured (large) blog post displayed on the left side */
export interface HomeBlogShowcaseFeaturedPost {
  /** Unique identifier for the post */
  id: string;
  /** URL to the blog post detail page */
  href: string;
  /** Featured image displayed prominently */
  image: ImageContent;
  /** Publication date displayed above the title */
  date: string;
  /** Blog post title */
  title: string;
  /** Author's display name */
  authorName: string;
  /** Author's job title or role */
  authorRole: string;
  /** Author's avatar/photo image */
  authorImage: ImageContent;
}

/** A blog list item displayed in the right-side column */
export interface HomeBlogShowcaseListPost {
  /** Unique identifier for the post */
  id: string;
  /** URL to the blog post detail page */
  href: string;
  /** Category tag with custom colors */
  category: HomeBlogShowcaseCategoryTag;
  /** Blog post title */
  title: string;
  /** Author's display name */
  authorName: string;
  /** Author's job title or role */
  authorRole: string;
}

/** Content for the "Where data meets Imagination" blog showcase section */
export interface HomeBlogShowcaseContent {
  /** The heading text before the highlighted portion */
  headingPrefix: string;
  /** The highlighted portion of the heading (displayed with special-heading class) */
  headingHighlight: string;
  /** Path to the arrow icon used in the "Read more" button */
  readMoreArrowIcon: string;
  /** The featured (large) blog post on the left */
  featuredPost: HomeBlogShowcaseFeaturedPost;
  /** Array of blog list items displayed on the right */
  listPosts: HomeBlogShowcaseListPost[];
}

/** Content for the "Your future runs on data" CTA section */
export interface HomeCtaContent {
  /** Main heading text (e.g. "Your future runs on data let's create it") */
  heading: string;
  /** Subheading text below the heading */
  subheading: string;
  /** CTA button label text */
  ctaText: string;
  /** CTA button destination URL */
  ctaHref: string;
  /** Decorative corner border image used at all four corners */
  borderCornerImage: ImageContent;
  /** Background SVG image displayed behind the content area */
  backgroundImage: ImageContent;
}

export interface HomeContent {
  meta: PageMeta;
  hero: HomeHeroContent;
  trustedBrands: HomeTrustedBrandsContent;
  sectionDivider: HomeSectionDividerContent;
  devCloud: HomeDevCloudContent;
  collectedData: HomeCollectedDataContent;
  automation: HomeAutomationContent;
  appLayer: HomeAppLayerContent;
  blogShowcase: HomeBlogShowcaseContent;
  cta: HomeCtaContent;
}
