import Image from 'next/image';
import type { HomeBlogShowcaseContent } from '@/types/content';

interface HomeBlogShowcaseProps {
  content: HomeBlogShowcaseContent;
}

export default function HomeBlogShowcase({ content }: HomeBlogShowcaseProps) {
  return (
    <section className="blog-v2" aria-label="Blog Showcase">
      <div className="container">
        <div className="blog-v2-wrap">
          <div className="blog-v2-top heading-wrap">
            <h2>
              {content.headingPrefix}
              <span className="special-heading">{content.headingHighlight}</span>
            </h2>
          </div>
          <div className="blog-v2-bottom">
            {/* Featured post — large card on the left */}
            <div
              data-w-id="7906adf7-08aa-96c1-7108-8abb5aeaa740"
              className="blog-v2-bottom-left"
            >
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <article
                      data-w-id="768583fe-8d60-defd-d6c4-d44a29efe4d8"
                      className="blog-v2-list-01"
                    >
                      <div className="blog-v2-image-wrap">
                        <Image
                          src={content.featuredPost.image.src}
                          alt={content.featuredPost.image.alt}
                          width={content.featuredPost.image.width}
                          height={content.featuredPost.image.height}
                          loading="lazy"
                          className="image-fit"
                        />
                      </div>
                      <div className="blog-v2-info-wrap">
                        <div className="blog-v2-basic">
                          <div className="body-03-regular text-secondary-01">
                            {content.featuredPost.date}
                          </div>
                          <div className="heading-05">
                            {content.featuredPost.title}
                          </div>
                        </div>
                        <div className="blog-v1-details-box-02 v1">
                          <Image
                            src={content.featuredPost.authorImage.src}
                            alt={content.featuredPost.authorImage.alt}
                            width={content.featuredPost.authorImage.width}
                            height={content.featuredPost.authorImage.height}
                            loading="lazy"
                            className="bloger-image"
                          />
                          <div className="bloger-info">
                            <div className="sub-heading-02-1 text-primary-01">
                              {content.featuredPost.authorName}
                            </div>
                            <div className="sub-heading-02-1 text-primary-01">
                              {/* UI:CHROME:ORGANISM */},
                            </div>
                            <div className="sub-heading-02-1 text-secondary-01">
                              {content.featuredPost.authorRole}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog list — smaller cards on the right */}
            <div className="blog-v2-bottom-right">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  {content.listPosts.map((post) => (
                    <div key={post.id} role="listitem" className="w-dyn-item">
                      <a
                        data-w-id="ae517707-525a-33a2-a5b7-76c82b8c92ec"
                        href={post.href}
                        className="blog-v2-list-02 w-inline-block"
                      >
                        <div className="blog-v2-list-top">
                          <div
                            className="category-box"
                            style={{ backgroundColor: post.category.backgroundColor }}
                          >
                            <div
                              className="tag-01 category-text"
                              style={{ color: post.category.textColor }}
                            >
                              {post.category.label}
                            </div>
                          </div>
                          <div className="text-style-h6">{post.title}</div>
                        </div>
                        <div className="bloger-info-wrap">
                          <div className="bloger-name">
                            <div className="body-03-medium">{post.authorName}</div>
                            <div className="body-03-medium">
                              {/* UI:CHROME:ORGANISM */},
                            </div>
                            <div className="body-03-regular text-secondary-01">
                              {post.authorRole}
                            </div>
                          </div>
                          <div
                            data-w-id="57038d49-ec86-e88e-2f9f-74ec5318fb66"
                            className="button-04"
                          >
                            <div className="button-04-icon-wrap">
                              <Image
                                src={content.readMoreArrowIcon}
                                alt=""
                                width={16}
                                height={16}
                                loading="lazy"
                                className="button-04-icon"
                              />
                              <Image
                                src={content.readMoreArrowIcon}
                                alt=""
                                width={16}
                                height={16}
                                loading="lazy"
                                className="button-04-icon"
                              />
                            </div>
                            <div className="button-04-text">
                              <div className="body-03-medium text-primary-color-01">
                                {/* UI:CHROME:ORGANISM */}Read more
                              </div>
                              <div className="body-03-medium text-primary-color-01">
                                {/* UI:CHROME:ORGANISM */}Read more
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
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
