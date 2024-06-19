import API from './api';
import {
  API_PARAMS_BEST,
  API_PARAMS_SEARCH,
  API_PARAMS_DETAILS,
  API_PARAMS_RECOMMENDATIONS,
} from '../utils/constants';
import { getGenreId } from '../utils/utilitary';

export const fetchPopularMovies = async () => {
  const { data } = await API.get('/movie/popular');
  return data.results;
};

export const fetchMovieGenres = async () => {
  const { data } = await API.get('/genre/movie/list');
  return data.genres;
};

export const fetchMoviesByGenre = async (genre: string) => {
  const genreId = await getGenreId(fetchMovieGenres, genre);
  const { data } = await API.get(`/discover/movie?with_genres=${genreId}`, {
    params: API_PARAMS_BEST,
  });

  return data.results;
};

export const fetchSearchMovies = async (query: string) => {
  const { data } = await API.get(`/search/movie?query=${query}`, {
    params: API_PARAMS_SEARCH,
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId: number) => {
  const { data } = await API.get(`/movie/${movieId}`, {
    params: API_PARAMS_DETAILS,
  });
  return data;
};

export const fetchMovieCredits = async (movieId: number) => {
  const { data } = await API.get(`/movie/${movieId}/credits`, {
    params: API_PARAMS_DETAILS,
  });
  return data;
};

export const fetchMovieRecommendations = async (movieId: number) => {
  const { data } = await API.get(`/movie/${movieId}/recommendations`, {
    params: API_PARAMS_RECOMMENDATIONS,
  });
  return data;
};
