import { useQuery } from '@tanstack/react-query';
import { fetchMoviesByGenre } from '../../services/movies';

export const useGenreMovies = (genre: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['genre-movies', genre],
    queryFn: () => fetchMoviesByGenre(genre),
  });

  return { data, isLoading, error };
};
