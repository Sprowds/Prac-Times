import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type INewsItem from "../types/newsItem";
import type GetArticleParams from "../types/getArticleParams";

interface IResponse {
  items: INewsItem[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
  };
}

export const newsApi = createApi({
  reducerPath: `newsApi`,

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api`,
  }),

  endpoints: (builder) => ({
    getArticles: builder.query<IResponse, GetArticleParams>({
      query: (params) => ({
        url: "/articles",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = newsApi;
