'use client';

import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <>
      {/* 1. Sezione Call to Action - Sfondo Chiaro */}
      <section className="bg-brand-light">
        <div className="py-40 md:py-48 flex flex-col justify-center items-center text-brand-dark overflow-hidden border-b border-brand-dark/5">
           <motion.h2
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-[14vw] md:text-[12vw] font-bold leading-none tracking-tighter text-center uppercase"
           >
             PRONTO A<br/>
             <span className="text-brand-blue">SCALARE?</span>
           </motion.h2>
        </div>
      </section>

      {/* 2. Sezione Contatti Reale - Sfondo Blu Scuro Profondo */}
      <section id="contact" className="py-24 md:py-32 flex items-center justify-center bg-brand-dark text-brand-light">
         <div className="text-center p-6 md:p-10 max-w-4xl w-full">
           <span className="text-brand-blue font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block">
             Get in Touch
           </span>

           {/* Email con effetto hover in azzurro */}
           <a
             href="mailto:hello@hightech.it"
             className="text-3xl sm:text-4xl md:text-7xl font-bold mb-10 hover:text-brand-blue transition-colors duration-500 block tracking-tighter"
           >
             hello@hightech.it
           </a>

           {/* Info Aziendali in grigio brand */}
           <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center text-brand-gray text-base md:text-xl font-medium">
             <p className="hover:text-brand-light transition-colors cursor-default">Milano, Via Innovation 42</p>
             <p className="hover:text-brand-light transition-colors cursor-default">+39 02 555 1234</p>
           </div>

           {/* Social Links con bordi azzurri */}
           <div className="mt-20 flex flex-wrap gap-8 justify-center">
              {['Linkedin', 'Twitter', 'Instagram'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-brand-blue hover:text-brand-blue transition-all duration-300 pb-1"
                >
                  {social}
                </a>
              ))}
           </div>

           {/* Copyright finale */}
           <div className="mt-24 pt-8 border-t border-white/5 text-[10px] text-brand-gray/50 uppercase tracking-[0.2em]">
             © {new Date().getFullYear()} HT Solution. All Rights Reserved.
           </div>
         </div>
      </section>
    </>
  );
}