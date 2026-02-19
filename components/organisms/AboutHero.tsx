import Image from 'next/image';
import type { AboutHeroContent } from '@/types/content';

interface AboutHeroProps {
  content: AboutHeroContent;
}

export default function AboutHero({ content }: AboutHeroProps) {
  const {
    headingPrefix,
    headingHighlight,
    ctaText,
    ctaHref,
    leftImage,
    rightImage,
    sectionDividerImage,
  } = content;

  return (
    <section className="about-hero" aria-label="About hero">
      <div className="container">
        <div className="about-hero-wrap">
          <div className="about-hero-top">
            <div className="hero-heading">
              <h1>
                {headingPrefix}{' '}
                <span className="special-heading">{headingHighlight}</span>
              </h1>
            </div>
            <div className="hero-button-wrap">
              <a
                href={ctaHref}
                data-wf--button-01--variant="base"
                data-w-id="a473f510-4b21-a665-d93b-8381a2c812dc"
                className="button-01 w-inline-block"
              >
                <div className="button-text-wrapper">
                  <div className="body-03-medium text-light">{ctaText}</div>
                  <div className="body-03-medium text-light">{ctaText}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="about-hero-bottom">
            <div className="about-left-image">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                width={leftImage.width}
                height={leftImage.height}
                data-w-id="baf2c28c-621c-efb4-d9cc-43d0aa705e84"
                className="image-fit"
                priority
              />
            </div>
            <div className="about-right-image">
              <Image
                src={rightImage.src}
                alt={rightImage.alt}
                width={rightImage.width}
                height={rightImage.height}
                data-w-id="6f002979-b618-520a-2a3c-56f763f067c3"
                className="image-fit"
                priority
              />
            </div>
          </div>
        </div>
        <div
          data-wf--section-divider-v1--variant="base"
          className="section-divider-wrap v1"
        >
          <Image
            src={sectionDividerImage.src}
            alt={sectionDividerImage.alt}
            width={sectionDividerImage.width}
            height={sectionDividerImage.height}
            className="image-fit"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
