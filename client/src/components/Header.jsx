import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex flex-row items-center justify-between bg-primary'>
      <div className='text-4xl p-4' id='name'>
        Vimala
      </div>
      <div className='flex items-center justify-between gap-8 text-xl p-4'>
        <Link to="#home" className='cursor-pointer'>Home</Link>
        <Link to="#about" className='cursor-pointer'>About Me</Link>
        <Link to="#skills" className='cursor-pointer'>Skills</Link>
        <Link to="#education" className='cursor-pointer'>Education & Experiences</Link>
      </div>
    </div>
  );
}

export default Header;
