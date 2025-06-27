// types/footer.ts

import { StrapiMediaData } from "../about/about";

/**
 * Represents the actual “footer” record returned by Strapi.
 */
export interface FooterData {
    id: number;
    documentId: string;
    Title1: string;
    Title2: string;
    Title3: string;
    Title4: string;
    Title5: string;
    Title6: string;
    Title7: string;
    Title8: string;
    Title1Url:string
    Title2Url:string
    Title3Url:string
    Title4Url:string
    Title5Url:string
    Title6Url:string
    Title7Url:string
    Title8Url:string
    Follow: string;
    International: string;
    InternationalDes: string;
    Exchange: string;
    ExchangeDes: string;
    logo:StrapiMediaData
    FooterDes: string;
    locale: string;
    createdAt: string;   // ISO timestamp, e.g. "2025-06-05T21:38:09.412Z"
    updatedAt: string;   // ISO timestamp
    publishedAt: string; // ISO timestamp
  }
  
  /**
   * The full response envelope from Strapi’s REST API for the “footer” collection.
   */
  export interface FooterResponse {
    data: FooterData;
    meta: Record<string, unknown>; // Usually an empty object, but can contain pagination/info if applicable
  }
  