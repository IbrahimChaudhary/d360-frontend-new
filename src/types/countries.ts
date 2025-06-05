export interface Country {
    id: string
    name: {
      en: string
      ar: string
    }
    flag: string
    continent: "europe" | "africa" | "asia"
    currency: string
    code: string
  }
  
  export interface Continent {
    id: "europe" | "africa" | "asia"
    name: {
      en: string
      ar: string
    }
  }
  