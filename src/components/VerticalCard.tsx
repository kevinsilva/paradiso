import { Link } from 'react-router-dom';
import { CardTypes } from '../utils/types';
import { CARD_PARAGRAPH_HEIGHT } from '../utils/constants';

export const VerticalCard = ({ title, imageSrc, link }: CardTypes) => {
  return (
    <Link to={link || ''}>
      <div
        className={`group relative mx-3 flex h-[29.55rem] min-h-[29.55rem] w-[18.5rem] min-w-[18.5rem] ${link ? 'cursor-pointer' : 'cursor-default'} flex-col`}
      >
        <img
          src={imageSrc}
          className={`h-[29.55rem] rounded-xl object-cover transition-all duration-300 hover:opacity-80`}
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
