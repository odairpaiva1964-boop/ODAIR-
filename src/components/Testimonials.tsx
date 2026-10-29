import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#06080F] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Prova Social & Avaliações
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Quem experimenta a PlayOne não troca por nada
          </h2>
          <p className="text-base text-slate-300">
            Veja a experiência real de quem já cancelou assinaturas caras e hoje assiste a tudo em um único lugar.
          </p>

          {/* Social Proof Metric Strip */}
          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5.0</span>
            </div>
            <span>·</span>
            <span>+28.000 Usuários Ativos</span>
            <span>·</span>
            <span className="text-emerald-400">99.4% Recomendam</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 bg-[#0B1220] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-3 h-3" />
                    Cliente Verificado
                  </span>
                </div>

                {/* Highlight */}
                <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                  "{t.highlight}"
                </h4>

                {/* Body review */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {t.review}
                </p>

              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-white truncate">{t.name}</div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {t.city}, {t.state} · <span className="text-slate-500">{t.device}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
