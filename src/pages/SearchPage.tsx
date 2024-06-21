import { useParams } from 'react-router-dom';
import { useSearchMovies, useSearchSeries } from '../hooks/useFetch';
import { ScrollableRow, CardTypes } from '../components/ScrollableRow';

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

  if (moviesLoading || seriesLoading) return <div>Loading...</div>;
  if (moviesError || seriesError) return <div>Error</div>;

  return (
    <div className='px-8 pt-16'>
      <h2 className='mb-4 text-left text-2xl font-bold'>
        Search Results for "{query}"
      </h2>
      <div className='grid grid-cols-1 gap-4'>
        <ScrollableRow
          title='Movies'
          data={movies}
          cardType={CardTypes.HORIZONTAL}
        />
        <ScrollableRow
          title='Series'
          data={series}
          cardType={CardTypes.HORIZONTAL}
        />
      </div>
    </div>
  );
};
