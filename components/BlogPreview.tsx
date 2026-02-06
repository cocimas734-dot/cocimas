import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogPreview: React.FC = () => {
    const featuredPosts = [
        {
            id: 1,
            category: 'Tendencias',
            date: '22 OCT, 2023',
            title: 'Minimalismo Oscuro: Menos es Más',
            excerpt: 'Analizamos cómo la eliminación de elementos superfluos y el uso de paletas negras crean espacios de calma absoluta.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            category: 'Materiales',
            date: '18 OCT, 2023',
            title: 'El Regreso del Concreto Aparente',
            excerpt: 'Una mirada profunda a la brutalidad estética y la versatilidad del concreto en las villas modernas de lujo.',
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 3,
            category: 'Cocinas',
            date: '10 OCT, 2023',
            title: 'Islas de Cocina Esculturales',
            excerpt: 'Transformando el corazón del hogar con piezas monolíticas que funcionan como arte funcional.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section className="py-24 bg-black-900 relative overflow-hidden">
            <div className="absolute top-20 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-gray-800 pb-6">
                    <div>
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-sm block mb-2">Últimas Noticias</span>
                        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                            Blog <span className="text-gold-500">Cocimás</span>
                        </h2>
                    </div>
                    <Link
                        to="/blog"
                        className="text-white hover:text-gold-500 transition font-bold border-b-2 border-gold-500 pb-1 flex items-center gap-2 group"
                    >
                        Ver todos los artículos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group relative flex flex-col h-full bg-gray-900/50 border border-gray-800 hover:border-gold-500/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,190,38,0.3)] hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <span className="absolute top-4 left-4 z-10 bg-black-900/80 backdrop-blur border border-gold-500 text-gold-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                                    {post.category}
                                </span>
                                <img
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={post.image}
                                />
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="mb-3 text-xs text-gray-500 font-mono flex items-center gap-2">
                                    <span className="text-sm text-gold-500">🕒</span> {post.date}
                                </div>
                                <h3 className="font-display font-bold text-xl text-gold-500 mb-3 leading-tight group-hover:underline decoration-gold-500 underline-offset-4">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-800">
                                    <Link
                                        to="/blog"
                                        className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-gold-500 transition-colors flex items-center gap-1"
                                    >
                                        Leer Más <span className="transition-transform group-hover:translate-x-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
