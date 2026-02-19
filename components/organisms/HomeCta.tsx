import Image from 'next/image';
import type { HomeCtaContent } from '@/types/content';

interface HomeCtaProps {
  content: HomeCtaContent;
}

export default function HomeCta({ content }: HomeCtaProps) {
  return (
    <section className="cta" aria-label="Call to Action">
      <div className="container">
        <div className="cta-wrap">
          <div className="cta-top">
            <div className="cta-top-left">
              <Image
                src={content.borderCornerImage.src}
                alt={content.borderCornerImage.alt}
                width={content.borderCornerImage.width}
                height={content.borderCornerImage.height}
                className="border-corners"
              />
            </div>
            <div className="cta-top-right">
              <Image
                src={content.borderCornerImage.src}
                alt={content.borderCornerImage.alt}
                width={content.borderCornerImage.width}
                height={content.borderCornerImage.height}
                className="border-corners rotated-01"
              />
            </div>
          </div>
          <div className="cta-main-content">
            <div className="cta-main-left"></div>
            <div className="cta-main-wrap">
              <div className="cta-main-wrapper">
                <div className="cta-content">
                  <div className="cta-top-heading">
                    <div
                      data-w-id="13dba9f5-ccc6-a981-36e6-28e55bee39b6"
                      className="heading-wrap"
                    >
                      {/* TODO:HEADING - Changed H1 to H2 (only one H1 per page, reserved for the hero) */}
                      <h2 className="text-light">{content.heading}</h2>
                    </div>
                    <div
                      data-w-id="13dba9f5-ccc6-a981-36e6-28e55bee39b9"
                      className="sub-heading-wrap"
                    >
                      <p className="body-03-regular text-stock-color">
                        {content.subheading}
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="13dba9f5-ccc6-a981-36e6-28e55bee39bc"
                    className="button-wrap"
                  >
                    <a
                      href={content.ctaHref}
                      data-wf--button-02--variant="cta-button"
                      data-w-id="7f3933a6-ccbe-8a5b-5b6e-19a97871753f"
                      className="button-02 w-variant-9a1cff00-cf91-b1e4-63fe-390ee7c8d6f8 w-inline-block"
                    >
                      <div className="button-text-wrapper">
                        <div className="body-03-medium text-primary-color-01">
                          {content.ctaText}
                        </div>
                        <div className="body-03-medium">
                          {content.ctaText}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cta-main-bg">
                <Image
                  src={content.backgroundImage.src}
                  alt={content.backgroundImage.alt}
                  width={content.backgroundImage.width}
                  height={content.backgroundImage.height}
                  className="image-fit"
                />
              </div>
            </div>
            <div className="cta-main-right"></div>
          </div>
          <div className="cta-bottom">
            <div className="cta-bottom-left">
              <Image
                src={content.borderCornerImage.src}
                alt={content.borderCornerImage.alt}
                width={content.borderCornerImage.width}
                height={content.borderCornerImage.height}
                className="border-corners rotated-02"
              />
            </div>
            <div className="cta-bottom-right">
              <Image
                src={content.borderCornerImage.src}
                alt={content.borderCornerImage.alt}
                width={content.borderCornerImage.width}
                height={content.borderCornerImage.height}
                className="border-corners rotated-03"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
