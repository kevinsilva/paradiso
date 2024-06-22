import { Link } from 'react-router-dom';
import { CardTypes } from '../utils/types';
import {
  HORIZONTAL_CARD_SIZE,
  CARD_PARAGRAPH_HEIGHT,
  IMAGE_URL,
} from '../utils/constants';

export const HorizontalCard = ({ title, imageSrc, link }: CardTypes) => {
  return (
    <Link to={link || ''}>
      <div
        className={`group relative mx-3 flex h-[calc(${HORIZONTAL_CARD_SIZE.height} + ${CARD_PARAGRAPH_HEIGHT})] w-[${HORIZONTAL_CARD_SIZE.width}] mb-8 ${link ? 'cursor-pointer' : ''} flex-col`}
      >
        <img
          src={IMAGE_URL + imageSrc}
          className={`h-[${HORIZONTAL_CARD_SIZE.height}] w-full rounded-xl object-cover transition-opacity duration-300 hover:opacity-90`}
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
