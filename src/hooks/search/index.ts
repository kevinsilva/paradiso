import { useQuery } from '@tanstack/react-query';
import { fetchSearchMovies } from '../../services/movies';
import { fetchSearchSeries } from '../../services/series';

export const useSearchMovies = (query: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search-movies', query],
    queryFn: () => fetchSearchMovies(query),
    enabled: !!query,
  });

  return { data, isLoading, error };
};

export const useSearchSeries = (query: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search-series', query],
    queryFn: () => fetchSearchSeries(query),
    enabled: !!query,
  });

  return { data, isLoading, error };
};
