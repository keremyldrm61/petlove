import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { newsReducer } from "./news/newsSlice";
import { friendsReducer } from "./friends/friendsSlice";
import { noticesReducer } from "./notices/noticesSlice";
import { authReducer } from "./auth/authSlice";

const customStorage = {
  getItem: (key: string) => {
    return Promise.resolve(localStorage.getItem(key));
  },
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

// Auth state'i için sadece token'ı localStorage'e kaydediyoruz
const authPersistConfig = {
  key: "auth",
  storage: customStorage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
