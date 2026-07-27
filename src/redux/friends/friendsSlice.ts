import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchFriends } from "./friendsOperations";
import type { FriendItem } from "../../types";

// State için tip tanımlaması
export interface FriendsState {
  friends: FriendItem[];
  isLoadingFriends: boolean;
  isErrorFriends: boolean;
}

const initialState: FriendsState = {
  friends: [],
  isLoadingFriends: false,
  isErrorFriends: false,
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.isLoadingFriends = true;
        state.isErrorFriends = false;
      })
      .addCase(
        fetchFriends.fulfilled,
        (state, { payload }: PayloadAction<FriendItem[]>) => {
          state.isLoadingFriends = false;
          state.isErrorFriends = false;
          state.friends = payload;
        },
      )
      .addCase(fetchFriends.rejected, (state) => {
        state.isLoadingFriends = false;
        state.isErrorFriends = true;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
