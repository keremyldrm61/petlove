// İlan filtreleme (NoticesFilters), detaylar (ModalNotice) ve liste ögeleri için uygun veri tipleri

export interface NoticeType {
  _id: string;
  imgURL: string;
  title: string;
  popularity: number;
  comment: string;
  category: string;
  name: string;
  birthday: string;
  sex: string;
  species: string;
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
