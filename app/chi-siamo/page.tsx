'use client';

import PageBanner from '@/components/sections/shared/PageBanner';
import Identity from '@/components/sections/chi-siamo/Identity';
import History from '@/components/sections/chi-siamo/History';
import Cta from '@/components/sections/shared/Cta';
import { useLanguage } from '@/context/LanguageContext';
import { ABOUT_PAGE_DATA } from '@/constants/chi-siamo/about';

export default function ChiSiamoPage() {
  const { language } = useLanguage();
  const content = ABOUT_PAGE_DATA[language];

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      <PageBanner 
        currentPage={content.tag}
        tag={content.header.tag}
        titleLight={content.header.titleLight}
        titleBold={content.header.titleBold}
        description={content.header.description}
        metaLeft={[content.header.meta.established, content.header.meta.location]}
        metaRight={[content.header.meta.badge1, content.header.meta.badge2]}
      />

      <main className="bg-white">
        <Identity />
        <History />
        <Cta />
      </main>
    </div>
  );
}