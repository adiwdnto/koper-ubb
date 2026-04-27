import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am the KOPER UBB Assistant. How can I help you explore our university photography club today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'undefined') {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Configuration error: The AI assistant's API key is missing. Please check the environment settings.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: trimmedInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...chatHistory, { role: 'user', parts: [{ text: trimmedInput }] }],
        config: {
          systemInstruction: `You are the official AI assistant for KOPER (Komunitas Photographer), the photography club of Universitas Bangka Belitung (UBB). 
          Keep your tone professional, artistic, and focus on our club's journaling mission.`,
        }
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.text || "I'm sorry, I couldn't process that request.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("ChatBot Error:", error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `Error: ${error.message || "Something went wrong while connecting to the AI service."}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-2xl md:w-96"
          >
            {/* Header */}
            <div className="bg-brand-900 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800">
                    <MessageSquare className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-tight">KOPER Support</h3>
                    <p className="text-[10px] uppercase tracking-widest text-brand-400">Online • AI Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="h-80 space-y-4 overflow-y-auto p-4 bg-brand-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={cn("flex flex-col gap-1", msg.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] rounded-2xl p-3 text-sm",
                    msg.role === 'user' 
                      ? "bg-brand-900 text-white rounded-tr-none" 
                      : "bg-brand-200 text-brand-900 rounded-tl-none"
                  )}>
                    <p className="editorial-text text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">
                    {msg.role === 'assistant' ? 'Assistant' : 'You'} • {msg.timestamp}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-brand-400">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">KOPER is thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="border-t border-brand-200 p-4 bg-white"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="TYPE A MESSAGE..."
                  className="flex-1 bg-transparent text-xs font-bold uppercase tracking-widest outline-none placeholder:text-brand-300"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  className="rounded-full bg-brand-900 p-2 text-white transition-all hover:bg-brand-800 disabled:opacity-50" 
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300",
          isOpen ? "bg-brand-400" : "bg-brand-900"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
