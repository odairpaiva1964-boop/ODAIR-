import React, { useState } from 'react';
import { Wifi, Gauge, CheckCircle2, RefreshCw, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

export const SpeedChecker: React.FC = () => {
  const [testing, setTesting] = useState(false);
  const [tested, setTested] = useState(false);
  const [results, setResults] = useState({
    speed: 84,
    ping: 14,
    jitter: 2,
    rating: 'Excelente para 4K'
  });

  const testWhatsAppUrl = getWhatsAppUrl('Olá! Fiz o teste de velocidade no site e minha conexão está aprovada. Gostaria de fazer um teste grátis da PlayOne.');

  const runTest = () => {
    setTesting(true);
    setTested(false);

    setTimeout(() => {
      const simulatedSpeed = Math.floor(Math.random() * 45) + 65;
      const simulatedPing = Math.floor(Math.random() * 8) + 11;
      const simulatedJitter = Math.floor(Math.random() * 3) + 1;

      setResults({
        speed: simulatedSpeed,
        ping: simulatedPing,
        jitter: simulatedJitter,
        rating: 'Conexão 100% Qualificada para 4K'
      });
      setTesting(false);
      setTested(true);
    }, 1600);
  };

  return (
    <section className="py-12 border-y border-white/5 bg-[#080D1A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-950 border border-blue-500/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left explanation */}
            <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                <Gauge className="w-4 h-4" />
                <span>Verificador de Compatibilidade PlayOne</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sua internet aguenta streaming em 4K?
              </h3>
              <p className="text-sm text-slate-300">
                Faça uma checagem rápida de rota com nossos servidores dedicados no Brasil e comprove a estabilidade para sua TV.
              </p>
            </div>

            {/* Right test widget */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-end gap-4">
              
              {!tested && !testing && (
                <button
                  onClick={runTest}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 cursor-pointer"
                >
                  <Wifi className="w-4 h-4" />
                  <span>Testar Minha Conexão Agora</span>
                </button>
              )}

              {testing && (
                <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-sm text-slate-200">
                  <RefreshCw className="w-5 h-5 text-blue-400 animate-spin" />
                  <span>Testando rota com servidores PlayOne...</span>
                </div>
              )}

              {tested && (
                <div className="w-full space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[11px] text-slate-400">Velocidade</div>
                      <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                        {results.speed} Mbps
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[11px] text-slate-400">Latência (Ping)</div>
                      <div className="text-base sm:text-lg font-bold text-blue-400 font-mono">
                        {results.ping} ms
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <div className="text-[11px] text-slate-400">Jitter de Rota</div>
                      <div className="text-base sm:text-lg font-bold text-indigo-400 font-mono">
                        {results.jitter} ms
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs">
                    <div className="flex items-center gap-2 text-emerald-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{results.rating}</span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={runTest}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        title="Testar novamente"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={testWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all text-xs w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-black" />
                        <span>Faça um teste grátis</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
