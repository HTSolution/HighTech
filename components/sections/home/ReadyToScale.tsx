'use client';

import { useLanguage } from '@/context/LanguageContext';
import { READY_TO_SCALE_DATA } from '@/constants/home/ready-to-scale';

export default function ReadyToScale() {
  const { language } = useLanguage();
  const content = READY_TO_SCALE_DATA[language];

  return (
    <section className="bg-brand-light relative overflow-hidden">
      {/* Sfondo a griglia */}
      <div className="absolute inset-0 z-0 opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      <div className="relative z-10 py-40 md:py-56 flex flex-col justify-center items-center text-brand-dark text-center px-6">
         <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.6em] mb-8 block">
           {content.tag}
         </span>
         <h2 className="text-[12vw] md:text-[10vw] font-light leading-[0.8] tracking-tighter uppercase hover:scale-105 transition-transform duration-700 cursor-default">
           {content.titleLine1} <br/>
           <span className="font-bold text-brand-dark">{content.titleLine2}</span>
           <span className="text-brand-blue">?</span>
         </h2>
      </div>
    </section>
  );
}