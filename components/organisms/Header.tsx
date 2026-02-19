'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import type {
  HeaderContent,
  NavDropdownConfig,
  NavDropdownSection,
} from '@/types/components';

interface HeaderProps {
  content: HeaderContent;
}

function NavDropdownSections({ sections }: { sections: NavDropdownSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.title} className="nav-dropdown-list">
          <div className="nav-dropdown-list-title">
            <div className="tag-01 text-secondary-01">{section.title}</div>
          </div>
          <div className="nav-list-wrap">
            {section.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-drop-item w-inline-block"
              >
                <div className="body-03-medium">{item.label}</div>
                {/* UI:CHROME:ORGANISM - Nav arrow icon is structural UI */}
                <span className="nav-icon" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function NavDropdown({ config }: { config: NavDropdownConfig }) {
  const [isOpen, setIsOpen] = useState(false);

  const variantClass = config.variant ? ` ${config.variant}` : '';

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Determine the body variant class based on dropdown variant
  const bodyVariantClass =
    config.variant === 'v4'
      ? ' v2'
      : config.variant === 'v3'
        ? ' v1'
        : '';

  // Determine the left item variant class for Company dropdown
  const leftItemVariantClass = config.variant === 'v4' ? ' v3' : '';

  // "Pages" variant has a unique multi-column layout with blog sidebar
  const isPagesVariant = config.variant === '' || config.variant === undefined;
  const isCompanyVariant = config.variant === 'v4';

  return (
    <li
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-dropdown w-dropdown">
        <button
          className="nav-dropdown-toggle w-dropdown-toggle"
          onClick={handleToggle}
          aria-expanded={isOpen}
          type="button"
        >
          <div className="nav-link-wrap">
            <div className="nav-link">{config.label}</div>
          </div>
          <Image
            src="/icons/nav-dropdown-icon.svg"
            alt=""
            width={12}
            height={12}
            className="nav-dropdown-icon"
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <nav
            className={`nav-dropdown-list-wrap${variantClass} w-dropdown-list`}
            role="menu"
          >
            <div className={`nav-dropdown-list-body${bodyVariantClass}`}>
              {isPagesVariant && (
                <>
                  <div className="nav-left-item">
                    <NavDropdownSections sections={config.sections} />
                  </div>
                  {config.featuredBlog && (
                    <div className="nav-right-blog">
                      <a
                        href={config.featuredBlog.href}
                        className="link-block w-inline-block"
                      >
                        <div className="nav-blog-wrap">
                          <Image
                            src={config.featuredBlog.image.src}
                            alt={config.featuredBlog.image.alt}
                            width={280}
                            height={180}
                            className="image-fit"
                          />
                        </div>
                        <div className="nav-blog-text">
                          <div className="body-03-medium">
                            {config.featuredBlog.title}
                          </div>
                          <Image
                            src="/icons/right-arrow.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="blog-short-icon"
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                    </div>
                  )}
                </>
              )}

              {isCompanyVariant && (
                <>
                  <div className={`nav-left-item${leftItemVariantClass}`}>
                    {config.sections.map((section) => (
                      <div key={section.title} className="nav-dropdown-list v1">
                        <div className="nav-dropdown-list-title">
                          <div className="tag-01 text-secondary-01">
                            {section.title}
                          </div>
                        </div>
                        <div className="nav-block v1">
                          {/* Split items into columns of ~3 each */}
                          {splitIntoColumns(section.items, 3).map(
                            (column, colIdx) => (
                              <div key={colIdx} className="nav-list-wrap">
                                {column.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    className="nav-drop-item w-inline-block"
                                  >
                                    <div className="body-03-medium">
                                      {item.label}
                                    </div>
                                    <span
                                      className="nav-icon"
                                      aria-hidden="true"
                                    />
                                  </a>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {config.featuredBlog && (
                    <div className="nav-right-blog v2">
                      <a
                        href={config.featuredBlog.href}
                        className="link-block v2 w-inline-block"
                      >
                        <div className="nav-blog-wrap v1">
                          <Image
                            src={config.featuredBlog.image.src}
                            alt={config.featuredBlog.image.alt}
                            width={280}
                            height={180}
                            className="image-fit"
                          />
                        </div>
                        <div className="nav-blog-text v1">
                          <div className="body-03-medium">
                            {config.featuredBlog.title}
                          </div>
                          <Image
                            src="/icons/right-arrow.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="blog-short-icon"
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                    </div>
                  )}
                </>
              )}

              {!isPagesVariant && !isCompanyVariant && (
                <NavDropdownSections sections={config.sections} />
              )}

              {config.variant === 'v2' && config.featuredImage && (
                <div className="nav-right-blog v1">
                  <Image
                    src={config.featuredImage.src}
                    alt={config.featuredImage.alt}
                    width={280}
                    height={200}
                    className="image-fit"
                  />
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </li>
  );
}

function splitIntoColumns<T>(items: T[], size: number): T[][] {
  const columns: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    columns.push(items.slice(i, i + size));
  }
  return columns;
}

export default function Header({ content }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="master-navbar">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="600"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-container w-nav"
      >
        <div
          data-w-id="440717e7-7695-15b0-715a-ef83ca50be03"
          className="navbar-container-wrap"
        >
          <div className="navbar-wrapper">
            <a href={content.logoHref} className="navbar-brand w-nav-brand">
              <Image
                src={content.logoSrc}
                alt={content.logoAlt}
                width={120}
                height={32}
                priority
                className="navbar-brand-logo"
              />
            </a>
            <nav
              role="navigation"
              className={`nav-menu-wrapper w-nav-menu${mobileMenuOpen ? ' w--open' : ''}`}
              aria-label="Main Navigation"
            >
              <ul role="list" className="nav-menus w-list-unstyled">
                {content.navItems.map((navItem) => (
                  <NavDropdown
                    key={navItem.config.label}
                    config={navItem.config}
                  />
                ))}
              </ul>
            </nav>
            <div className="nav-right-wrap">
              <div className="nav-right">
                <div className="nav-button-wrapper">
                  <a
                    href={content.ctaHref}
                    data-wf--button-01--variant="medium-button"
                    data-w-id="a473f510-4b21-a665-d93b-8381a2c812dc"
                    className="button-01 w-variant-46c0186a-b320-580c-ae89-f5480cc0f27c w-inline-block"
                  >
                    <div className="button-text-wrapper">
                      <div className="body-03-medium text-light w-variant-46c0186a-b320-580c-ae89-f5480cc0f27c">
                        {content.ctaText}
                      </div>
                      <div className="body-03-medium text-light w-variant-46c0186a-b320-580c-ae89-f5480cc0f27c">
                        {content.ctaText}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <button
                className="menu-button w-nav-button"
                onClick={handleMobileToggle}
                aria-label={/* UI:CHROME:ORGANISM */ 'Toggle navigation menu'}
                aria-expanded={mobileMenuOpen}
                type="button"
              >
                <div className="icon w-icon-nav-menu" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="440717e7-7695-15b0-715a-ef83ca50bed6"
        className="nav-blur"
      />
    </header>
  );
}
