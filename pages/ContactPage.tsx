import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí se puede integrar con un servicio de email o backend
        console.log('Form submitted:', formData);
        alert('Mensaje enviado. Nos pondremos en contacto pronto.');
    };

    return (
        <div className="min-h-screen bg-black-900 text-gray-100 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="bg-gold-500 w-full relative overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <div className="text-center">
                        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-8xl text-black-900 mb-6 uppercase tracking-tighter leading-[1] sm:leading-none">
                            Hablemos de<br />Tu Visión
                        </h1>
                        <div className="w-24 h-2 bg-black-900 mx-auto mb-8"></div>
                        <p className="max-w-2xl mx-auto text-xl text-black-900 font-bold tracking-tight uppercase">
                            Donde la ingeniería se encuentra con el arte.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                    <svg className="relative block w-full h-[60px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-black-900" d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
                    </svg>
                </div>
            </header>

            {/* Contact Form Section */}
            <section className="py-20 bg-black-900 relative overflow-hidden" id="contact-form">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block border-l-4 border-gold-500 pl-4">
                                    Información de Contacto
                                </span>
                                <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
                                    INICIA TU <br /><span className="text-gold-500">TRANSFORMACIÓN</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Estamos listos para materializar proyectos de alto impacto. Contáctanos para agendar una consultoría personalizada con nuestros expertos en arquitectura e ingeniería.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center bg-gray-900 group-hover:bg-gold-500 group-hover:shadow-[0_0_15px_rgba(255,190,38,0.4)] transition-all duration-300">
                                        <span className="text-gold-500 text-2xl group-hover:text-black-900 transition-colors">📞</span>
                                    </div>
                                    <div className="ml-6">
                                        <p className="text-xs text-gold-500 font-bold uppercase tracking-wider mb-1">Escríbenos</p>
                                        <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-2xl text-white font-display font-bold group-hover:text-gold-500 transition-colors">
                                            {CONTACT_INFO.phone}
                                        </a>
                                    </div>
                                </div>


                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-gold-500/30 flex items-center justify-center bg-gray-900 group-hover:bg-gold-500 group-hover:shadow-[0_0_15px_rgba(255,190,38,0.4)] transition-all duration-300">
                                        <span className="text-gold-500 text-2xl group-hover:text-black-900 transition-colors">📍</span>
                                    </div>
                                    <div className="ml-6">
                                        <p className="text-xs text-gold-500 font-bold uppercase tracking-wider mb-1">Ubicación</p>
                                        <p className="text-xl text-white font-display font-bold leading-tight">
                                            {CONTACT_INFO.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-8 border-t border-gray-800">
                                <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Síguenos en Redes</p>
                                <div className="flex space-x-6">
                                    <a
                                        href={CONTACT_INFO.social.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gold-500 hover:border-gold-500 hover:bg-gold-500 hover:text-black-900 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,190,38,0.4)]"
                                    >
                                        <span className="text-lg">f</span>
                                    </a>
                                    <a
                                        href={CONTACT_INFO.social.instagram}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gold-500 hover:border-gold-500 hover:bg-gold-500 hover:text-black-900 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,190,38,0.4)]"
                                    >
                                        <span className="text-lg">📷</span>
                                    </a>
                                    <a
                                        href={CONTACT_INFO.social.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gold-500 hover:border-gold-500 hover:bg-gold-500 hover:text-black-900 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,190,38,0.4)]"
                                    >
                                        <span className="text-lg">in</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-900/50 p-8 lg:p-12 border border-gray-800 backdrop-blur-sm relative">
                            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-500/50"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-500/50"></div>

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider mb-8">
                                    Envíanos un mensaje
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label htmlFor="firstName" className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            className="w-full bg-black-900/50 border border-gold-500/40 focus:border-gold-500 text-white px-4 py-3 outline-none transition-all duration-300 hover:border-gold-500/70 focus:ring-1 focus:ring-gold-500 placeholder-gray-600"
                                            required
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="lastName" className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">
                                            Apellido
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Tu apellido"
                                            className="w-full bg-black-900/50 border border-gold-500/40 focus:border-gold-500 text-white px-4 py-3 outline-none transition-all duration-300 hover:border-gold-500/70 focus:ring-1 focus:ring-gold-500 placeholder-gray-600"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label htmlFor="email" className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="correo@ejemplo.com"
                                        className="w-full bg-black-900/50 border border-gold-500/40 focus:border-gold-500 text-white px-4 py-3 outline-none transition-all duration-300 hover:border-gold-500/70 focus:ring-1 focus:ring-gold-500 placeholder-gray-600"
                                        required
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="phone" className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+58 ..."
                                        className="w-full bg-black-900/50 border border-gold-500/40 focus:border-gold-500 text-white px-4 py-3 outline-none transition-all duration-300 hover:border-gold-500/70 focus:ring-1 focus:ring-gold-500 placeholder-gray-600"
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="message" className="block text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                        rows={4}
                                        className="w-full bg-black-900/50 border border-gold-500/40 focus:border-gold-500 text-white px-4 py-3 outline-none transition-all duration-300 hover:border-gold-500/70 focus:ring-1 focus:ring-gold-500 placeholder-gray-600 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold-500 text-black-900 font-display font-black uppercase text-lg py-4 px-8 tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,190,38,0.4)] hover:shadow-[0_0_25px_rgba(255,190,38,0.6)] flex items-center justify-center group"
                                >
                                    Enviar Mensaje
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-72 sm:h-[500px] relative bg-gray-900 border-t border-gray-800">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.4!2d-68.0!3d10.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEyJzAwLjAiTiA2OMKwMDAnMDAuMCJX!5e0!3m2!1ses!2sve!4v1234567890!5m2!1ses!2sve"
                    className="w-full h-full border-0 grayscale"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                        <div className="w-16 h-16 bg-gold-500/20 rounded-full animate-ping absolute"></div>
                        <div className="w-12 h-12 bg-black-900 rounded-full border-4 border-gold-500 shadow-[0_0_25px_rgba(255,190,38,0.6)] flex items-center justify-center relative z-10">
                            <span className="text-gold-500 text-2xl">🏗️</span>
                        </div>
                        <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-black-900 text-gold-500 text-xs font-bold uppercase tracking-wider py-1 px-3 border border-gold-500/50 whitespace-nowrap">
                            Oficinas Cocimás
                        </div>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black-900 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
