import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
    const values = [
        {
            icon: '💎',
            title: 'Excelencia',
            description: 'Buscamos la perfección en cada detalle, utilizando solo materiales de la más alta gama.'
        },
        {
            icon: '⚙️',
            title: 'Precisión',
            description: 'Ingeniería de vanguardia aplicada para estructuras sólidas y duraderas.'
        },
        {
            icon: '🤝',
            title: 'Compromiso',
            description: 'Transparencia total y dedicación absoluta a la visión de nuestros clientes.'
        }
    ];

    const timeline = [
        {
            year: '2010',
            title: 'Fundación',
            description: 'Nace Cocimás con el objetivo de revolucionar la construcción residencial en la capital.',
            side: 'left'
        },
        {
            year: '2015',
            title: 'Expansión Corporativa',
            description: 'Abrimos nuestra división de oficinas de lujo, trabajando con multinacionales.',
            side: 'right'
        },
        {
            year: '2019',
            title: 'Premio Nacional',
            description: 'Reconocimiento a la Mejor Obra de Remodelación Sostenible del año.',
            side: 'left'
        },
        {
            year: '2023',
            title: 'Era Digital',
            description: 'Implementación de Smart Home Tech en todos nuestros desarrollos premium.',
            side: 'right'
        }
    ];

    const team = [
        {
            name: 'Roberto Silva',
            position: 'Director General',
            description: 'Visionario con 20 años de experiencia en grandes estructuras.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Elena Torres',
            position: 'Jefa de Operaciones',
            description: 'Experta en logística y ejecución de proyectos complejos.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Marco Polo',
            position: 'Diseñador Principal',
            description: 'Creatividad sin límites para interiores de lujo.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
        },
        {
            name: 'Sofia Mendez',
            position: 'Gerente de Proyectos',
            description: 'Supervisión meticulosa para resultados impecables.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
        }
    ];

    return (
        <div className="min-h-screen bg-black-900 text-gray-100 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        alt="Arquitectura Moderna"
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black-900/80 via-black-900/50 to-black-900"></div>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#FFBE26 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                    <span className="inline-block py-1 px-3 border border-gold-500/50 text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-6 bg-black-900/50 backdrop-blur-sm">
                        Sobre Nosotros
                    </span>
                    <h1 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl text-gold-500 mb-6 uppercase tracking-tighter leading-[1.1] drop-shadow-2xl">
                        Nuestra Pasión,<br />
                        <span className="text-white">Tu Espacio</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed">
                        Redefiniendo la construcción moderna con estándares industriales de lujo. Donde la precisión técnica se encuentra con la estética dorada.
                    </p>
                    <div className="mt-12 flex flex-col items-center">
                        <div className="w-[1px] h-24 bg-gradient-to-b from-gold-500 to-transparent"></div>
                    </div>
                </div>
            </header>

            {/* Values Section */}
            <section className="py-24 bg-black-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-white uppercase tracking-widest mb-4">
                            Nuestros <span className="text-gold-500">Valores</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {values.map((value, index) => (
                            <div key={index} className="group">
                                <div className="w-32 h-32 mx-auto rounded-full border-2 border-gold-500/30 flex items-center justify-center mb-8 group-hover:border-gold-500 group-hover:shadow-[0_0_20px_rgba(255,190,38,0.25)] transition-all duration-500 bg-gray-900 relative">
                                    <div className="absolute inset-0 bg-gold-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                    <span className="text-4xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-3">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed px-4">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-gray-900/50 relative border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tighter">Historia</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between group ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`w-full md:w-5/12 ${item.side === 'left' ? 'text-left md:text-right md:pr-8' : 'text-left md:pl-8'} pl-10 md:pl-0`}>
                                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-gold-500 mb-1">{item.year}</h3>
                                        <h4 className="text-white font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">{item.title}</h4>
                                        <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                                    </div>

                                    <div className="absolute left-[-5px] md:left-1/2 md:-ml-[6px] w-[12px] h-[12px] rounded-full bg-black-900 border-2 border-gold-500 z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_20px_rgba(255,190,38,0.25)]"></div>

                                    <div className="w-full md:w-5/12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-black-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm mb-2 block pl-1">Liderazgo</span>
                            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-none">
                                Nuestro <span className="text-gold-500">Equipo</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-gray-500 text-sm text-right md:text-left">
                            Profesionales con décadas de experiencia combinada en arquitectura, ingeniería y diseño de interiores.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <div key={index} className="group relative overflow-hidden bg-gray-900 cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden relative border border-gray-800 group-hover:border-gold-500 transition-colors duration-500">
                                    <img
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src={member.image}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                                        <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-white font-bold text-base sm:text-lg uppercase tracking-wider group-hover:text-gold-500 transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest mt-1">{member.position}</p>
                                            <div className="h-auto opacity-100 sm:h-0 sm:opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 mt-2 sm:mt-3">
                                                <p className="text-gray-500 text-[10px] sm:text-xs leading-snug">{member.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gold-500 py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-black-900 mb-6 uppercase leading-tight tracking-tight">
                        ¿Listo para iniciar?
                    </h2>
                    <p className="text-black-900 font-medium text-base sm:text-lg mb-10 max-w-2xl mx-auto">
                        Únete a nuestra lista de clientes exclusivos y transforma tu entorno.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            to="/contacto"
                            className="bg-black-900 text-gold-500 border-2 border-black-900 font-bold py-4 px-12 uppercase tracking-widest shadow-2xl hover:bg-transparent hover:text-black-900 transition-all duration-300"
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
