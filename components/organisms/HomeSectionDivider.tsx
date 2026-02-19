import Image from 'next/image';
import type { HomeSectionDividerContent } from '@/types/content';

interface HomeSectionDividerProps {
  content: HomeSectionDividerContent;
}

export default function HomeSectionDivider({ content }: HomeSectionDividerProps) {
  const { image } = content;

  return (
    <section className="section-divider" aria-hidden="true">
      <div className="container">
        <div className="section-divider-wrap">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="image-fit"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
