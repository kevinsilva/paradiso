import { useQuery } from '@tanstack/react-query';
import { fetchMovieCredits } from '../../services/movies';
import { fetchSerieCredits } from '../../services/series';

export const useMovieCredits = (movieId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movie-credits', movieId],
    queryFn: () => fetchMovieCredits(movieId),
    enabled: !!movieId,
  });

  return { data, isLoading, error };
};

export const useSerieCredits = (serieId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['serie-credits', serieId],
    queryFn: () => fetchSerieCredits(serieId),
    enabled: !!serieId,
  });

  return { data, isLoading, error };
};
