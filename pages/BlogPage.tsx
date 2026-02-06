import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const categories = ['Todos', 'Tendencias', 'Materiales', 'Cocinas', 'Tecnología', 'Industrial', 'Arquitectura'];

    const articles = [
        {
            id: 1,
            category: 'Tendencias',
            date: '22 OCT, 2023',
            title: 'Minimalismo Oscuro: Menos es Más',
            description: 'Analizamos cómo la eliminación de elementos superfluos y el uso de paletas negras crean espacios de calma absoluta.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            category: 'Materiales',
            date: '18 OCT, 2023',
            title: 'El Regreso del Concreto Aparente',
            description: 'Una mirada profunda a la brutalidad estética y la versatilidad del concreto en las villas modernas de lujo.',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            category: 'Tecnología',
            date: '15 OCT, 2023',
            title: 'Domótica: El Hogar del Futuro',
            description: 'Sistemas integrados que responden a tu voz. La tecnología invisible que eleva el confort a otro nivel.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 4,
            category: 'Cocinas',
            date: '10 OCT, 2023',
            title: 'Islas de Cocina Esculturales',
            description: 'Transformando el corazón del hogar con piezas monolíticas que funcionan como arte funcional.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 5,
            category: 'Industrial',
            date: '05 OCT, 2023',
            title: 'Reutilización de Espacios Industriales',
            description: 'El arte de convertir antiguas naves en lofts de lujo conservando la esencia del acero y el ladrillo.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 6,
            category: 'Arquitectura',
            date: '01 OCT, 2023',
            title: 'La Nueva Era Prefabricada',
            description: 'Velocidad y precisión. Las casas modulares de alta gama rompen con los prejuicios tradicionales.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const filteredArticles = activeCategory === 'Todos'
        ? articles
        : articles.filter(article => article.category === activeCategory);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert('¡Gracias por suscribirte! Recibirás nuestras últimas noticias.');
    };

    return (
        <div className="min-h-screen bg-black-900 text-gray-100 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="relative w-full h-[80vh] min-h-[600px] overflow-hidden group">
                <div className="absolute inset-0">
                    <img
                        alt="Interior de lujo oscuro"
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black-900 via-black-900/70 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-20">
                    <div className="max-w-3xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="bg-gold-500 text-black-900 font-black uppercase text-xs tracking-[0.2em] px-3 py-1">Destacado</span>
                            <span className="text-gray-300 text-sm uppercase tracking-widest font-semibold border-l border-gold-500 pl-4">Octubre 24, 2023</span>
                        </div>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-white mb-6 uppercase leading-tight tracking-tight drop-shadow-2xl">
                            La Revolución del <span className="text-gold-500 italic">Mármol Negro</span> en el Diseño 2024
                        </h1>
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light border-l-4 border-gold-500 pl-6">
                            Descubre cómo las texturas oscuras y los acabados metálicos están redefiniendo el lujo en los espacios residenciales contemporáneos.
                        </p>
                        <a className="group/btn inline-flex items-center space-x-3 text-gold-500 font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer">
                            <span className="border-b-2 border-gold-500 group-hover/btn:border-white pb-1 transition-colors">Leer Artículo Completo</span>
                            <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Articles Section */}
            <section className="py-24 bg-black-900 relative">
                <div className="absolute top-20 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header with Filters */}
                    <div className="flex flex-wrap items-center justify-between mb-16 border-b border-gray-800 pb-6 gap-6">
                        <h2 className="font-display font-bold text-3xl text-white uppercase tracking-tight">
                            Últimas <span className="text-gold-500">Noticias</span>
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${activeCategory === category
                                            ? 'text-black-900 bg-gold-500 border-gold-500'
                                            : 'text-gray-400 border-gray-800 hover:border-gold-500 hover:text-gold-500 hover:bg-black-900'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group relative flex flex-col h-full bg-gray-900/50 border border-gray-800 hover:border-gold-500/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,190,38,0.3)] hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <span className="absolute top-4 left-4 z-10 bg-black-900/80 backdrop-blur border border-gold-500 text-gold-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                                        {article.category}
                                    </span>
                                    <img
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={article.image}
                                    />
                                </div>

                                <div className="flex-1 p-8 flex flex-col">
                                    <div className="mb-4 text-xs text-gray-500 font-mono flex items-center gap-2">
                                        <span className="text-sm text-gold-500">🕒</span> {article.date}
                                    </div>
                                    <h3 className="font-display font-bold text-2xl text-gold-500 mb-4 leading-tight group-hover:underline decoration-gold-500 underline-offset-4">
                                        {article.title}
                                    </h3>
                                    <p className="text-white font-light text-sm leading-relaxed mb-6 flex-1 opacity-90">
                                        {article.description}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-800 flex justify-between items-center">
                                        <a className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-gold-500 transition-colors flex items-center gap-1">
                                            Leer Más <span className="transition-transform group-hover:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-20 flex justify-center space-x-2">
                        <button className="w-12 h-12 flex items-center justify-center border border-gold-500 text-black-900 bg-gold-500 font-bold transition-transform hover:-translate-y-1">
                            1
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-400 hover:border-gold-500 hover:text-gold-500 transition-all">
                            2
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-400 hover:border-gold-500 hover:text-gold-500 transition-all">
                            3
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-400 hover:border-gold-500 hover:text-gold-500 transition-all">
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-black-900/50 border-t border-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFBE26 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-gold-500 text-5xl mb-4 block">✉️</span>
                    <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase mb-4 tracking-tight">
                        Mantente a la <span className="text-gold-500">Vanguardia</span>
                    </h2>
                    <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                        Recibe curaduría exclusiva de tendencias, arquitectura y diseño de interiores directamente en tu bandeja.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            className="flex-1 bg-black-900 border border-gray-700 text-white placeholder-gray-500 px-6 py-4 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                            placeholder="Tu correo electrónico"
                            type="email"
                            required
                        />
                        <button
                            className="bg-gold-500 text-black-900 font-black uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(255,190,38,0.5)] whitespace-nowrap"
                            type="submit"
                        >
                            Suscribirme
                        </button>
                    </form>
                    <p className="text-gray-600 text-xs mt-4">Sin spam. Solo diseño de alto nivel.</p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
