export interface Offer {
    id: string;
    title: {
      en: string;
      ar: string;
    };
    description: {
      en: string;
      ar: string;
    };
    category: string;
    image: string;
    ctaImage?: string; // <--- Add this
    backgroundColor: string;
    textColor?: string;
    cashbackAmount?: string;
    validUntil?: string;
    duration?: string;
    terms?: {
      en: string[];
      ar: string[];
    };
    howToBenefit?: {
      en: string[];
      ar: string[];
    };
    slug: string;
    date?: string;
  }
  
  export interface OfferCategory {
    id: string
    name: {
      en: string
      ar: string
    }
    icon?: string
  }
  