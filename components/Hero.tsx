import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black-900 via-black-900/80 to-black-900/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1920"
          alt="Construcción y Remodelación en Venezuela"
          className="w-full h-full object-cover animate-pulse-slow"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pt-20">
        <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
           <div className="h-[2px] w-12 bg-gold-500"></div>
           <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-sm">Identidad & Excelencia</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 max-w-4xl tracking-tighter animate-fade-in-up delay-100">
          CONSTRUIMOS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-400">
            TU VISIÓN
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
          Servicios integrales de remodelación, construcción y decoración en <strong>Valencia y Carabobo</strong>. 
          Transformamos espacios con acabados de alta calidad y precisión técnica.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group bg-gold-500 text-black-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Cotizar por WhatsApp
          </a>
          <a
            href="#portfolio"
            className="group border border-white text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black-900 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Ver Proyectos
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Decorative Strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gold-500 via-gold-400 to-black-900 z-30" />
    </section>
  );
};

export default Hero;