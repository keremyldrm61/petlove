import { type Pet } from "./pet.types";
import { type Notice } from "./notice.types";

// Profile sayfalarındaki form alanları için uygun veri tipleri
export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  pets: Pet[];
  noticesFavorites?: Notice[];
  noticesViewed?: Notice[];
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  avatar?: string;
  phone?: string;
}
