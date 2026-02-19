export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavDropdownSection {
  title: string;
  items: NavDropdownItem[];
}

export interface NavFeaturedBlog {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface NavDropdownConfig {
  label: string;
  variant: string;
  sections: NavDropdownSection[];
  featuredBlog?: NavFeaturedBlog;
  featuredImage?: {
    src: string;
    alt: string;
  };
}

export interface NavItem {
  type: 'dropdown';
  config: NavDropdownConfig;
}

export interface HeaderContent {
  logoSrc: string;
  logoAlt: string;
  logoHref: string;
  navItems: NavItem[];
  ctaText: string;
  ctaHref: string;
  dropdownIconSrc: string;
}

export interface FooterLinkBlock {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
}

export interface FooterContent {
  logoSrc: string;
  logoAlt: string;
  logoHref: string;
  description: string;
  linkBlocks: FooterLinkBlock[];
  copyrightText: string;
  copyrightLinks: {
    label: string;
    href: string;
  }[];
  socialLinks: SocialLink[];
}
