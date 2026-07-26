// Sunucu tabanlı sayfalama yanıtı için ortak interface
export interface PaginatedResponse<T> {
  page: number;
  perPage: number;
  totalPages: number;
  results: T[];
}

// Filtreleme ve arama parametreleri için ortak interface
export interface QueryParams {
  page?: number;
  limit?: number;
  keyword?: string;
}
