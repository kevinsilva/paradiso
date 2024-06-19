import { useFetch } from './useFetch';
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchMoviesByGenre,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieRecommendations,
  fetchSearchMovies,
} from '../../services/movies';
import {
  fetchPopularSeries,
  fetchTrendingSeries,
  fetchSeriesByGenre,
  fetchSerieDetails,
  fetchSerieCredits,
  fetchSerieRecommendations,
  fetchSearchSeries,
} from '../../services/series';

// Movies
export const usePopularMovies = () =>
  useFetch({ queryKey: ['popular-movies'], queryFn: fetchPopularMovies });

export const useTrendingMovies = () =>
  useFetch({ queryKey: ['trending-movies'], queryFn: fetchTrendingMovies });

export const useGenreMovies = (genre: string) =>
  useFetch({
    queryKey: ['genre-movies', genre],
    queryFn: () => fetchMoviesByGenre(genre),
  });

export const useSearchMovies = (query: string) =>
  useFetch({
    queryKey: ['search-movies', query],
    queryFn: () => fetchSearchMovies(query),
    options: { enabled: !!query },
  });

export const useMovieCredits = (movieId: number) =>
  useFetch({
    queryKey: ['movie-credits', movieId],
    queryFn: () => fetchMovieCredits(movieId),
    options: { enabled: !!movieId },
  });

export const useMovieDetails = (movieId: number) =>
  useFetch({
    queryKey: ['movie-details', movieId],
    queryFn: () => fetchMovieDetails(movieId),
    options: { enabled: !!movieId },
  });

export const useMovieRecommendations = (movieId: number) =>
  useFetch({
    queryKey: ['movie-recommendations', movieId],
    queryFn: () => fetchMovieRecommendations(movieId),
    options: { enabled: !!movieId },
  });

// Series
export const usePopularSeries = () =>
  useFetch({ queryKey: ['popular-series'], queryFn: fetchPopularSeries });

export const useTrendingSeries = () =>
  useFetch({ queryKey: ['trending-series'], queryFn: fetchTrendingSeries });

export const useGenreSeries = (genre: string) =>
  useFetch({
    queryKey: ['genre-series', genre],
    queryFn: () => fetchSeriesByGenre(genre),
  });

export const useSearchSeries = (query: string) =>
  useFetch({
    queryKey: ['search-series', query],
    queryFn: () => fetchSearchSeries(query),
    options: { enabled: !!query },
  });

export const useSerieCredits = (serieId: number) =>
  useFetch({
    queryKey: ['serie-credits', serieId],
    queryFn: () => fetchSerieCredits(serieId),
    options: { enabled: !!serieId },
  });

export const useSerieDetails = (serieId: number) =>
  useFetch({
    queryKey: ['serie-details', serieId],
    queryFn: () => fetchSerieDetails(serieId),
    options: { enabled: !!serieId },
  });

export const useSerieRecommendations = (serieId: number) =>
  useFetch({
    queryKey: ['serie-recommendations', serieId],
    queryFn: () => fetchSerieRecommendations(serieId),
    options: { enabled: !!serieId },
  });
