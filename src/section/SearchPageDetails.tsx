import { ScrollableRow } from '../components/ScrollableRow';
import { HorizontalCard } from '../components/HorizontalCard';
import { IMAGE_URL } from '../utils/constants';
import { generateURL } from '../utils/utilitary';
import { SearchPageDetailsTypes } from '../utils/types';

export const SearchPageDetails = ({
  movies,
  series,
  query,
}: SearchPageDetailsTypes) => {
  return (
    <div className='bg-neutral-950 px-8 pt-32'>
      <h2 className='mb-4 text-left text-2xl font-bold text-neutral-50'>
        Search Results for "{query}"
      </h2>
      <div className='mt-16'>
        <ScrollableRow title='Movies'>
          {movies?.map((movie) => (
            <HorizontalCard
              key={movie.id}
              title={movie.title || ''}
              imageSrc={`${IMAGE_URL}${movie.poster_path}`}
              link={generateURL(movie)}
            />
          ))}
        </ScrollableRow>
      </div>
      <div className='mt-8'>
        <ScrollableRow title='Series'>
          {series?.map((serie) => (
            <HorizontalCard
              key={serie.id}
              title={serie.name || ''}
              imageSrc={`${IMAGE_URL}${serie.poster_path}`}
              link={generateURL(serie)}
            />
          ))}
        </ScrollableRow>
      </div>
    </div>
  );
};
