import React from 'react';
import { Server, Film, RotateCcw, MonitorSmartphone, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export const BenefitsBento: React.FC = () => {
  return (
    <section id="recursos" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Diferenciais Exclusivos PlayOne
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Por que mais de 28.000 famílias escolheram a PlayOne?
          </h2>
          <p className="text-base text-slate-300">
            Desenvolvido com tecnologia de ponta para entregar a melhor experiência de streaming do mercado brasileiro.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Card 1: CDN Technology (Col span 2 on large screens) */}
          <div className="lg:col-span-2 rounded-2xl p-7 bg-gradient-to-br from-[#0F172A] to-[#0A0F1D] border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-semibold text-blue-400 tracking-wider">
                01. INFRAESTRUTURA
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Server className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Servidores CDN com Balanceamento Inteligente Anti-Quedas
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
              Nossa malha de transmissão possui servidores dedicados em São Paulo e Rio de Janeiro com redundância tripla. Mesmo com milhões de pessoas assistindo simultaneamente à final da Libertadores, seu sinal permanece 100% fluido e estável.
            </p>

            {/* Micro visual indicator */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/5">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] text-slate-400">Uptime Garantido</div>
                <div className="text-base font-bold text-white font-mono">99.98%</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] text-slate-400">Latência Média</div>
                <div className="text-base font-bold text-emerald-400 font-mono">&lt; 15ms</div>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[11px] text-slate-400">Capacidade CDN</div>
                <div className="text-base font-bold text-blue-400 font-mono">10 Gbps Dedicado</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 4K HDR & 60 FPS */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-[#0F172A] to-[#0A0F1D] border border-white/10 relative overflow-hidden group hover:border-red-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold text-rose-400 tracking-wider">
                  02. QUALIDADE
                </span>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Film className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                4K HDR Nativo a 60 Quadros por Segundo
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Esqueça aquela imagem borrada e engasgada. No futebol e no cinema você desfruta de cores vivas com suporte a HDR10+ e áudio imersivo Dolby Atmos.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-rose-400 font-semibold">60 FPS Fluido</span>
              <span>Bitrate Adaptativo</span>
            </div>
          </div>

          {/* Bento Card 3: Replay 7 Dias & EPG */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-[#0F172A] to-[#0A0F1D] border border-white/10 relative overflow-hidden group hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider">
                  03. CONTROLE TOTAL
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <RotateCcw className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Guia EPG e Replay Inteligente dos Últimos 7 Dias
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Chegou tarde e perdeu o início do jogo ou o capítulo da sua novela? Com um clique você volta a transmissão e assiste a qualquer momento da semana.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-semibold">Volte no Tempo</span>
              <span>Grade Completa 24/7</span>
            </div>
          </div>

          {/* Bento Card 4: Multi-dispositivos (Col span 2 on large screens) */}
          <div className="lg:col-span-2 rounded-2xl p-7 bg-gradient-to-br from-[#0F172A] to-[#0A0F1D] border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-semibold text-indigo-400 tracking-wider">
                04. LIBERDADE
              </span>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Assista Onde Quiser, Sem Precisar Comprar Aparelhos Novos
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl">
              Use o app diretamente na sua Smart TV Samsung, LG, TCL ou Philco. Se preferir, assista no seu celular enquanto viaja, no computador do escritório ou no Fire Stick do quarto.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-slate-300">Smart TV Tizen & webOS</span>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-slate-300">Amazon Fire TV</span>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-slate-300">Android & iPhone</span>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-slate-300">TV Box & Chromecast</span>
              <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-slate-300">PC / Navegador Web</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
