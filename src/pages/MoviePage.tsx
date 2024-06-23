import { useParams } from 'react-router-dom';
import {
  useMovieDetails,
  useMovieCredits,
  useMovieRecommendations,
} from '../hooks/useFetch';
import { TitlePageDetails } from '../section/TitlePageDetails';
import { Spinner } from '../components/Spinner';
import { ErrorMsg } from '../components/ErrorMsg';

export const MoviePage = () => {
  const { id } = useParams();
  const titleId = Number(id) || 0;
  const {
    data: details,
    isLoading: isLoadingDetails,
    error: errorDetails,
  } = useMovieDetails(titleId);

  const {
    data: credits,
    isLoading: isLoadingCredits,
    error: errorCredits,
  } = useMovieCredits(titleId);

  const {
    data: recommendations,
    isLoading: isLoadingRecommendations,
    error: errorRecommendations,
  } = useMovieRecommendations(titleId);

  if (isLoadingDetails || isLoadingCredits || isLoadingRecommendations)
    return <Spinner />;
  if (errorDetails || errorCredits || errorRecommendations)
    return <ErrorMsg text='Error' />;

  return (
    <div>
      <TitlePageDetails
        details={details}
        credits={credits}
        recommendations={recommendations}
      />
    </div>
  );
};
