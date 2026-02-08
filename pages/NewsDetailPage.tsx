import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getNewsById } from '../services/supabase';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';

const NewsDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            if (id) {
                setLoading(true);
                const data = await getNewsById(id);
                setArticle(data);
                setLoading(false);
                window.scrollTo(0, 0);
            }
        };
        fetchArticle();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black-900 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold-500"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-black-900 text-white flex flex-col justify-center items-center px-4">
                <h2 className="text-4xl font-display mb-6">Artículo no encontrado</h2>
                <Link to="/blog" className="text-gold-500 border-b border-gold-500 pb-1">Volver al Blog</Link>
            </div>
        );
    }

    const formattedDate = new Date(article.created_at).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-black-900 text-gray-100 font-sans">
            <Navbar />

            {/* Article Hero */}
            <header className="relative w-full min-h-[60vh] flex items-end pt-24 pb-12 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt={article.titulo}
                        className="w-full h-full object-cover"
                        src={article.imagen_url || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000'}
                    />
                    <div className="absolute inset-0 bg-black-900/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-black-900/20 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-gold-500 text-black-900 font-black uppercase text-[10px] tracking-[0.2em] px-3 py-1">
                                {article.categoria || 'Tendencias'}
                            </span>
                            <div className="flex items-center text-gray-400 text-sm font-light">
                                <Clock className="w-4 h-4 mr-2 text-gold-500" />
                                {formattedDate}
                            </div>
                        </div>

                        {(() => {
                            const wordCount = (article.titulo || '').split(' ').length;
                            const isLong = wordCount > 5;

                            if (isLong) {
                                return (
                                    <h1 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] tracking-tight drop-shadow-2xl max-w-3xl">
                                        {article.titulo}
                                    </h1>
                                );
                            } else {
                                return (
                                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-tight tracking-tight drop-shadow-2xl">
                                        {article.titulo}
                                    </h1>
                                );
                            }
                        })()}
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <main className="py-20 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Excerpt/Resumen */}
                    <div className="border-l-4 border-gold-500 pl-8 mb-16">
                        <p className="text-xl sm:text-2xl text-white font-light italic leading-relaxed opacity-90">
                            {article.resumen}
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert prose-gold max-w-none">
                        <div className="text-gray-300 text-lg leading-[1.8] font-light space-y-8 whitespace-pre-wrap">
                            {article.contenido && article.contenido.split('\n').map((line: string, index: number) => {
                                // Detectar subtítulos como ***Texto***
                                const subtitleMatch = line.match(/\*\*\*(.*?)\*\*\*/);
                                if (subtitleMatch) {
                                    return (
                                        <div key={index} className="pt-4 pb-2">
                                            <span className="text-gold-500 font-bold italic text-xl block">
                                                {subtitleMatch[1]}
                                            </span>
                                        </div>
                                    );
                                }
                                return <p key={index}>{line}</p>;
                            })}
                        </div>
                    </div>

                    {/* Meta/Footer Article */}
                    <div className="mt-20 pt-10 border-t border-gray-800 flex flex-wrap justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-2">
                            {article.palabras_clave && article.palabras_clave.map((tag: string) => (
                                <span key={tag} className="text-[10px] text-gray-500 border border-gray-800 px-3 py-1 rounded-full uppercase tracking-tighter">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                <span className="text-xs font-bold uppercase tracking-widest">Compartir</span>
                            </button>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 bg-gray-900/50 border border-gray-800 p-10 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
                        <h3 className="font-display font-bold text-2xl text-white mb-4">¿Te ha inspirado este artículo?</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            En Cocimás transformamos visiones en realidades. Déjanos ayudarte a diseñar el espacio que siempre soñaste.
                        </p>
                        <Link
                            to="/contacto"
                            className="inline-block bg-gold-500 text-black-900 font-black uppercase tracking-widest px-10 py-4 hover:bg-white transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,190,38,0.4)]"
                        >
                            Solicitar Asesoría VIP
                        </Link>
                    </div>

                    {/* Back to Blog at bottom */}
                    <div className="mt-16 text-center">
                        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-gold-500 transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-widest">Volver a todas las noticias</span>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NewsDetailPage;
