import { useQuery } from '@tanstack/react-query';
import { fetchSearchMovies } from '../../services/movies';

export const useSearchMovies = (query: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search-movies', query],
    queryFn: () => fetchSearchMovies(query),
    enabled: !!query,
  });

  return { data, isLoading, error };
};
