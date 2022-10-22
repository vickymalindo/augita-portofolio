import React from 'react'
import Content from "./Content";
import NavOne from "../utilities/NavOne";
import Footer from "../utilities/Footer";
import Review from "./Review";
import Certificate from "./Certificate";
import Hire from "./Hire";

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
  )
}

export default PageOne