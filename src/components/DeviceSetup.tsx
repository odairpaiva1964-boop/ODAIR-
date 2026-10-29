import React, { useState } from 'react';
import { Tv, Smartphone, Laptop, Radio } from 'lucide-react';

export const DeviceSetup: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'smarttv' | 'tvbox' | 'mobile' | 'pc'>('smarttv');

  const devices = [
    {
      id: 'smarttv',
      label: 'Smart TVs',
      icon: Tv,
      title: 'Compatível com Samsung, LG, TCL, Philco, Sony e Android TV',
      desc: 'Basta abrir a loja de aplicativos da sua televisão e baixar o aplicativo que enviamos no seu WhatsApp. Sem aparelhos externos adicionais.',
      steps: [
        'Abra a loja de aplicativos da sua TV (Samsung Apps, LG Content Store ou Google Play)',
        'Instale o aplicativo indicado no nosso tutorial enviado no WhatsApp',
        'Abra o app e digite os dados de login enviados no seu WhatsApp'
      ]
    },
    {
      id: 'tvbox',
      label: 'TV Box & Fire Stick',
      icon: Radio,
      title: 'Amazon Fire TV Stick, Xiaomi Mi Box, Chromecast & TV Box',
      desc: 'Transforme qualquer televisão antiga em uma central multimídia 4K com o melhor aplicativo PlayOne integrado.',
      steps: [
        'Acesse a opção Downloader ou Play Store do seu TV Box/FireStick',
        'Digite o código direto ou baixe o aplicativo exclusivo da PlayOne',
        'Faça login e ative o sinal 60 FPS com buffer zero'
      ]
    },
    {
      id: 'mobile',
      label: 'Celulares & Tablets',
      icon: Smartphone,
      title: 'Android & iPhone / iPad',
      desc: 'Leve sua programação para onde for. Assista na viagem, no transporte ou no trabalho com economia inteligente de dados.',
      steps: [
        'Baixe o app disponível na Google Play Store ou App Store da Apple',
        'Conecte com sua conta PlayOne',
        'Assista ao vivo aos seus jogos e programas favoritos'
      ]
    },
    {
      id: 'pc',
      label: 'Computador & Notebook',
      icon: Laptop,
      title: 'Windows, Mac & Web Player Direto',
      desc: 'Assista diretamente no navegador Google Chrome, Edge ou Safari sem precisar instalar nada, ou use nosso player dedicado para Windows.',
      steps: [
        'Acesse nosso endereço do WebPlayer direto no navegador',
        'Insira seu usuário e senha gerados no atendimento',
        'Aproveite a tela cheia com áudio espacial 5.1'
      ]
    }
  ];

  const current = devices.find(d => d.id === activeDevice)!;

  return (
    <section id="dispositivos" className="py-20 bg-[#06080F] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
            Facilidade & Compatibilidade
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Funciona no aparelho que você já tem em casa
          </h2>
          <p className="text-base text-slate-300">
            Sem comprar novos aparelhos e sem visitas técnicas. A configuração é tão simples que você conclui em menos de 3 minutos.
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-2xl w-full">
            {devices.map((device) => {
              const Icon = device.icon;
              return (
                <button
                  key={device.id}
                  onClick={() => setActiveDevice(device.id as any)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeDevice === device.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{device.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Device Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0C1425] to-[#080D19] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left information */}
            <div className="md:col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/20 text-blue-300 text-xs font-mono">
                {current.label}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {current.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Right Setup 3-Step Walkthrough */}
            <div className="md:col-span-6 space-y-4 bg-black/30 p-5 sm:p-6 rounded-2xl border border-white/5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-slate-200">
                Como configurar em 3 passos simples:
              </h4>

              <div className="space-y-4">
                {current.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400 shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 text-xs text-slate-400 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block"></span>
                <span>Tutorial passo a passo enviado na ativação</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
