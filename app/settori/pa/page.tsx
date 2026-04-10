'use client';

import Link from 'next/link';
import PageBanner from '@/components/sections/shared/PageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { PA_PAGE_DATA } from '@/constants/sectors';

export default function PubblicaAmministrazionePage() {
  const { language } = useLanguage();
  const content = PA_PAGE_DATA[language];

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      {/* --- BANNER CONDIVISO --- */}
      <PageBanner 
        currentPage={content.currentPage}
        tag={content.header.tag}
        titleLight={content.header.titleLight}
        titleBold={content.header.titleBold}
        description={content.header.description}
        metaLeft={["AgID Qualified", "GDPR Ready"]}
        metaRight={["Cloud PA", "Zero Trust Governance"]}
      />

      <main className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* --- SIDEBAR --- */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-white shadow-xl shadow-brand-dark/5 rounded-[2.5rem] border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8">
                {content.sidebar.tag}
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-3xl font-bold text-brand-dark mb-1">{content.sidebar.m365.value}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">{content.sidebar.m365.label}</p>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <p className="text-3xl font-bold text-brand-dark mb-1">{content.sidebar.trust.value}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">{content.sidebar.trust.label}</p>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <p className="text-3xl font-bold text-brand-dark mb-1">{content.sidebar.agid.value}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">{content.sidebar.agid.label}</p>
                </div>
              </div>
            </div>
          </aside>

          {/* --- CONTENUTO --- */}
          <div className="lg:col-span-8 space-y-24">
            
            <section>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark mb-8 leading-tight">
                {content.intro.titleLight} <span className="font-semibold text-brand-blue">{content.intro.titleBold}</span>{content.intro.titleSuffix}
              </h2>
              <div className="space-y-6 text-lg text-brand-gray font-light leading-relaxed">
                {content.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-12">
                {content.approccio.tag}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.interventions.map((item, idx) => (
                  <div key={idx} className="p-8 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <h4 className="text-xl font-bold mb-4 text-brand-dark">{item.title}</h4>
                    <p className="text-brand-gray font-light text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 p-12 md:p-16 bg-brand-dark rounded-[3.5rem] text-white text-center relative overflow-hidden">
               <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full" />
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h3 className="text-3xl md:text-5xl font-light mb-6 tracking-tighter">
                    {content.cta.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-10 font-light">
                    {content.cta.desc}
                  </p>
                  <Link href="/contatti" className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-blue/20">
                    {content.cta.button}
                  </Link>
               </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}