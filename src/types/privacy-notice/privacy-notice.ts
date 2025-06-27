import { SeoComponent } from "../home/home";

// src/types/privacy-notice.ts

/** The shape of the `data` object returned by Strapi for the Privacy Notice page */
export interface PrivacyNoticeData {
  id: number;
  documentId: string;
  createdAt: string;   // ISO timestamp
  updatedAt: string;   // ISO timestamp
  publishedAt: string; // ISO timestamp
  locale: string;

  /** Main heading and introductory paragraphs */
  Heading: string;
  headingPara1: string;
  headingPara2: string;
  headingPara3: string;

  /** Full markdown content for the notice body */
  Title2: string;
  Title2Mobile: string;

  /** FAQ section */
  FAQ: string;
  FAQTitle1: string;
  FAQDescription1: string;
  FAQTitle2: string;
  FAQDescription2: string;
  FAQTitle3: string;
  FAQDescription3: string;
  FAQTitle4: string;
  FAQDescription4: string;
  FAQTitle5: string;
  FAQTitle6: string;
  FAQTitle7: string;
  FAQTitle8: string;
  FAQTitle9: string;
  FAQTitle10: string;
  FAQTitle11: string;
  FAQTitle12: string;
  FAQDescription5: string;
  FAQDescription6: string;
  FAQDescription7: string;
  FAQDescription8: string;
  FAQDescription9: string;
  FAQDescription10: string;
  FAQDescription11: string;
  FAQDescription12: string;
  SEO: SeoComponent[];

}

/** Full wrapper for the Strapi response */
export interface PrivacyNoticeResponse {
  data: PrivacyNoticeData;
  meta: Record<string, unknown>;
}
