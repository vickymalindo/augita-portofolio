import React from 'react';
import { Link } from 'react-router-dom';
import logoNavbar from '../../images/logoNavbar.png';

const Nav = () => {
  return (
    <div className='bg-light-purple flex justify-between items-center px-5 py-2.5 sticky top-0 z-40'>
      <div>
        <Link to='/' className='flex items-center justify-center gap-2'>
          <img
            src={logoNavbar}
            alt='logoNavbar'
            className='w-12 h-12 sm:w-20 sm:h-20'
          />
          <h4 className='text-[#4d4d4d] font-medium sm:w-full text-sm sm:text-lg'>
            Augita Yasmin
          </h4>
        </Link>
      </div>
      <div>
        <Link
          to='/projects'
          className={
            'inline-block bg-light-blue px-2 py-1.5 sm:px-4 sm:py-3 text-[#4d4d4d] font-medium text-[12px] sm:text-base shadow-lg rounded'
          }>
          Another Projects
        </Link>
      </div>
    </div>
  );
};

export default Nav;
