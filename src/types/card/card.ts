// types/cards.ts

import { StrapiMediaData } from "../about/about";

/** SEO component interface */
export interface SeoComponent {
  __component: string;
  metaTitle: string;
  metaDescription: string;
  shareImage: StrapiMediaData;
}

/**
 * Represents the fields returned under `data` for the "D360 Cards" single‐type.
 */
export interface CardsData {
  id: number;
  documentId: string;
  MainTitle: string;
  Title1: string;
  Description1: string;
  Title2: string;
  Description2: string;
  Title3: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Description3: string;
  Description4: string;
  Description5: string;
  FAQTitle: string;
  FAQTitle1: string;
  FAQDescription1: string;
  FAQTitle2: string;
  FAQDescription2: string;
  FAQTitle3: string;
  FAQDescription3: string;
  FAQTitle4: string;
  FAQDescription4: string;
  MainTitle1: string;
  MainTitle2: string;
  Card1Feat1: string;
  Card1Feat2: string;
  Card1Feat3: string;
  Card1Feat4: string;
  Card1Feat5: string;
  Card1Feat6: string;
  Card2Feat1: string;
  Card2Feat2: string;
  Card2Feat3: string;
  Card2Feat4: string;
  Card2Feat5: string;
  Card2Feat6: string;
  Card3Feat1: string;
  Card3Feat2: string;
  Card3Feat3: string;
  Card3Feat4: string;
  Card3Feat5: string;
  Card3Feat6: string;
  Card1Title:string;
  Card1Description:string;
  Card1Footer:string
  Card2Title:string;
  Card2Description:string;
  Card2Footer:string
  Card3Title:string;
  Card3Description:string;
  Card3Footer:string
  free:string
  getCard: string;
  imges: StrapiMediaData;
  imges1: StrapiMediaData;
  imges2: StrapiMediaData;
  imges3: StrapiMediaData;
  Footer:string;
  Subtitle:string;
  ButtonText:string
  locale: string;
  /** SEO data */
  SEO: SeoComponent[];

}

/**
 * Top‐level response envelope for the "D360 Cards" endpoint.
 */
export interface CardsResponse {
  data: CardsData;
  meta: Record<string, unknown>;
}
