// src/types/invest/invest.ts

import { StrapiMediaData } from "../about/about";

/** The data object returned by Strapi for the Invest in D360 Bank page */
export interface InvestData {
    id: number;
    documentId: string;
    createdAt: string;   // ISO timestamp
    updatedAt: string;   // ISO timestamp
    publishedAt: string; // ISO timestamp
    locale: string;
  
    /** Hero section titles */
    HeroTitle1: string;
    HeroTitle2: string;
  
    /** Introductory text under hero */
    Title2: string;
  
    /** Key ways / cards */
    Way1Head: string;
    Way1Des: string;
    Way2Head: string;
    Way2Des: string;
    Way3Head: string;
    Way3Des: string;
    Way4Head: string;
    Way4Des: string;
  
    /** Information section */
    InfoHead: string;
    Info1Des: string;
    Info2Des: string;
    Info3Des: string;
    Info4Des: string;
  
    /** Explore section */
    ExploreHead: string;
    ExploreBtn: string;

    HeroImg:StrapiMediaData
    Way1Img:StrapiMediaData
    Way2Img:StrapiMediaData
    Way3Img:StrapiMediaData
    Way4Img:StrapiMediaData
    ExploreImg:StrapiMediaData
  
    Contact: string;
    ContactDes: string;
    email: string;
    Phone: string;
  
    /** Info headings split across two words */
    Info1Head1: string;
    Info1Head2: string;
    Info2Head1: string;
    Info2Head2: string;
    Info3Head1: string;
    Info3Head2: string;
    Info4Hea1: string;
    Info4Hea2: string;
  }
  
  /** Wrapper for the Strapi response */
  export interface InvestResponse {
    data: InvestData;
    meta: Record<string, unknown>;
  }
  