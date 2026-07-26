// İlan filtreleme (NoticesFilters), detaylar (ModalNotice) ve liste ögeleri için uygun veri tipleri

export interface Notice {
  _id: string;
  species: string;
  category: string;
  price?: number;
  sex: "male" | "female" | "multiple";
  title: string;
  name: string;
  birthday: string;
  comment?: string;
  imgUrl: string;
  location?: string;
  popularity: number;
  user?: string;
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
