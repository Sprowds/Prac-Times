import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type IComment from "../types/comment";
import type GetCommentsParams from "../types/getCommentsParams";

export const commentsApi = createApi({
  reducerPath: `commentsApi`,

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api`,
  }),

  endpoints: (builder) => ({
    getComments: builder.query<IComment[], GetCommentsParams>({
      query: (params) => ({
        url: "/comments",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
