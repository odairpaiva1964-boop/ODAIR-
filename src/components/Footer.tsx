import React from 'react';
import { Shield, Lock, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Olá! Gostaria de falar com o atendimento da PlayOne.');

  return (
    <footer className="bg-[#04060B] border-t border-white/5 pt-16 pb-24 sm:pb-16 text-slate-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="/assets/aistudio/02_Logo_moderno_e_vibrante_PLAYONE_7a2510ac.png" 
              alt="PlayOne - O Melhor do Streaming" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              PlayOne Streaming é a plataforma de entretenimento com canais ao vivo em alta definição, lançamentos do cinema e tecnologia CDN sem travamentos.
            </p>
            <div className="flex items-center gap-3 text-slate-300">
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Servidores no Brasil
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <Lock className="w-3.5 h-3.5 text-blue-400" /> Conexão Segura
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-semibold uppercase tracking-wider text-xs">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#recursos" className="hover:text-white transition-colors">Recursos & Servidores</a>
              </li>
              <li>
                <a href="#dispositivos" className="hover:text-white transition-colors">Dispositivos Compatíveis</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Plano Mensal (R$ 30,00)</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-semibold uppercase tracking-wider text-xs">
              Atendimento WhatsApp
            </div>
            <p className="text-slate-400 text-xs">
              Tire suas dúvidas ou solicite seu teste grátis diretamente pelo WhatsApp oficial:
            </p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-xl hover:bg-emerald-500/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>

            <div className="text-[11px] text-slate-400 pt-2">
              Plano Mensal: R$ 30,00 · Sem taxa de adesão · Ativação rápida
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} PlayOne Streaming. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <span>Termos de Uso</span>
            <span>·</span>
            <span>Política de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
