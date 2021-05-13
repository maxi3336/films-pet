import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: undefined,
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

const { actions, reducer } = movies;

export const { setGenres } = actions;

export default reducer;
