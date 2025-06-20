import { StrapiMediaData } from "../about/about";

// types/international.ts

/**
 * Represents the "international transfers" record returned by Strapi.
 */
export interface InternationalData {
    id: number;
    documentId: string;
    createdAt: string;   // ISO timestamp, e.g. "2025-06-06T13:00:23.264Z"
    updatedAt: string;   // ISO timestamp
    publishedAt: string; // ISO timestamp
    locale: string;
    MainTitle: string;
    Title1: string;
    Title2: string;
    Way1Head: string;
    Way1Des: string;
    Way2Head: string;
    Way2Des: string;
    Way3Head: string;
    Way3Des: string;
    Way4Head: string;
    Way4Des: string;
    download: string;
    International: string;
    InternationalHead: string;
    InternationalDes: string;
    CountriesHead: string;
    CountriesHeadBold: string;
    FeatHead: string;
    FeatHead1: string;
    FeatHeadDes1: string;
    FeatHead2: string;
    FeatHeadDes2: string;
    FeatHead3: string;
    FeatHeadDes3: string;
    FeatHead4: string;
    FeatHeadDes4: string;
    FeatBtn: string;
    Sender: string;
    SenderMoney: string;
    SenderCountry: string;
    Receiver: string;
    ReceiverMoney: string;
    ReceiverCountry: string;
    Bank: string;
    BankMoney: string;
    Convert: string;
    ConvertMoney: string;
    heroImage: StrapiMediaData;
    Way1Img:StrapiMediaData
    Way2Img:StrapiMediaData
    Way3Img:StrapiMediaData
    Way4Img:StrapiMediaData
    Way1Icon:StrapiMediaData
    Way2Icon:StrapiMediaData
    Way3Icon:StrapiMediaData
    Way4Icon:StrapiMediaData
    SenderImg:StrapiMediaData
    ReceiverImg:StrapiMediaData
    SEO?: {
      metaTitle?: string;
      metaDescription?: string;
      shareImage?: StrapiMediaData;
    };
  }
  
  /**
   * The full response envelope from Strapi's REST API for the "international" endpoint.
   */
  export interface InternationalResponse {
    data: InternationalData;
    meta: Record<string, unknown>;
  }
  