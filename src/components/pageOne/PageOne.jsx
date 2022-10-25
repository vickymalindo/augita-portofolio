import React from 'react';
import Footer from '../utilities/Footer';
import NavOne from '../utilities/NavOne';
import Certificate from './Certificate';
import Content from './Content';
import Hire from './Hire';
import Review from './Review';

const PageOne = () => {
  return (
    <div>
      <NavOne />
      <Content />
      <Review />
      <div className='w-full h-[2px] bg-[#CAD3DC]'></div>
      <Certificate />
      <Hire />
      <Footer />
    </div>
  );
};

export default PageOne;
