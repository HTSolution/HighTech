"use client";

import React, { useState, useEffect } from 'react';
import ChatBot from './ChatBot';

export default function SmartFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showCallAlert, setShowCallAlert] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); 
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setShowCallAlert(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const confirmCall = () => {
    setShowCallAlert(false);
    window.location.href = "tel:+390818681442,19";
  };

  return (
    <>
      {/* Popup di conferma chiamata (Mobile/Tablet) */}
      {showCallAlert && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-6 bg-brand-dark/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Avviso Chiamata</h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-8">
              Stai per contattare il nostro centralino. Ricorda che potrebbero essere applicati costi in base alla tua tariffa telefonica.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={confirmCall}
                className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-brand-dark transition-colors"
              >
                Procedi con la chiamata
              </button>
              <button 
                onClick={() => setShowCallAlert(false)}
                className="w-full py-4 text-brand-gray/60 font-bold uppercase text-[10px] tracking-widest hover:text-brand-dark transition-colors"
              >
                Annulla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Struttura FAB principale */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-5">
        
        {/* Finestra Chat (Solo Desktop) */}
        {!isMobile && isOpen && (
          <div className="w-[420px] h-[650px] bg-brand-dark rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-in slide-in-from-bottom-10 duration-300 ease-out">
            <ChatBot />
          </div>
        )}

        {/* Contenitore Pulsante */}
        <div className="relative group">
          {!(isOpen && !isMobile) && (
            <div className="absolute inset-0 rounded-full bg-brand-blue/60 animate-ping group-hover:animate-none opacity-75"></div>
          )}
          <button
            id="smart-fab-button"
            onClick={handleClick}
            className="relative w-20 h-20 bg-brand-dark border-4 border-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <img 
              src="/face.png" 
              alt="Kira Assistant" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors"></div>
            <div className="relative z-10 text-white p-2 bg-brand-blue rounded-full shadow-md">
              {isMobile ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ) : (
                isOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                )
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}