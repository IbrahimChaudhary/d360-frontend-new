// src/types/media-center.ts

import { StrapiMediaData } from "../about/about";

/** One news‐card entry */
export interface NewsCardData {
    id: number;
    documentId?: string;
    heading: string;
    shortDesc: string;
    para1?: string;
    para2?: string;
    para3?: string;
    slug:string;
    date: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    imageHero: StrapiMediaData;
    imageCard: StrapiMediaData;
  }
  
  /** The single "media‐center" record */
  export interface MediaCenterData {
    id: number;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale: string;
    Title1: string;
    Title2: string;
    gallery:string
    news:string
    heroImg:StrapiMediaData
    galleryImg1:StrapiMediaData
    galleryImg2:StrapiMediaData
    galleryImg3:StrapiMediaData
    galleryImg4:StrapiMediaData
    news_cards: NewsCardData[];
  }
  
  /** Wrapper for the API response */
  export interface MediaCenterResponse {
    data: MediaCenterData;
    meta: Record<string, unknown>;
  }
  