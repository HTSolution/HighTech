'use client';

import { useParams, useRouter } from 'next/navigation';
import { SERVICES } from '@/constants';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function ServicePage() {
  const { slug } = useParams();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  // Rendiamo il progresso dello scroll più fluido
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Servizio non trovato</h1>
          <Link href="/" className="px-6 py-2 bg-black text-white rounded-full">Torna alla Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Barra di progresso dello scroll sottile e minimale */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Pulsante "Chiudi" Flottante (Freccia in giù) */}
      <motion.button
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => {
            // 1. Reset immediato dello scroll della finestra
            window.scrollTo(0, 0);
            // 2. Torna alla home puntando esattamente alla sezione servizi
            router.push('/#services');
          }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-2 group"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">
          Chiudi
        </span>
        <div className="p-3 bg-white border border-gray-100 text-black rounded-full shadow-xl group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300">
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </motion.button>

      <main className="min-h-screen bg-white text-black pt-48 pb-24 px-6 relative">
        <div className="max-w-5xl mx-auto">

          {/* Header Servizio con animazione */}
          <header className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                 <span className="w-12 h-[1px] bg-gray-300"></span>
                 <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">{service.id}</span>
              </div>

              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
                {service.title}
              </h1>

              <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl leading-snug">
                {service.longDesc}
              </p>
            </motion.div>
          </header>

          {/* Dettagli e Approccio */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-gray-100 pt-16">
            <div className="lg:col-span-5">
              <h3 className="font-bold mb-8 uppercase text-[10px] tracking-[0.3em] text-gray-400">Specifiche</h3>
              <div className="space-y-2">
                {service.details?.map((d, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-50 group hover:bg-gray-50 px-2 transition-colors">
                    <span className="text-gray-400 font-medium">{d.label}</span>
                    <span className="font-bold text-black">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-bold mb-8 uppercase text-[10px] tracking-[0.3em] text-gray-400">L'Approccio</h3>
              <div className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                {service.fullContent}
              </div>
            </div>
          </section>

          {/* Sezione Processo - Cards Modernizzate */}
          <section className="py-32">
            <h2 className="text-4xl font-bold mb-16 tracking-tighter uppercase">Il Metodo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.process?.map((item, idx) => (
                <div key={idx} className="p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-500 group">
                  <span className="text-4xl font-bold text-gray-200 group-hover:text-black transition-colors duration-500 block mb-6">0{idx + 1}</span>
                  <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stack Tecnologico */}
          <section className="py-24 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
               <h2 className="text-2xl font-bold uppercase tracking-tighter">Stack & Tool</h2>
               <div className="flex flex-wrap gap-3">
                {service.stack?.map((tech, idx) => (
                  <span key={idx} className="px-5 py-2 border border-gray-200 text-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Finale Gigante */}
          <section className="mt-24 p-12 md:p-24 bg-black rounded-[4rem] text-center text-white overflow-hidden relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 leading-none">
                FACCIAMO <br/> QUALCOSA DI <span className="text-gray-500 italic font-light">GRANDE.</span>
              </h2>
              <button
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-white/10 shadow-2xl"
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