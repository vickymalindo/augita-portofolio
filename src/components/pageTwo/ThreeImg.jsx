import React from 'react'

const ThreeImg = ({ title, img1, img2, img3 }) => {
  return (
    <div>
      <div className='lg:px-24 px-[72px] sm:px-[90px] py-4'>
        <h3 className='text-[#A879DA] text-[23px] sm:text-[30px] lg:text-4xl font-bold'>{title}</h3>
        <div className='grid grid-cols-3 gap-2 sm:mt-3'>
          <img src={img1} alt={img1} className='w-full' />
          <img src={img2} alt={img2} className='w-full' />
          <img src={img3} alt={img3} className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default ThreeImg