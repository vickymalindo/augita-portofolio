import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';

const UiUx = ({ img1, img2, title, link1, link2, view }) => {
  return (
    <div>
      <div className='lg:px-24 px-[72px] sm:px-[90px] py-4'>
        <h3 className='text-[#A879DA] text-[23px] sm:text-[30px] lg:text-4xl font-bold'>
          {title}
        </h3>
        <div className='flex gap-2 justify-between items-center sm:mt-3'>
          <div className='w-1/2'>
            <img src={img1} alt={img1} className='w-full' />
            <a
              href={link1}
              className='inline-block mt-3 text-[11px] sm:text-base font-medium'>
              <BsLink45Deg className='inline-block mr-1' />
              {view}
            </a>
          </div>
          <div className='w-1/2'>
            <img src={img2} alt={img2} className='w-full' />
            <a
              href={link2}
              className='inline-block mt-3 text-[11px] sm:text-base font-medium'>
              <BsLink45Deg className='inline-block mr-1' />
              {view}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUx;
