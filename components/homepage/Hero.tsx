'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      // Sfondo settato su brand-light (#F9F9F9)
      className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 pt-5 pb-20 border-b border-gray-100 bg-brand-light overflow-hidden"
    >
      {/* --- COLONNA TESTO --- */}
      <div className="flex-1 z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Titolo in brand-dark (#0C283B), Punti in brand-blue (#3884C5)
          className="text-6xl sm:text-8xl lg:text-[10rem] font-semibold tracking-tighter leading-[0.9] text-brand-dark"
        >
          High<span className="text-brand-blue">.</span><br/>
          Tech<span className="text-brand-blue">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          // Descrizione in brand-gray (#6B7280), Accento in brand-blue
          className="mt-6 md:mt-8 text-xl md:text-2xl text-brand-gray max-w-xl font-medium leading-relaxed"
        >
          La complessità tecnologica,<br/>
          <span className="text-brand-blue">finalmente risolta.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12"
        >
        </motion.div>
      </div>

      {/* --- COLONNA IMMAGINE --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 relative w-full mb-8 md:mb-0 flex justify-center items-center"
      >
        <div className="relative w-full aspect-square max-w-[180px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[700px]">
          <Image
            src="/face.png"
            alt="High Tech Face"
            fill
            priority
            className="object-contain"
            sizes="(max-w: 768px) 180px, 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
}