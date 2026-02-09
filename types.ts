import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  keywords: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  description?: string;
}

export interface ContactInfo {
  phonePrimary: string;
  phoneSecondary: string;
  emailPrimary?: string;
  emailSecondary?: string;
  address: string;
  whatsapp: string;
  instagram: string;
  tiktok: string;
  phone: string; // Alias for phonePrimary
  email?: string; // Alias for emailPrimary
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}