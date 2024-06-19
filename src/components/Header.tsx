import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export const Header = () => {
  // const [showInput, setShowInput] = useState(false);

  // const toggleInput = () => {
  //   setShowInput(!showInput);
  // };

  return (
    <header className='flex items-center justify-between p-4 text-white'>
      <h1 className='text-center text-2xl font-bold text-black'>Paradiso</h1>
      <div className='flex items-center'>
        {/* <input
          type='text'
          className={`px-2 py-1 text-black transition-all duration-300 ${
            showInput ? 'w-40' : 'w-0 opacity-0'
          }`}
          placeholder='Search...'
        />
        <MagnifyingGlass
          size={24}
          weight='bold'
          onClick={toggleInput}
          className='cursor-pointer ml-2 text-black'
        /> */}
      </div>
    </header>
  );
};
