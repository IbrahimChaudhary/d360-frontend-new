export interface Leader {
  id: number;
  documentId: string;
  name: string;
  role: string;
  description: string;
  position: string;
  image:string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface AboutD360Data {
  id: number;
  documentId: string;

  Title1: string;
  Title2: string;
  Description2: string;

  Title3: string;
  Description3: string;

  Title4: string;
  Title5: string;

  FAQTitle: string;
  FAQTitle1: string;
  FAQDescription1: string;
  FAQTitle2: string;
  FAQDescription2: string;
  FAQTitle3: string;
  FAQDescription3: string;
  FAQTitle4: string;
  FAQDescription4: string;

  HelpingTitle: string;
  HelpingDescription: string;
  HelpingDescription1: string;

  Title6: string;
  Title7: string;
  Description5: string;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  leaders: Leader[];
}

export interface About<T> {
  data: T;
  meta: Record<string, unknown>;
}

export type AboutResponse = About<AboutD360Data>;
