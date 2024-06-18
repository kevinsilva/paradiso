import API from './api';
import { API_PARAMS_BEST, API_PARAMS_SEARCH } from '../utils/constants';
import { getGenreId } from '../utils/utilitary';

export const fetchPopularSeries = async () => {
  const { data } = await API.get('/tv/popular');
  return data.results;
};

export const fetchSeriesGenres = async () => {
  const { data } = await API.get('/genre/tv/list');
  return data.genres;
};

export const fetchSeriesByGenre = async (genre: string) => {
  const genreId = await getGenreId(fetchSeriesGenres, genre);
  const { data } = await API.get(`/discover/tv?with_genres=${genreId}`, {
    params: API_PARAMS_BEST,
  });

  return data.results;
};

export const fetchSearchSeries = async (query: string) => {
  const { data } = await API.get(`/search/tv?query=${query}`, {
    params: API_PARAMS_SEARCH,
  });
  return data.results;
};
