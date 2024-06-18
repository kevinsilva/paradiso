import API from './api';
import { API_PARAMS_BEST, API_PARAMS_SEARCH } from '../utils/constants';
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
