import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS_DATA, getWhatsAppUrl } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqWhatsAppUrl = getWhatsAppUrl('Olá! Estou na página da PlayOne e gostaria de tirar uma dúvida antes de assinar.');

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#070B16] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Tire todas as suas dúvidas
          </h2>
          <p className="text-base text-slate-300">
            Respostas claras e diretas para as dúvidas mais comuns dos nossos clientes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0C1322] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-lg bg-white/5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</h4>
              <p className="text-xs text-slate-400">Atendimento humanizado direto no WhatsApp</p>
            </div>
          </div>

          <a
            href={faqWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md shadow-emerald-950/30"
          >
            Chamar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
