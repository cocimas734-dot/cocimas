import React, { useState } from 'react';
import { ArrowRight, Construction } from 'lucide-react';
import { PROJECTS, CONTACT_INFO } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const categories = ['Todos', 'Residencial', 'Comercial', 'Remodelación', 'Industrial'];

    const filteredProjects = activeFilter === 'Todos'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-black-900 text-gray-100 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gold-500 w-full relative overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
                    <div className="text-center">
                        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-8xl text-black-900 mb-6 uppercase tracking-tighter leading-[1] sm:leading-none">
                            Nuestros<br />Proyectos
                        </h1>
                        <div className="w-24 h-2 bg-black-900 mx-auto mb-8"></div>
                        <p className="max-w-2xl mx-auto text-xl text-black-900 font-bold tracking-tight">
                            INGENIERÍA DE ALTO NIVEL Y DISEÑO EXCLUSIVO EN CADA DETALLE.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg className="relative block w-full h-[60px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-black-900" d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                    </svg>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="py-20 bg-black-900 relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <div>
                                <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm mb-2 block border-l-4 border-gold-500 pl-4">Excelencia Constructiva</span>
                                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                                    CALIDAD QUE <span className="text-gold-500">PERDURA</span> EN EL TIEMPO.
                                </h2>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed border-l border-gray-800 pl-6">
                                En Cocimás, fusionamos la robustez del diseño industrial con la elegancia de los acabados premium. Cada proyecto es una declaración de poder y sofisticación.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start group">
                                    <Construction className="text-gold-500 w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="text-white font-bold uppercase text-sm mb-1">Garantía Total</h3>
                                        <p className="text-gray-500 text-xs">Respaldo certificado en cada obra.</p>
                                    </div>
                                </div>
                                <div className="flex items-start group">
                                    <Construction className="text-gold-500 w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="text-white font-bold uppercase text-sm mb-1">Diseño Único</h3>
                                        <p className="text-gray-500 text-xs">Personalización al 100%.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute inset-0 bg-gold-500/20 blur-2xl -z-10 rounded-full"></div>
                            <img
                                alt="Arquitectura moderna oscura"
                                className="relative transition-transform duration-700 hover:scale-105 rounded-sm w-full h-72 sm:h-[500px] object-cover border-b-8 border-r-8 border-gold-500 shadow-2xl"
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <section className="py-24 bg-black-900 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 mb-20">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-8 py-2 bg-transparent border font-bold uppercase text-sm tracking-widest transition-all ${activeFilter === category
                                    ? 'border-gold-500 text-gold-500 shadow-[0_0_10px_rgba(255,190,38,0.4)] scale-105'
                                    : 'border-gray-800 hover:border-gold-500 text-gold-500/70 hover:text-gold-500 hover:shadow-[0_0_10px_rgba(255,190,38,0.4)]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <article key={project.id} className="group relative h-80 sm:h-[450px] cursor-pointer overflow-hidden border-2 sm:border-4 border-gold-500 bg-gray-900">
                                <img
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={project.image}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 bg-gradient-to-t from-black-900 via-black-900/80 to-transparent">
                                    <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="text-gold-500 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1 sm:mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-display font-black text-gold-500 uppercase leading-none mb-3 sm:mb-4">
                                            {project.title}
                                        </h3>
                                        <div className="h-auto opacity-100 sm:h-0 sm:opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-100">
                                            <p className="text-gray-300 font-medium text-xs sm:text-sm border-l-2 border-gold-500 pl-3 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                                                {project.description || project.location}
                                            </p>
                                            <span className="inline-flex items-center text-gold-500 font-black uppercase text-[10px] sm:text-xs tracking-wider border-b-2 border-gold-500 pb-1">
                                                Ver Proyecto <ArrowRight className="text-sm ml-1" size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="mt-20 text-center">
                        <button className="inline-flex items-center justify-center px-10 py-4 border border-gold-500 text-base font-bold text-gold-500 hover:bg-gold-500 hover:text-black-900 transition duration-300 uppercase tracking-[0.2em] shadow-lg hover:shadow-[0_0_15px_rgba(255,190,38,0.4)]">
                            Cargar Más
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gold-500 py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-black-900 mb-8 uppercase leading-tight tracking-tight">
                        Transforma tu <br /> hogar hoy
                    </h2>
                    <div className="w-16 h-2 bg-black-900 mx-auto mb-10"></div>
                    <div className="flex flex-col sm:flex-row justify-center">
                        <a
                            className="bg-black-900 text-white font-bold py-5 px-12 rounded-none uppercase tracking-widest shadow-2xl hover:bg-black-800 transition transform hover:-translate-y-1 text-center"
                            href={CONTACT_INFO.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Solicitar Presupuesto por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
