'use client';

import Link from 'next/link';
import PageBanner from '@/components/sections/shared/PageBanner';
import { useLanguage } from '@/context/LanguageContext';
import { NAVALE_PAGE_DATA } from '@/constants/sectors';

export default function NavalePage() {
  const { language, t } = useLanguage();
  const content = NAVALE_PAGE_DATA[language];

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      {/* --- BANNER CONDIVISO --- */}
      <PageBanner 
        currentPage={content.currentPage}
        tag={content.header.tag}
        titleLight={content.header.titleLight}
        titleBold={content.header.titleBold}
        description={content.header.description}
        metaLeft={["Maritime Security", "NIS2 Ready"]}
        metaRight={["Vessel Networks", "IT/OT Security"]}
      />

      <main className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* --- SIDEBAR --- */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-brand-light rounded-[2.5rem] border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8">
                {content.sidebar.tag}
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">{content.sidebar.nis.value}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">{content.sidebar.nis.label}</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">{content.sidebar.itot.value}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">{content.sidebar.itot.label}</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">{content.sidebar.uptime.value}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">{content.sidebar.uptime.label}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-100">
                <h4 className="font-bold text-brand-dark mb-3">{content.sidebar.boxTitle}</h4>
                <p className="text-sm text-brand-gray leading-relaxed font-light">
                  {content.sidebar.boxText}
                </p>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-24">
            
            <section>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark mb-8 leading-tight">
                {t("Il mare non è più un", "The sea is no longer a")} <span className="font-semibold">{t("porto sicuro", "safe haven")}</span> {t("per i dati.", "for data.")}
              </h2>
              <div className="space-y-6 text-lg text-brand-gray font-light leading-relaxed">
                <p>
                  {t(
                    "Fino a pochi anni fa, le reti a bordo delle navi operavano in totale isolamento. Oggi, le motonavi moderne sono 'data center galleggianti', costantemente connessi con la terraferma tramite sistemi satellitari e 5G.",
                    "Until a few years ago, shipboard networks operated in total isolation. Today, modern vessels are 'floating data centers', constantly connected to the mainland via satellite and 5G systems."
                  )}
                </p>
                <p>
                  {t(
                    "Questa iper-connettività ha esposto il settore marittimo ad attacchi ransomware devastanti. Per questo motivo, l'Unione Europea ha imposto adeguamenti drastici tramite la Direttiva NIS.",
                    "This hyper-connectivity has exposed the maritime sector to devastating ransomware attacks. For this reason, the European Union has imposed drastic adjustments through the NIS Directive."
                  )}
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-12">
                {t("L'Approccio HT Solution", "The HT Solution Approach")}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.solutions.map((item) => (
                  <div key={item.id} className="p-8 rounded-[2.5rem] border border-gray-100 hover:border-brand-blue/20 transition-all bg-white group shadow-sm hover:shadow-xl">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <span className="font-bold text-xs">{item.id}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-brand-dark">{item.title}</h4>
                    <p className="text-brand-gray font-light text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="mt-12 p-12 md:p-16 bg-brand-dark rounded-[3.5rem] text-white text-center relative overflow-hidden">
               <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full" />
               
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h3 className="text-3xl md:text-5xl font-light mb-6 tracking-tighter">
                    {content.cta.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-10 font-light">
                    {content.cta.desc}
                  </p>
                  <Link
                    href="/contatti"
                    className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-blue/20"
                  >
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