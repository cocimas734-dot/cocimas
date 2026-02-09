import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, MessageSquare, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div>
            <h2 className="text-gold-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">Hablemos de tu Proyecto</h3>
            <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
              Estamos listos para hacer realidad tus ideas. Visítanos en nuestra sede en Carabobo o contáctanos por nuestros canales digitales.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-black-900 p-3 border border-white/10">
                  <MapPin className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Ubicación</h5>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black-900 p-3 border border-white/10">
                  <Phone className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Escríbenos</h5>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {CONTACT_INFO.phonePrimary}
                  </a>
                  <p className="text-gray-400 text-sm">{CONTACT_INFO.phoneSecondary}</p>
                </div>
              </div>

            </div>

            <div className="mt-12 flex gap-4">
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-bold rounded-sm hover:opacity-90 transition-opacity">
                <MessageSquare size={20} />
                WhatsApp
              </a>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-tr from-yellow-500 via-purple-500 to-blue-500 text-white px-6 py-3 font-bold rounded-sm hover:opacity-90 transition-opacity">
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>

          {/* Map / Image Side */}
          <div className="relative h-[600px] bg-black-800 border border-white/5">
            {/* Using a static map image for style consistency or actual iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.377626998463!2d-67.9355!3d10.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDExJzAwLjAiTiA2N8KwNTYnMDAuMCJX!5e0!3m2!1sen!2sve!4v1620000000000!5m2!1sen!2sve"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen={true}
              loading="lazy"
              title="Ubicación Cocimás"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-gold-500 text-black-900 px-4 py-2 font-bold text-xs">
              CARABOBO - VENEZUELA
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;