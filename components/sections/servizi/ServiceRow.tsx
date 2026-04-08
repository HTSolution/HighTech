'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Service } from '@/types/services'; // Importa il tipo

interface ServiceRowProps {
  service: Service; // Niente più any!
  index: number;
}

export default function ServiceRow({ service, index }: ServiceRowProps) {
  const { t } = useLanguage();

  return (
    <section className={`py-24 px-6 md:px-10 border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-light'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
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
              
              <div className="flex gap-8 mt-10">
                {service.metrics?.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <p className="text-2xl font-black text-brand-dark">{metric.value}</p>
                    <p className="text-[9px] uppercase tracking-widest text-brand-gray font-bold mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-4">
            <div>
              <p className="text-xl text-brand-gray font-light leading-relaxed mb-8">
                {service.longDesc}
              </p>

              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark mb-4">
                  Stack &amp; Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.stack?.map((tech, tIdx) => (
                    <span key={tIdx} className="px-4 py-2 bg-white border border-gray-200 text-brand-gray text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-4 text-brand-blue font-bold uppercase text-xs tracking-[0.2em] hover:text-brand-dark transition-colors group">
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
  );
}