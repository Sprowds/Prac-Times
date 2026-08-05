import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsList } from "../utils/backendAPIEmulator";
import type INewsItem from "../types/newsItem";

interface NewsState {
  data: INewsItem[];
  status: string;
  error: string | undefined;
}

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const result = getNewsList().then((data) => data);
  return result;
});

const initialState: NewsState = {
  data: [],
  status: "idle",
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
