
export interface ContactPageData {
    id: number
    documentId: string
  
    createdAt: string
    updatedAt: string
    publishedAt: string
  
    BannerText1: string
    BannerText2: string
    BannerText3: string
  
    Title1: string
    Title2: string
  
    TollFree: string
    outside: string
  }
  
  export interface ContactPageResponse {
    data: ContactPageData
    meta: Record<string, unknown>
  }
  