import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import style from './PageOne.module.css';

const Project = ({ site, nameSite, image, text }) => {
  return (
    <div>
      <div className='p-5 lg:p-16'>
        <div
          className={`w-full h-1/4 relative rounded-[10px] overflow-hidden ${style.img_wrapper}`}>
          <img
            src={image}
            alt={image}
            className='w-full h-full rounded-[10px]'
          />
          <div className={`${style.hover_text} absolute top-0 z-10 p-2.5`}>
            <h3 className='absolute w-[90%] text-justify bottom-5 sm:bottom-8 lg:bottom-10 text-white text-sm sm:text-base lg:text-2xl ml-1 sm:mx-10 lg:mx-12'>
              {text}
            </h3>
          </div>
        </div>
        <a href={site} className='text-white text-sm'>
          <BsLink45Deg className='inline-block mr-1' />
          {nameSite}
        </a>
      </div>
    </div>
  );
};

export default Project;
