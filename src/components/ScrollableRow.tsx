import { HorizontalCard } from './HorizontalCard';
import { VerticalCard } from './VerticalCard';

export enum CardTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

type ScrollableRowTypes = {
  title: string;
  data: any[];
  cardType: CardTypes;
};

export const ScrollableRow = ({
  title,
  data,
  cardType,
}: ScrollableRowTypes) => {
  const CardComponent =
    cardType === 'horizontal' ? HorizontalCard : VerticalCard;

  return (
    <div>
      <h2 className='mb-4 text-left text-2xl font-bold'>{title}</h2>
      <div className='scrollbar-hide -mx-4 flex h-full overflow-x-auto scroll-smooth pb-12'>
        {data.map((item) => (
          <div key={item.id} className='mx-4'>
            <CardComponent
              title={item.title}
              imageSrc={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
