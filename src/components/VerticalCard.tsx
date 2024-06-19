type VerticalCardTypes = {
  title: string;
  imageSrc: string;
};

export const VerticalCard = ({ title, imageSrc }: VerticalCardTypes) => {
  return (
    <div className='group relative flex h-[27.813rem] w-[18.563rem] cursor-pointer flex-col'>
      <img
        src={imageSrc}
        className='h-full min-h-[27.813rem] w-full rounded-xl object-cover transition-all duration-300 group-hover:contrast-75'
      ></img>
      {/* <div className='absolute inset-0 rounded-xl bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-10'></div> */}
      <p className='text-md mt-1 font-bold'>{title}</p>
    </div>
  );
};
