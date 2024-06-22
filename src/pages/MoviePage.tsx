import { useParams } from 'react-router-dom';
import {
  useMovieDetails,
  useMovieCredits,
  useMovieRecommendations,
} from '../hooks/useFetch';
import { MoviePageSection } from '../section/MoviePageSection';
export const MoviePage = () => {
  const { id } = useParams();
  const titleId = Number(id) || 0;
  const { data, isLoading, error } = useMovieDetails(titleId);
  const {
    data: credits,
    isLoading: isLoadingCredits,
    error: errorCredits,
  } = useMovieCredits(titleId);
  const { data: recommendations, isLoading: isLoadingRecommendations } =
    useMovieRecommendations(titleId);

  if (isLoading || isLoadingCredits) return <div>Loading...</div>;
  if (error || errorCredits) return <div>Error</div>;

  return (
    <div>
      <MoviePageSection
        details={data}
        credits={credits}
        recommendations={recommendations}
      />
    </div>
  );
};
