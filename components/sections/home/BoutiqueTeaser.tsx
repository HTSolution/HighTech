'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { BOUTIQUE_CONTENT } from '@/constants/home/boutique-teaser';

export default function BoutiqueTeaser() {
  const { language } = useLanguage();
  const content = BOUTIQUE_CONTENT[language];

  return (
    <section className="py-20 bg-brand-light text-center px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em] block mb-4">
          {content.tag}
        </span>
        
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-brand-dark">
          {content.title.light}{' '}
          <span className="font-bold text-brand-blue">
            {content.title.bold}
          </span>.
        </h2>
        
        <p className="text-brand-gray font-light mb-8 text-lg leading-relaxed">
          {content.description}
        </p>
        
        <Link 
          href="/chi-siamo" 
          className="inline-block px-8 py-4 bg-white border border-gray-200 text-brand-dark rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:border-brand-blue hover:text-brand-blue transition-all duration-300 shadow-sm hover:shadow-md"
        >
          {content.linkText}
        </Link>
      </div>
    </section>
  );
}