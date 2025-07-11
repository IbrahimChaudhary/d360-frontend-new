// types/product-services/product-services.ts
import { SeoComponent } from "../home/home";

// Fee Item Component (for items array)
export interface FeeFAQRow {
  id: number;
  description: string;
  value: string;
}

// Header Component (separate component as you created in Strapi)
export interface FeeHeader {
  id: number;
  description: string;
  value: string;
}

// Fee Section Component (main FAQ section)
export interface FeeFAQSection {
  id: number;
  title: string;
  header?: FeeHeader; // This matches your Strapi component structure
  items: FeeFAQRow[];
}

/** The shape of the `data` object returned by your Fees endpoint */
export interface FeesData {
  id: number;
  documentId: string;

  MainTitle: string;
  Description: string;

  // Dynamic fee sections
  faqs: FeeFAQSection[]; 



  SEO: SeoComponent[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

/** Full wrapper for the Strapi response */
export interface FeesResponse {
  data: FeesData;
  meta: Record<string, unknown>;
}