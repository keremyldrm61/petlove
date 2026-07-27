import type { RootState } from "../store";

export const selectFriends = (state: RootState) => state.friends.friends;

export const selectIsLoadingFriends = (state: RootState) =>
  state.friends.isLoadingFriends;

export const selectIsErrorFriends = (state: RootState) =>
  state.friends.isErrorFriends;
