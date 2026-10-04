import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type INewsItem from "../types/newsItem";
import type GetArticleParams from "../types/getArticleParams";

export const newsApi = createApi({
  reducerPath: `newsApi`,

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api`,
    mode: `cors`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer 123");
      headers.set("X-Total-Count", "");

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getArticles: builder.query<INewsItem[], GetArticleParams>({
      query: (params) => ({
        url: "/articles",
        method: "GET",
        params,
      }),
    }),
    getArticlesCount: builder.query<number, void>({
      query: () => ({
        url: "/articles",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticlesCountQuery } = newsApi;
