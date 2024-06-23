import { useState } from 'react';
import { ScrollableRow } from '../components/ScrollableRow';
import { VerticalCard } from '../components/VerticalCard';
import { HorizontalCard } from '../components/HorizontalCard';
import { Modal } from '../components/Modal';
import { Video } from '../components/Video';
import { IMAGE_URL } from '../utils/constants';
import { generateURL } from '../utils/utilitary';
import { TitlePageDetailsTypes } from '../utils/types';

export const TitlePageDetails = ({
  details,
  credits,
  recommendations,
}: TitlePageDetailsTypes) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-neutral-950'>
      <div
        className='relative h-[70rem] w-full bg-cover bg-center md:h-[40rem]'
        style={{
          backgroundImage: `url(${IMAGE_URL.original}${details.backdrop_path})`,
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent'></div>
        <div className='absolute inset-0 bg-neutral-950 opacity-50'></div>
        <div className='absolute inset-0 mt-32 flex flex-col items-center justify-center p-12 pb-20 text-center md:flex-row md:items-end md:text-left'>
          <img
            src={`${IMAGE_URL.medium}${details.poster_path}`}
            alt={details.title || details.name}
            className='mb-8 w-48 rounded-lg shadow-lg md:mb-0 md:mr-8'
          />
          <div className='text-neutral-50'>
            <h2 className='text-4xl font-bold'>
              {details.title || details.name}
            </h2>
            <div className='mb-4 mt-4 text-sm'>
              <div className='mb-2 mt-2 flex flex-wrap items-center justify-center space-x-2 space-y-2 md:justify-start md:space-y-0'>
                {details.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className='rounded-full px-4 py-1 text-neutral-50 backdrop-blur-lg'
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-2 md:justify-start'>
              <p className='text-md my-4 italic'>{details.tagline}</p>
              <span className='rounded-full px-4 py-1 text-sm text-neutral-300 backdrop-blur-lg'>
                release date: {details.release_date}
              </span>
              <span className='rounded-full px-4 py-1 text-sm text-neutral-300 backdrop-blur-lg'>
                {details.runtime} min
              </span>
              <span className='rounded-full px-4 py-1 text-sm text-neutral-300 backdrop-blur-lg'>
                ⭐ {details.vote_average?.toFixed(1)}
              </span>
            </div>
            <p className='mt-4 text-sm md:text-base'>{details.overview}</p>
            <button
              className='relative left-1/2 mt-8 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-neutral-50 px-8 py-2 text-sm text-neutral-950 hover:opacity-90 md:left-0 md:translate-x-0'
              onClick={() => setShowModal(true)}
            >
              Watch Video
            </button>
          </div>
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <Video />
          </Modal>
        )}
      </div>
      <div className='mx-12 mt-8'>
        <ScrollableRow title='Cast'>
          {credits?.map((cast) => (
            <VerticalCard
              key={cast.id}
              title={cast.name}
              imageSrc={`${IMAGE_URL.medium}${cast.profile_path}`}
            />
          ))}
          {credits.length === 0 && (
            <p className='text-md text-neutral-50'>No Cast Available</p>
          )}
        </ScrollableRow>
      </div>
      <div className='mx-12 mt-24'>
        <ScrollableRow title='Recommendations'>
          {recommendations.map((recommendation) => (
            <HorizontalCard
              key={recommendation.id}
              title={recommendation.title || recommendation.name || ''}
              imageSrc={`${IMAGE_URL.medium}${recommendation.poster_path}`}
              link={generateURL(recommendation)}
            />
          ))}
          {recommendations.length === 0 && (
            <p className='text-md text-neutral-50'>
              No Recommendations available
            </p>
          )}
        </ScrollableRow>
      </div>
    </div>
  );
};
