import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { petloveApi } from "../../services/api";
import type { Notice } from "../../types";

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
export const fetchCities = createAsyncThunk<CityLocation[], void>(
  "cities/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await petloveApi.get<CityLocation[]>("/cities");
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// ADD NOTICE TO FAVORITES
export const AddToFavorites = createAsyncThunk<Notice, string>(
  "notices/addFavorites",
  async (id, thunkAPI) => {
    try {
      const response = await petloveApi.post<Notice>(
        `/notices/favorites/add/${id}`,
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

// REMOVE NOTICE FROM FAVORITES
export const RemoveFromFavorites = createAsyncThunk<Notice, string>(
  "notices/removeFavorites",
  async (id, thunkAPI) => {
    try {
      const response = await petloveApi.delete<Notice>(
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
