import Image from 'next/image';
import type { HomeHeroContent } from '@/types/content';

interface HomeHeroProps {
  content: HomeHeroContent;
}

export default function HomeHero({ content }: HomeHeroProps) {
  const { heading, headingHighlight, subheading, ctaText, ctaHref, imageSection } = content;
  const { mainImage, cardImage, cardBottomImage, trustedUsers, trustedUsersOverflowLabel, stats } =
    imageSection;

  return (
    <>
      {/* Hero text section */}
      <section className="home-02-hero" aria-label="Hero">
        <div className="container">
          <div className="home-02-hero-top">
            <div className="home-02-hero-heading">
              <div className="hero-heading">
                <h1>
                  {heading} <span className="special-heading">{headingHighlight}</span>
                </h1>
              </div>
              <div className="hero-sub-heading v2-headding">
                <p className="sub-heading-02-1 text-primary-01">{subheading}</p>
              </div>
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
        </div>
      </section>

      {/* Hero image showcase section */}
      <section className="home-02-hero-image" aria-label="Hero image showcase">
        <div className="container">
          <div className="hero-2-image-wrap-main">
            <div className="hero-2-image-wrap">
              <div className="hero-2-image-left">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  width={mainImage.width}
                  height={mainImage.height}
                  data-w-id="9b0d7db8-9b67-4ad1-63cb-9c2dfb9835bf"
                  className="image-fit"
                  priority
                />
              </div>
              <div className="hero-2-image-right">
                <div className="hero-2-right-top">
                  <Image
                    src={cardImage.src}
                    alt={cardImage.alt}
                    width={cardImage.width}
                    height={cardImage.height}
                    data-w-id="19397ce4-4842-51d3-7817-e718d6df85a1"
                    className="hero-2-card-image"
                  />
                </div>
                <div className="hero-2-right-bottom">
                  <div
                    data-w-id="5b13ef04-0be2-4a9e-32b8-d3f8aff7a327"
                    className="hero-2-right-bottom-1"
                  >
                    <div className="hero-right-bottom-1">
                      <div className="card-users-wrap">
                        {trustedUsers.map((user, index) => (
                          <Image
                            key={index}
                            src={user.src}
                            alt={user.alt}
                            width={40}
                            height={40}
                            className="card-users-image v1"
                          />
                        ))}
                      </div>
                      <div className="tag-01 text-light">{trustedUsersOverflowLabel}</div>
                    </div>
                    <div className="hero-right-bottom-2">
                      <div className="statistics-number-wrap v4">
                        {/* TODO:HEADING - Original used <h2>/<h3> tags for visual sizing in the animated counter. Converted to <span> to preserve heading hierarchy. */}
                        <div className="statistics-number-box upper">
                          {stats.upperDigits.map((digit, index) => (
                            <span key={index} className="total-user">
                              {digit}
                            </span>
                          ))}
                        </div>
                        <div className="statistics-number-box lower">
                          {stats.lowerDigits.map((digit, index) => (
                            <span key={index} className="total-user">
                              {digit}
                            </span>
                          ))}
                        </div>
                        {stats.suffix.split('').map((char, index) => (
                          <span key={`suffix-${index}`} className="total-user">
                            {char}
                          </span>
                        ))}
                      </div>
                      <div className="tag-01 text-secondary-02">{stats.description}</div>
                    </div>
                  </div>
                  <div className="hero-2-right-bottom-2">
                    <Image
                      src={cardBottomImage.src}
                      alt={cardBottomImage.alt}
                      width={cardBottomImage.width}
                      height={cardBottomImage.height}
                      data-w-id="d25288a4-2c2c-deec-1443-0d27012c5397"
                      className="hero-2-card-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative border corners */}
            <Image
              src="/images/home/border-corner.svg"
              alt=""
              width={24}
              height={24}
              className="border-corners v1"
              aria-hidden="true"
            />
            <Image
              src="/images/home/border-corner.svg"
              alt=""
              width={24}
              height={24}
              className="border-corners rotated-v1-2"
              aria-hidden="true"
            />
            <Image
              src="/images/home/border-corner.svg"
              alt=""
              width={24}
              height={24}
              className="border-corners rotated-v1-1"
              aria-hidden="true"
            />
            <Image
              src="/images/home/border-corner.svg"
              alt=""
              width={24}
              height={24}
              className="border-corners rotated-v1-3"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}
