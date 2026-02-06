import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black-900/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-black-900/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex flex-col">
              {/* Simulating the logo from manual with text */}
              <div className="flex items-center gap-1 font-black text-2xl tracking-tighter text-white">
                <span className="text-white">COCI</span>
                <span className="text-gold-500">MÁS</span>
              </div>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Construcción & Decoración</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => {
                if (item.href === '#portfolio') {
                  return (
                    <Link
                      key={item.label}
                      to="/proyectos"
                      className="text-gray-300 hover:text-gold-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  );
                }
                if (item.href === '#contact') {
                  return (
                    <Link
                      key={item.label}
                      to="/contacto"
                      className="text-gray-300 hover:text-gold-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  );
                }
                if (item.href === '#about') {
                  return (
                    <Link
                      key={item.label}
                      to="/nosotros"
                      className="text-gray-300 hover:text-gold-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  );
                }
                if (item.href === '#blog') {
                  return (
                    <Link
                      key={item.label}
                      to="/blog"
                      className="text-gray-300 hover:text-gold-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        if (!isHomePage) {
                          window.location.href = '/' + item.href;
                        } else {
                          handleNavClick(item.href);
                        }
                      }
                    }}
                    className="text-gray-300 hover:text-gold-500 hover:scale-105 px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200"
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-gold-500 text-black-900 hover:bg-white hover:text-black-900 font-bold py-2.5 px-6 rounded-none uppercase text-sm tracking-wide transition-colors duration-300 flex items-center gap-2"
            >
              <Phone size={16} />
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-500 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black-800 border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
              if (item.href === '#portfolio') {
                return (
                  <Link
                    key={item.label}
                    to="/proyectos"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-gold-500 block px-3 py-4 rounded-md text-base font-medium text-center border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.href === '#contact') {
                return (
                  <Link
                    key={item.label}
                    to="/contacto"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-gold-500 block px-3 py-4 rounded-md text-base font-medium text-center border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.href === '#about') {
                return (
                  <Link
                    key={item.label}
                    to="/nosotros"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-gold-500 block px-3 py-4 rounded-md text-base font-medium text-center border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.href === '#blog') {
                return (
                  <Link
                    key={item.label}
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-gold-500 block px-3 py-4 rounded-md text-base font-medium text-center border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      if (!isHomePage) {
                        window.location.href = '/' + item.href;
                      } else {
                        handleNavClick(item.href);
                      }
                    }
                  }}
                  className="text-gray-300 hover:text-gold-500 block px-3 py-4 rounded-md text-base font-medium text-center border-b border-white/5"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={CONTACT_INFO.whatsapp}
              className="block w-full text-center bg-gold-500 text-black-900 font-bold mt-4 py-3 uppercase"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;