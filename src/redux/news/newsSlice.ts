import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "./newsOperations";
import type { NewsItemType, PaginatedResponse } from "../../types";

export interface NewsState {
  news: NewsItemType[];
  totalPages: number | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: NewsState = {
  news: [],
  totalPages: null,
  isLoading: false,
  isError: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchNews.fulfilled,
        (
          state,
          { payload }: PayloadAction<PaginatedResponse<NewsItemType>>,
        ) => {
          state.isLoading = false;
          state.isError = false;
          state.news = payload.results;
          state.totalPages = payload.totalPages;
        },
      )
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const newsReducer = newsSlice.reducer;
