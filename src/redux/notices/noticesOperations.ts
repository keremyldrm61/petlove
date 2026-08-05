import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { petloveApi } from "../../services/api";
import type { NoticeType } from "../../types";

export interface CityLocation {
  _id: string;
  cityEn: string;
  stateEn: string;
  county?: string;
}

// GET CATEGORIES FOR SELECT
export const fetchCategories = createAsyncThunk<string[], void>(
  "categories/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await petloveApi.get<string[]>("/notices/categories");
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// GET GENDER TYPES FOR SELECT
export const fetchGenders = createAsyncThunk<string[], void>(
  "sex/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await petloveApi.get<string[]>("/notices/sex");
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// GET SPECIES TYPES FOR SELECT
export const fetchSpecies = createAsyncThunk<string[], void>(
  "species/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await petloveApi.get<string[]>("/notices/species");
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// GET CITIES LOCATIONS FOR SELECT
export const fetchCities = createAsyncThunk<CityLocation[], string>(
  "cities/fetchAll",
  async (keyword, thunkAPI) => {
    try {
      const response = await petloveApi.get<CityLocation[]>(
        `cities?keyword=${keyword}`,
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// ADD NOTICE TO FAVORITES (TİP GÜNCELLEMESİ)
export const AddToFavorites = createAsyncThunk<NoticeType, NoticeType>(
  "notices/addFavorites",
  async (notice, thunkAPI) => {
    try {
      await petloveApi.post(`/notices/favorites/add/${notice._id}`);
      return notice as NoticeType;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// REMOVE NOTICE FROM FAVORITES
export const RemoveFromFavorites = createAsyncThunk<NoticeType, string>(
  "notices/removeFavorites",
  async (id, thunkAPI) => {
    try {
      const response = await petloveApi.delete<NoticeType>(
        `/notices/favorites/remove/${id}`,
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);
