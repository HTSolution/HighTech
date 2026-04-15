"use client";

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlliamo se l'utente ha già dato il consenso
    const consent = Cookies.get('cookie_accepted');
    if (!consent) {
      // Piccolo delay per non spararlo subito in faccia al caricamento
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Salviamo il consenso per 365 giorni
    Cookies.set('cookie_accepted', 'true', { expires: 365 });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-10 md:right-auto md:max-w-sm z-[10001]"
        >
          <div className="bg-brand-dark border border-white/10 p-6 rounded-[2.5rem] shadow-2xl backdrop-blur-xl bg-opacity-90 relative overflow-hidden group">
            
            {/* Decorazione sottile */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl group-hover:bg-brand-blue/20 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue">
                  <Cookie size={20} />
                </div>
                <h4 className="text-white font-bold tracking-tight">Cookie & Privacy</h4>
              </div>

              <p className="text-white/50 text-xs leading-relaxed mb-6">
                Utilizziamo i cookie per migliorare la tua esperienza e per il corretto funzionamento della chat assistente. Continuando a navigare, accetti il loro utilizzo.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={acceptCookies}
                  className="w-full bg-white text-brand-dark py-3.5 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  Ho capito
                </button>
                
                <a 
                  href="/privacy" 
                  className="text-center py-2 text-[9px] uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors"
                >
                  Visualizza Policy
                </a>
              </div>
            </div>

            {/* Pulsante chiusura rapida */}
            <button 
              onClick={acceptCookies}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}