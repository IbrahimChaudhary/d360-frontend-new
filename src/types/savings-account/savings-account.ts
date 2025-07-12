import { SeoComponent } from "../home/home";
import { StrapiMediaData } from "../about/about";

export interface FAQComponent {
  id: number;
  question: string;
  answers: string;
}

/** The main Strapi response wrapper */
export interface SavingsResponse {
  data: SavingsData;
  meta: Record<string, any>;
}

/** All the fields for the Sanabil Daily Distribution Account page */
export interface SavingsData {
  id: number;
  documentId: string;
  MainTitle1: string;
  MainTitle2: string;
  MainTitle3: string;
  MainTitleUpDes: string;
  MainTitleDownDes: string;
  Title1: string;
  Title2: string;
  Way1Title: string;
  Way2Title: string;
  Way3Title: string;
  Way4Title: string;
  HeroBtn: string;

  Way1Head: string;
  Way1Des: string;
  Way2Head: string;
  Way2Des: string;
  Way3Head: string;
  Way3Des: string;
  Way4Head: string;
  Way4Des: string;
  SavingBtn: string;

  OpenHead: string;
  OpenDes: string;
  Step1Num: string;
  Step1Head: string;
  Step1Des: string;
  Step2Num: string;
  Step2Head: string;
  Step2Des: string;
  Step3Num: string;
  Step3Head: string;
  Step3Des: string;
  OpenTerms: string;

  ProfitDes: string;
  ProfitBannerHead: string;
  ProfitBannerDes: string;

  RatesHead: string;
  RatesDes: string;
  ColName1: string;
  ColName2: string;
  ColName3: string;
  Col1Val1: string;
  Col1Val2: string;
  Col1Val3: string;
  Col1Val4: string;
  Col2Val1: string;
  Col2Val2: string;
  Col2Val3: string;
  Col2Val4: string;
  Col3Val1: string;
  Col3Val2: string;
  Col3Val3: string;
  Col3Val4: string;
  RatesTerm: string;

  ProfitCalHead: string;
  ProfitCal1: string;
  ProfitCal2: string;
  ProfitCal3: string;
  ProfitCal4: string;
  ProfitCal5: string;
  ProfitCal6: string;

  ProfitHead1: string;
  ProfitHead2: string;

  // NEW dynamic FAQ component
  faqs?: FAQComponent[];

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  HeroImg: StrapiMediaData;
  Way1Img: StrapiMediaData;
  Way2Img: StrapiMediaData;
  Way3Img: StrapiMediaData;
  Way4Img: StrapiMediaData;
  ProfitImg: StrapiMediaData;
  ProfitBannerImg: StrapiMediaData;
  SEO: SeoComponent[];
}
  