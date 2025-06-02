export interface GalleryImage {
    id: string
    src: string
    alt: {
      en: string
      ar: string
    }
    caption?: {
      en: string
      ar: string
    }
  }
  
  export interface NewsArticle {
    id: string
    title: {
      en: string
      ar: string
    }
    excerpt: {
      en: string
      ar: string
    }
    content: {
      en: string
      ar: string
    }
    image: string
    publishedDate: string
    author?: {
      en: string
      ar: string
    }
    slug: string
    category?: string
    readTime?: number
    width?:string
  }
  