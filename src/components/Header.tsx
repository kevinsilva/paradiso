import { useState, KeyboardEvent } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useNavigate, Link } from 'react-router-dom';

export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
      navigate(`/search/${event.currentTarget.value.trim()}`);
      event.currentTarget.value = '';
      setShowInput(false);
    }
    if (event.key === 'Escape') {
      setShowInput(false);
      event.currentTarget.value = '';
      navigate('/');
    }
  };

  return (
    <header className='absolute left-0 top-0 z-50 flex w-full items-center justify-between p-8 text-neutral-50'>
      <Link to='/'>
        <h1 className='text-center text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          Paradiso
        </h1>
      </Link>
      <div className='flex items-center'>
        <input
          type='text'
          className={`rounded px-2 py-1 text-neutral-950 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-300 focus:outline-none ${
            showInput ? 'w-40' : 'w-0 opacity-0'
          }`}
          placeholder='Search...'
          onKeyDown={handleKeyDown}
        />
        <MagnifyingGlass
          size={24}
          weight='bold'
          onClick={toggleInput}
          className='ml-2 cursor-pointer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
        />
      </div>
    </header>
  );
};
