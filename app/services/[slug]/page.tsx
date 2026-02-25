'use client';

import { useParams, useRouter } from 'next/navigation';
import { SERVICES } from '@/constants';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ServicePage() {
  const { slug } = useParams();
  const router = useRouter();

  const currentIndex = SERVICES.findIndex(s => s.slug === slug);
  const service = SERVICES[currentIndex];

  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];

  useEffect(() => {
    if (slug) window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Link href="/" className="text-brand-blue font-bold uppercase tracking-widest">Torna alla Home</Link>
    </div>
  );

  return (
    <div className="bg-white min-h-screen text-brand-dark">
      <header className="pt-40 pb-16 px-6 md:px-10 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-brand-gray/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gray/20">/</span>
            <button onClick={() => router.push('/#services')} className="text-brand-gray/40 hover:text-brand-blue transition-colors cursor-pointer">
              Servizi
            </button>
            <span className="text-brand-gray/20">/</span>
            <span className="text-brand-blue">{service.title}</span>
          </nav>

          <div className="max-w-5xl">
            <span className="text-brand-blue font-mono text-xs mb-6 block tracking-[0.3em] uppercase opacity-60">
              Protocollo {service.id}
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-light tracking-tighter leading-[0.9] mb-12">
              {service.title}<span className="text-brand-blue">.</span>
            </h1>
            <p className="text-xl md:text-3xl text-brand-gray font-light leading-relaxed max-w-4xl">
              {service.longDesc}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

          {/* Sidebar Tecnica */}
          <aside className="lg:col-span-4 space-y-16">
           <div className="p-8 bg-brand-light rounded-[2.5rem] border border-gray-100">
               <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8 text-center">
                 Key Metrics
               </h3>
               <div className="space-y-8">
                 {service.metrics?.map((m, i) => (
                   <div key={i} className="text-center">
                     <p className="text-3xl font-bold text-brand-dark">{m.value}</p>
                     <p className="text-[10px] uppercase tracking-widest text-brand-gray">{m.label}</p>
                   </div>
                 ))}
               </div>
             </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8 text-center lg:text-left">Specifiche</h3>
                <div className="space-y-4">
                  {service.details?.map((d, i) => (
                    <div key={i} className="flex flex-col py-4 border-b border-gray-50">
                      <span className="text-[9px] uppercase tracking-widest text-brand-gray opacity-50 mb-1">{d.label}</span>
                      <span className="text-base font-semibold text-brand-dark">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8 text-center lg:text-left">Tecnologie</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {service.stack?.map((s, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-50 text-brand-dark text-[10px] font-bold rounded-full border border-gray-100 uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Contenuto Dinamico */}
          <div className="lg:col-span-8">
            <section className="mb-24">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-10">Visione Strategica</h3>
              <div className="text-lg md:text-2xl text-brand-dark font-light leading-relaxed">
                {service.fullContent}
              </div>
            </section>

            <section className="mb-24">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-12">Il Nostro Metodo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.process?.map((p, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 group hover:border-brand-blue/30 transition-all duration-500">
                    <span className="text-brand-blue font-mono text-[10px] font-bold mb-4 block opacity-40 group-hover:opacity-100 transition-opacity">STEP_{p.step}</span>
                    <h4 className="text-xl font-bold mb-3">{p.name}</h4>
                    <p className="text-brand-gray text-sm leading-relaxed font-light">{p.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- NUOVA SEZIONE CTA HIGH-CONVERSION --- */}
            <section className="p-12 md:p-16 bg-brand-dark rounded-[3.5rem] text-brand-light relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl md:text-5xl font-light tracking-tighter mb-6 leading-tight">
                    Pronto a scalare la tua <br/>
                    <span className="font-bold italic italic">Infrastruttura Digitale?</span>
                  </h3>
                  <p className="text-brand-gray text-lg mb-10 max-w-xl font-light">
                    Prenota un audit tecnico preliminare di 30 minuti con i nostri esperti. Analizzeremo i tuoi colli di bottiglia senza impegno.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-brand-light hover:text-brand-blue transition-all shadow-xl shadow-brand-blue/20"
                  >
                    Richiedi Audit Gratuito
                  </Link>
               </div>
               {/* Elemento decorativo */}
               <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full" />
            </section>
          </div>
        </div>

        {/* Navigazione Circolare */}
        <section className="mt-24 py-20 border-t border-gray-100 flex justify-between items-center">
            <Link href={`/services/${prevService.slug}`} className="group flex flex-col items-start gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gray/40 group-hover:text-brand-blue transition-colors">← Precedente</span>
              <span className="text-xl font-light text-brand-dark group-hover:font-medium transition-all">{prevService.title}</span>
            </Link>

            <Link href={`/services/${nextService.slug}`} className="group flex flex-col items-end gap-2 text-right">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gray/40 group-hover:text-brand-blue transition-colors">Successivo →</span>
              <span className="text-xl font-light text-brand-dark group-hover:font-medium transition-all">{nextService.title}</span>
            </Link>
        </section>
      </main>
    </div>
  );
}