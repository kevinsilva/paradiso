import { useState } from 'react';
import { CaretLeft, CaretRight, ArrowRight } from '@phosphor-icons/react';

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

export const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className='group relative h-4/5 min-h-[20.625rem] w-full overflow-hidden'>
      {data.map((item, index: number) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            className='h-full w-full bg-center object-cover contrast-125 filter'
            alt={item.title}
          />
          <div className='absolute left-16 top-1/2 w-1/2 -translate-y-1/2 transform text-white'>
            <h2 className='text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
              {item.title}
            </h2>
            <p className='mt-2 text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
              {truncateText(item.overview, 150)}
            </p>
            <button className='mt-8 flex items-center justify-center gap-2 rounded-full bg-white px-8 py-2 text-sm text-black'>
              More info <ArrowRight size={18} weight='bold' />
            </button>
          </div>
          <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2'>
            {data.map((obj, index: number) => (
              <span
                key={index}
                className={`h-[.2rem] w-8 cursor-pointer rounded-sm bg-white ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                onClick={() => handleDashClick(index)}
              ></span>
            ))}
          </div>

          <button
            className='absolute left-2 top-1/2 -translate-y-1/2 transform bg-opacity-75 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            onClick={handlePrevClick}
          >
            <CaretLeft size={32} />
          </button>
          <button
            className='absolute right-2 top-1/2 -translate-y-1/2 transform bg-opacity-75 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            onClick={handleNextClick}
          >
            <CaretRight size={32} />
          </button>
        </div>
      ))}
    </div>
  );
};
