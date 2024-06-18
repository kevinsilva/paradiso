import { useQuery } from '@tanstack/react-query';
import { fetchPopularSeries } from '../../services/series';

export const usePopularMovies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popular-series'],
    queryFn: fetchPopularSeries,
  });

  return { data, isLoading, error };
};
