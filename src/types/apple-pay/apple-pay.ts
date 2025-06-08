// src/types/apple-pay.ts

export interface ApplePayData {
  id: number;
  documentId: string;

  MainTitle: string;

  Title1: string;
  Title2: string;
  Title1Des: string;

  // FAQs
  FAQTitle1: string;
  FAQDescription1: string;
  FAQTitle2: string;
  FAQDescription2: string;
  FAQTitle3: string;
  FAQDescription3: string;
  FAQTitle4: string;
  FAQDescription4: string;
  FAQTitle5: string;
  FAQDescription5: string;
  FAQTitle6: string;
  FAQDescription6: string;
  FAQTitle7: string;
  FAQDescription7: string;
  FAQTitle8: string;
  FAQDescription8: string;
  FAQTitle9: string;
  FAQDescription9: string;
  FAQTitle10: string;
  FAQDescription10: string;
  FAQTitle11: string;
  FAQDescription11: string;

  createdAt: string;   // ISO timestamp
  updatedAt: string;   // ISO timestamp
  publishedAt: string; // ISO timestamp
  locale: string;
}

export interface ApplePayResponse {
  data: ApplePayData;
  meta: Record<string, unknown>;
}
