import { Link } from 'react-router-dom';
import { CardTypes } from '../utils/types';
import { CARD_PARAGRAPH_HEIGHT, VERTICAL_CARD_SIZE } from '../utils/constants';

export const VerticalCard = ({ title, imageSrc, link }: CardTypes) => {
  return (
    <Link to={link || ''}>
      <div
        className={`group relative mx-3 flex h-[calc(${VERTICAL_CARD_SIZE.height} + ${CARD_PARAGRAPH_HEIGHT})] w-[${VERTICAL_CARD_SIZE.width}] ${link ? 'cursor-pointer' : ''} flex-col`}
      >
        <img
          src={imageSrc}
          className={`h-[${VERTICAL_CARD_SIZE.height}] hover:contrast-90 rounded-xl object-cover transition-all duration-300`}
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
