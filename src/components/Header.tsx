import { useState } from 'react';
import { KeyboardEvent } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
      navigate(`/search/${event.currentTarget.value.trim()}`);
    }
    if (event.key === 'Escape') {
      setShowInput(false);
      event.currentTarget.value = '';
      navigate('/');
    }
  };

  return (
    <header className='absolute left-0 top-0 z-50 flex w-full items-center justify-between p-4 text-white'>
      <h1 className='text-center text-2xl font-bold text-black'>Paradiso</h1>
      <div className='flex items-center'>
        <input
          type='text'
          className={`px-2 py-1 text-black transition-all duration-300 ${
            showInput ? 'w-40' : 'w-0 opacity-0'
          }`}
          placeholder='Search...'
          onKeyDown={handleKeyDown}
        />
        <MagnifyingGlass
          size={24}
          weight='bold'
          onClick={toggleInput}
          className='ml-2 cursor-pointer text-black'
        />
      </div>
    </header>
  );
};
