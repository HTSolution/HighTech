'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function NavalTeaser() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10 text-center flex flex-col items-center">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em] block mb-4">
          {t("Specializzazione Rara", "Rare Specialization")}
        </span>
        <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
          {t("Sicurezza reti in", "Network security in")} <br/>
          <span className="font-bold text-brand-blue">{t("Ambiente Navale", "Marine Environments")}</span>.
        </h2>
        <p className="text-gray-400 text-lg mb-10 font-light max-w-2xl">
          {t(
            "Siamo tra le poche realtà IT in Italia specializzate nella segregazione IT/OT a bordo delle motonavi e nell'analisi dei rischi marittimi.",
            "We are among the few IT companies in Italy specializing in IT/OT segregation aboard motor vessels and maritime risk analysis."
          )}
        </p>
        <Link href="/settori/navale" className="inline-block px-10 py-5 bg-white text-brand-dark rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-blue hover:text-white transition-all shadow-2xl">
          {t("Scopri la Compliance NIS2", "Discover NIS2 Compliance")}
        </Link>
      </div>
    </section>
  );
}