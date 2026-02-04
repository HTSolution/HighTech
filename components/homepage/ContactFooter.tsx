'use client';

import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <>
      {/* Sezione Call to Action (Senza ID per non attivare la nav bar) */}
      <section className="bg-white">
        <div className="py-48 flex flex-col justify-center items-center text-black overflow-hidden border-b border-gray-100">
           <motion.h2
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="text-[12vw] font-bold leading-none tracking-tighter text-center"
           >
             PRONTO A<br/>
             <span className="text-gray-300">SCALARE?</span>
           </motion.h2>
        </div>
      </section>

      {/* Sezione Contatti Reale (Con l'ID osservato dalla Nav Bar) */}
      <section id="contact" className="py-32 flex items-center justify-center bg-black text-white">
         <div className="text-center p-10 max-w-2xl">
           <span className="text-gray-500 font-mono text-sm uppercase tracking-widest mb-4 block">
             Contattaci
           </span>

           <a
             href="mailto:hello@hightech.it"
             className="text-4xl md:text-7xl font-semibold mb-8 hover:text-gray-300 transition-colors block"
           >
             hello@hightech.it
           </a>

           <div className="flex flex-col md:flex-row gap-8 justify-center text-gray-400 text-lg font-light">
             <p>Milano, Via Innovation 42</p>
             <p>+39 02 555 1234</p>
           </div>

           <div className="mt-16 flex gap-6 justify-center">
              {['Linkedin', 'Twitter', 'Instagram'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-sm font-bold uppercase border-b border-transparent hover:border-white transition-all pb-1"
                >
                  {social}
                </a>
              ))}
           </div>
         </div>
      </section>
    </>
  );
}