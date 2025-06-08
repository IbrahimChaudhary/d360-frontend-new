import { StrapiMediaData } from "../about/about";

// types/payments.ts

/**
 * Represents the "payments" record returned by Strapi.
 */
export interface PaymentsData {
    id: number;
    documentId: string;
    MainTitle: string;
    Title1: string;
    Title2: string;
    FAQTitle1: string;
    FAQDescription1: string;
    FAQTitle2: string;
    FAQDescription2: string;
    FAQTitle3: string;
    FAQDescription3: string;
    FAQTitle4: string;
    FAQDescription4: string;
    createdAt: string;   // ISO timestamp, e.g. "2025-05-16T08:03:14.845Z"
    updatedAt: string;   // ISO timestamp
    publishedAt: string; // ISO timestamp
    MainTitle1: string;
    MainTitle2: string;
    Way1Head: string;
    Way1Des: string;
    Way2Head: string;
    Way2Des: string;
    Way3Head: string;
    Way3Des: string;
    FAQ: string;
    imges: StrapiMediaData;
    Way1Img:StrapiMediaData
    Way2Img:StrapiMediaData
    Way3Img:StrapiMediaData
    Way1Icon:StrapiMediaData
    Way2Icon:StrapiMediaData
    Way3Icon:StrapiMediaData
  }
  
  /**
   * The full response envelope from Strapi's REST API for the "payments" endpoint.
   */
  export interface PaymentsResponse {
    data: PaymentsData;
    meta: Record<string, unknown>;
  }
  