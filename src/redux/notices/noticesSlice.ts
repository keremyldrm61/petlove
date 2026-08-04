import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import type { NoticeType } from "../../types";
import {
  fetchCategories,
  fetchGenders,
  fetchSpecies,
  fetchCities,
  AddToFavorites,
  RemoveFromFavorites,
  type CityLocation,
} from "./noticesOperations";
import { fetchNotices } from "./noticesFiltration";

export interface NoticesState {
  notices: NoticeType[];
  categories: string[];
  genders: string[];
  species: string[];
  cities: CityLocation[];
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
}

const initialState: NoticesState = {
  notices: [],
  categories: [],
  genders: [],
  species: [],
  cities: [],
  isLoading: false,
  isError: false,
  totalPages: 1,
};

export const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(fetchGenders.fulfilled, (state, { payload }) => {
        state.genders = payload;
      })
      .addCase(fetchSpecies.fulfilled, (state, { payload }) => {
        state.species = payload;
      })
      .addCase(fetchCities.fulfilled, (state, { payload }) => {
        state.cities = payload;
      })
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.notices = payload.results;
        state.totalPages = payload.totalPages;
      })

      // MATCHERS (Ortak durum yönetimi)
      .addMatcher(
        isAnyOf(
          fetchCategories.pending,
          fetchGenders.pending,
          fetchSpecies.pending,
          fetchCities.pending,
          fetchNotices.pending,
          AddToFavorites.pending,
          RemoveFromFavorites.pending,
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchCategories.fulfilled,
          fetchGenders.fulfilled,
          fetchSpecies.fulfilled,
          fetchCities.fulfilled,
          fetchNotices.fulfilled,
          AddToFavorites.fulfilled,
          RemoveFromFavorites.fulfilled,
        ),
        (state) => {
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addMatcher(
        isAnyOf(
          fetchCategories.rejected,
          fetchGenders.rejected,
          fetchSpecies.rejected,
          fetchCities.rejected,
          fetchNotices.rejected,
          AddToFavorites.rejected,
          RemoveFromFavorites.rejected,
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
