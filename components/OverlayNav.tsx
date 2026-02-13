'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Servizi", href: "/#services", id: "services" },
  { name: "Progetti", href: "/#work", id: "work" },
  { name: "Storia", href: "/#about", id: "about" },
  { name: "Contatti", href: "/#contact", id: "contact" },
];

export default function OverlayNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lang, setLang] = useState<'IT' | 'EN'>('IT');

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      {/* 1. OVERLAY FULL SCREEN (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            // Sfondo brand-dark invece di black
            className="fixed inset-0 bg-brand-dark z-[100] flex flex-col justify-center items-center md:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-brand-light p-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    // Testo brand-light o brand-gray/40 per i link non attivi
                    className={`text-4xl font-bold tracking-tighter transition-colors ${activeSection === item.id ? "text-brand-light" : "text-brand-light/40 hover:text-brand-light"}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="absolute bottom-20 flex gap-10 items-center"
            >
              <button
                onClick={() => setLang(lang === 'IT' ? 'EN' : 'IT')}
                className="text-brand-light text-xl font-mono border-b border-brand-light"
              >
                {lang}
              </button>
              <a href="https://wa.me/tuonumero" target="_blank" className="text-brand-light text-xl font-mono">
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING BAR (Desktop & Mobile FAB) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[90]">
        <motion.div
          layout
          style={{ borderRadius: 32 }}
          // Sfondo brand-dark/90 con blur
          className="bg-brand-dark/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex items-center"
        >

          {/* MOBILE FAB CON WHATSAPP */}
          <div className="md:hidden flex items-center p-1">
            {!isOpen && (
              <>
                <button onClick={() => setIsOpen(true)} className="w-14 h-14 flex items-center justify-center text-brand-light">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                </button>
                <div className="w-[1px] h-6 bg-brand-light/20 mx-1" />
                <a href="https://wa.me/tuonumero" target="_blank" className="w-12 h-12 flex items-center justify-center bg-brand-blue text-brand-light rounded-full mx-1 shadow-lg shadow-brand-blue/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </>
            )}
          </div>

          {/* DESKTOP NAVBAR */}
          <div className="hidden md:flex items-center gap-1 p-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSection === item.id ? "text-brand-light" : "text-brand-light/40 hover:text-brand-light"}`}>
                {activeSection === item.id && (
                  // Pillola attiva in brand-blue con opacità bassa
                  <motion.div layoutId="nav-pill" className="absolute inset-0 bg-brand-blue/20 rounded-full -z-10 border border-brand-blue/30" />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-brand-light/20 mx-2" />
            <div className="flex items-center gap-2 pr-1">
              <button onClick={() => setLang(lang === 'IT' ? 'EN' : 'IT')} className="text-xs font-bold w-8 h-8 flex items-center justify-center text-brand-light/40 hover:text-brand-light transition-colors">
                {lang}
              </button>
              {/* WhatsApp desktop: Bolla brand-blue */}
              <a href="https://wa.me/tuonumero" target="_blank" className="w-8 h-8 flex items-center justify-center bg-brand-blue text-brand-light rounded-full hover:scale-110 transition-transform shadow-lg shadow-brand-blue/30">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}