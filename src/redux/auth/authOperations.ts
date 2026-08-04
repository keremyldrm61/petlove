import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { petloveApi, setAuthHeader, clearAuthHeader } from "../../services/api";
import type { RootState } from "../store";
import type {
  RegisterPayload,
  LoginPayload,
  AuthResponse,
  UpdateUserPayload,
  User,
  AddPetPayload,
  PetType,
  NoticeType,
} from "../../types";

// REGISTER
export const register = createAsyncThunk<AuthResponse, RegisterPayload>(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await petloveApi.post<AuthResponse>(
        "/users/signup",
        credentials,
      );
      setAuthHeader(res.data.token);
      localStorage.setItem("token", res.data.token);

      // Veri yapısını emniyete alıyoruz (Payload Normalization)
      const user = res.data.user || {
        _id: (res.data as unknown as { _id?: string })._id || null,
        name: (res.data as unknown as { name?: string }).name || "User",
        email: (res.data as unknown as { email?: string }).email || "",
      };
      toast.success(`Welcome ${user.name}`);
      return {
        token: res.data.token,
        user,
      };
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      const errorMessage =
        err.response?.data?.message || err.message || "Registration failed";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

// LOGIN
export const logIn = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await petloveApi.post<AuthResponse>(
        "/users/signin",
        credentials,
      );
      setAuthHeader(res.data.token);
      localStorage.setItem("token", res.data.token);

      // Güvenli veri okuma: res.data.user yoksa üst seviye objeden okur
      const user = res.data.user || {
        _id: (res.data as unknown as { _id?: string })._id || null,
        name: (res.data as unknown as { name?: string }).name || "User",
        email: (res.data as unknown as { email?: string }).email || "",
      };
      toast.success(`Welcome ${user.name}`);
      return {
        token: res.data.token,
        user,
      };
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      const errorMessage =
        err.response?.data?.message || err.message || "Login failed";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

// LOGOUT
export const logOut = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await petloveApi.post("/users/signout");
      clearAuthHeader();
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      toast.error("Error, server not answer");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// REFRESH USER
export const refreshUser = createAsyncThunk<User, void>(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const token = state.auth.token || localStorage.getItem("token");

    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(token);
      const res = await petloveApi.get<User>("/users/current/full");
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// EDIT USER
export const editUser = createAsyncThunk<User, UpdateUserPayload | FormData>(
  "auth/edit",
  async (credentials, thunkAPI) => {
    try {
      const res = await petloveApi.patch<User>(
        "/users/current/edit",
        credentials,
      );
      toast.success("Profile updated successfully");
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      toast.error("Failed to update profile");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// ADD PET
export const addPet = createAsyncThunk<
  { pets: PetType[] },
  AddPetPayload | FormData
>("auth/addPet", async (petData, thunkAPI) => {
  try {
    const res = await petloveApi.post<{ pets: PetType[] }>(
      "/users/current/pets/add",
      petData,
    );
    toast.success("Pet added successfully");
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    toast.error("Failed to add pet");
    return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
  }
});

// REMOVE PET
export const removePet = createAsyncThunk<{ pets: PetType[] }, string>(
  "auth/removePet",
  async (id, thunkAPI) => {
    try {
      const res = await petloveApi.delete<{ pets: PetType[] }>(
        `/users/current/pets/remove/${id}`,
      );
      toast.success("Pet removed successfully");
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      toast.error("Failed to remove pet");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);

// VIEWED PET
export const viewedPet = createAsyncThunk<NoticeType, string>(
  "auth/viewedPet",
  async (id, thunkAPI) => {
    try {
      const res = await petloveApi.get<NoticeType>(`/notices/${id}`);
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);
