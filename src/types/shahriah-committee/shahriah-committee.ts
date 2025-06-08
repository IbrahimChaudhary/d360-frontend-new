// src/types/shariah-committee.ts

import { Leader, StrapiMediaData } from "@/types/about/about";

/** Data object returned by Strapi for the Shariah Committee page */
export interface ShariahCommitteeData {
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
  }
  
  /** Full wrapper for the Strapi response */
  export interface ShariahCommitteeResponse {
    data: ShariahCommitteeData;
    meta: Record<string, unknown>;
  }
  