export interface Appointment {
  id: string;
  name: string;
  whatsapp: string;
  date: string;
  shift: 'manhã' | 'tarde' | 'noite';
  notes?: string;
  status: 'pendente' | 'confirmado' | 'cancelado';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
}
