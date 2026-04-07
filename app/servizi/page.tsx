'use client';

import Link from 'next/link';
import ContactFooter from '@/components/layout/ContactFooter';
import { SERVICES_DATA, SERVICES_GRID_CONTENT } from '@/constants/home/services';
import Cta from '@/components/sections/shared/Cta';
import { useLanguage } from '@/context/LanguageContext';

export default function ServiziPage() {
  const { language, t } = useLanguage();

  // Recuperiamo i dati in base alla lingua selezionata
  const services = SERVICES_DATA[language];
  const gridContent = SERVICES_GRID_CONTENT[language];

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      {/* --- HERO DELLA PAGINA SERVIZI (Layout Editoriale) --- */}
      <header className="relative pt-40 pb-16 md:pb-20 px-6 md:px-10 bg-brand-dark text-white overflow-hidden">
        {/* Sfondo decorativo a griglia */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="mb-16 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-white/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-brand-blue">{t("Servizi", "Services")}</span>
          </nav>

          {/* Griglia Asimmetrica per Titolo e Descrizione */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
            
            {/* Sinistra: Titolo Principale */}
            <div className="lg:col-span-8">
              <span className="text-brand-blue font-mono text-xs mb-6 block tracking-[0.4em] uppercase">
                {t("Competenze Verticali", "Vertical Expertise")}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]">
                {t("Infrastrutture, Codice", "Infrastructure, Code")} <br/>
                <span className="font-bold text-white">&amp; Cybersecurity</span>
                <span className="text-brand-blue">.</span>
              </h1>
            </div>

            {/* Destra: Paragrafo di supporto con bordo */}
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l border-white/10 pl-6">
                {gridContent.header.claim}
              </p>
            </div>
            
          </div>

          {/* Barra Metadati / Badge relative ai servizi */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-between md:items-center text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
            <div className="flex gap-8">
              <span>{t("Operatività 24/7", "24/7 Operations")}</span>
              <span>{t("Supporto SLA", "SLA Support")}</span>
            </div>
            <div className="flex flex-wrap gap-3">
               <span className="px-4 py-1.5 border border-white/10 rounded-full text-white/80">{t("Hardware & Reti", "Hardware & Networks")}</span>
               <span className="px-4 py-1.5 border border-white/10 rounded-full text-white/80">{t("Sviluppo Custom", "Custom Development")}</span>
            </div>
          </div>

        </div>
      </header>

      {/* --- LISTA DETTAGLIATA DEI SERVIZI --- */}
      <main>
        {services.map((service, index) => (
          <section 
            key={service.id} 
            // Alterniamo lo sfondo tra bianco e grigio chiaro per ogni servizio
            className={`py-24 px-6 md:px-10 border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                
                {/* Colonna Sinistra: Numero Gigante e Titolo */}
                <div className="lg:col-span-5 relative">
                  <span className="text-[12rem] leading-none font-bold text-brand-dark/5 absolute -top-16 -left-8 pointer-events-none select-none">
                    {service.id}
                  </span>
                  <div className="relative z-10">
                    <span className="text-brand-blue font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                      {t("Protocollo", "Protocol")} {service.id}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
                      {service.title}
                    </h2>
                    
                    {/* Metriche Rapide */}
                    <div className="flex gap-8 mt-10">
                      {service.metrics?.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <p className="text-2xl font-black text-brand-dark">{metric.value}</p>
                          <p className="text-[9px] uppercase tracking-widest text-brand-gray font-bold mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Colonna Destra: Descrizione Lunga, Stack e Bottone */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full pt-4">
                  <div>
                    <p className="text-xl text-brand-gray font-light leading-relaxed mb-8">
                      {service.longDesc}
                    </p>

                    {/* Stack Tecnologico */}
                    <div className="mb-10">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-4">Stack &amp; Frameworks</p>
                      <div className="flex flex-wrap gap-2">
                        {service.stack?.map((tech, tIdx) => (
                          <span key={tIdx} className="px-4 py-2 bg-white border border-gray-200 text-brand-gray text-[10px] font-bold rounded-full uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottone per la pagina di dettaglio */}
                  <div>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-4 text-brand-blue font-bold uppercase text-xs tracking-[0.2em] hover:text-brand-dark transition-colors group"
                    >
                      <span>{t("Esplora i dettagli tecnici", "Explore technical details")}</span>
                      <span className="w-8 h-8 rounded-full border border-brand-blue/30 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white transition-all">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
        
        {/* La CTA rimane fuori dal loop dei servizi */}
        <Cta />
      </main>

      <ContactFooter />
    </div>
  );
}