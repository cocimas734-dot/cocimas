import {
  Hammer,
  PaintRoller,
  Zap,
  Ruler,
  DoorOpen,
  Grid
} from 'lucide-react';
import { ContactInfo, NavItem, Service, Project } from './types';

export const CONTACT_INFO: ContactInfo = {
  phonePrimary: "0412-2901033",
  phoneSecondary: "0424-4280181",
  emailPrimary: "cocimas357@gmail.com",
  emailSecondary: "cocimasclientes@gmail.com",
  address: "Calle Principal, Centro Industrial Inversiones Trinacria, Nave Unica Local Galpon Nro G-2, Urb Industrial Los Guayos, Carabobo, Zona Postal 2010",
  whatsapp: "https://wa.me/584122901033",
  instagram: "https://www.instagram.com/cocimas357",
  tiktok: "https://www.tiktok.com/@cocimas357",
  phone: "0412-2901033",
  email: "cocimas357@gmail.com",
  social: {
    facebook: "https://www.facebook.com/cocimas357",
    instagram: "https://www.instagram.com/cocimas357",
    linkedin: "https://www.linkedin.com/company/cocimas357"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'cocinas',
    title: 'Cocinas Integrales',
    description: 'Diseño y remodelación de cocinas modernas. Fabricación de mobiliario a medida, topes de granito y optimización de espacios.',
    icon: Grid,
    keywords: ['Cocinas empotradas', 'Remodelación de cocina', 'Gabinetes']
  },
  {
    id: 'construccion',
    title: 'Obra Civil y Estructuras',
    description: 'Ejecución de proyectos de construcción, ampliaciones y reformas mayores. Calidad estructural garantizada.',
    icon: Hammer,
    keywords: ['Construcción Valencia', 'Ampliaciones', 'Albañilería']
  },
  {
    id: 'pintura',
    title: 'Pintura y Acabados',
    description: 'Aplicación de pintura profesional para interiores y exteriores. Acabados de primera en paredes y techos.',
    icon: PaintRoller,
    keywords: ['Pintura de casa', 'Impermeabilización', 'Estuco']
  },
  {
    id: 'electricidad',
    title: 'Electricidad e Iluminación',
    description: 'Instalaciones eléctricas residenciales e industriales. Proyectos de iluminación LED y mantenimiento.',
    icon: Zap,
    keywords: ['Electricista remodelación', 'Cableado', 'Iluminación LED']
  },
  {
    id: 'carpinteria',
    title: 'Carpintería y Muebles',
    description: 'Diseño y fabricación de closets, vestidores, puertas y muebles de madera personalizados.',
    icon: Ruler,
    keywords: ['Closets modernos', 'Puertas de madera', 'Muebles a medida']
  },
  {
    id: 'vidrios',
    title: 'Puertas y Ventanas',
    description: 'Instalación de ventanas panorámicas, puertas de seguridad y cerramientos de vidrio.',
    icon: DoorOpen,
    keywords: ['Ventanas panorámicas', 'Puertas de seguridad', 'Vidrios']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Las Lomas",
    category: "Residencial",
    location: "Valencia, Carabobo",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    description: "Remodelación integral con mármol negro y acabados dorados."
  },
  {
    id: 2,
    title: "Torre Zen",
    category: "Comercial",
    location: "San Diego, Carabobo",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "Oficinas ejecutivas de alto rendimiento."
  },
  {
    id: 3,
    title: "Penthouse Elite",
    category: "Remodelación",
    location: "Naguanagua, Carabobo",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    description: "Automatización y diseño minimalista oscuro."
  },
  {
    id: 4,
    title: "Villa Sol",
    category: "Residencial",
    location: "Valencia Norte",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "Arquitectura sostenible en concreto aparente."
  },
  {
    id: 5,
    title: "Nave A1",
    category: "Industrial",
    location: "Los Guayos, Carabobo",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    description: "Estructuras metálicas de gran envergadura."
  },
  {
    id: 6,
    title: "Casa Mínima",
    category: "Residencial",
    location: "Valencia, Carabobo",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800",
    description: "Módulos prefabricados de alta gama."
  }
];