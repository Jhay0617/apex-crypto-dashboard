import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import watchListReducer from "./watchListSlice";
import preferencesReducer from "./preferencesSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
const persistConfig = {
  key: "root",
  storage: localStorage,
};

const rootReducer = combineReducers({
  watchlist: watchListReducer,
  preferences: preferencesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, FLUSH, PAUSE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
