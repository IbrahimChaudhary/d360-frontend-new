// types/cards.ts

/** 
 * Represents the fields returned under `data` for the “D360 Cards” single‐type.
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
  }
  
  /**
   * Top‐level response envelope for the “D360 Cards” endpoint.
   */
  export interface CardsResponse {
    data: CardsData;
    meta: Record<string, unknown>;
  }
  