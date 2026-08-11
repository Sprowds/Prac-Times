import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsList } from "../utils/backendAPIEmulator";
import type INewsItem from "../types/newsItem";

interface NewsParams {
  main: INewsItem[];
  another: INewsItem[];
  exclusive: INewsItem[];
}

interface NewsState {
  data: NewsParams;
  status: string;
  error: string | undefined;
}

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (param: string) => {
    const result = getNewsList(param).then((data) => {
      return { [param]: data };
    });
    return result;
  },
);

const initialState: NewsState = {
  data: {
    main: [],
    another: [],
    exclusive: [],
  },
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
        const param = Object.keys(action.payload)[0];
        state.data[param] = action.payload[param];
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
