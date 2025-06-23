import { StrapiMediaData } from "../about/about";
import { SeoComponent } from "../home/home";

export interface PersonalServiceData {
    id: number
    documentId: string
  
    MainTitle: string
    MainTitle1: string
  
    Title1: string
    Title2: string
    Title3: string

    title1half:string
    title2half:string
    title3half:string
    title4half:string
    title5half:string
    title6half:string
    title7half:string
    title8half:string

    
  
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
    card3: StrapiMediaData
    download:string
    explore:string
    button:string
    button2:string
    productFees:string
  
    createdAt: string
    updatedAt: string
    publishedAt: string
    SEO: SeoComponent[];
  }
  
  export interface PersonalServiceResponse {
    data: PersonalServiceData
    meta: Record<string, unknown>
  }
  