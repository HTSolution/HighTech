"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

interface ChatContextType {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatContext.Provider value={{ messages, setMessages, isOpen, setIsOpen }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat deve essere usato dentro ChatProvider");
  return context;
}