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
}

/** Full wrapper for the Strapi response */
export interface PrivacyNoticeResponse {
  data: PrivacyNoticeData;
  meta: Record<string, unknown>;
}
