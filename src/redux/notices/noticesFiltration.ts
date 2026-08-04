import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { petloveApi } from "../../services/api";
import type { NoticeType, NoticeFiltersParams } from "../../types";

export interface ExtendedFiltersParams extends NoticeFiltersParams {
  radioSearch?: "Cheap" | "Expensive" | "Popular" | "Unpopular";
}

interface FetchNoticesResponse {
  results: NoticeType[];
  totalPages: number;
}

export const fetchNotices = createAsyncThunk<
  FetchNoticesResponse,
  ExtendedFiltersParams
>("notices/fetchAll", async (params, thunkAPI) => {
  const {
    keyword,
    category,
    species,
    locationId,
    radioSearch,
    page = 1,
    sex,
  } = params;

  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const queryParams = {
    keyword,
    category,
    species,
    locationId,
    page: sex ? undefined : page,
    limit: sex ? 2000 : itemsPerPage,
    byPrice:
      radioSearch === "Cheap"
        ? true
        : radioSearch === "Expensive"
          ? false
          : undefined,
    byPopularity:
      radioSearch === "Popular"
        ? false
        : radioSearch === "Unpopular"
          ? true
          : undefined,
  };

  try {
    const response = await petloveApi.get<{
      results: NoticeType[];
      totalPages: number;
    }>("/notices", {
      params: queryParams,
    });

    if (!sex) {
      return response.data;
    }

    const filteredResults = response.data.results.filter(
      (item) => item.sex === sex,
    );

    const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);

    return { results: displayedObjects, totalPages };
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});
