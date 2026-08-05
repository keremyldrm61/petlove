import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  editUser,
  addPet,
  removePet,
} from "./authOperations";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../notices/noticesOperations";
import type { User, PetType, NoticeType, AuthResponse } from "../../types";

export interface AuthUser {
  _id: string | null;
  name: string | null;
  email: string | null;
  avatar: string | null;
  phone: string | null;
}

export interface AuthState {
  user: AuthUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  pets: PetType[];
  noticesViewed: NoticeType[];
  noticesFavorites: NoticeType[];
}

const initialState: AuthState = {
  user: { _id: null, name: null, email: null, phone: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  pets: [],
  noticesViewed: [],
  noticesFavorites: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        register.fulfilled,
        (state, { payload }: PayloadAction<AuthResponse>) => {
          state.user._id = payload.user._id;
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        },
      )
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })

      // LOGIN
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        logIn.fulfilled,
        (state, { payload }: PayloadAction<AuthResponse>) => {
          state.user._id = payload.user._id;
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        },
      )
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
      })

      // LOGOUT
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          _id: null,
          name: null,
          email: null,
          phone: null,
          avatar: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.noticesFavorites = [];
        state.noticesViewed = [];
        state.pets = [];
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false;
      })

      // REFRESH USER
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user._id = payload._id;
          state.user.name = payload.name;
          state.user.email = payload.email;
          state.user.phone = payload.phone || null;
          state.user.avatar = payload.avatar || null;
          state.noticesFavorites = payload.noticesFavorites || [];
          state.noticesViewed = payload.noticesViewed || [];
          state.pets = payload.pets || [];
          state.isLoggedIn = true;
          state.isRefreshing = false;
        },
      )
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

      // EDIT USER
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(
        editUser.fulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user.name = payload.name;
          state.user.email = payload.email;
          state.user.phone = payload.phone || null;
          state.user.avatar = payload.avatar || null;
          state.isLoading = false;
          state.isRefreshing = false;
        },
      )

      // ADD PET
      .addCase(
        addPet.fulfilled,
        (state, { payload }: PayloadAction<{ pets: PetType[] }>) => {
          state.pets = payload.pets;
        },
      )

      // REMOVE PET
      .addCase(
        removePet.fulfilled,
        (state, { payload }: PayloadAction<{ pets: PetType[] }>) => {
          state.pets = payload.pets;
        },
      )

      // ADD TO FAVORITES
      .addCase(AddToFavorites.fulfilled, (state, action) => {
        const notice = action.payload;

        // Eğer state'te (favorilerde) zaten yoksa ekle (güvenlik kontrolü)
        const isExist = state.noticesFavorites.some(
          (fav) => fav._id === notice._id,
        );
        if (!isExist && notice._id) {
          state.noticesFavorites.push(notice);
        }
      })

      // REMOVE FROM FAVORITES
      .addCase(RemoveFromFavorites.fulfilled, (state, action) => {
        // action.meta.arg bize silmek için gönderdiğimiz id'yi verir. State'i anında filtreleyip güncelliyoruz.
        state.noticesFavorites = state.noticesFavorites.filter(
          (notice) => notice._id !== action.meta.arg,
        );
      });
  },
});

export const authReducer = authSlice.reducer;
