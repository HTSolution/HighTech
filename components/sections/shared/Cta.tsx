'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CTA_DATA } from '@/constants/shared/cta';

export default function Cta() {
  const { language } = useLanguage();

  const content = CTA_DATA[language];

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-brand-light relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gray-200" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center bg-white p-10 md:p-20 rounded-[3rem] shadow-2xl shadow-brand-dark/5 border border-gray-100">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em] block mb-4">
          {content.tag}
        </span>
        
        <h2 className="text-4xl md:text-6xl font-light text-brand-dark mb-6 tracking-tight">
          {content.title.light} <br/>
          <span className="font-bold text-brand-blue">{content.title.bold}</span>?
        </h2>
        
        <p className="text-lg text-brand-gray font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
        
        <Link
          href={content.href}
          className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-brand-blue/20 hover:shadow-brand-dark/20"
        >
          {content.buttonText} &rarr;
        </Link>
      </div>
    </section>
  );
}