'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SECTORS_CONTENT } from '@/constants/home/sector-teaser';

export default function Sectors() {
  const { language } = useLanguage();
  const content = SECTORS_CONTENT[language];

  // Mapping degli URL in base all'ordine dei settori
  const sectorLinks = ["/settori/navale", "/settori/pa", "/settori/pmi"];

  return (
    <section id="sectors" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em] block mb-4">
            {content.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-brand-dark">
            {content.title.light} <span className="font-semibold text-brand-blue">{content.title.bold}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((sector, index) => (
            <Link
              key={index}
              href={sectorLinks[index] || "/contatti"}
              className="bg-white p-10 rounded-3xl shadow-lg shadow-brand-dark/5 border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-2 group cursor-pointer block active:scale-[0.98] active:bg-gray-50/50"
            >
            
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100 group-hover:border-brand-blue/20 transition-colors">
                <h3 className="text-2xl font-bold text-brand-dark">
                  {sector.title}
                </h3>
                <span className="text-brand-blue transition-transform duration-300 text-xl group-hover:translate-x-2">
                  &rarr;
                </span>
              </div>

              <ul className="space-y-4">
                {sector.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-brand-gray">
                    <span className="text-brand-blue mr-3 mt-1">&#10003;</span>
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4 border-t border-gray-100 group-hover:border-brand-blue/10 text-center hidden md:block">
                <span className="text-sm font-medium text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {language === 'it' ? 'Scopri di più' : 'Learn more'}
                </span>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}