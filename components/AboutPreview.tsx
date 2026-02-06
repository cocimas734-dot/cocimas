import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
    const values = [
        {
            icon: '⭐',
            title: 'Excelencia',
            description: 'Compromiso inquebrantable con la calidad en cada proyecto que emprendemos.'
        },
        {
            icon: '🎯',
            title: 'Precisión',
            description: 'Atención meticulosa a cada detalle, desde el diseño hasta la ejecución final.'
        },
        {
            icon: '🤝',
            title: 'Compromiso',
            description: 'Dedicación total a superar las expectativas de nuestros clientes.'
        }
    ];

    return (
        <section className="py-24 bg-gray-900/50 relative overflow-hidden border-t border-gray-800">
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <div className="mb-8">
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-sm block mb-2">Quiénes Somos</span>
                            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                                Construyendo el <span className="text-gold-500">Futuro</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Desde 2010, Cocimás ha sido sinónimo de excelencia en construcción y diseño. Transformamos espacios ordinarios en obras maestras habitables, fusionando innovación, calidad y compromiso.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Nuestro equipo de profesionales altamente calificados trabaja incansablemente para materializar tus sueños, garantizando resultados que superan expectativas.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:border-gold-500 transition-all duration-300"
                                >
                                    <div className="text-4xl mb-3">{value.icon}</div>
                                    <h3 className="font-display font-bold text-gold-500 mb-2">{value.title}</h3>
                                    <p className="text-gray-400 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/nosotros"
                            className="inline-flex items-center gap-3 bg-gold-500 text-black-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-gold-400 transition-all duration-300 group"
                        >
                            Conoce Más Sobre Nosotros
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-gold-500 via-transparent to-gold-500/20 rounded-2xl blur opacity-30"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                            <img
                                alt="Equipo Cocimás"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-display font-bold text-2xl">
                                    Más de <span className="text-gold-500">500 proyectos</span> completados
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
