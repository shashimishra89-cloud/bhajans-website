// Content types for the Bhakti website

export interface BaseContent {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  featured?: boolean;
  seo?: {
    keywords: string[];
    description: string;
  };
}

export interface Section {
  type: 'shloka' | 'story' | 'bhajan' | 'aarti' | 'mantra' | 'ritual';
  title: string;
  content: string | ShlokaContent | BhajanContent;
}

export interface ShlokaContent {
  sanskrit: string;
  english: string;
  meaning: string;
}

export interface BhajanContent {
  hindi: string;
  english: string;
  meaning: string;
}

export interface Festival extends BaseContent {
  duration: string;
  significance?: string;
  rituals?: string[];
  sections: Section[];
}

export interface Aarti extends BaseContent {
  deity: string;
  language: string;
  sections: Section[];
}

export interface Bhajan extends BaseContent {
  deity: string;
  language: string;
  theme?: string;
  sections: Section[];
}

export interface Mantra extends BaseContent {
  deity: string;
  purpose: string;
  sections: Section[];
}

export interface Category {
  name: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  path: string;
}

export type ContentType = Festival | Aarti | Bhajan | Mantra;
