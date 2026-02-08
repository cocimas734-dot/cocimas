import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPreview from './components/BlogPreview';
import AboutPreview from './components/AboutPreview';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import NewsDetailPage from './pages/NewsDetailPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <BlogPreview />
        <AboutPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black-900 text-gray-100 font-sans selection:bg-gold-500 selection:text-black-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<NewsDetailPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;