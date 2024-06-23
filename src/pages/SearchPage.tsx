import { useParams } from 'react-router-dom';
import { useSearchMovies, useSearchSeries } from '../hooks/useFetch';
import { SearchPageDetails } from '../section/SearchPageDetails';
import { Spinner } from '../components/Spinner';
import { ErrorMsg } from '../components/ErrorMsg';
import { TitleTypes } from '../utils/types';

export const SearchPage = () => {
  const { query } = useParams();
  const searchQuery = query || '';
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useSearchMovies(searchQuery);
  const {
    data: series,
    isLoading: seriesLoading,
    error: seriesError,
  } = useSearchSeries(searchQuery);

  if (moviesLoading || seriesLoading) return <Spinner />;
  if (moviesError || seriesError) return <ErrorMsg text='Error' />;

  return (
    <div className='h-full bg-neutral-950'>
      <SearchPageDetails
        movies={movies as TitleTypes[]}
        series={series as TitleTypes[]}
        query={query as string}
      />
    </div>
  );
};
