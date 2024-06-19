import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../../services/movies';
import { fetchSerieDetails } from '../../services/series';

export const useMovieDetails = (movieId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movie-details', movieId],
    queryFn: () => fetchMovieDetails(movieId),
    enabled: !!movieId,
  });

  return { data, isLoading, error };
};

export const useSerieDetails = (serieId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['serie-details', serieId],
    queryFn: () => fetchSerieDetails(serieId),
    enabled: !!serieId,
  });

  return { data, isLoading, error };
};
