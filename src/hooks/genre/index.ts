import { useQuery } from '@tanstack/react-query';
import { fetchMoviesByGenre } from '../../services/movies';
import { fetchSeriesByGenre } from '../../services/series';

export const useGenreMovies = (genre: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['genre-movies', genre],
    queryFn: () => fetchMoviesByGenre(genre),
  });

  return { data, isLoading, error };
};

export const useGenreSeries = (genre: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['genre-series', genre],
    queryFn: () => fetchSeriesByGenre(genre),
  });

  return { data, isLoading, error };
};
