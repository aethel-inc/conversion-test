'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import type { HomeAppLayerContent } from '@/types/content';

interface HomeAppLayerProps {
  content: HomeAppLayerContent;
}

export default function HomeAppLayer({ content }: HomeAppLayerProps) {
  const {
    headingPrefix,
    headingHighlight,
    subheading,
    marqueeRows,
    testimonialHeadingPrefix,
    testimonialHeadingHighlight,
    testimonials,
    sliderArrowLeft,
    sliderArrowRight,
  } = content;

  /* ------------------------------------------------------------------ */
  /*  Testimonial slider state                                          */
  /*  Webflow uses w-slider with data-infinite="true". We replicate     */
  /*  this with wrapping index logic over a doubled slide array so the  */
  /*  visual list matches the original 4-slide layout (2 unique x 2).  */
  /* ------------------------------------------------------------------ */
  const slides = [...testimonials, ...testimonials];
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  return (
    <section className="app" aria-label="App layer and testimonials">
      <div className="container">
        <div className="app-wrap">
          {/* ========== APP TOP: heading + marquee ========== */}
          <div className="app-top">
            <div className="app-heading">
              <div className="heading-wrap">
                <h2>
                  {headingPrefix}
                  <span className="special-heading _02">
                    {headingHighlight}
                  </span>
                </h2>
              </div>
              <div className="sub-heading-wrap">
                <p className="sub-heading-02-1 text-primary-04">
                  {subheading}
                </p>
              </div>
            </div>

            {/* Marquee grid of app icons */}
            <div
              data-w-id="56380515-b81b-370c-3dcd-be2d2dec74e0"
              className="app-marque"
            >
              {marqueeRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`apps-m-wrapper${row.variant ? ' v1' : ''}`}
                >
                  {/*
                    Each marquee row contains two identical .apps-outer divs
                    so the CSS animation can scroll seamlessly (the second
                    copy fills the gap as the first scrolls out of view).
                  */}
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className={`apps-outer${row.variant ? ' v1' : ''}`}
                    >
                      {row.items.map((app) => (
                        <div
                          key={`${app.id}-${copy}`}
                          className="apps-box"
                        >
                          <Image
                            src={app.icon}
                            alt={app.alt}
                            width={24}
                            height={24}
                            className="apps-icon"
                            loading="lazy"
                          />
                          <div className="sub-heading-02-1">{app.label}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <div className="apps-cover"></div>
            </div>
          </div>

          {/* ========== APP BOTTOM: testimonials ========== */}
          <div className="app-bottom">
            <div className="app-bottom-heading">
              <div className="heading-wrap">
                {/* TODO:HEADING - This is an h2 in the original but appears as a second h2 within the same section. Kept as h2 since it introduces a distinct sub-section (testimonials). */}
                <h2 data-w-id="69470122-d3e6-da48-9d53-6ec6480e83c7">
                  {testimonialHeadingPrefix}
                  <span className="special-heading _02">
                    {testimonialHeadingHighlight}
                  </span>
                </h2>
              </div>
            </div>

            <div
              data-w-id="25d4f62a-d243-f9bd-4f98-3ec707c98b79"
              className="testimonial-v1-slider"
            >
              {/* Replaces Webflow w-slider with manual state-driven slider */}
              <div className="testimonial-slider-wrapper w-slider">
                <div className="testimonial-mask w-slider-mask">
                  {slides.map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="testimonial-slide-wrapper w-slide"
                      style={{
                        display: index === activeIndex ? 'block' : 'none',
                      }}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${index + 1} of ${slides.length}`}
                    >
                      <article className="testimonial-v1-box">
                        <div className="testimonial-v1-box-top">
                          <div className="heading-05">
                            {testimonial.quote}
                          </div>
                        </div>
                        <div className="testimonial-v1-box-bottom">
                          <div className="client-info-box-wrap">
                            <Image
                              src={testimonial.clientImage.src}
                              alt={testimonial.clientImage.alt}
                              width={testimonial.clientImage.width}
                              height={testimonial.clientImage.height}
                              className="client-image"
                              loading="lazy"
                            />
                            <div className="client-info-box">
                              <div className="body-03-medium">
                                {testimonial.clientName}
                              </div>
                              <div className="tag-01 text-secondary-01">
                                {testimonial.clientRole}
                              </div>
                            </div>
                          </div>
                          <Image
                            src={testimonial.companyLogo.src}
                            alt={testimonial.companyLogo.alt}
                            width={testimonial.companyLogo.width}
                            height={testimonial.companyLogo.height}
                            className="testimonial-v1-logo"
                            loading="lazy"
                          />
                        </div>
                      </article>
                    </div>
                  ))}
                </div>

                {/* Slider navigation arrows */}
                <button
                  type="button"
                  className="testmonial-slider-arrow left w-slider-arrow-left"
                  onClick={goToPrevious}
                  aria-label={/* UI:CHROME:ORGANISM */ 'Previous testimonial'}
                >
                  <div className="slider-icon-box">
                    <Image
                      src={sliderArrowLeft.primary}
                      alt=""
                      width={16}
                      height={16}
                      className="slider-icon"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <Image
                      src={sliderArrowLeft.secondary}
                      alt=""
                      width={16}
                      height={16}
                      className="slider-icon"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>
                </button>

                <button
                  type="button"
                  className="testmonial-slider-arrow right w-slider-arrow-right"
                  onClick={goToNext}
                  aria-label={/* UI:CHROME:ORGANISM */ 'Next testimonial'}
                >
                  <div className="slider-icon-box">
                    <Image
                      src={sliderArrowRight.secondary}
                      alt=""
                      width={16}
                      height={16}
                      className="slider-icon"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <Image
                      src={sliderArrowRight.primary}
                      alt=""
                      width={16}
                      height={16}
                      className="slider-icon"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {/* Slider dot navigation */}
                <div className="team-slider-nav w-slider-nav w-slider-nav-invert w-round">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-slider-dot${index === activeIndex ? ' w-active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={/* UI:CHROME:ORGANISM */ `Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
