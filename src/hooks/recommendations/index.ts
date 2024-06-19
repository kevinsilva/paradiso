import { useQuery } from '@tanstack/react-query';
import { fetchMovieRecommendations } from '../../services/movies';
import { fetchSerieRecommendations } from '../../services/series';

export const useMovieRecommendations = (movieId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movie-recommendations', movieId],
    queryFn: () => fetchMovieRecommendations(movieId),
    enabled: !!movieId,
  });

  return { data, isLoading, error };
};

export const useSerieRecommendations = (serieId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['serie-recommendations', serieId],
    queryFn: () => fetchSerieRecommendations(serieId),
    enabled: !!serieId,
  });

  return { data, isLoading, error };
};
