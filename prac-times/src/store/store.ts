import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../services/newsApi";
import { commentsApi } from "../services/commentsApi";
import { usersPublicApi } from "../services/usersPublicApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [usersPublicApi.reducerPath]: usersPublicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
      commentsApi.middleware,
      usersPublicApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
