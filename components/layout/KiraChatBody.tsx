'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function KiraChatBody() {
  const { language, t } = useLanguage();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    { 
      role: 'assistant', 
      content: language === 'it' 
        ? 'Ciao! Sono Kira, l’AI di HT Solution. Come posso aiutarti oggi?' 
        : 'Hi! I am Kira, HT Solution’s AI. How can I help you today?' 
    }
  ]);
  
  const sessionIdRef = useRef(`session_${Date.now()}`);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatLog, isLoading]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    setChatLog(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://ai.hightechsas.it/webhook/ee4c8c25-6c8b-4c74-ac1b-c75a645583f9', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          chatInput: userMessage,
          sessionId: sessionIdRef.current,
          lang: language 
        }),
      });

      if (!response.ok) throw new Error('Network response error');

      const data = await response.json();
    
      const kiraReply = data.output || data.text || data.message || (language === 'it' ? "Non ho ricevuto risposta dal server." : "No response from server.");

      setChatLog(prev => [...prev, { role: 'assistant', content: kiraReply }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setChatLog(prev => [...prev, { 
        role: 'assistant', 
        content: language === 'it' 
          ? "Ops! Ho un problema di connessione. Riprova più tardi." 
          : "Oops! Connection problem. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-8 border-b border-white/5 flex items-center justify-between bg-black/20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-blue/20 rounded-xl flex items-center justify-center border border-white/5">
            <img src="/icon.svg" alt="Kira" className="w-5 h-5 brightness-200" />
          </div>
          <div>
            <h3 className="font-bold text-xs tracking-widest uppercase text-white">Kira AI</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-[9px] text-white/40 uppercase tracking-tighter font-bold">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messaggi */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-brand-dark/50 overscroll-contain scrollbar-hide">
        {chatLog.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-[13px] leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-brand-blue text-white rounded-tr-none shadow-lg' 
                : 'bg-white/5 text-brand-light border border-white/10 rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 px-5 py-3.5 rounded-2xl rounded-tl-none flex gap-1 items-center">
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></span>
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-8 bg-black/20 border-t border-white/5 shrink-0">
        <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-5 py-1 focus-within:ring-1 ring-brand-blue/50 transition-all">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={t("Chiedi a Kira...", "Ask Kira...")}
            className="flex-1 bg-transparent border-none py-4 text-sm outline-none text-white placeholder:text-gray-500"
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading}
            className={`text-brand-blue hover:scale-110 active:scale-95 transition-transform p-2 ${isLoading ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <p className="text-[9px] text-center text-white/10 uppercase tracking-[0.3em] mt-6">
          Powered by HighTech AI
        </p>
      </div>
    </div>
  );
}