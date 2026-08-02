// İlan filtreleme (NoticesFilters), detaylar (ModalNotice) ve liste ögeleri için uygun veri tipleri

export interface Notice {
  _id: string;
  imgURL: string;
  name: string;
  title: string;
  birthday: string;
  sex: string;
  species: string;
  popularity: number;
  comment: string;
  category: string;
}

export interface NoticeFiltersParams {
  page?: number;
  limit?: number;
  keyword?: string;
  category?: string;
  species?: string;
  sex?: string;
  locationId?: string;
  byPopularity?: boolean;
  byPrice?: boolean;
}
