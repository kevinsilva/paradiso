import { Link } from 'react-router-dom';
import { CardTypes } from '../utils/types';
import { CARD_PARAGRAPH_HEIGHT } from '../utils/constants';

export const HorizontalCard = ({ title, imageSrc, link }: CardTypes) => {
  return (
    <Link to={link || ''}>
      <div
        className={`group relative mx-3 mb-8 flex h-[12.15rem] min-h-[12.15rem] w-[18.6rem] min-w-[18.6rem] ${link ? 'cursor-pointer' : 'cursor-default'} flex-col`}
      >
        <img
          src={imageSrc}
          className={`h-[12.15rem] w-full rounded-xl bg-center object-cover transition-opacity duration-300 hover:opacity-80`}
        ></img>

        <p
          className={`text-md ml-2 mt-2 h-[${CARD_PARAGRAPH_HEIGHT}] font-bold text-white`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};
