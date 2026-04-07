import Link from 'next/link';
import Identity from '@/components/sections/chi-siamo/Identity';
import History from '@/components/sections/chi-siamo/History';
import Cta from '@/components/sections/shared/Cta';

export default function ChiSiamoPage() {
  return (
    <div className="bg-brand-light min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      {/* --- HERO DI PAGINA (Layout Editoriale Avanzato) --- */}
      <header className="relative pt-40 pb-16 md:pb-20 px-6 md:px-10 bg-brand-dark text-white overflow-hidden">
        {/* Sfondo decorativo a griglia */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="mb-16 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-white/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-brand-blue">Chi Siamo</span>
          </nav>

          {/* Griglia Asimmetrica per Titolo e Descrizione */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
            
            {/* Sinistra: Titolo Principale */}
            <div className="lg:col-span-8">
              <span className="text-brand-blue font-mono text-xs mb-6 block tracking-[0.4em] uppercase">
                Il Nostro DNA
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]">
                Non i soliti <br/>
                <span className="font-bold text-white">Sistemisti IT</span>
                <span className="text-brand-blue">.</span>
              </h1>
            </div>

            {/* Destra: Paragrafo di supporto con bordo */}
            <div className="lg:col-span-4 lg:pb-3">
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l border-white/10 pl-6">
                Infrastrutture critiche, sviluppo software, sicurezza e intelligenza artificiale. Tutto gestito da un unico team di specialisti altamente verticali, con l&apos;agilit&agrave; che i grandi player non possono offrirti.
              </p>
            </div>
            
          </div>

          {/* Barra Metadati / Badge */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-between md:items-center text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
            <div className="flex gap-8">
              <span>Est. 2001</span>
              <span>HQ: Napoli, IT</span>
            </div>
            <div className="flex flex-wrap gap-3">
               <span className="px-4 py-1.5 border border-white/10 rounded-full text-white/80">System Integrator</span>
               <span className="px-4 py-1.5 border border-white/10 rounded-full text-white/80">Software House</span>
            </div>
          </div>

        </div>
      </header>

      {/* --- CONTENUTO PRINCIPALE --- */}
      <main className="bg-white">
        
        {/* Componenti esistenti */}
        <Identity />
        <History />
        <Cta />

        

      </main>

    </div>
  );
}