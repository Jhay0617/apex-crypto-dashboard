import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  items: [],
};

const watchListSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    toggleWatchList(state, action) {
      const { id, name } = action.payload;

      const coin = state.items?.some((coin) => coin.id === id);

      if (coin) {
        state.items = state.items.filter((coin) => coin.id !== id);
        toast.info(`${name} has been removed from the watch list`);
      } else {
        state.items?.push(action.payload);
        toast.success(`${name} has been added to the watch list`);
      }
    },
  },
});

export const { toggleWatchList } = watchListSlice.actions;

export const isCoinInWatchList = (id) => (state) =>
  state.watchlist?.items?.some((coin) => coin.id === id) ?? false;

export default watchListSlice.reducer;
