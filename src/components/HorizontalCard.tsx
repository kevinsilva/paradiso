import React from 'react';
type HorizontalCardTypes = {
  title: string;
  imageSrc: string;
  genre?: string;
};

export const HorizontalCard = ({
  title,
  imageSrc,
  genre,
}: HorizontalCardTypes) => {
  return (
    <div className='relative flex h-[10.438rem] w-[18.563rem] cursor-pointer flex-col'>
      <img
        src={imageSrc}
        className='h-full w-full rounded-xl object-cover'
      ></img>
      {genre && (
        <div className='absolute left-2 top-2 z-10'>
          <span className='inline-block rounded-full bg-white bg-opacity-75 px-2 py-1 text-sm'>
            {genre}
          </span>
        </div>
      )}
      <p className='mt-1 text-lg font-bold'>{title}</p>
    </div>
  );
};
