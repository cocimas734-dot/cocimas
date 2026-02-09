import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { getPublishedNews } from '../services/supabase';

const BlogPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const ARTICLES_PER_PAGE = 6;

    const categories = ['Todos', 'Tendencias (Moda Actual)', 'Evergreen (Vigencia)', 'SEO Local (Posicionamiento Regional)'];

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            const data = await getPublishedNews();
            const formattedArticles = data.map((item: any) => ({
                id: item.id,
                category: item.categoria || 'Tendencias',
                date: new Date(item.created_at).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                }).toUpperCase(),
                title: item.titulo,
                description: item.resumen,
                image: item.imagen_url || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
            }));
            setArticles(formattedArticles);
            setLoading(false);
        };

        fetchNews();
    }, []);

    const filteredArticles = activeCategory === 'Todos'
        ? articles
        : articles.filter(article => article.category.toLowerCase() === activeCategory.toLowerCase());

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

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
                    <div className="max-w-4xl">
                        {articles.length > 0 ? (
                            <>
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="bg-gold-500 text-black-900 font-black uppercase text-xs tracking-[0.2em] px-3 py-1">Destacado</span>
                                    <span className="text-gray-300 text-sm uppercase tracking-widest font-semibold border-l border-gold-500 pl-4">{articles[0].date}</span>
                                </div>
                                <h1 className="font-display font-black text-3xl sm:text-5xl md:text-7xl text-white mb-6 uppercase leading-[1.1] tracking-tight drop-shadow-2xl">
                                    {articles[0].title.split(' ').slice(0, 7).join(' ')}
                                    {articles[0].title.split(' ').length > 7 ? '...' : ''}
                                </h1>
                                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light border-l-4 border-gold-500 pl-6">
                                    {articles[0].description}
                                </p>
                                <Link to={`/blog/${articles[0].id}`} className="group/btn inline-flex items-center space-x-3 text-gold-500 font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer text-sm sm:text-base">
                                    <span className="border-b-2 border-gold-500 group-hover/btn:border-white pb-1 transition-colors">Leer Artículo Completo</span>
                                    <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                                </Link>
                            </>
                        ) : (
                            <div className="animate-pulse">
                                <div className="h-8 bg-gray-800 w-32 mb-6"></div>
                                <div className="h-16 bg-gray-800 w-full mb-6"></div>
                                <div className="h-24 bg-gray-800 w-2/3 mb-10"></div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Articles Section */}
            <section className="py-24 bg-black-900 relative">
                <div className="absolute top-20 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header with Filters */}
                    <div className="flex flex-wrap items-center justify-between mb-16 border-b border-gray-800 pb-6 gap-6">
                        <h2 id="articles-header" className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                            Últimas <span className="text-gold-500">Noticias</span>
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
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
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {paginatedArticles.map((article) => (
                                <article
                                    key={article.id}
                                    className="group relative flex flex-col h-full bg-gray-900/50 border border-gray-800 hover:border-gold-500/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,190,38,0.3)] hover:-translate-y-2"
                                >
                                    <Link to={`/blog/${article.id}`} className="relative h-64 overflow-hidden block">
                                        <span className="absolute top-4 left-4 z-10 bg-black-900/80 backdrop-blur border border-gold-500 text-gold-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                                            {article.category}
                                        </span>
                                        <img
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={article.image}
                                        />
                                    </Link>

                                    <div className="flex-1 p-8 flex flex-col">
                                        <div className="mb-4 text-xs text-gray-500 font-mono flex items-center gap-2">
                                            <span className="text-sm text-gold-500">🕒</span> {article.date}
                                        </div>
                                        <Link to={`/blog/${article.id}`}>
                                            <h3 className="font-display font-bold text-2xl text-gold-500 mb-4 leading-tight group-hover:underline decoration-gold-500 underline-offset-4">
                                                {article.title}
                                            </h3>
                                        </Link>
                                        <p className="text-white font-light text-sm leading-relaxed mb-6 flex-1 opacity-90">
                                            {article.description}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-gray-800 flex justify-between items-center">
                                            <Link
                                                to={`/blog/${article.id}`}
                                                className="text-white text-xs font-bold uppercase tracking-widest group-hover:text-gold-500 transition-colors flex items-center gap-1"
                                            >
                                                Leer Más <span className="transition-transform group-hover:translate-x-1">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex justify-center space-x-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => {
                                        setCurrentPage(page);
                                        window.scrollTo({ top: document.getElementById('articles-header')?.offsetTop ? (document.getElementById('articles-header')!.offsetTop - 100) : 0, behavior: 'smooth' });
                                    }}
                                    className={`w-12 h-12 flex items-center justify-center border font-bold transition-all ${currentPage === page
                                        ? 'bg-gold-500 text-black-900 border-gold-500'
                                        : 'border-gray-800 text-gray-400 hover:border-gold-500 hover:text-gold-500'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => {
                                        setCurrentPage(prev => prev + 1);
                                        window.scrollTo({ top: document.getElementById('articles-header')?.offsetTop ? (document.getElementById('articles-header')!.offsetTop - 100) : 0, behavior: 'smooth' });
                                    }}
                                    className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-400 hover:border-gold-500 hover:text-gold-500 transition-all font-bold"
                                >
                                    →
                                </button>
                            )}
                        </div>
                    )}
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
