import type { RootState } from "../store";

export const selectCategories = (state: RootState) => state.notices.categories;

export const selectGender = (state: RootState) => state.notices.genders;

export const selectSpecies = (state: RootState) => state.notices.species;

export const selectCities = (state: RootState) => state.notices.cities;

export const selectNotices = (state: RootState) => state.notices.notices;

export const selectIsLoading = (state: RootState) => state.notices.isLoading;

export const selectIsError = (state: RootState) => state.notices.isError;

export const selectTotalPagesNotices = (state: RootState) =>
  state.notices.totalPages;
