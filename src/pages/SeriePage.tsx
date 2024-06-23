import { useParams } from 'react-router-dom';
import {
  useSerieDetails,
  useSerieCredits,
  useSerieRecommendations,
} from '../hooks/useFetch';
import { TitlePageDetails } from '../section/TitlePageDetails';
import { Spinner } from '../components/Spinner';
import { ErrorMsg } from '../components/ErrorMsg';
import { CreditTypes, DetailTypes, RecommendationTypes } from '../utils/types';

export const SeriePage = () => {
  const { id } = useParams();
  const titleId = Number(id) || 0;
  const {
    data: details,
    isLoading: isLoadingDetails,
    error: errorDetails,
  } = useSerieDetails(titleId);
  const {
    data: credits,
    isLoading: isLoadingCredits,
    error: errorCredits,
  } = useSerieCredits(titleId);
  const {
    data: recommendations,
    isLoading: isLoadingRecommendations,
    error: errorRecommendations,
  } = useSerieRecommendations(titleId);

  if (isLoadingDetails || isLoadingRecommendations || isLoadingCredits)
    return <Spinner />;
  if (errorDetails || errorCredits || errorRecommendations)
    return <ErrorMsg text='Error' />;

  return (
    <div>
      <TitlePageDetails
        details={details as DetailTypes}
        credits={credits as CreditTypes[]}
        recommendations={recommendations as RecommendationTypes[]}
      />
    </div>
  );
};
