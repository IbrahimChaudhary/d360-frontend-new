import { SeoComponent } from "../home/home";

// src/types/fees.ts

/** The shape of the `data` object returned by your Fees endpoint */
export interface FeesData {
    id: number;
    documentId: string;
  
    MainTitle: string;
    Description: string;
  
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  
    FAQTitle1: string;
    FAQ1DescriptionA: string;
    FAQ1DescriptionAValue: string;
    FAQ1SubDescriptionA: string;
    FAQ1SubDescriptionAValue: string;
    FAQ1SubDescriptionB: string;
    FAQ1SubDescriptionBValue: string;
  
    FAQTitle2: string;
    FAQ2DescriptionA: string;
    FAQ2DescriptionAValue: string;
    FAQ2SubDescriptionA: string;
    FAQ2SubDescriptionAValue: string;
    FAQ2SubDescriptionB: string;
    FAQ2SubDescriptionBValue: string;
  
    FAQTitle3: string;
    FAQ3DescriptionA: string;
    FAQ3DescriptionAValue: string;
    FAQ3SubDescriptionA: string;
    FAQ3SubDescriptionAValue: string;
    FAQ3SubDescriptionB: string;
    FAQ3SubDescriptionBValue: string;
  
    FAQTitle4: string;
    FAQ4DescriptionA: string;
    FAQ4DescriptionAValue: string;
    FAQ4SubDescriptionA: string;
    FAQ4SubDescriptionAValue: string;
    FAQ4SubDescriptionB: string;
    FAQ4SubDescriptionBValue: string;
    FAQ4SubDescriptionC: string;
    FAQ4SubDescriptionCValue: string;
    FAQ4SubDescriptionD: string;
    FAQ4SubDescriptionDValue: string;
    FAQ4SubDescriptionE: string;
    FAQ4SubDescriptionEValue: string;
    FAQ4SubDescriptionF: string;
    FAQ4SubDescriptionFValue: string;
    FAQ4SubDescriptionG: string;
    FAQ4SubDescriptionGValue: string;
    FAQ4SubDescriptionH: string;
    FAQ4SubDescriptionHValue: string;
    SEO: SeoComponent[];
  }
  
  /** Full wrapper for the Strapi response */
  export interface FeesResponse {
    data: FeesData;
    meta: Record<string, unknown>;
  }
  