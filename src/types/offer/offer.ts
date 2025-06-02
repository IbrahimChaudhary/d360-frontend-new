
export interface OfferData {
  id: number;
  documentId: string;
  Heading2: string;
  Type1: string;
  Type2: string;
  Type3: string;
  Heading: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface OfferResponse {
  data: OfferData;
  meta: Record<string, unknown>;
}
