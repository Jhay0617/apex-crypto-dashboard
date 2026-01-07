import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "usd",
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = preferencesSlice.actions;
export const selectCurrentCurrency = (state) => state.preferences.currency;
export default preferencesSlice.reducer;
