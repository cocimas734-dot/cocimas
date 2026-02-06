import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;