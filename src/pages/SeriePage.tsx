import { useParams } from 'react-router-dom';
import {
  useSerieDetails,
  useSerieCredits,
  useSerieRecommendations,
} from '../hooks/useFetch';
import { MoviePageSection } from '../section/MoviePageSection';
export const SeriePage = () => {
  const { id } = useParams();
  const titleId = Number(id) || 0;
  const { data, isLoading, error } = useSerieDetails(titleId);
  const {
    data: credits,
    isLoading: isLoadingCredits,
    error: errorCredits,
  } = useSerieCredits(titleId);
  const { data: recommendations, isLoading: isLoadingRecommendations } =
    useSerieRecommendations(titleId);

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
