'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_DATA } from '@/constants/contact';
import KiraChatBody from '@/components/layout/KiraChatBody';

export default function ContattiPage() {
  const { language } = useLanguage();
  const content = CONTACT_DATA[language];

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white flex flex-col">
      <main className="grow pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-brand-gray/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gray/20">/</span>
            <span className="text-brand-blue">{content.tag}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Recapiti */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] mb-6">
                  {content.title.light} <br/>
                  <span className="font-bold text-brand-blue">{content.title.bold}</span>.
                </h1>
                <p className="text-xl text-brand-gray font-light leading-relaxed">
                  {content.description}
                </p>
              </div>

              <div className="space-y-8">
                {/* Telefono */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.phone.label}</p>
                    <a href={`tel:${content.info.phone.value.replace(/\s+/g, '')}`} className="text-2xl font-light hover:text-brand-blue transition-colors">{content.info.phone.value}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.email.label}</p>
                    <a href={`mailto:${content.info.email.value}`} className="text-2xl font-light hover:text-brand-blue transition-colors">
                      {content.info.email.value}
                    </a>
                    <a href={`mailto:${content.info.email.value2}`} className="text-2xl font-light hover:text-brand-blue transition-colors">
                      {content.info.email.value2}
                    </a>
                  </div>
                </div>

                {/* Sede */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.address.label}</p>
                    <p className="text-xl font-light">{content.info.address.value}<br/>{content.info.address.city}</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/390818681442" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-dark transition-all shadow-xl shadow-brand-blue/20"
              >
                {content.cta.button}
              </a>
            </motion.div>

            {/* Colonna Chat */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-brand-dark rounded-[2rem] h-[650px] text-white overflow-hidden border border-white/5 shadow-2xl"
            >
              <KiraChatBody />
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}