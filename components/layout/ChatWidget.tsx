'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function KiraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { t } = useLanguage();
  
  const [chatLog, setChatLog] = useState([
    { role: 'assistant', content: 'Ciao! Sono Kira, l\'assistente AI di HighTech. Come posso aiutarti oggi?' }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatLog, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openKira', handleOpenChat);
    return () => window.removeEventListener('openKira', handleOpenChat);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] font-sans">
      {/* --- FINESTRA CHAT --- */}
      {isOpen && (
        <div 
          className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] h-[75vh] max-h-[650px] bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500"
        >
          
          {/* Header - "Blindato" */}
          <div className="p-5 md:p-6 bg-brand-dark text-white flex justify-between items-center relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/15 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10">
                <Image src="/icon.svg" alt="HT Logo" width={20} height={20} className="brightness-200" priority />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase">Chiedi a Kira</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-white/50 uppercase tracking-tighter">AI Assistant Online</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleClose}
              className="relative z-[100] w-10 h-10 -mr-2 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
              aria-label="Chiudi chat"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div 
            ref={scrollRef} 
            className="flex-1 p-5 md:p-6 overflow-y-auto space-y-6 bg-gray-50/50 overscroll-contain"
          >
            {chatLog.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`relative max-w-[85%] px-5 py-3.5 rounded-2xl md:rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 rounded-tr-none' 
                    : 'bg-white text-brand-dark shadow-sm border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-5 md:p-6 bg-white border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-1.5 focus-within:ring-2 ring-brand-blue/20 transition-all">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && setMessage('')}
                placeholder={t("Scrivi a Kira...", "Ask Kira...")}
                className="flex-1 bg-transparent border-none py-2 text-sm outline-none text-brand-dark placeholder:text-brand-gray/50"
              />
              <button 
                className="text-brand-blue hover:scale-110 active:scale-95 transition-transform disabled:opacity-30"
                aria-label="Invia messaggio"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <p className="text-center text-[9px] text-brand-gray/40 mt-4 uppercase tracking-[0.2em]">
              Powered by HighTech AI
            </p>
          </div>
        </div>
      )}

      {/* --- BOTTONE FLOTTANTE --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Kira Chat"
        className={`relative group w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-brand-dark rotate-90 scale-90' : 'bg-brand-blue hover:bg-brand-dark hover:-translate-y-1'
        }`}
      >
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-20"></span>
            <span className="absolute -inset-1 rounded-full border border-brand-blue/10 animate-pulse"></span>
          </>
        )}
        
        <div className="relative z-10 text-white">
          {isOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 9l-7 7-7-7"/></svg>
          ) : (
             <Image src="/icon.svg" alt="Kira" width={26} height={26} className="brightness-200" />
          )}
        </div>
      </button>
    </div>
  );
}