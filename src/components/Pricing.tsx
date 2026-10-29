import React from 'react';
import { Check, Zap, MessageCircle } from 'lucide-react';
import { PLANS_DATA, getWhatsAppUrl } from '../data/mockData';

export const Pricing: React.FC = () => {
  const plan = PLANS_DATA[0]; // Only Plano Mensal
  const subscribeWhatsAppUrl = getWhatsAppUrl('Olá! Gostaria de assinar o Plano Mensal de R$ 30,00 da PlayOne.');
  const testWhatsAppUrl = getWhatsAppUrl('Olá! Gostaria de fazer um teste grátis da PlayOne.');

  return (
    <section id="planos" className="py-24 bg-[#070B16] border-t border-white/5 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/20 text-blue-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Preço Justo e Sem Surpresas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Plano Mensal Completo
          </h2>

          <p className="text-base text-slate-300">
            Acesso ilimitado a toda a grade 4K e catálogo completo por um valor único e acessível.
          </p>
        </div>

        {/* Single Pricing Card Centerpiece */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#111C36] via-[#0D152A] to-[#0A1020] border-2 border-blue-500 shadow-2xl shadow-blue-900/30">
            
            {/* Top Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-md">
                Acesso Imediato
              </span>
            </div>

            {/* Header info */}
            <div className="text-center mb-6 pt-2">
              <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-xs text-slate-400">Assinatura mensal sem fidelidade</p>
            </div>

            {/* Price display */}
            <div className="text-center py-5 border-y border-white/5 mb-6 bg-black/20 rounded-2xl">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-slate-400 font-medium">R$</span>
                <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">
                  30,00
                </span>
                <span className="text-sm text-slate-400">/mês</span>
              </div>
              <div className="text-xs text-emerald-400 font-medium mt-2">
                Sem taxa de instalação · Sem multas
              </div>
            </div>

            {/* Features Checklist */}
            <div className="space-y-3.5 mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Button: WhatsApp */}
            <div className="space-y-3">
              <a
                href={subscribeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 text-center text-sm font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-blue-600 hover:from-red-500 hover:to-blue-500 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Assinar por R$ 30,00 via WhatsApp</span>
              </a>

              <a
                href={testWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Faça um teste grátis</span>
              </a>
            </div>

            <div className="text-center mt-4 text-[11px] text-slate-400">
              Atendimento e liberação imediata via WhatsApp
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
