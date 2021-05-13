import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import movies from "./reducers/movies";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    movies,
  },
  middleware,
});
