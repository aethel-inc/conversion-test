import { SchemaScript, generateSoftwareApplicationSchema } from '@/lib/seo/schema';
import HomeHero from '@/components/organisms/HomeHero';
import type { HomeContent } from '@/types/content';

interface HomePageProps {
  content: HomeContent;
}

export default function HomePage({ content }: HomePageProps) {
  return (
    <>
      <SchemaScript
        schema={generateSoftwareApplicationSchema({
          featureList: [
            'Data Collection & Integration',
            'Cleaning & Preparation',
            'Analysis & Insights',
            'Custom Dashboards',
            'AI Workflows',
            'Data Integrate',
            'Customize Design',
          ],
        })}
      />
      <HomeHero content={content.hero} />
      {/* Additional page sections will be added here as they are converted */}
    </>
  );
}
