'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_DATA } from '@/constants/contact';

interface ChatMessage {
  role: 'assistant' | 'user';
  content: string;
}

interface UserData {
  nome: string;
  cognome: string;
  email: string;
  phone_office: string;
}

export default function KiraChatBody() {
  const { language } = useLanguage();
  const k = CONTACT_DATA[language].kira;
  
  const [isIdentified, setIsIdentified] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({ 
    nome: '', 
    cognome: '', 
    email: '',
    phone_office: '' 
  });
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  
  const sessionIdRef = useRef<string>(`session_${Date.now()}`);
  const scrollRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    if (!isIdentified && chatLog.length === 0) {
      setChatLog([{ role: 'assistant', content: k.welcome }]);
    }
  }, [k.welcome, isIdentified, chatLog.length]);

  // Scroll automatico all'ultimo messaggio
  useEffect(() => {
    if (scrollRef.current && isIdentified) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatLog, isLoading, isIdentified]);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();

    // PROTEZIONE ANTI-BOT 1: Honeypot
    if (userData.phone_office !== '') {
      console.warn("Bot detected: Honeypot field filled.");
      return;
    }

    // PROTEZIONE ANTI-BOT 2: Tempo minimo (3 secondi)
    const timeElapsed = (Date.now() - startTimeRef.current) / 1000;
    if (timeElapsed < 3) {
      console.warn("Bot detected: Form submitted too fast.");
      return;
    }

    if (userData.nome && userData.cognome && userData.email) {
      setIsIdentified(true);
      setChatLog([{ 
        role: 'assistant', 
        content: k.readyMessage.replace('{name}', userData.nome)
      }]);
    }
  };

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
          question: userMessage,
          channel: "chat",
          session_id: sessionIdRef.current,
          lang: language,
          email: userData.email,
          first_name: userData.nome,
          last_name: userData.cognome
        }),
      });

      if (!response.ok) throw new Error('Error');
      const data = await response.json();
      const kiraReply: string = data.output || data.text || data.message || k.errorMessage;
      
      setChatLog(prev => [...prev, { role: 'assistant', content: kiraReply }]);
    } catch (error) {
      setChatLog(prev => [...prev, { role: 'assistant', content: k.connectionError }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-brand-dark/40 backdrop-blur-md overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
            <img src="/icon.svg" alt="Kira" className="w-5 h-5 brightness-200" />
          </div>
          <div>
            <h3 className="font-bold text-[11px] tracking-widest uppercase text-white">Kira AI Agent</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-[9px] text-emerald-400 font-bold uppercase">Disponibile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div 
        ref={scrollRef} 
        className={`flex-1 p-10 space-y-6 scrollbar-hide ${isIdentified ? 'overflow-y-auto' : 'overflow-hidden flex items-center justify-center'}`}
      >
        {!isIdentified ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm mx-auto space-y-6">
            <div className="text-center">
              <h4 className="text-white text-base font-light leading-relaxed italic">{k.welcome}</h4>
            </div>
            
            <form onSubmit={handleStartChat} className="space-y-3">
              {/* Campo Honeypot Invisibile */}
              <div className="absolute opacity-0 -z-10 h-0 w-0 overflow-hidden">
                <input 
                  type="text" 
                  name="phone_office" 
                  tabIndex={-1} 
                  value={userData.phone_office} 
                  onChange={(e) => setUserData({...userData, phone_office: e.target.value})} 
                  autoComplete="off" 
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input required type="text" placeholder={k.firstName} className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-blue outline-none transition-all placeholder:text-white/30" value={userData.nome} onChange={(e) => setUserData({...userData, nome: e.target.value})} />
                <input required type="text" placeholder={k.lastName} className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-blue outline-none transition-all placeholder:text-white/30" value={userData.cognome} onChange={(e) => setUserData({...userData, cognome: e.target.value})} />
              </div>
              <input required type="email" placeholder={k.emailPlaceholder} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-blue outline-none transition-all placeholder:text-white/30" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
              <button type="submit" className="w-full bg-brand-blue hover:bg-white hover:text-brand-dark text-white py-3.5 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all">
                {k.button}
              </button>
            </form>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {chatLog.map((msg, i) => (
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-[13px] leading-relaxed ${msg.role === 'user' ? 'bg-brand-blue text-white rounded-tr-none' : 'bg-white/10 text-white border border-white/10 rounded-tl-none backdrop-blur-sm'}`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className={`p-6 bg-black/40 border-t border-white/10 shrink-0 ${!isIdentified ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 focus-within:border-brand-blue/50 transition-all">
          <input 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
            placeholder={isIdentified ? k.inputPlaceholder : k.waitingAuth} 
            className="flex-1 bg-transparent border-none py-2 text-[13px] outline-none text-white placeholder:text-white/20"
            disabled={isLoading || !isIdentified}
          />
          <button onClick={handleSendMessage} disabled={!message.trim() || isLoading || !isIdentified} className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all ${message.trim() ? 'bg-brand-blue text-white' : 'bg-white/5 text-white/20'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}