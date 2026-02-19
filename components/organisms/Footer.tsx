import Image from 'next/image';
import type { FooterContent } from '@/types/components';

interface FooterProps {
  content: FooterContent;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-top">
            <div className="footer-top-left">
              <a href={content.logoHref} className="footer-logo-link w-inline-block">
                <Image
                  src={content.logoSrc}
                  alt={content.logoAlt}
                  width={120}
                  height={40}
                  className="footer-logo"
                />
              </a>
              <p className="body-03-regular text-primary-color-01">
                {content.description}
              </p>
            </div>
            <div className="footer-top-right">
              {content.linkBlocks.map((block) => (
                <div key={block.title} className="footer-link-block">
                  <div className="sub-heading-02">{block.title}</div>
                  <div className="footer-link-list">
                    {block.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="footer-page-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-wrap">
              <div className="body-03-regular">
                {/* UI:CHROME:ORGANISM */}&copy; {content.copyrightText}{' '}
                {content.copyrightLinks.map((link, index) => (
                  <span key={link.label}>
                    {index > 0 && (
                      <>
                        {/* UI:CHROME:ORGANISM */}
                        {'. Powered by '}
                      </>
                    )}
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="copyright-link"
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
                {/* UI:CHROME:ORGANISM */}.
              </div>
              <div className="footer-social-wrap">
                {content.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-list w-inline-block"
                    aria-label={social.platform}
                  >
                    <Image
                      src={social.iconSrc}
                      alt={social.iconAlt}
                      width={20}
                      height={20}
                      className="footer-social-icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
