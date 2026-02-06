import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Soluciones Integrales</h3>
          <p className="text-gray-400 font-light">
            Desde pequeñas reparaciones hasta grandes obras civiles. Cubrimos todas las necesidades de remodelación en Venezuela.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-black-900 p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-black-800 rounded-none flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                <service.icon className="text-gold-500 group-hover:text-black-900 w-8 h-8 transition-colors duration-300" />
              </div>

              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Keywords for SEO display */}
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((kw, idx) => (
                  <span key={idx} className="text-[10px] bg-white/5 text-gray-500 px-2 py-1 rounded-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;