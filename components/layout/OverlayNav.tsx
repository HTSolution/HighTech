'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function OverlayNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSettoriOpen, setIsSettoriOpen] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();

  const settoriItems = [
    { name: t("Settore Navale", "Naval Sector"), href: "/settori/navale" },
    { name: t("Pubblica Amministrazione", "Public Administration"), href: "/settori/pa" },
    { name: t("PMI Multi-Sede", "Multi-site SME"), href: "/settori/pmi" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* --- MENU DESKTOP & BARRA PRINCIPALE --- */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit max-w-[95vw]">
        <div className="bg-brand-dark/95 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-full px-3 py-1.5 flex items-center gap-1">
          
          <Link href="/" className="pl-3 pr-4 py-1.5 border-r border-white/10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-brand-light uppercase">
              HT<span className="text-brand-blue">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                isActive('/') ? "bg-white/10 text-brand-light" : "text-brand-light/40 hover:text-brand-light hover:bg-white/5"
              }`}
            >
              {t("Home", "Home")}
            </Link>

            <Link
              href="/chi-siamo"
              className={`px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                isActive('/chi-siamo') ? "bg-white/10 text-brand-light" : "text-brand-light/40 hover:text-brand-light hover:bg-white/5"
              }`}
            >
              {t("Chi Siamo", "About Us")}
            </Link>

            <div 
              className="relative"
              onMouseEnter={() => setIsSettoriOpen(true)}
              onMouseLeave={() => setIsSettoriOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-1 ${
                  pathname.includes('/settori') 
                    ? "bg-white/10 text-brand-light" 
                    : "text-brand-light/40 hover:text-brand-light hover:bg-white/5" 
                }`}
              >
                {t("Settori", "Sectors")}
                <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${isSettoriOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isSettoriOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="bg-brand-dark/95 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-2xl py-2 min-w-[220px]">
                  {settoriItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-6 py-3 text-[9px] font-medium uppercase tracking-[0.15em] text-brand-light/40 hover:text-brand-light hover:bg-white/5 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/servizi"
              className={`px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                isActive('/servizi') ? "bg-white/10 text-brand-light" : "text-brand-light/40 hover:text-brand-light hover:bg-white/5"
              }`}
            >
              {t("Servizi", "Services")}
            </Link>

            <Link
              href="/contatti"
              className={`px-4 py-2 rounded-full text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                isActive('/contatti') ? "bg-white/10 text-brand-light" : "text-brand-light/40 hover:text-brand-light hover:bg-white/5"
              }`}
            >
              {t("Contatti", "Contact")}
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-light/60 hover:text-brand-light transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>

          <div className="flex items-center gap-1 pl-2 border-l border-white/10">
             <button
              onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
              className="w-8 h-8 flex items-center justify-center text-[9px] font-bold text-brand-light/30 hover:text-brand-light transition-colors tracking-tighter"
            >
              {language.toUpperCase()}
            </button>
            <a href="https://wa.me/390818681442" target="_blank" rel="noreferrer" className="w-7 h-7 flex items-center justify-center bg-brand-blue/90 text-brand-light rounded-full hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-brand-dark/98 z-[110] flex flex-col justify-center items-center lg:hidden backdrop-blur-3xl transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-brand-light/40 hover:text-brand-light p-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <nav className="flex flex-col items-center gap-4 w-full max-h-[85vh] overflow-y-auto px-10">
          <Link href="/" onClick={() => setIsOpen(false)} className={`text-xl font-light uppercase tracking-[0.3em] py-2 ${isActive('/') ? "text-brand-light" : "text-brand-light/30"}`}>
            {t("Home", "Home")}
          </Link>
          <Link href="/chi-siamo" onClick={() => setIsOpen(false)} className={`text-xl font-light uppercase tracking-[0.3em] py-2 ${isActive('/chi-siamo') ? "text-brand-light" : "text-brand-light/30"}`}>
            {t("Chi Siamo", "About Us")}
          </Link>
          
          {/* Mobile Settori Section */}
          <div className="flex flex-col items-center w-full py-4 space-y-4 border-y border-white/5">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-blue uppercase opacity-50 mb-2">
              {t("Settori", "Sectors")}
            </span>
            {settoriItems.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-light uppercase tracking-[0.2em] transition-colors ${
                  isActive(subItem.href) ? "text-brand-light" : "text-brand-light/40"
                }`}
              >
                {subItem.name}
              </Link>
            ))}
          </div>

          <Link href="/servizi" onClick={() => setIsOpen(false)} className={`text-xl font-light uppercase tracking-[0.3em] py-2 ${isActive('/servizi') ? "text-brand-light" : "text-brand-light/30"}`}>
            {t("Servizi", "Services")}
          </Link>
          <Link href="/contatti" onClick={() => setIsOpen(false)} className={`text-xl font-light uppercase tracking-[0.3em] py-2 ${isActive('/contatti') ? "text-brand-light" : "text-brand-light/30"}`}>
            {t("Contatti", "Contact")}
          </Link>
        </nav>
      </div>
    </>
  );
}