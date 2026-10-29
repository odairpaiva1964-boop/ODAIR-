import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpeedChecker } from './components/SpeedChecker';
import { BenefitsBento } from './components/BenefitsBento';
import { DeviceSetup } from './components/DeviceSetup';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      
      {/* Background Transparent Ambient Logo Watermark */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.06] select-none"
        aria-hidden="true"
      >
        <img 
          src="/assets/aistudio/02_Logo_moderno_e_vibrante_PLAYONE_7a2510ac.png"
          alt=""
          className="w-[1100px] max-w-[130vw] object-contain scale-110 blur-[1px]"
        />
      </div>

      {/* Secondary subtle background logo watermark near lower sections */}
      <div 
        className="absolute bottom-1/4 right-0 pointer-events-none z-0 overflow-hidden opacity-[0.04] translate-x-1/3 select-none"
        aria-hidden="true"
      >
        <img 
          src="/assets/aistudio/02_Logo_moderno_e_vibrante_PLAYONE_7a2510ac.png"
          alt=""
          className="w-[800px] object-contain"
        />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Page Flow */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero with Autoplay Video in TV console */}
        <Hero />

        {/* 2. Interactive Speed & Compatibility Checker */}
        <SpeedChecker />

        {/* 3. Core Capabilities & Bento Grid */}
        <BenefitsBento />

        {/* 4. Device Compatibility & 3-Step Setup */}
        <DeviceSetup />

        {/* 5. Pricing: Exclusively Monthly Plan R$ 30,00 */}
        <Pricing />

        {/* 6. Verified Social Proof & Customer Reviews */}
        <Testimonials />

        {/* 7. Interactive FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Mobile Sticky Quick-Action Bar */}
      <StickyMobileBar />

      {/* Floating 24/7 WhatsApp Support */}
      <WhatsAppFloat />
    </div>
  );
}
