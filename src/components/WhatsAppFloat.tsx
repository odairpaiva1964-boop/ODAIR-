import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de fazer um teste grátis da PlayOne.');

  return (
    <aside aria-label="Suporte WhatsApp" className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl shadow-emerald-950/50 hover:scale-105 transition-all duration-200 cursor-pointer"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />

        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-lg bg-[#0A1020] border border-white/10 text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Faça um teste grátis no WhatsApp
        </span>
      </a>
    </aside>
  );
};
