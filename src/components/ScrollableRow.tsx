import { useRef } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { ScrollableRowTypes } from '../utils/types';

export const ScrollableRow = ({ title, children }: ScrollableRowTypes) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft -= scrollableRef.current.offsetWidth;
    }
  };

  const handleNextClick = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft += scrollableRef.current.offsetWidth;
    }
  };

  return (
    <div>
      <h2 className='mb-4 text-left text-2xl font-bold'>{title}</h2>
      <div className='group relative flex h-full items-center justify-between'>
        <button
          className='absolute -left-4 top-[calc(50%-1.75rem)] z-50 -translate-y-1/2 transform rounded-full bg-white p-2 text-gray-600 opacity-0 shadow-md transition-opacity duration-200 hover:bg-gray-100 group-hover:opacity-100'
          onClick={handlePrevClick}
        >
          <CaretLeft size={32} />
        </button>
        <div
          ref={scrollableRef}
          className='scrollbar-hide -mx-4 flex h-full overflow-x-auto overflow-y-hidden scroll-smooth'
        >
          {children}
        </div>
        <button
          className={`absolute -right-4 top-[calc(50%-1.75rem)] z-50 -translate-y-1/2 transform rounded-full bg-white p-2 text-gray-600 opacity-0 shadow-md transition-opacity duration-200 hover:bg-gray-100 group-hover:opacity-100`}
          onClick={handleNextClick}
        >
          <CaretRight size={32} />
        </button>
      </div>
    </div>
  );
};
