import { useQuery } from '@tanstack/react-query';
import { fetchPopularMovies } from '../../services/movies';
import { fetchPopularSeries } from '../../services/series';

export const usePopularMovies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: fetchPopularMovies,
  });

  return { data, isLoading, error };
};

export const usePopularSeries = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popular-series'],
    queryFn: fetchPopularSeries,
  });

  return { data, isLoading, error };
};
