'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_DATA } from '@/constants/contact';

export default function ContattiPage() {
  const { language } = useLanguage();
  const content = CONTACT_DATA[language];

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white flex flex-col">
      
      <main className="flex-grow pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-brand-gray/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gray/20">/</span>
            <span className="text-brand-blue">{content.tag}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Colonna di Sinistra: Testi e Recapiti */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
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
                {/* Recapito Telefono */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.phone.label}</p>
                    <a href={`tel:${content.info.phone.value.replace(/\s+/g, '')}`} className="text-2xl font-light hover:text-brand-blue transition-colors">
                      {content.info.phone.value}
                    </a>
                  </div>
                </div>

                {/* Recapito Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.email.label}</p>
                    <a href={`mailto:${content.info.email.value}`} className="text-2xl font-light hover:text-brand-blue transition-colors">
                      {content.info.email.value}
                    </a>
                  </div>
                </div>

                {/* Recapito Sede */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.address.label}</p>
                    <p className="text-xl font-light">
                      {content.info.address.value}<br/>
                      {content.info.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colonna di Destra: Call to Action Diretta */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-brand-dark rounded-[3rem] p-10 md:p-14 text-white flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-brand-blue/30 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-light mb-4">{content.cta.title}</h3>
                <p className="text-gray-400 font-light mb-10 leading-relaxed">
                  {content.cta.description}
                </p>
                <a 
                  href="https://wa.me/390818681442" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full px-8 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all shadow-lg shadow-brand-blue/20"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-3 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {content.cta.button}
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}