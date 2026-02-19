'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { HomeDevCloudContent } from '@/types/content';

interface HomeDevCloudProps {
  content: HomeDevCloudContent;
}

export default function HomeDevCloud({ content }: HomeDevCloudProps) {
  const { headingPrefix, headingHighlight, topBorderImage, tabs } = content;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="collection" aria-label="Developer cloud features">
      <div className="container">
        <div className="collection-wrap">
          <div className="collection-top">
            <div className="heading-wrap">
              <h2>
                {headingPrefix}
                <span className="special-heading">{headingHighlight}</span>
              </h2>
            </div>
          </div>
          <div className="collection-bottom">
            <div className="collection-bottom-stock">
              <Image
                src={topBorderImage.src}
                alt={topBorderImage.alt}
                width={topBorderImage.width}
                height={topBorderImage.height}
                className="border-image"
                loading="lazy"
                aria-hidden="true"
              />
            </div>
            <div
              className="collection-bottom-tab w-tabs"
              role="tablist"
              aria-label="Developer cloud feature tabs"
            >
              <div className="collection-left w-tab-menu">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.tabLabel}
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls={`devcloud-tabpanel-${index}`}
                    id={`devcloud-tab-${index}`}
                    className={`collection-tab-link w-inline-block w-tab-link${activeTab === index ? ' w--current' : ''}`}
                    onClick={() => setActiveTab(index)}
                    type="button"
                  >
                    <div className="sub-heading-02">{tab.tabLabel}</div>
                  </button>
                ))}
              </div>
              <div
                data-w-id="826439a1-766f-358c-e8ee-c8a226584f0f"
                className="collection-right w-tab-content"
              >
                {tabs.map((tab, index) => (
                  <div
                    key={tab.tabLabel}
                    role="tabpanel"
                    id={`devcloud-tabpanel-${index}`}
                    aria-labelledby={`devcloud-tab-${index}`}
                    className={`w-tab-pane${activeTab === index ? ' w--tab-active' : ''}`}
                    hidden={activeTab !== index}
                  >
                    <div className="collection-list-wrap">
                      <div className="collection-list-top">
                        <div className="text-style-h6">{tab.title}</div>
                        <div className="body-03-regular text-secondary-01">
                          {tab.description}
                        </div>
                      </div>
                      <div className="collection-list-bottom">
                        <div className="collection-image">
                          <Image
                            src={tab.backgroundImage.src}
                            alt={tab.backgroundImage.alt}
                            width={tab.backgroundImage.width}
                            height={tab.backgroundImage.height}
                            className="image-fit"
                            loading="lazy"
                          />
                        </div>
                        <div className="collectioncover-image">
                          <Image
                            src={tab.coverImage.src}
                            alt={tab.coverImage.alt}
                            width={tab.coverImage.width}
                            height={tab.coverImage.height}
                            className="image-100"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
