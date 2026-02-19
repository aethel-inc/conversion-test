import { generatePageMetadata } from '@/lib/seo/metadata';
import { aboutContent } from '@/content/about';
import AboutPage from '@/components/pages/AboutPage';

export const metadata = generatePageMetadata({
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
  path: '/about',
  keywords: aboutContent.meta.keywords,
});

export default function About() {
  return <AboutPage content={aboutContent} />;
}
