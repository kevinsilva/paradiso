import React, { useState } from 'react';
import { ScrollableRow } from '../components/ScrollableRow';
import { VerticalCard } from '../components/VerticalCard';
import { HorizontalCard } from '../components/HorizontalCard';
import { Modal } from '../components/Modal';
import { Video } from '../components/Video';
import { IMAGE_URL } from '../utils/constants';
import { generateURL } from '../utils/utilitary';

export const MoviePageSection = ({ details, credits, recommendations }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-neutral-950'>
      <div
        className='relative h-[40rem] w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})`,
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent'></div>
        <div className='absolute inset-0 bg-neutral-950 opacity-50'></div>
        <div className='absolute inset-0 flex items-end p-12 pb-20'>
          <img
            src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
            alt={details.title || details.name}
            className='mr-8 w-48 rounded-lg shadow-lg'
          />
          <div className='text-neutral-50'>
            <h2 className='text-4xl font-bold'>
              {details.title || details.name}
            </h2>
            <div className='mb-4 mt-4 text-sm'>
              <div className='mb-4 mt-2 flex flex-wrap items-center space-x-2'>
                {details.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className='rounded-full border-[1px] border-neutral-700 px-4 py-1 text-neutral-50'
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex flex-wrap items-center space-x-2'>
              <p className='text-md my-4 italic'>{details.tagline}</p>
              <span className='rounded-full px-4 py-1 text-sm text-neutral-300 backdrop-blur-lg'>
                release date: {details.release_date}
              </span>
              <span className='rounded-full px-4 py-1 text-sm text-neutral-300 backdrop-blur-lg'>
                {details.runtime} min
              </span>
              <span className='rounded-full px-4 py-1 text-sm text-neutral-300 backdrop-blur-lg'>
                ⭐ {details.vote_average.toFixed(1)}
              </span>
            </div>
            <p>{details.overview}</p>
            <button
              className='mt-8 flex items-center justify-center gap-2 rounded-full bg-neutral-50 px-8 py-2 text-sm text-neutral-950'
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
          {credits?.cast.map((cast) => (
            <VerticalCard
              key={cast.id}
              title={cast.name}
              imageSrc={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
            />
          ))}
        </ScrollableRow>
      </div>
      <div className='mx-12 mt-24'>
        <ScrollableRow title='Recommendations'>
          {recommendations?.results.map((recommendation) => (
            <HorizontalCard
              key={recommendation.id}
              title={recommendation.title}
              imageSrc={`https://image.tmdb.org/t/p/w300${recommendation.poster_path}`}
            />
          ))}
        </ScrollableRow>
      </div>
    </div>
  );
};
