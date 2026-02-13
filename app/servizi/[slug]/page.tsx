'use client';

import { useParams, useRouter } from 'next/navigation';
import { SERVICES } from '@/constants';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function ServicePage() {
  const { slug } = useParams();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light text-brand-dark">
        <div className="text-center px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">Servizio non trovato</h1>
          <Link href="/" className="px-8 py-3 bg-brand-blue text-brand-light rounded-full font-bold hover:bg-brand-dark transition-colors">
            Torna alla Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Barra di progresso in brand-blue */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[120] origin-left"
        style={{ scaleX }}
      />

      {/* Pulsante "Chiudi" ottimizzato per il brand */}
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => {
            window.scrollTo(0, 0);
            router.push('/#services');
          }}
        className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-2 group"
      >
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gray group-hover:text-brand-blue transition-colors">
          Chiudi
        </span>
        <div className="p-3 bg-brand-light border border-brand-dark/5 text-brand-dark rounded-full shadow-2xl group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-brand-light transition-all duration-300">
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </motion.button>

      <main className="min-h-screen bg-brand-light text-brand-dark pt-32 md:pt-48 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto">

          {/* Header Servizio Resizable */}
          <header className="mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                 <span className="w-8 md:w-12 h-[1px] bg-brand-blue/30"></span>
                 <span className="text-xs md:text-sm font-mono text-brand-blue uppercase tracking-widest font-bold">{service.id}</span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-10 md:mb-16">
                {service.title}<span className="text-brand-blue">.</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-brand-gray max-w-3xl leading-snug font-medium">
                {service.longDesc}
              </p>
            </motion.div>
          </header>

          {/* Dettagli e Approccio */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 border-t border-brand-dark/10 pt-12 md:pt-16">
            <div className="lg:col-span-5">
              <h3 className="font-bold mb-6 md:mb-8 uppercase text-[10px] tracking-[0.3em] text-brand-blue">Specifiche</h3>
              <div className="space-y-1">
                {service.details?.map((d, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-brand-dark/5 group hover:bg-brand-blue/5 px-2 transition-colors rounded-lg">
                    <span className="text-brand-gray font-medium">{d.label}</span>
                    <span className="font-bold text-brand-dark">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-bold mb-6 md:mb-8 uppercase text-[10px] tracking-[0.3em] text-brand-blue">L'Approccio</h3>
              <div className="text-lg md:text-2xl text-brand-dark/80 leading-relaxed font-normal">
                {service.fullContent}
              </div>
            </div>
          </section>

          {/* Sezione Metodo - Cards Brandizzate */}
          <section className="py-24 md:py-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 tracking-tighter uppercase text-brand-dark">Il Metodo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.process?.map((item, idx) => (
                <div key={idx} className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-brand-dark/5 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-500 group">
                  <span className="text-4xl font-bold text-brand-blue/10 group-hover:text-brand-blue transition-colors duration-500 block mb-6">0{idx + 1}</span>
                  <h3 className="text-xl font-bold mb-4 text-brand-dark">{item.name}</h3>
                  <p className="text-brand-gray text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stack Tecnologico */}
          <section className="py-20 border-t border-brand-dark/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
               <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-brand-dark">Stack & Tool</h2>
               <div className="flex flex-wrap gap-2 md:gap-3">
                {service.stack?.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 md:px-5 md:py-2 border border-brand-blue/20 text-brand-blue rounded-full text-xs md:text-sm font-bold bg-brand-blue/5 hover:bg-brand-blue hover:text-brand-light transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Finale - Usando brand-dark invece di black */}
          <section className="mt-20 md:mt-24 p-10 md:p-24 bg-brand-dark rounded-[3rem] md:rounded-[4rem] text-center text-brand-light overflow-hidden relative shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-none uppercase">
                FACCIAMO <br/> QUALCOSA DI <span className="text-brand-blue italic font-light">GRANDE.</span>
              </h2>
              <button
                className="px-8 py-4 md:px-12 md:py-6 bg-brand-blue text-brand-light rounded-full font-bold text-base md:text-lg hover:bg-brand-light hover:text-brand-blue hover:scale-105 active:scale-95 transition-all shadow-brand-blue/30 shadow-2xl"
              >
                Inizia il progetto
              </button>
            </motion.div>
          </section>

        </div>
      </main>
    </>
  );
}