'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ABOUT_PAGE_DATA } from '@/constants/chi-siamo/about';

export default function Identity() {
  const { language } = useLanguage();
  
  // Recuperiamo missione e stats direttamente dall'oggetto della pagina
  const { mission, stats } = ABOUT_PAGE_DATA[language];

  return (
    <section id="identity" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Parte Superiore: Mission & DNA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6">
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
              {mission.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-brand-dark">
              {mission.title} <span className="font-semibold text-brand-blue">{mission.bold}</span> {mission.extra}
            </h2>
          </div>

          <div className="space-y-6 lg:pt-20">
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
              {mission.dnaTag}
            </span>
            <p className="text-xl text-brand-gray font-light leading-relaxed">
              {mission.dnaText}
            </p>
          </div>
        </div>

        {/* Parte Inferiore: I Numeri del Team */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left group cursor-default">
              <p className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors duration-500">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-brand-gray font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}