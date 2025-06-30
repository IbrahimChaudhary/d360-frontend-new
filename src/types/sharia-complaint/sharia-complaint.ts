// src/types/shariah-committee.ts

import { Leader, StrapiMediaData } from "@/types/about/about";
import { SeoComponent } from "../home/home";

/** Data object returned by Strapi for the Shariah Committee page */
export interface ShariaComplaintData {
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
  
    /** Shariah committee section */
    Shariah: string;
    ShariahDes1: string;
    ShariahDes2: string;
    ShariahPoints: string; // markdown list of points, newline separated
  
    HeroImg:StrapiMediaData
    directors: Leader[];

    /** Members heading */
    MembersHead: string;
    SEO: SeoComponent[];
  }
  
  /** Full wrapper for the Strapi response */
  export interface ShariaComplaintResponse {
    data: ShariaComplaintData;
    meta: Record<string, unknown>;
  }
  