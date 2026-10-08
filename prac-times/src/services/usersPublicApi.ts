import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type IUser from "../types/user";

export const usersPublicApi = createApi({
  reducerPath: `usersPublicApi`,

  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api`,
  }),

  endpoints: (builder) => ({
    getUserPublicInfoByUserName: builder.query<IUser, string>({
      query: (username) => ({
        url: `/users/${username}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserPublicInfoByUserNameQuery } = usersPublicApi;
