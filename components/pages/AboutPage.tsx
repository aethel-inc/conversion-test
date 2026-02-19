import { SchemaScript } from '@/lib/seo/schema';
import AboutHero from '@/components/organisms/AboutHero';
import type { AboutContent } from '@/types/content';

interface AboutPageProps {
  content: AboutContent;
}

export default function AboutPage({ content }: AboutPageProps) {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: content.meta.title,
    description: content.meta.description,
    url: '/about',
    inLanguage: 'en',
  };

  return (
    <>
      <SchemaScript schema={aboutPageSchema} />
      <AboutHero content={content.hero} />
    </>
  );
}
