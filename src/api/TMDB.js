import axios from "axios";
import {
  MAIN_IMAGE_URL,
  MOVIE,
  MOVIE_POPULAR,
  MOVIE_UPCOMING,
  GENRES_MOVIE,
} from "./urls";

const API_KEY = "8d58f8833b1cb04a9b53bcfcdc797756";
const baseQueries = `api_key=${API_KEY}&language=ru`;

export const getPosterByPath = (poster_path) => {
  return `${MAIN_IMAGE_URL}/${poster_path}`;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(`${MOVIE}/${movieId}?${baseQueries}`);
  return data;
};

export const getPopularMovies = async () => {
  const { data } = await axios.get(`${MOVIE_POPULAR}?${baseQueries}`);
  return data.results;
};

export const getUpcomingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `${MOVIE_UPCOMING}?${baseQueries}&page=${page}`
  );
  return {
    movies: data.results,
    total_pages: data.total_pages,
    current_page: data.page,
  };
};

export const getGenres = async () => {
  const { data } = await axios.get(`${GENRES_MOVIE}?${baseQueries}`);
  return data;
};
