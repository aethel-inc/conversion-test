import { SchemaScript, generateSoftwareApplicationSchema } from '@/lib/seo/schema';
import HomeHero from '@/components/organisms/HomeHero';
import HomeTrustedBrands from '@/components/organisms/HomeTrustedBrands';
import HomeSectionDivider from '@/components/organisms/HomeSectionDivider';
import HomeDevCloud from '@/components/organisms/HomeDevCloud';
import HomeCollectedData from '@/components/organisms/HomeCollectedData';
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
      <HomeTrustedBrands content={content.trustedBrands} />
      <HomeSectionDivider content={content.sectionDivider} />
      <HomeDevCloud content={content.devCloud} />
      <HomeCollectedData content={content.collectedData} />
      {/* Additional page sections will be added here as they are converted */}
    </>
  );
}
