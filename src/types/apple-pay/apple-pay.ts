// src/types/apple-pay.ts

export interface ApplePayData {
    id: number
  
    MainTitle: string
  
    Title1: string
    Description1: string
  
    Title2: string
    Description2: string
  
    Title3: string
    Description3: string
  
    Title4: string
    Description4: string
  
    Title5: string
    Description5: string
  
    Title6: string
    Description6A: string
    Description6B: string
    Description6C: string
    Description6D: string
    Description6E: string
    Description6F: string
  
    Title7: string
    Title7A: string
    Description7A: string
    Title7B: string
    Description7B: string
    Description7C: string
    Description7D: string
    Description7E: string
    Description7F: string
    Title7C: string
    Description7G: string
    Description7H: string
    Description7I: string
    Description7J: string
  
    Title8: string
    Title8A: string
    Description8A: string
    Description8B: string
    Description8C: string
    Description8D: string
    Description8E: string
    Description8F: string
    Description8G: string
    Description8H: string
    Description8I: string
    Description8J: string
    Description8K: string
    Title8B: string
    Description8L: string
    Description8M: string
    Description8N: string
    Description8O: string
    Title8C: string
    Description8P: string
    Description8Q: string
    Description8R: string
    Title8D: string
    Description8S: string
    Description8T: string
    Description8U: string
    Description8V: string
  
    Title9: string
    Description9A: string
    Description9B: string
    Description9C: string
    Description9D: string
    Description9E: string
  
    FAQTitle1: string
    FAQDescription1: string
    FAQTitle2: string
    FAQDescription2: string
    FAQTitle3: string
    FAQDescription3: string
    FAQTitle4: string
    FAQDescription4: string
    FAQTitle5: string
    FAQDescription5: string
    FAQTitle6: string
    FAQDescription6: string
    FAQTitle7: string
    FAQDescription7: string
    FAQTitle8: string
    FAQDescription8: string
    FAQTitle9: string
    FAQDescription9: string
    FAQTitle10: string
    FAQDescription10: string
    FAQTitle11: string
    FAQDescription11: string
  
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
  }
  
  export interface ApplePayResponse {
    data: ApplePayData
    meta: Record<string, unknown>
  }
  