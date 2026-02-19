import Image from 'next/image';
import type { HomeCollectedDataContent } from '@/types/content';

interface HomeCollectedDataProps {
  content: HomeCollectedDataContent;
}

export default function HomeCollectedData({ content }: HomeCollectedDataProps) {
  const { headingPrefix, headingHighlight, subheading, buttonArrowIcon, items } = content;

  return (
    <section className="collected-data" aria-label="Build your business with collected data">
      <div className="container">
        <div className="collected-data-wrap">
          <div className="collected-data-top">
            <div className="heading-wrap">
              <h2>
                {headingPrefix}
                <span className="special-heading">{headingHighlight}</span>
              </h2>
            </div>
            <div className="sub-heading-wrap">
              <p className="sub-heading-02-1">{subheading}</p>
            </div>
          </div>
          <div className="collected-data-bottom">
            {items.map((item, index) => (
              <article
                key={item.id}
                data-w-id={
                  index === 0
                    ? '05279191-3993-3cdf-6189-294f5fcef690'
                    : index === 1
                      ? 'f086acaa-7d61-eeb2-0f62-2ecfe0984965'
                      : '4ca21a90-0019-57ab-a0d5-c5b484e70b81'
                }
                {...(index === 2
                  ? { id: 'w-node-_4ca21a90-0019-57ab-a0d5-c5b484e70b81-0369a841' }
                  : {})}
                className="collected-list"
              >
                <div className="collected-info">
                  <Image
                    src={item.icon}
                    alt={item.iconAlt}
                    width={24}
                    height={24}
                    className="collected-short-icon"
                    loading="lazy"
                    aria-hidden={item.iconAlt === '' ? true : undefined}
                  />
                  <div className="collected-text">
                    <div className="text-style-h6">{item.title}</div>
                    <p className="body-03-regular">{item.description}</p>
                  </div>
                </div>
                <div className="card-button-wrap">
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
