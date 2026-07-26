import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Merkezi Axios Instance
export const petloveApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth Header Ayarlama / Temizleme Yardımcı Fonksiyonları
export const setAuthHeader = (token: string): void => {
  petloveApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = (): void => {
  delete petloveApi.defaults.headers.common.Authorization;
};

// Request Interceptor: Her istekte localStorage içinde token varsa header'a ekle
petloveApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor: Global Hata Yakalama (401 Unauthorized)
petloveApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Oturum geçersiz olduğunda veya süresi dolduğunda token'ı temizle
      clearAuthHeader();
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);

export default petloveApi;
