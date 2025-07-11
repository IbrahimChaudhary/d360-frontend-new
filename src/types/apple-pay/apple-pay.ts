// src/types/apple-pay.ts

import { StrapiMediaData } from "../about/about";

/** SEO component interface */
export interface SeoComponent {
  __component: string;
  metaTitle: string;
  metaDescription: string;
  shareImage: StrapiMediaData;
}
export interface FAQComponent {
  id: number;
  question: string;
  answers: string;
}

export interface AppleFAQComponent {
  id: number;
  question: string;
  answers: string;
}

export interface ApplePayData {
  id: number;
  documentId: string;

  MainTitle: string;

  Title1: string;
  Title2: string;
  Title1Des: string;

  // FAQs
  faqs?: FAQComponent[];
  applefaqs?: AppleFAQComponent[]; 
  SEO: SeoComponent[];

  createdAt: string;   // ISO timestamp
  updatedAt: string;   // ISO timestamp
  publishedAt: string; // ISO timestamp
  locale: string;
}

export interface ApplePayResponse {
  data: ApplePayData;
  meta: Record<string, unknown>;
}
