import { SeoComponent } from "../home/home";

/** The main Strapi response wrapper for the Security Awareness page */
export interface SecurityAwarenessResponse {
    data: SecurityAwarenessData;
    meta: Record<string, any>;
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
    FAQTitle1: string;
    FAQDescription1: string;
    FAQTitle2: string;
    FAQDescription2: string;
    FAQTitle3: string;
    FAQDescription3: string;
    FAQTitle4: string;
    FAQDescription4: string;
    FAQ: string;
    SEO: SeoComponent[];

  }
  