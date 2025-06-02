
export interface CustomerCareData {
    id: number
    documentId: string
  
    createdAt: string
    updatedAt: string
    publishedAt: string
  
    HeroHeading: string
    HeroDescription: string
    Title1: string
  
    Feedbacks: string
    FeedbacksSub: string
  
    Bank: string
    Reach: string
    ReachA: string
    ReachB: string
  
    Contact: string
    Email: string
  }
  
  export interface CustomerCareDataResponse {
    data: CustomerCareData
    meta: Record<string, unknown>
  }
  