import { HomePageSection } from '../section/HomePageSection';
import {
  useTrendingMovies,
  useTrendingSeries,
  usePopularMovies,
  usePopularSeries,
  useGenreMovies,
  useGenreSeries,
} from '../hooks/useFetch';

const getRandomItems = (arr: any, num: number) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  console.log(shuffled);
  return shuffled.slice(0, num);
};

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

  let combinedTrending = [];
  if (Array.isArray(trendingMovies) && Array.isArray(trendingSeries))
    combinedTrending = getRandomItems(
      [...trendingMovies, ...trendingSeries],
      10
    );

  return (
    <div className='overflow-x-hidden bg-neutral-950'>
      <HomePageSection
        trending={combinedTrending}
        PopularMovies={popularMovies}
        PopularSeries={popularSeries}
        MusicMovies={musicMovies}
        documentarySeries={documentarySeries}
      />
    </div>
  );
};
