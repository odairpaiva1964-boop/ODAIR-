import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const StickyMobileBar: React.FC = () => {
  const testWhatsAppUrl = getWhatsAppUrl('Olá! Gostaria de fazer um teste grátis da PlayOne.');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#06080F]/95 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto">
        <a
          href={testWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all whitespace-nowrap shrink-0"
        >
          <MessageCircle className="w-4 h-4 fill-white text-white" />
          <span>Faça um teste grátis</span>
        </a>
      </div>
    </div>
  );
};
