import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { petloveApi } from "../../services/api";
import type { NewsItem, PaginatedResponse } from "../../types";

export interface FetchNewsParams {
  page?: number;
  searchQuery?: string;
}

export const fetchNews = createAsyncThunk<
  PaginatedResponse<NewsItem>,
  FetchNewsParams
>("news/fetchAll", async ({ page = 1, searchQuery }, thunkAPI) => {
  try {
    const response = await petloveApi.get<PaginatedResponse<NewsItem>>(
      "/news",
      {
        params: {
          page,
          keyword: searchQuery || undefined,
        },
      },
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});
