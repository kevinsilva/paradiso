type VerticalCardTypes = {
  title: string;
  imageSrc: string;
};

export const VerticalCard = ({ title, imageSrc }: VerticalCardTypes) => {
  return (
    <div className='flex h-[27.813rem] w-[18.563rem] cursor-pointer flex-col'>
      <img
        src={imageSrc}
        className='h-full w-full rounded-xl object-cover'
      ></img>
      <p className='mt-1 text-lg font-bold'>{title}</p>
    </div>
  );
};
