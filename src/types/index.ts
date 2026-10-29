export interface Plan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  period: 'mensal';
  originalPrice: number;
  currentPrice: number;
  monthlyEquivalent?: number;
  screens: number;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  state: string;
  device: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
