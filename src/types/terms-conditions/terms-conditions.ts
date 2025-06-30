import { SeoComponent } from "../home/home";

/** The main Strapi response wrapper for the Terms and Conditions page */
export interface TermsConditionsResponse {
    data: TermsConditionsData;
    meta: Record<string, any>;
  }
  
  /** All the fields for the Terms and Conditions page Data */
  export interface TermsConditionsData {
    id: number;
    documentId: string;
    createdAt: string;     // ISO timestamp
    updatedAt: string;     // ISO timestamp
    publishedAt: string;   // ISO timestamp
  
    /** Section headings and content */
    Title: string;
    Content:string
    SEO: SeoComponent[];

  }
  