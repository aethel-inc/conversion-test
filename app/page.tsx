import { generatePageMetadata } from '@/lib/seo/metadata';
import { homeContent } from '@/content/home';
import HomePage from '@/components/pages/HomePage';

export const metadata = generatePageMetadata({
  title: homeContent.meta.title,
  description: homeContent.meta.description,
  path: '/',
  keywords: homeContent.meta.keywords,
});

export default function Home() {
  return <HomePage content={homeContent} />;
}
