export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  companySub?: string;
  website?: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

export interface LanguageItem {
  language: string;
  level: string;
  description: string;
}
