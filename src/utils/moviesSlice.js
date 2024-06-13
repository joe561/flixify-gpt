import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    discoverMovies: null,
    topRatedMovies: null,
    allTimeFavMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addDiscoverMovies: (state, action) => {
      state.discoverMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addAllTimeFavMovies: (state, action) => {
      state.allTimeFavMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addDiscoverMovies,
  addTopRatedMovies,
  addAllTimeFavMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
