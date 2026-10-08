import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type GetArticleParams from "../types/getArticleParams";
import type IComment from "../types/comment";

export const commentsApi = createApi({
  reducerPath: `commentsApi`,

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api`,
  }),

  endpoints: (builder) => ({
    getCommentsByArticleId: builder.query<IComment[], GetArticleParams>({
      query: (params) => ({
        url: "/comments",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetCommentsByArticleIdQuery } = commentsApi;
