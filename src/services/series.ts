import API from './api';
import {
  API_PARAMS_BEST,
  API_PARAMS_SEARCH,
  API_PARAMS_DETAILS,
  API_PARAMS_RECOMMENDATIONS,
} from '../utils/constants';
import { getGenreId } from '../utils/utilitary';

export const fetchPopularSeries = async () => {
  const { data } = await API.get('tv/popular');
  return data.results;
};

export const fetchTrendingSeries = async () => {
  const { data } = await API.get('trending/tv/week', {
    params: API_PARAMS_DETAILS,
  });
  return data.results;
};

export const fetchSeriesGenres = async () => {
  const { data } = await API.get('genre/tv/list');
  return data.genres;
};

export const fetchSeriesByGenre = async (genre: string) => {
  const genreId = await getGenreId(fetchSeriesGenres, genre);
  const { data } = await API.get(`discover/tv?with_genres=${genreId}`, {
    params: API_PARAMS_BEST,
  });

  return data.results;
};

export const fetchSearchSeries = async (query: string) => {
  const { data } = await API.get(`search/tv?query=${query}`, {
    params: API_PARAMS_SEARCH,
  });
  return data.results;
};

export const fetchSerieDetails = async (serieId: number) => {
  const { data } = await API.get(`tv/${serieId}`, {
    params: API_PARAMS_DETAILS,
  });
  return data;
};

export const fetchSerieCredits = async (serieId: number) => {
  const { data } = await API.get(`tv/${serieId}/credits`, {
    params: API_PARAMS_DETAILS,
  });
  return data;
};

export const fetchSerieRecommendations = async (serieId: number) => {
  const { data } = await API.get(`tv/${serieId}/recommendations`, {
    params: API_PARAMS_RECOMMENDATIONS,
  });
  return data;
};
