// src/types/offer/offercard.ts

/** A single image format (e.g. thumbnail) */
export interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  }
  
  /** All available formats for an uploaded image */
  export interface Formats {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  }
  
  /** The image object returned by Strapi */
  export interface OfferCardImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  /**  
   * The shape of each OfferCard entry returned by Strapi  
   */
  export interface OfferCardData {
    id: number;
    documentId: string;
    title: string;
    date: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    type: string;
    image: OfferCardImage;
  }
  
  /**  
   * Pagination information in the response  
   */
  export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  /**  
   * The `meta` section of a list response  
   */
  export interface ListMeta {
    pagination: Pagination;
  }
  
  /**  
   * The full response from GET /api/offer-cards  
   */
  export interface OfferCardListResponse {
    data: OfferCardData[];
    meta: ListMeta;
  }
  