// src/types/annual-reports.ts

import { StrapiMediaData } from "../about/about";

/** The data object returned by Strapi for the Annual Reports page */
export interface AnnualReportsData {
  id: number;
  documentId: string;

  /** Hero section titles */
  HeroTitle1: string;
  HeroTitle2: string;

  /** Page heading */
  AnnualHead: string;

  /** Contact section */
  Contact: string;
  ContactDes: string;
  email: string;
  Phone: string;

  /** Timestamps and locale */
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  publishedAt: string; // ISO timestamp
  locale: string;

  /** Hero image */
  HeroImg: StrapiMediaData;

  /** Reports */
  reports: Array<{
    id: number;
    documentId: string;
    year: string;
    download: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  }>;
}

/** Wrapper for the Strapi response */
export interface AnnualReportsResponse {
  data: AnnualReportsData;
  meta: Record<string, unknown>;
}
