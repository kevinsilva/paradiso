import { useQuery } from '@tanstack/react-query';
import { fetchSeriesByGenre } from '../../services/series';

export const useGenreSeries = (genre: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['genre-series', genre],
    queryFn: () => fetchSeriesByGenre(genre),
  });

  return { data, isLoading, error };
};
