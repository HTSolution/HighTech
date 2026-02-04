'use client';

import { motion } from 'framer-motion';
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

export default function OverlayNavFloatingNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [lang, setLang] = useState<'IT' | 'EN'>('IT');

  useEffect(() => {
    if (pathname !== '/') return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-max">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 px-3 py-2 bg-black/80 backdrop-blur-md rounded-full shadow-2xl border border-white/10"
      >
        {navItems.map((item, index) => {
          const isActive = pathname === "/" && activeSection === item.id;
          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {(hovered === index || isActive) && (
                <motion.div
                  layoutId="nav-pill"
                  className={`absolute inset-0 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/10'}`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}

        <div className="w-[1px] h-6 bg-white/20 mx-2" />

        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={() => setLang(lang === 'IT' ? 'EN' : 'IT')}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[10px] font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {lang}
          </button>

          <a
            href="https://wa.me/tuonumero"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full transition-transform hover:scale-110 active:scale-95 shadow-md"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
}