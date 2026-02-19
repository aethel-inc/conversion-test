import Image from 'next/image';
import type { HomeAutomationContent } from '@/types/content';

interface HomeAutomationProps {
  content: HomeAutomationContent;
}

export default function HomeAutomation({ content }: HomeAutomationProps) {
  const {
    label,
    headingPrefix,
    headingHighlight,
    subheading,
    bulletPoints,
    image,
    buttonArrowIcon,
    processItems,
  } = content;

  return (
    <section className="automation" aria-label="Data and automation">
      <div className="container">
        <div className="automation-wrap">
          <div className="automation-top">
            <div className="automation-left">
              <div className="automation-left-top">
                <div
                  data-w-id="748aae99-5a8a-9e43-65c0-22eb919a6979"
                  className="body-03-regular text-primary-color-2"
                >
                  {label}
                </div>
                <div className="automation-heading">
                  <div
                    data-w-id="8df31689-00f7-094c-c8b2-5da9142d7163"
                    className="heading-wrap automation-h1"
                  >
                    {/* TODO:HEADING - Changed H3 to H2 for correct heading hierarchy; Webflow used H3 for visual sizing */}
                    <h2>
                      {headingPrefix}
                      <span className="special-heading">{headingHighlight}</span>
                    </h2>
                  </div>
                  <div
                    data-w-id="5bca8904-fe6e-3fda-c006-efa60cd85845"
                    className="sub-heading-wrap"
                  >
                    <p className="sub-heading-02-1">{subheading}</p>
                  </div>
                </div>
              </div>
              <div
                data-w-id="4ccad598-a8f8-7884-9047-c009f371842b"
                className="automation-left-bottom"
              >
                {bulletPoints.map((bullet, index) => (
                  <div key={index} className="point-bottom-list">
                    <div className="vertical-border"></div>
                    <div className="sub-heading-02-1 text-primary-01">
                      {bullet.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="automation-right">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                data-w-id="608b1779-925d-8719-7593-117ccc2f9230"
                className="image-fit"
                loading="lazy"
              />
            </div>
          </div>
          <div className="automation-bottom">
            {processItems.map((item) => (
              <div
                key={item.id}
                className={`automation-process-wrap${item.variant ? ' v1' : ''}`}
              >
                <div className="automation-process">
                  <div className="automation-process-top">
                    <Image
                      src={item.icon}
                      alt={item.iconAlt}
                      width={24}
                      height={24}
                      className="automation-icon"
                      loading="lazy"
                      aria-hidden={item.iconAlt === '' ? true : undefined}
                    />
                    <div className="automation-process-text">
                      <div className="text-style-h6">{item.title}</div>
                      <div className="body-03-regular">{item.description}</div>
                    </div>
                  </div>
                  <div className="automation-process-bottom">
                    <a
                      data-w-id="43ad59d8-0a29-0077-57df-723edc078f0b"
                      href={item.ctaHref}
                      className="button-04 w-inline-block"
                    >
                      <div className="button-04-icon-wrap">
                        <Image
                          src={buttonArrowIcon}
                          alt=""
                          width={16}
                          height={16}
                          className="button-04-icon"
                          loading="lazy"
                          aria-hidden="true"
                        />
                        <Image
                          src={buttonArrowIcon}
                          alt=""
                          width={16}
                          height={16}
                          className="button-04-icon"
                          loading="lazy"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="button-04-text">
                        <div className="body-03-medium text-primary-color-01">
                          {item.ctaText}
                        </div>
                        <div className="body-03-medium text-primary-color-01">
                          {item.ctaText}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
