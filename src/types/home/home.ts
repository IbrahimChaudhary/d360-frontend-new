interface HeroVideo{
  url:string
}
export interface HomePageData {
  id: number;
  documentId: string;

  Heading: string;
  HeadingB: string;
  Description: string;

  Title1: string;
  Description1: string;

  Title2: string;
  Description2: string;

  Title3: string;
  Description3: string;

  Title4: string;

  Title5: string;
  Description5: string;

  Title6: string;
  Description6: string;

  Title7: string;
  Description7: string;

  Title8: string;
  Description8: string;

  heroVideo: HeroVideo;  

  PhysicalCard: string;
  PhysicalCardDescription: string;
  PhysicalCardCTA:string
  DigitalCardCTA:string
  DigitalCard: string;
  DigitalCardDescription: string;
  SarihaBTN:string
  TransferHeading: string;
  TransferSubHeading: string;
  TransferDescription: string;

  Sender: string;
  Recipient: string;
  Fee: string;
  Conversion: string;

  Shariah: string;
  ShariahDescription: string;
  download: string;
  Title1B:string
  Title2B:string
  Title3B:string
  Title8B:string
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface HomePageResponse {
  data: HomePageData;
  meta: Record<string, unknown>;
}
