import { Link } from 'react-router-dom';
import { CardTypes } from '../utils/types';
import { CARD_PARAGRAPH_HEIGHT, VERTICAL_CARD_SIZE } from '../utils/constants';

export const VerticalCard = ({ title, imageSrc, link }: CardTypes) => {
  return (
    <Link to={link || ''}>
      <div
        className={`group relative mx-2 flex h-[calc(${VERTICAL_CARD_SIZE.height} + ${CARD_PARAGRAPH_HEIGHT})] w-[${VERTICAL_CARD_SIZE.width}] cursor-pointer flex-col`}
      >
        <img
          src={imageSrc}
          className={`h-[${VERTICAL_CARD_SIZE.height}] rounded-xl object-cover transition-all duration-300 group-hover:contrast-75`}
        ></img>
        <p
          className={`text-md mt-1 h-[${CARD_PARAGRAPH_HEIGHT}] font-bold text-white`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};
