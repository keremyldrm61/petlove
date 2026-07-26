import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import petloveApi, { setAuthHeader, clearAuthHeader } from "../../services/api";
import type {
  RegisterPayload,
  LoginPayload,
  AuthResponse,
  User,
} from "../../types";
import type { RootState } from "../store";

// Register (Kayıt Olma)
export const register = createAsyncThunk<AuthResponse, RegisterPayload>(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await petloveApi.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Registration failed",
        );
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
);

// LogIn (Giriş Yapma)
export const login = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await petloveApi.post("/users/signin", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Login failed",
        );
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
);

// Logout (Çıkış Yapma)
export const logout = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await petloveApi.post("/users/signout");
      clearAuthHeader();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "The logout process failed",
        );
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
);

// Sayfa yenilendiğinde kullanıcıyı getirme (Refresh User)
export const refreshUser = createAsyncThunk<User, void, { state: RootState }>(
  "auth/refresh",
  async (_, thunkAPI) => {
    // State'ten token'ı alıyoruz
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await petloveApi.get("/users/current");
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message ||
            "User details could not be retrieved",
        );
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  },
);
