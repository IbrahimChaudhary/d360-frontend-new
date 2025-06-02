// src/types/media-center.ts

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
  }
  
  /** The single “media‐center” record */
  export interface MediaCenterData {
    id: number;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    locale: string;
    Title1: string;
    Title2: string;
    news_cards: NewsCardData[];
  }
  
  /** Wrapper for the API response */
  export interface MediaCenterResponse {
    data: MediaCenterData;
    meta: Record<string, unknown>;
  }
  