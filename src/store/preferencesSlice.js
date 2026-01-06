import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "usd",
  isDarkMode: true,
  lastVisited: Date.now(),
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCurrency(state, action) {},
    toggleTheme(state, action) {},
  },
});

export const { setCurrency, toggleTheme } = preferencesSlice.actions;

export default preferencesSlice.reducer;
