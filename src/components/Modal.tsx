import { ReactNode, MouseEvent } from 'react';

type ModalTypes = {
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ onClose, children }: ModalTypes) => {
  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Stop the click event from bubbling up
  };

  return (
    <div
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    >
      <div
        onClick={handleContentClick}
        className='relative mx-auto aspect-video w-[80vw] max-w-4xl overflow-hidden rounded-lg'
      >
        <div className='absolute inset-0 bg-black'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
