'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface LegalSection {
  title: string;
  content: string;
}

interface LegalLayoutProps {
  data: {
    it: {
      title: string;
      lastUpdated: string;
      introduction: string;
      sections: LegalSection[];
    };
    en: {
      title: string;
      lastUpdated: string;
      introduction: string;
      sections: LegalSection[];
    };
  };
}

export default function LegalLayout({ data }: LegalLayoutProps) {
  const { language, t } = useLanguage();
  
  // Seleziona i dati corretti in base alla lingua
  const currentContent = data[language];

  // Fallback di sicurezza per evitare il crash se data è malformato
  if (!currentContent || !currentContent.sections) {
    return null;
  }

  const { title, lastUpdated, introduction, sections } = currentContent;

  return (
    <div className="bg-white min-h-screen text-brand-dark pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
          <Link href="/" className="text-brand-gray/40 hover:text-brand-blue transition-colors">Home</Link>
          <span className="text-brand-gray/20">/</span>
          <span className="text-brand-blue">{title}</span>
        </nav>

        <header className="mb-16 border-b border-gray-100 pb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{title}</h1>
          <p className="text-sm text-brand-blue font-mono uppercase tracking-widest mb-8">
            {t("Ultimo aggiornamento", "Last updated")}: {lastUpdated}
          </p>
          <p className="text-xl text-brand-gray font-light leading-relaxed italic">{introduction}</p>
        </header>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={index} className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 tracking-tight">{section.title}</h2>
              <p className="text-brand-gray font-light leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <footer className="mt-24 pt-12 border-t border-gray-100">
          <Link href="/contatti" className="text-brand-blue font-bold uppercase text-[10px] tracking-widest hover:text-brand-dark transition-colors">
            {t("Domande sulla gestione dati? Contattaci", "Questions about data management? Contact us")} &rarr;
          </Link>
        </footer>
      </div>
    </div>
  );
}