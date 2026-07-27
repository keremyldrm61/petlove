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
  Pet,
  Notice,
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
      toast.success(`Welcome ${res.data.user.name}`);
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      toast.error("ERROR, Invalid data");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
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
      toast.success(`Welcome ${res.data.user.name}`);
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      toast.error("ERROR, Invalid data");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
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
  { pets: Pet[] },
  AddPetPayload | FormData
>("auth/addPet", async (petData, thunkAPI) => {
  try {
    const res = await petloveApi.post<{ pets: Pet[] }>(
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
export const removePet = createAsyncThunk<{ pets: Pet[] }, string>(
  "auth/removePet",
  async (id, thunkAPI) => {
    try {
      const res = await petloveApi.delete<{ pets: Pet[] }>(
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
export const viewedPet = createAsyncThunk<Notice, string>(
  "auth/viewedPet",
  async (id, thunkAPI) => {
    try {
      const res = await petloveApi.get<Notice>(`/notices/${id}`);
      return res.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);
