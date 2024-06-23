import { useState, useEffect } from 'react';
import { CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';
import { reduceText, generateURL } from '../utils/utilitary';
import { CarouselTypes } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';

export const Carousel = ({ data }: CarouselTypes) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDashClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMoreInfoClick = () => {
    navigate(generateURL(data[currentIndex]));
  };

  return (
    <div className='group relative h-full min-h-[20.625rem] w-full overflow-hidden'>
      {data.map((item, index: number) => (
        <div
          data-testid='img-container'
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={`${IMAGE_URL.original}${item.backdrop_path}`}
            className={`h-full w-full bg-center object-cover contrast-125 filter ${index === currentIndex ? 'visible' : 'invisible'}`}
            alt={item.title}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950'></div>
          <div className='absolute bottom-40 left-24 w-1/2 text-neutral-50'>
            <h2 className='text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
              {item.title || item.name}
            </h2>
            <p className='mt-2 text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
              {item.overview && reduceText(item.overview, 150)}
            </p>
            <button
              className='mt-8 flex items-center justify-center gap-2 rounded-full bg-neutral-50 px-8 py-2 text-sm text-neutral-950'
              onClick={handleMoreInfoClick}
            >
              More info <ArrowRight size={18} weight='bold' />
            </button>
          </div>
          <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2'>
            {data.map((_item, index: number) => (
              <span
                key={index}
                className={`h-[.2rem] w-8 cursor-pointer rounded-sm bg-neutral-50 ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                onClick={() => handleDashClick(index)}
                data-testid='dash-indicator'
              ></span>
            ))}
          </div>

          <button
            aria-label='Previous'
            className='absolute left-6 top-1/2 -translate-y-1/2 transform bg-opacity-75 text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            onClick={handlePrevClick}
          >
            <CaretLeft size={32} />
          </button>
          <button
            aria-label='Next'
            className='absolute right-6 top-1/2 -translate-y-1/2 transform bg-opacity-75 text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            onClick={handleNextClick}
          >
            <CaretRight size={32} />
          </button>
        </div>
      ))}
    </div>
  );
};
