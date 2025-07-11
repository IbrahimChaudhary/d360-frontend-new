import { SeoComponent } from "../home/home";

// src/types/privacy-notice.ts

/** The shape of the `data` object returned by Strapi for the Privacy Notice page */
export interface PrivacyNoticeData {
  id: number;
  documentId: string;
  createdAt: string;   // ISO timestamp
  updatedAt: string;   // ISO timestamp
  publishedAt: string; // ISO timestamp
  locale: string;

  /** Main heading and introductory paragraphs */
  Heading: string;
  headingPara1: string;
  headingPara2: string;
  headingPara3: string;

  /** Full markdown content for the notice body */
  Title2: string;
  Title2Mobile: string;

  /** FAQ section */
  FAQ: string;
  faqs?: FAQComponent[];
  SEO: SeoComponent[];

}

export interface FAQComponent {
  id: number;
  question: string;
  answers: string;
}

/** Full wrapper for the Strapi response */
export interface PrivacyNoticeResponse {
  data: PrivacyNoticeData;
  meta: Record<string, unknown>;
}
