import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const testWhatsAppUrl = getWhatsAppUrl('Olá! Gostaria de fazer um teste grátis da PlayOne.');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#06080F]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark / New Vibrant Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 focus:outline-none group">
            <img 
              src="/assets/aistudio/02_Logo_moderno_e_vibrante_PLAYONE_7a2510ac.png" 
              alt="PlayOne - O Melhor do Streaming" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#recursos" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
              Recursos
            </a>
            <a href="#dispositivos" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
              Dispositivos
            </a>
            <a href="#planos" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
              Plano Mensal
            </a>
            <a href="#depoimentos" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
              Avaliações
            </a>
            <a href="#faq" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={testWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-blue-600 hover:from-red-500 hover:to-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              Faça um teste grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080D1A] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a 
              href="#recursos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Recursos
            </a>
            <a 
              href="#dispositivos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Dispositivos Suportados
            </a>
            <a 
              href="#planos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Plano Mensal (R$ 30,00)
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Avaliações de Clientes
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white"
            >
              Perguntas Frequentes
            </a>
          </nav>
          <div className="pt-2">
            <a
              href={testWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-red-600 to-blue-600 rounded-lg shadow-md"
            >
              Faça um teste grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
