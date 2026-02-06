import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-gold-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">Portafolio</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Proyectos Recientes</h3>
          </div>
          <Link to="/proyectos" className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors uppercase text-sm font-bold tracking-wider">
            Ver Todos los Proyectos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden h-72 sm:h-[400px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/40 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{project.title}</h4>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <MapPin size={14} className="mr-1" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;