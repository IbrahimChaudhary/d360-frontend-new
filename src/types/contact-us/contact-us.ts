import { StrapiMediaData } from "../about/about";

export interface ContactPageData {
  id: number;
  documentId: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  BannerText1: string;
  BannerText2: string;
  BannerText3: string;

  Title1: string;
  Title2: string;
  heroImg: StrapiMediaData;
  sideImg: StrapiMediaData;
  TollFree: string;
  outside: string;
  download: string;
  privacy: string;
  privacyBold: string;
  insidePhone: string;
  outsidePhone: string;
  sendMsg: string;
}

export interface ContactPageResponse {
  data: ContactPageData;
  meta: Record<string, unknown>;
}
