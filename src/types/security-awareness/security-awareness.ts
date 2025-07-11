import { SeoComponent } from "../home/home";

/** The main Strapi response wrapper for the Security Awareness page */
export interface SecurityAwarenessResponse {
    data: SecurityAwarenessData;
    meta: Record<string, any>;
  }

  export interface FAQComponent {
    id: number;
    question: string;
    answers: string;
  }
  
  /** All the fields for the Security Awareness page Data */
  export interface SecurityAwarenessData {
    id: number;
    documentId: string;
    createdAt: string;     // ISO timestamp
    updatedAt: string;     // ISO timestamp
    publishedAt: string;   // ISO timestamp
  
    /** Section headings and content */
    Title1: string;
    Title1Des1:string
    Title1Des2:string
    Title2: string;
    faqs?: FAQComponent[];
    FAQ: string;
    SEO: SeoComponent[];

  }
  