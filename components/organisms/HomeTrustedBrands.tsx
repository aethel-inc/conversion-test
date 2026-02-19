import Image from 'next/image';
import type { HomeTrustedBrandsContent } from '@/types/content';

interface HomeTrustedBrandsProps {
  content: HomeTrustedBrandsContent;
}

export default function HomeTrustedBrands({ content }: HomeTrustedBrandsProps) {
  const { headingPrefix, headingHighlight, logos } = content;

  return (
    <section
      data-wf--brand-v2--variant="base"
      className="brand-v2"
      aria-label="Trusted brands"
    >
      <div className="container">
        <div className="brand-v2-wrap">
          <div
            data-w-id="48783422-b296-49c0-462e-bf98941ce698"
            className="brand-v2-left"
          >
            <div className="sub-heading-02-1">
              {headingPrefix}
              <span className="special-heading">{headingHighlight}</span>
            </div>
          </div>
          <div
            data-w-id="48783422-b296-49c0-462e-bf98941ce69d"
            className="brand-v2-right"
          >
            <div
              data-w-id="48783422-b296-49c0-462e-bf98941ce69e"
              className="brand-v1-bottom"
            >
              <div className="brand-v1-list-wrap">
                {/* Primary brand list */}
                <div className="brand-list">
                  {logos.map((logo, index) => (
                    <div key={`primary-${index}`} className="brand-v1-logo-wrap">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="brand-v1-logo"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate brand list for infinite marquee scroll effect */}
                <div className="brand-list">
                  {logos.map((logo, index) => (
                    <div key={`duplicate-${index}`} className="brand-v1-logo-wrap">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="brand-v1-logo"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Gradient overlays for marquee fade effect */}
              <div className="linner-topper left" />
              <div className="linner-topper right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
