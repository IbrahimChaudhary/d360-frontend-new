// src/types/work-at-d360.ts

import { StrapiMediaData } from "../about/about";

/** The data object returned by Strapi for the “Work at D360 Bank” page */
export interface CareerData {
    id: number;
    documentId: string;
  
    /** Hero section */
    HeroTitle1: string;
    HeroTitle2: string;
  
    /** Intro paragraph below the hero */
    Title2: string;
  
    /** Work description paragraphs */
    WorkDes1: string;
    WorkDes2: string;
  
    /** Open Application section */
    Application: string;
    ApplicationDes1: string;
    ApplicationDes2: string;
    ApplicationBtn: string;
  
    /** Contact/helping section */
    HelpingHead: string;
    HelpingBtn: string;
    HelpingText: string;
  
    /** Footer or sub-heading fields */
    WorkHead1: string;
    WorkHead2: string;
    HeroImg:StrapiMediaData
    ApplicationImg:StrapiMediaData
    /** Timestamps and locale */
    createdAt: string;   // ISO timestamp
    updatedAt: string;   // ISO timestamp
    publishedAt: string; // ISO timestamp
    locale: string;
  }
  
  /** Full wrapper for the Strapi response */
  export interface CareerDDataataResponse {
    data: CareerData;
    meta: Record<string, unknown>;
  }
  