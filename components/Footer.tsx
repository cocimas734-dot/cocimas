import React from 'react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-1 font-black text-2xl tracking-tighter text-white mb-6">
                <span className="text-white">COCI</span>
                <span className="text-gold-500">MÁS</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Empresa líder en remodelación y construcción en la región central de Venezuela. 
              Comprometidos con la calidad, la puntualidad y la satisfacción del cliente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Navegación</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-gold-500 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Síguenos</h4>
            <div className="flex flex-col space-y-3">
               <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">Instagram</a>
               <a href={CONTACT_INFO.tiktok} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold-500 text-sm transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Cocimás. Todos los derechos reservados. Valencia, Venezuela.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 hover:bg-gold-500 hover:text-black-900 text-white flex items-center justify-center transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;