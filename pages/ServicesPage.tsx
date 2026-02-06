import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
    const benefits = [
        {
            icon: '✓',
            title: 'Garantía Certificada',
            description: 'Ofrecemos hasta 10 años de garantía escrita en mano de obra y materiales de primera calidad.'
        },
        {
            icon: '✏️',
            title: 'Diseño Personalizado',
            description: 'Adaptamos cada detalle a tu estilo de vida, creando espacios únicos que reflejan tu personalidad.'
        },
        {
            icon: '⚙️',
            title: 'Profesionales Expertos',
            description: 'Un equipo multidisciplinario seleccionado rigurosamente con más de 15 años de experiencia.'
        }
    ];

    const projects = [
        {
            id: 1,
            category: 'Residencial',
            title: 'Cocinas Modernas',
            description: 'Diseño minimalista con acabados en mármol italiano y grifería de oro cepillado.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            category: 'Wellness',
            title: 'Baños de Lujo',
            description: 'Spa privado en casa con revestimientos de piedra natural e iluminación ambiental.',
            image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="min-h-screen bg-black-900 text-gray-100 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-black-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Column - Content */}
                        <div className="order-2 lg:order-1">
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-0.5 w-12 bg-gold-500"></div>
                                    <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Excelencia en Reformas</span>
                                </div>
                                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-8">
                                    CALIDAD QUE <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-yellow-200">PERDURA.</span>
                                </h1>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    En Cocimás, no solo renovamos espacios; creamos ambientes donde la vida sucede. Fusionamos estética premium con funcionalidad absoluta.
                                </p>
                            </div>

                            {/* Benefits Cards */}
                            <div className="flex flex-col gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-start gap-5 group cursor-default hover:border-gold-500 hover:shadow-[0_4px_20px_rgba(255,190,38,0.15)] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <span className="text-gold-500 text-4xl group-hover:scale-110 transition-transform duration-300">
                                                {benefit.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-xl text-gold-500 mb-2 group-hover:text-white transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="order-1 lg:order-2 relative lg:sticky lg:top-32">
                            <div className="absolute -inset-1 bg-gradient-to-br from-gold-500 via-transparent to-gold-500/20 rounded-2xl blur opacity-30"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 aspect-[4/5] lg:aspect-auto lg:h-[800px]">
                                <img
                                    alt="Arquitecto trabajando en planos"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-700 ease-in-out hover:scale-105"
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black-900/80 backdrop-blur-md border-l-4 border-gold-500 rounded-r-lg">
                                    <p className="text-white font-display font-bold text-lg">
                                        "Transformamos visiones en realidades tangibles."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gold-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-black-900 mb-8 uppercase leading-tight tracking-tight">
                        ¿Listo para elevar <br />tu estándar de vida?
                    </h2>
                    <p className="text-black-900/80 text-xl font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                        El hogar que mereces está a una decisión de distancia. Agenda una consultoría gratuita y descubre el potencial de tu espacio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contacto"
                            className="group bg-black-900 text-white hover:bg-gray-900 px-10 py-5 font-bold text-lg shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                            Solicitar Presupuesto
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link
                            to="/proyectos"
                            className="bg-transparent border-2 border-black-900 text-black-900 hover:bg-black-900 hover:text-white hover:border-black-900 px-10 py-5 font-bold text-lg transition flex items-center justify-center gap-3"
                        >
                            <span>+</span>
                            Ver Catálogo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-24 bg-gray-900/50 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-sm block mb-2">Portfolio Selecto</span>
                            <h2 className="font-display font-bold text-4xl text-white">Transformaciones Recientes</h2>
                        </div>
                        <Link
                            to="/proyectos"
                            className="text-white hover:text-gold-500 transition font-bold border-b-2 border-gold-500 pb-1 flex items-center gap-2 group"
                        >
                            Ver todos los proyectos
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-xl bg-black-900 border border-white/10 hover:border-gold-500/50 transition-colors duration-500"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        alt={project.title}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        src={project.image}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/50 to-transparent opacity-90 transition duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition duration-500">
                                        <span className="text-gold-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-white font-display font-bold text-2xl sm:text-3xl mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm max-w-sm opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
