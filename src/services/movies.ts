import API from './config';
import {
  API_PARAMS_BEST,
  API_PARAMS_SEARCH,
  API_PARAMS_DETAILS,
  API_PARAMS_RECOMMENDATIONS,
} from '../utils/constants';
import { getGenreId } from '../utils/utilitary';
import {
  CreditTypes,
  GenreTypes,
  RecommendationTypes,
  TitleTypes,
} from '../utils/types';

export const fetchPopularMovies = async (): Promise<TitleTypes> => {
  const { data } = await API.get('movie/popular');
  return data.results;
};

export const fetchTrendingMovies = async (): Promise<TitleTypes> => {
  const { data } = await API.get('trending/movie/week', {
    params: API_PARAMS_DETAILS,
  });
  return data.results;
};

export const fetchMovieGenres = async (): Promise<GenreTypes[]> => {
  const { data } = await API.get('genre/movie/list');
  return data.genres;
};

export const fetchMoviesByGenre = async (
  genre: string
): Promise<TitleTypes[]> => {
  const genreId = await getGenreId(fetchMovieGenres, genre);
  const { data } = await API.get(`discover/movie?with_genres=${genreId}`, {
    params: API_PARAMS_BEST,
  });

  return data.results;
};

export const fetchSearchMovies = async (query: string): Promise<TitleTypes> => {
  const { data } = await API.get(`search/movie?query=${query}`, {
    params: API_PARAMS_SEARCH,
  });
  return data.results;
};

export const fetchMovieDetails = async (
  movieId: number
): Promise<TitleTypes> => {
  const { data } = await API.get(`movie/${movieId}`, {
    params: API_PARAMS_DETAILS,
  });
  return data;
};

export const fetchMovieCredits = async (
  movieId: number
): Promise<CreditTypes> => {
  const { data } = await API.get(`movie/${movieId}/credits`, {
    params: API_PARAMS_DETAILS,
  });
  return data.cast;
};

export const fetchMovieRecommendations = async (
  movieId: number
): Promise<RecommendationTypes> => {
  const { data } = await API.get(`movie/${movieId}/recommendations`, {
    params: API_PARAMS_RECOMMENDATIONS,
  });
  return data.results;
};
