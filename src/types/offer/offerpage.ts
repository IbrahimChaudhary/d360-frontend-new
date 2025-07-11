import { SeoComponent } from "../about/about";

export interface ImageFormats {
    thumbnail?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    small?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    medium?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    large?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
  }
  
  export interface UploadFile {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
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
  
  export interface OfferCardRelation {
    id: number;
    documentId: string;
    title: string;
    date: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    type: string;
  }
  
  export interface OfferPageData {
    id: number;
    documentId: string;
    MainTitle: string;
    Title1: string;
    title: string;
    MainTitle1: string;
    Description1: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    offerDuration: string;
    date: string;
    benefit: string;
    benefitDescription: string;
    Terms: string;
    Terms1: string;
    Terms2: string;
    Terms3: string;
    Terms4: string;
    Terms5: string;
    Terms6: string;
    Terms7: string;
    slug: string;
    imgage: UploadFile;
    heroImage: UploadFile;
    image: UploadFile;
    offer_card: OfferCardRelation;
    SEO?: SeoComponent[];
  }
  
  export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  export interface ListMeta {
    pagination: Pagination;
  }
  
  export interface OfferPageListResponse {
    data: OfferPageData[];
    meta: ListMeta;
  }
  