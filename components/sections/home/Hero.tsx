'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { HERO_DATA } from '@/constants';

export default function Hero() {
  const { language } = useLanguage();
  const content = HERO_DATA[language];

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center px-4 md:px-10 bg-white overflow-hidden"
    >
      {/* Bagliore blu FISSO */}
      <div
        className="pointer-events-none absolute z-0 w-[800px] h-[800px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #0055ff 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Griglia di sfondo */}
      <div className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">

        {/* --- COLONNA SINISTRA: Testi --- */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 w-full">
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter leading-none md:leading-[0.82] text-brand-dark">
            {content.title.first}<span className="text-brand-blue">.</span><br/>
            {content.title.second}<span className="text-brand-blue">.</span>
          </h1>

          <p className="mt-6 md:mt-8 text-sm md:text-xl text-brand-blue font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">
            {content.claim}
          </p>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-brand-gray max-w-md font-light leading-relaxed italic px-4 md:px-0">
            {content.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/servizi" 
              className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-blue/20 hover:-translate-y-1"
            >
              {content.buttons.services}
            </Link>
            <Link 
              href="/contatti" 
              className="px-8 py-4 bg-white border border-gray-200 text-brand-dark rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:border-brand-blue hover:text-brand-blue transition-all duration-300 hover:-translate-y-1"
            >
              {content.buttons.audit}
            </Link>
          </div>
        </div>

        {/* --- COLONNA DESTRA: Visuals --- */}
        <div className="flex-1 relative flex justify-center items-center w-full">
          <div className="relative w-full flex justify-center items-center">

            {/* Widget: Uptime */}
            <div className="absolute top-0 right-0 z-20 bg-white/60 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl hidden sm:block hover:-translate-y-2 transition-transform duration-500 cursor-default">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest">System Uptime</span>
              </div>
              <p className="text-2xl font-black text-brand-dark tracking-tighter">{content.widgets.uptime}</p>
            </div>

            {/* Widget: Status */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 bg-brand-dark/95 text-white p-5 rounded-4xl shadow-2xl w-52 hidden md:block border border-white/10 hover:-translate-y-2 transition-transform duration-500 cursor-default">
               <div className="flex justify-between items-end mb-3 h-10">
                  {[0.4, 0.7, 1, 0.6, 0.9, 0.5].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-brand-blue rounded-full"
                      style={{ height: `${h * 100}%` }}
                    />
                  ))}
               </div>
               <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">Data Flow</p>
               <p className="text-xs font-bold text-brand-blue tracking-tight">{content.widgets.status}</p>
            </div>

            <div className="relative w-full aspect-square max-w-[180px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] z-10 hover:scale-105 transition-transform duration-700">
              <Image
                src="/face.png"
                alt="HT Solution Visual"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}