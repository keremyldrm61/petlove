import type { RootState } from "../store";

export const selectNews = (state: RootState) => state.news.news;

export const selectTotalPages = (state: RootState) => state.news.totalPages;

export const selectIsLoadingNews = (state: RootState) => state.news.isLoading;

export const selectIsErrorNews = (state: RootState) => state.news.isError;
