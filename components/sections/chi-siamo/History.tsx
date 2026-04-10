'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ABOUT_PAGE_DATA } from '@/constants/chi-siamo/about';

export default function History() {
  const { language } = useLanguage();
  const { history } = ABOUT_PAGE_DATA[language];

  return (
    <section id="history" className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Intestazione Sezione */}
        <div className="mb-20">
          <p className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
            {history.tag}
          </p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-brand-dark">
            {history.title.light} <span className="font-semibold">{history.title.bold}</span>
            <span className="text-brand-blue">.</span>
          </h2>
          <p className="text-brand-gray mt-4 font-light text-lg md:text-xl tracking-wide max-w-2xl leading-relaxed">
            {history.description}
          </p>
        </div>

        {/* Griglia della Storia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {history.timeline.map((h, i) => (
            <div
              key={i}
              className="relative p-6 rounded-3xl border border-transparent hover:border-gray-100 hover:bg-brand-light/50 transition-all duration-500 hover:-translate-y-1 group"
            >
              <span className="text-xs font-black block mb-4 text-brand-blue tracking-[0.2em] uppercase">
                {h.year}
              </span>

              <h4 className="text-xl font-semibold mb-3 text-brand-dark tracking-tight">
                {h.title}
              </h4>

              <p className="text-sm md:text-base text-brand-gray font-light leading-relaxed opacity-80">
                {h.desc}
              </p>

              {/* Linea blu decorativa superiore */}
              <div className="absolute top-0 left-6 w-8 h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}