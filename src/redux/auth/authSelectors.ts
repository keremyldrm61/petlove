import type { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectFavoritesNotices = (state: RootState) =>
  state.auth.noticesFavorites;

export const selectViewedNotices = (state: RootState) =>
  state.auth.noticesViewed;

export const selectPets = (state: RootState) => state.auth.pets;
