// src/types/privacy-notice.ts

/** The shape of the `data` object returned by Strapi */
export interface PrivacyNoticeData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    
    Heading: string;
    headingPara1: string;
    headingPara2: string;
    headingPara3: string;
    
    Personal: string;
    PersonalPara: string;
    
    Purpose: string;
    PurposeA: string;
    PurposeB: string;
    PurposeC: string;
    PurposeD: string;
    PurposeE: string;
    PurposeF: string;
    PurposeG: string;
    PurposeH: string;
    PurposeI: string;
    PurposeJ: string;
    PurposeK: string;
    PurposePara: string;
    
    RightsHeading: string;
    RightsPara: string;
    RightsA: string;
    RightsB: string;
    RightsC: string;
    RightsD: string;
    RightsE: string;
  
    Lawful: string;
    LawfulA: string;
    LawfulB: string;
    LawfulC: string;
    LawfulD: string;
    LawfulDes: string;
  
    Data: string;
    DataPara1: string;
    DataPara2: string;
  
    Retention: string;
    RetentionDes: string;
  
    Security: string;
    SecurityDes: string;
  
    Media: string;
    MediaPara: string;
  
    Cookies: string;
    CookiesPara: string;
  
    Market: string;
    MarketPara: string;
  
    Quality: string;
    QualityPara: string;
  
    Contact: string;
    ContactPara: string;
    ContactEmail: string;
  }
  
  /** Full wrapper for the Strapi response */
  export interface PrivacyNoticeResponse {
    data: PrivacyNoticeData;
    meta: Record<string, unknown>;
  }
  