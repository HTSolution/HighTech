'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants'; // Importazione del config

export default function ContactFooter() {
  return (
    <>
      <section className="bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.5]"
          style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

        <div className="relative z-10 py-40 md:py-56 flex flex-col justify-center items-center text-brand-dark">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="text-center"
           >
             <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.6em] mb-8 block">
               Il prossimo passo
             </span>
             <h2 className="text-[12vw] md:text-[10vw] font-light leading-[0.8] tracking-tighter uppercase">
               Pronti a <br/>
               <span className="font-bold text-brand-dark">Scalare</span>
               <span className="text-brand-blue">?</span>
             </h2>
           </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 flex items-center justify-center bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

         <div className="relative z-10 text-center p-6 md:p-10 max-w-5xl w-full">
           <motion.span
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 0.5 }}
             className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block"
           >
             Contact Center
           </motion.span>

           <motion.a
             href={`mailto:${SITE_CONFIG.email}`} // Email dinamica
             whileHover={{ scale: 1.02 }}
             className="text-4xl sm:text-5xl md:text-8xl font-light mb-16 block tracking-tighter hover:text-brand-blue transition-all duration-500 ease-out"
           >
             {SITE_CONFIG.email.split('@')[0]}<span className="font-semibold">@{SITE_CONFIG.email.split('@')[1]}</span>
           </motion.a>

           <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center text-gray-400">
             <div className="flex flex-col gap-1">
               <span className="text-[9px] uppercase tracking-widest opacity-40">Location</span>
               <p className="text-sm md:text-lg font-light tracking-wide text-white/80">
                 {SITE_CONFIG.address} {/* Indirizzo dinamico */}
               </p>
             </div>
             <div className="hidden md:block w-[1px] h-10 bg-white/10" />
             <div className="flex flex-col gap-1">
               <span className="text-[9px] uppercase tracking-widest opacity-40">Direct Line</span>
               <p className="text-sm md:text-lg font-light tracking-wide text-white/80">
                 {SITE_CONFIG.phone} {/* Telefono dinamico */}
               </p>
             </div>
           </div>


           <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
             <div className="text-[9px] text-gray-500 uppercase tracking-[0.3em]">
               © {new Date().getFullYear()} {SITE_CONFIG.name} {/* Nome azienda dinamico */}
               <span className="mx-2 text-white/10">|</span>
               P.IVA {SITE_CONFIG.piva} {/* P.IVA dinamica */}
             </div>
             <div className="flex gap-8">
                <Link href="/privacy" className="text-[9px] text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors">Privacy</Link>
                <Link href="/cookies" className="text-[9px] text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors">Cookies</Link>
             </div>
           </div>
         </div>
      </section>
    </>
  );
}