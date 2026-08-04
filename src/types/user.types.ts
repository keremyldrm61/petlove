import type { PetType } from "./pet.types";
import type { NoticeType } from "./notice.types";

// Profile sayfalarındaki form alanları için uygun veri tipleri
export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  pets: PetType[];
  noticesFavorites?: NoticeType[];
  noticesViewed?: NoticeType[];
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  avatar?: string | null;
  phone?: string | null;
}
