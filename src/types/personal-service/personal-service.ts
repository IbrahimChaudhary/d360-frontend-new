import { StrapiMediaData } from "../about/about";

export interface PersonalServiceData {
    id: number
    documentId: string
  
    MainTitle: string
    MainTitle1: string
  
    Title1: string
    Title2: string
    Title3: string
  
    Title4: string
    Description4: string
  
    Title5: string
    Description5: string
  
    Title6: string
    Description6: string
  
    Title7: string
    Description7: string
  
    Title8: string
    Description8: string
  
    Title9: string
    Description9: string
  
    Title10: string
    Description10: string
  
    Title11: string
    Description11: string
  
    Title12: string
    Title13: string
    Title14: string
    Title15: string
    Title16: string

    heroImg: StrapiMediaData
    image1: StrapiMediaData
    imges2: StrapiMediaData
    card1: StrapiMediaData
    card2: StrapiMediaData
    download:string
    explore:string
    button:string
    button2:string
    productFees:string
  
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface PersonalServiceResponse {
    data: PersonalServiceData
    meta: Record<string, unknown>
  }
  