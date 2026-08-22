import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllNewsList, getNewsList } from "../utils/backendAPIEmulator";
import type INewsItem from "../types/newsItem";
import type { IAllNews } from "../types/newsItem";

interface INewsData {
  all: IAllNews;
  main: INewsItem[];
  another: INewsItem[];
  exclusive: INewsItem[];
}

interface IStatusData {
  all: string;
  main: string;
  another: string;
  exclusive: string;
}

interface IErrorData {
  all: string | undefined;
  main: string | undefined;
  another: string | undefined;
  exclusive: string | undefined;
}

interface NewsState {
  data: INewsData;
  status: IStatusData;
  error: IErrorData;
}

export const fetchAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (page: number) => {
    const result = getAllNewsList(page).then((data) => data);
    return result;
  },
);

export const fetchMainNewsItem = createAsyncThunk(
  "news/fetchMainNewsItem",
  async () => {
    const result = getNewsList("main").then((data) => data);
    return result;
  },
);

export const fetchAnotherNews = createAsyncThunk(
  "news/fetchAnotherNews",
  async () => {
    const result = getNewsList("another").then((data) => data);
    return result;
  },
);

export const fetchExclusiveNews = createAsyncThunk(
  "news/fetchExclusiveNews",
  async () => {
    const result = getNewsList("exclusive").then((data) => data);
    return result;
  },
);

const initialState: NewsState = {
  data: {
    all: {
      news: [],
      pageCount: 0,
    },
    main: [],
    another: [],
    exclusive: [],
  },

  status: {
    all: "",
    main: "",
    another: "",
    exclusive: "",
  },

  error: {
    all: "",
    main: "",
    another: "",
    exclusive: "",
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.status.all = "loading";
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.status.all = "succeeded";
        state.data.all = action.payload;
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.status.all = "failed";
        state.error.all = action.error.message;
      })
      // ==================================================================
      .addCase(fetchMainNewsItem.pending, (state) => {
        state.status.main = "loading";
      })
      .addCase(fetchMainNewsItem.fulfilled, (state, action) => {
        state.status.main = "succeeded";
        state.data.main = action.payload;
      })
      .addCase(fetchMainNewsItem.rejected, (state, action) => {
        state.status.main = "failed";
        state.error.main = action.error.message;
      })
      // ==================================================================
      .addCase(fetchAnotherNews.pending, (state) => {
        state.status.another = "loading";
      })
      .addCase(fetchAnotherNews.fulfilled, (state, action) => {
        state.status.another = "succeeded";
        state.data.another = action.payload;
      })
      .addCase(fetchAnotherNews.rejected, (state, action) => {
        state.status.another = "failed";
        state.error.another = action.error.message;
      })
      // ==================================================================
      .addCase(fetchExclusiveNews.pending, (state) => {
        state.status.exclusive = "loading";
      })
      .addCase(fetchExclusiveNews.fulfilled, (state, action) => {
        state.status.exclusive = "succeeded";
        state.data.exclusive = action.payload;
      })
      .addCase(fetchExclusiveNews.rejected, (state, action) => {
        state.status.exclusive = "failed";
        state.error.exclusive = action.error.message;
      });
  },
});

export default newsSlice.reducer;
