import { StrapiMediaData } from "../about/about";

export interface CustomerCareData {
  id: number;
  documentId: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  HeroHeading: string;
  HeroDescription: string;
  Title1: string;

  Feedbacks: string;
  FeedbacksSub: string;

  Bank: string;
  Reach: string;
  ReachA: string;
  ReachB: string;
  inside: string;
  insideDes: string;
  outside: string;
  outsideDes: string;
  emailHead:string
  complaint:string
  Contact: string;
  Email: string;

  heroImg: StrapiMediaData;
  sideImg: StrapiMediaData;
  SEO?: {
    metaTitle?: string;
    metaDescription?: string;
    shareImage?: StrapiMediaData;
  };
  locale: string;
}

export interface CustomerCareDataResponse {
  data: CustomerCareData;
  meta: Record<string, unknown>;
}
