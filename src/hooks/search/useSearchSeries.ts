import { useQuery } from '@tanstack/react-query';
import { fetchSearchSeries } from '../../services/series';

export const useSearchSeries = (query: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search-series', query],
    queryFn: () => fetchSearchSeries(query),
    enabled: !!query,
  });

  return { data, isLoading, error };
};
