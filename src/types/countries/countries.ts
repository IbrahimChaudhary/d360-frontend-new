/** Media format returned by Strapi */
export interface StrapiMediaFormat {
    name: string;
    url: string;
    mime: string;
    width: number;
    height: number;
    size: number;
  }
  
  /** Media object wrapper */
  export interface StrapiMedia {
    id: number;
    attributes: {
      name: string;
      alternativeText?: string;
      caption?: string;
      width: number;
      height: number;
      formats?: {
        [key: string]: StrapiMediaFormat;
      };
      url: string;
      mime: string;
      size: number;
      createdAt: string;
      updatedAt: string;
    };
  }
  
  /** Relation object (e.g. Category/Region) */
  export interface Category {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  }
  
  /** Country entry returned by Strapi */
  export interface Country {
    id: number;
    attributes: {
      countryName: string;
      countryFlag: {
        data: {
          id: number;
          attributes: {
            url: string;
            alternativeText?: string;
          };
        };
      };
      category: {
        data: {
          id: number;
          attributes: {
            name: string;
          };
        };
      };
      locale: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }
  
  export interface CountriesResponse {
    data: Country[];
    meta: any;
  }
  
  // New API response type for countries (flat structure)
  export interface CountryApi {
    id: number;
    countryName: string;
    countryFlag: {
      id: number;
      url: string;
      [key: string]: any;
    } | null;
    category: {
      id: number;
      name: string;
      [key: string]: any;
    } | null;
    [key: string]: any;
  }

  export interface UICountry {
    id: string;
    name: {
      en: string;
      ar: string;
    };
    flag: string; // Full image URL
    continent: string; // Slug or category name in lowercase
  }
  