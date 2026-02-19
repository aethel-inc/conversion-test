# Customization Guide - Disort Next.js Conversion

This document lists everything that needs to be replaced when customizing this site with real client content.

---

## 1. Branding & Identity

### Site Configuration (`lib/config/site.ts`)

| Field | Current Value | Action |
|---|---|---|
| `name` | "Disort" | Replace with client business name |
| `url` | "https://yourdomain.com" | Set via `NEXT_PUBLIC_SITE_URL` env variable |
| `description` | Template description | Replace with client site description |
| `logo` | `/images/shared/disort-logo.svg` | Replace with client logo |
| `navLogo` | `/images/shared/disort-nav-logo.svg` | Replace with client nav logo |
| `ogImage` | `/images/shared/og-image.jpg` | Create and replace with client OG image |
| `twitterImage` | `/images/shared/og-image.jpg` | Create and replace with client Twitter image |
| `favicon` | `/images/shared/favicon.png` | Replace with client favicon |
| `social.twitter` | "@disort" | Replace with client Twitter handle |
| `social.linkedin` | Generic URL | Replace with client LinkedIn URL |
| `social.facebook` | Generic URL | Replace with client Facebook URL |
| `social.instagram` | Generic URL | Replace with client Instagram URL |
| `social.x` | Generic URL | Replace with client X/Twitter URL |
| `social.profiles` | Empty array | Add all social profile URLs |

### Environment Variables (`.env.example`)

- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain (no trailing slash)

---

## 2. Content Files

These are the PRIMARY files to edit for content changes.

| File | Controls | Key Fields |
|---|---|---|
| `content/home.ts` | Homepage metadata | `meta.title`, `meta.description`, `meta.keywords` |
| `content/header.ts` | Navigation bar | `navItems` (dropdown menus), `ctaText`, `ctaHref`, `logoSrc`, `logoAlt` |
| `content/footer.ts` | Footer section | `description`, `linkBlocks`, `copyrightText`, `copyrightLinks`, `socialLinks` |

### Header Content (`content/header.ts`)

- [ ] Update navigation dropdown items and links to match actual site pages
- [ ] Replace CTA button text ("Get Started") and link ("/contact")
- [ ] Update logo image and alt text

### Footer Content (`content/footer.ts`)

- [ ] Update description text
- [ ] Replace link blocks with actual page links
- [ ] Update copyright text and attribution links
- [ ] Replace social media URLs with client profiles

### Homepage Content (`content/home.ts`)

- [ ] Replace meta title, description, keywords
- [ ] Add page section content as sections are converted

---

## 3. Structured Data

### Organization Schema (`lib/seo/schema.tsx`)

The Organization schema is automatically generated from `lib/config/site.ts`. Update site config to update schema.

### Software Application Schema (`components/pages/HomePage.tsx`)

- [ ] Update `featureList` array with actual product features

---

## 4. Images

| File | Location | Description |
|---|---|---|
| `disort-nav-logo.svg` | `public/images/shared/` | Navigation bar logo |
| `disort-logo.svg` | `public/images/shared/` | Footer logo |
| `favicon.png` | `public/images/shared/` | Browser tab favicon |
| `blog-image-08.avif` | `public/images/shared/` | Featured blog image in nav dropdown |
| `linkedin.svg` | `public/icons/` | LinkedIn social icon |
| `facebook.svg` | `public/icons/` | Facebook social icon |
| `x-twitter.svg` | `public/icons/` | X/Twitter social icon |
| `instagram.svg` | `public/icons/` | Instagram social icon |
| `nav-dropdown-icon.svg` | `public/icons/` | Navigation dropdown chevron icon |
| `right-arrow.svg` | `public/icons/` | Right arrow icon in nav items |
| `right-arrow-02.svg` | `public/icons/` | Alternative right arrow icon |

- [ ] Create OG image (1200x630px) and save as `public/images/shared/og-image.jpg`
- [ ] Replace logos with client brand assets
- [ ] Replace favicon with client favicon

---

## 5. Fonts

The project uses three font families:

| Font | Role | Source |
|---|---|---|
| Geist | Primary (headings, UI) | Google Fonts via `next/font/google` |
| Inter Display | Secondary (body text) | Local files via `next/font/local` in `public/fonts/` |
| Faculty Glyphic | Tertiary (display text) | Google Fonts via Webflow CSS `@font-face` |

Font files are in `public/fonts/`. Override via CSS variables in `app/globals.css`.

---

## 6. Organism Components

### Header (`components/organisms/Header.tsx`)

All content is driven by `content/header.ts`. No hardcoded business text in the component.

### Footer (`components/organisms/Footer.tsx`)

All content is driven by `content/footer.ts`. No hardcoded business text in the component.

Chrome strings (UI labels) are marked with `{/* UI:CHROME:ORGANISM */}` comments.

---

## 7. SEO Metadata

SEO metadata is driven by content files. Editing `content/home.ts` (or future page content files) automatically updates:

- Page title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL
- Keywords

The metadata utility is in `lib/seo/metadata.ts`.

---

## 8. After Customizing

- [ ] Run `npm run build` to verify zero errors
- [ ] Test structured data with Google Rich Results Test
- [ ] Test OG tags with Facebook Sharing Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Verify all images load correctly
- [ ] Check Lighthouse SEO score (target: 90+)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up 301 redirects from old URLs if replacing existing site
