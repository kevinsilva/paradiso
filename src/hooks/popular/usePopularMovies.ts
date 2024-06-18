import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies } from '../../services/movies';

export const usePopularMovies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: fetchPopularMovies,
  });

  return { data, isLoading, error };
};
