import { Carousel } from '../components/Carousel';
import { ScrollableRow } from '../components/ScrollableRow';
import { VerticalCard } from '../components/VerticalCard';
import { HorizontalCard } from '../components/HorizontalCard';
import { generateURL } from '../utils/utilitary';
import { IMAGE_URL } from '../utils/constants';
import { HomePageDetailsTypes } from '../utils/types';

export const HomePageDetails = ({
  trending,
  PopularMovies,
  PopularSeries,
  MusicMovies,
  documentarySeries,
}: HomePageDetailsTypes) => {
  return (
    <div className='h-full'>
      <div className='h-[40rem]'>
        <Carousel data={trending} />
      </div>
      <div className='mx-12 mt-8'>
        <ScrollableRow title='Popular Movies'>
          {PopularMovies?.map((movie) => (
            <HorizontalCard
              key={movie.id}
              title={movie.title || ''}
              imageSrc={`${IMAGE_URL.medium}${movie.poster_path}`}
              link={generateURL(movie)}
            />
          ))}
        </ScrollableRow>
      </div>
      <div className='mx-12 mt-8'>
        <ScrollableRow title='Music Movies'>
          {MusicMovies?.map((movie) => (
            <HorizontalCard
              key={movie.id}
              title={movie.title || ''}
              imageSrc={`${IMAGE_URL.medium}${movie.backdrop_path}`}
              link={generateURL(movie)}
            />
          ))}
        </ScrollableRow>
      </div>
      <div className='mx-12 mt-10'>
        <ScrollableRow title='Popular Series'>
          {PopularSeries?.map((serie) => (
            <VerticalCard
              key={serie.id}
              title={serie.name || ''}
              imageSrc={`${IMAGE_URL.medium}${serie.poster_path}`}
              link={generateURL(serie)}
            />
          ))}
        </ScrollableRow>
      </div>
      <div className='mx-12 mt-20'>
        <ScrollableRow title='Documentary Series'>
          {documentarySeries?.map((serie) => (
            <HorizontalCard
              key={serie.id}
              title={serie.name || ''}
              imageSrc={`${IMAGE_URL.medium}${serie.backdrop_path}`}
              link={generateURL(serie)}
            />
          ))}
        </ScrollableRow>
      </div>
    </div>
  );
};
