import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import localFont from 'next/font/local';
import { siteConfig } from '@/lib/config/site';
import { generateOrganizationSchema, SchemaScript } from '@/lib/seo/schema';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import PageContent from '@/components/templates/PageContent';
import { headerContent } from '@/content/header';
import { footerContent } from '@/content/footer';
import '@/styles/webflow.css';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-geist',
  display: 'swap',
});

const interDisplay = localFont({
  src: [
    {
      path: '../public/fonts/InterDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter-display',
  display: 'swap',
});

/* Faculty Glyphic is loaded via Google Fonts CDN through the Webflow CSS.
 * Since next/font/google does not have Faculty_Glyphic available,
 * we set the CSS variable to reference the font name directly.
 * The @font-face declarations in the Webflow CSS handle loading it. */
const facultyGlyphicVariable = '--font-faculty-glyphic';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${interDisplay.variable}`}>
      <head>
        {/* Faculty Glyphic CSS variable injected via inline style since it is loaded by Webflow CSS @font-face */}
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { ${facultyGlyphicVariable}: "Faculty Glyphic"; }`,
          }}
        />
      </head>
      <body>
        <SchemaScript schema={generateOrganizationSchema()} />
        <Header content={headerContent} />
        <PageContent>
          {children}
        </PageContent>
        <Footer content={footerContent} />
        {/* Decorative border lines */}
        <section className="borders" aria-hidden="true">
          <div className="container height-100">
            <div className="borders-wrap">
              <div className="borders-left-wrap" />
              <div className="borders-right-wrap" />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
