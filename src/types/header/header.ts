export type Header = {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    link1: string;
    link1Url: string;
    link2: string;
    link2Url: string;
    link3: string;
    link3Url: string;
    link4: string;
    link4Url: string;
    Help: string;
    HelpLink1: string;
    HelpLink1Url: string;
    HelpLink2: string;
    HelpLink2Url: string;
    HelpLink3: string;
    HelpLink3Url: string;
    HelpLink4: string;
    HelpLink4Url: string;
    HelpLink5: string;
    HelpLink5Url: string;
  };
  
  export type HeaderResponse = {
    data: Header;
    meta: Record<string, unknown>;
  };
  