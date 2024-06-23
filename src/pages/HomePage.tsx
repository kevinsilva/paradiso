import { HomePageDetails } from '../section/HomePageDetails';
import { Spinner } from '../components/Spinner';
import { ErrorMsg } from '../components/ErrorMsg';
import { getRandomItems } from '../utils/utilitary';
import {
  useTrendingMovies,
  useTrendingSeries,
  usePopularMovies,
  usePopularSeries,
  useGenreMovies,
  useGenreSeries,
} from '../hooks/useFetch';
import { TitleTypes } from '../utils/types';

export const HomePage = () => {
  const {
    data: trendingMovies,
    isLoading: isTrendingMoviesLoading,
    error: trendingMoviesError,
  } = useTrendingMovies();

  const {
    data: trendingSeries,
    isLoading: isTrendingSeriesLoading,
    error: trendingSeriesError,
  } = useTrendingSeries();

  const {
    data: popularMovies,
    isLoading: isPopularMoviesLoading,
    error: popularMoviesError,
  } = usePopularMovies();

  const {
    data: popularSeries,
    isLoading: isPopularSeriesLoading,
    error: popularSeriesError,
  } = usePopularSeries();

  const {
    data: musicMovies,
    isLoading: isMusicMoviesLoading,
    error: musicMoviesError,
  } = useGenreMovies('Music');

  const {
    data: documentarySeries,
    isLoading: isDocumentarySeriesLoading,
    error: documentarySeriesError,
  } = useGenreSeries('Documentary');

  if (
    isTrendingMoviesLoading ||
    isTrendingSeriesLoading ||
    isPopularMoviesLoading ||
    isPopularSeriesLoading ||
    isMusicMoviesLoading ||
    isDocumentarySeriesLoading
  )
    return <Spinner />;
  if (
    trendingMoviesError ||
    trendingSeriesError ||
    popularMoviesError ||
    popularSeriesError ||
    musicMoviesError ||
    documentarySeriesError
  )
    return <ErrorMsg text='Something went wrong' />;

  let combinedTrending: TitleTypes[] = [];
  if (Array.isArray(trendingMovies) && Array.isArray(trendingSeries))
    combinedTrending = getRandomItems(
      [...trendingMovies, ...trendingSeries],
      10
    );

  return (
    <div className='overflow-x-hidden bg-neutral-950'>
      {}
      <HomePageDetails
        trending={combinedTrending}
        PopularMovies={popularMovies as TitleTypes[]}
        PopularSeries={popularSeries as TitleTypes[]}
        MusicMovies={musicMovies as TitleTypes[]}
        documentarySeries={documentarySeries as TitleTypes[]}
      />
    </div>
  );
};
