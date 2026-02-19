import { SchemaScript, generateSoftwareApplicationSchema } from '@/lib/seo/schema';
import HomeHero from '@/components/organisms/HomeHero';
import HomeTrustedBrands from '@/components/organisms/HomeTrustedBrands';
import HomeSectionDivider from '@/components/organisms/HomeSectionDivider';
import HomeDevCloud from '@/components/organisms/HomeDevCloud';
import HomeCollectedData from '@/components/organisms/HomeCollectedData';
import HomeAutomation from '@/components/organisms/HomeAutomation';
import HomeAppLayer from '@/components/organisms/HomeAppLayer';
import HomeBlogShowcase from '@/components/organisms/HomeBlogShowcase';
import HomeCta from '@/components/organisms/HomeCta';
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
      <HomeAutomation content={content.automation} />
      <HomeSectionDivider content={content.sectionDivider} />
      <HomeAppLayer content={content.appLayer} />
      <HomeBlogShowcase content={content.blogShowcase} />
      <HomeCta content={content.cta} />
    </>
  );
}
