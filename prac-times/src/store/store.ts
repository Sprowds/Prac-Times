import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import { newsApi } from "../services/newsApi";

export const store = configureStore({
  reducer: {
    newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
