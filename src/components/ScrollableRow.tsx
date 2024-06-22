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
      <h2 className='mb-4 ml-3 text-left text-xl font-bold text-neutral-50'>
        {title}
      </h2>
      <div className='group relative flex h-full items-center justify-between'>
        <button
          className='absolute -left-10 top-[calc(50%-1.75rem)] z-50 -translate-y-1/2 transform p-2 text-neutral-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100'
          onClick={handlePrevClick}
        >
          <CaretLeft size={32} />
        </button>
        <div
          ref={scrollableRef}
          className='scrollbar-hide flex h-full overflow-x-auto overflow-y-hidden scroll-smooth'
        >
          {children}
        </div>
        <button
          className={`absolute -right-10 top-[calc(50%-1.75rem)] z-50 -translate-y-1/2 transform rounded-full p-2 text-neutral-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
          onClick={handleNextClick}
        >
          <CaretRight size={32} />
        </button>
      </div>
    </div>
  );
};
