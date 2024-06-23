import { WarningCircle } from '@phosphor-icons/react';

export const ErrorMsg = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center justify-center text-red-700'>
      <WarningCircle size={32} />
      {text}
    </div>
  );
};
