// src/types/yourFolder/yourResponse.ts

/** Single “article” entry in the list */
export interface ArticleData {
    id: number;
    documentId: string;
    heading: string;
    shortDesc: string;
    para1: string;
    para2: string;
    para3: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  /** Pagination details */
  export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  /** Meta wrapper containing pagination */
  export interface ListMeta {
    pagination: Pagination;
  }
  
  /** Full response shape for GET /api/your-endpoint */
  export interface ArticleListResponse {
    data: ArticleData[];
    meta: ListMeta;
  }
  