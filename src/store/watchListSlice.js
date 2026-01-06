import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: [],
};

const watchListSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    toggleWatchList(state, action) {},
  },
});

export const { toggleWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
