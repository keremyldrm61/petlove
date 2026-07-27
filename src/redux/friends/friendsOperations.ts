import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { petloveApi } from "../../services/api";
import type { FriendItem } from "../../types";

export const fetchFriends = createAsyncThunk<FriendItem[], void>(
  "friends/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await petloveApi.get<FriendItem[]>("/friends");
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message,
      );
    }
  },
);
