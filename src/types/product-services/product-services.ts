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
    FAQ3SubDescriptionC: string;
    FAQ3SubDescriptionCValue: string;
    FAQ3SubDescriptionD: string;
    FAQ3SubDescriptionDValue: string;
    FAQ3SubDescriptionE: string;
    FAQ3SubDescriptionEValue: string;
    FAQ3SubDescriptionF: string;
    FAQ3SubDescriptionFValue: string;
    FAQ3SubDescriptionG: string;
    FAQ3SubDescriptionGValue: string;
    FAQ3SubDescriptionH: string;
    FAQ3SubDescriptionHValue: string;
    FAQ3SubDescriptionI: string;
    FAQ3SubDescriptionIValue: string;
    FAQ3SubDescriptionJ: string;
    FAQ3SubDescriptionJValue: string;
    FAQ3SubDescriptionK: string;
    FAQ3SubDescriptionKValue: string;
    FAQ3SubDescriptionL: string;
    FAQ3SubDescriptionLValue: string;
    FAQ3SubDescriptionM: string;
    FAQ3SubDescriptionMValue: string;
    FAQ3SubDescriptionN: string;
    FAQ3SubDescriptionNValue: string;
    FAQ3SubDescriptionO: string;
    FAQ3SubDescriptionOValue: string;

  
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
  