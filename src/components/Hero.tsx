import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Tv, Wifi, MessageCircle, ArrowRight, Volume2, VolumeX, Play } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

const VIDEOS = [
  {
    id: 'cinema',
    title: 'Experiência Cinema 4K',
    tab: '1. Cinema & Originais',
    badge: 'VÍDEO 1 DE 2 · CINEMA 4K',
    src: '/assets/aistudio/Play_button_logo_202604071127_9cbda760.mp4',
    description: 'Imersão cinematográfica com qualidade Ultra HD e som espacial.',
    codec: 'Sequência Automática · H.265'
  },
  {
    id: 'abertura',
    title: 'Abertura Oficial PlayOne 3D',
    tab: '2. Abertura 3D Metálica',
    badge: 'VÍDEO 2 DE 2 · LOGO 3D',
    src: '/assets/aistudio/Assembling_metallic_logo_202604061749_61f97efe.mp4',
    description: 'Transmissão com alta taxa de quadros e servidores dedicados no Brasil.',
    codec: 'Sequência Automática · 60 FPS'
  }
];

export const Hero: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const testWhatsAppUrl = getWhatsAppUrl('Olá! Gostaria de fazer um teste grátis da PlayOne.');

  const currentVideo = VIDEOS[activeVideoIndex];

  // When video index changes, reload and play next video seamlessly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [activeVideoIndex]);

  // When a video finishes playing, automatically switch to the next video
  const handleVideoEnded = () => {
    setActiveVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-28">
      {/* Background ambient transparent logo with vibrant cosmic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] max-w-[140vw] pointer-events-none -z-10 opacity-15 blur-[2px] select-none">
        <img 
          src="/assets/aistudio/02_Logo_moderno_e_vibrante_PLAYONE_7a2510ac.png" 
          alt="" 
          aria-hidden="true" 
          className="w-full h-auto object-contain scale-110"
        />
      </div>

      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle urgency announcement */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/20 text-xs text-blue-200">
            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
            <span>Ativação Rápida</span>
            <span aria-hidden="true" className="text-blue-500">·</span>
            <span className="font-semibold text-white">Plano Mensal Completo por apenas R$ 30,00</span>
          </div>
        </div>

        {/* Main Grid: Copy on Left, Sequential Autoplay Video TV Screen on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              O Melhor do Streaming em 4K. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                Todos os Canais, Filmes e Esportes
              </span>{' '}
              Sem Travamentos.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Assista a todos os canais ao vivo, futebol sem atraso, estreias do cinema e séries completas por apenas 
              <strong className="text-emerald-400 font-bold"> R$ 30,00 por mês</strong>. Sem fidelidade e com suporte direto no WhatsApp.
            </p>

            {/* Benefit Highlights List */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Servidores CDN Anti-Travamento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Qualidade 4K e 60 FPS Fluido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Smart TVs, Celulares e TV Box</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Plano Mensal por R$ 30,00</span>
              </div>
            </div>

            {/* Single High-Intent Conversion Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={testWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-blue-600 hover:from-red-500 hover:to-blue-500 rounded-xl shadow-xl shadow-red-950/40 hover:shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
                <span>Faça um teste grátis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Zero-Pill Unboxed Trust Metadata */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-slate-400">
              <span>Ativação Rápida</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Zero Fidelidade</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Suporte Direto no WhatsApp</span>
            </div>

          </div>

          {/* Column 2: Continuous Sequential Autoplay Video in Smart TV Frame */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer TV Frame */}
              <div className="rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-slate-700/40 via-slate-800/20 to-slate-900/60 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-xl">
                
                {/* TV Header with Brand Accent & Status */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 text-xs text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/assets/aistudio/02_Logo_moderno_e_vibrante_PLAYONE_7a2510ac.png" 
                      alt="PlayOne" 
                      className="h-6 w-auto object-contain"
                    />
                    <span className="text-slate-500">|</span>
                    <span className="text-[11px] font-mono tracking-tight text-blue-400">PLAYONE 4K</span>
                  </div>
                  
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Wifi className="w-3 h-3" />
                      100% Estável
                    </span>
                    <span className="text-slate-400">4K Ultra HD</span>
                  </div>
                </div>

                {/* Video Container inside TV Screen Viewport */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center group shadow-inner">
                  
                  {/* Sequential Autoplay Video: when ended, automatically starts next video */}
                  <video
                    key={currentVideo.src}
                    ref={videoRef}
                    src={currentVideo.src}
                    autoPlay
                    onEnded={handleVideoEnded}
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />

                  {/* Top Subtle Overlay Badge indicating video sequence */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-red-600/90 text-white uppercase backdrop-blur-sm shadow flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping"></span>
                      {currentVideo.badge}
                    </span>
                  </div>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-3 right-3 z-20 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer"
                    aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                    title={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>

                  {/* Live Status indicator */}
                  <div className="absolute bottom-3 left-3 z-10 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span>Playlist Contínua · Passando para o próximo ao terminar</span>
                  </div>

                </div>

                {/* Sequential Channel Indicator Tabs */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {VIDEOS.map((video, idx) => (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer flex items-center justify-center gap-2 ${
                        activeVideoIndex === idx
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-400/50'
                          : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {activeVideoIndex === idx ? (
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                      ) : (
                        <Play className="w-3 h-3 text-slate-500 shrink-0" />
                      )}
                      <span className="truncate">{video.tab}</span>
                    </button>
                  ))}
                </div>

                {/* TV Stand Base */}
                <div className="mt-3 text-center">
                  <div className="inline-block w-28 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent rounded-full opacity-60" />
                </div>

              </div>

              {/* Float Trust Card: Fast Setup */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl bg-[#0B132B]/95 border border-blue-500/30 shadow-xl backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Instalação em 3 Minutos</div>
                  <div className="text-[11px] text-slate-400">Suporte direto no WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
