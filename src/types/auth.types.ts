import type { User } from "./user.types";

// // Register ve Login sayfalarındaki form alanları için uygun veri tipleri
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
