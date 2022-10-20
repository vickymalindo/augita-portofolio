import React from 'react'
import Figma from '../../images/Figma.png'
import Pictsart from '../../images/Pictsart.png'
import Canva from '../../images/Canva.png'
import Paint from '../../images/Paint.png'

const Tools = () => {
  return (
    <div className='bg-[#CAD3DC] w-4/5 sm:w-2/3 m-auto my-9 rounded-[10px] sm:rounded-[30px] lg:rounded-[35px] shadow-md shadow-zinc-400'>
      <div className='flex justify-center sm:justify-center lg:justify-around items-center px-3 py-10 sm:px-7 lg:px-10 sm:py-14 lg:py-20 gap-7 sm:gap-11 lg:gap-0'>
        <h3 className='font-bold text-[12px] sm:text-xl lg:text-4xl'>Tools that I’ve used</h3>
        <div className='flex items-center justify-center gap-3 sm:gap-5 lg:gap-6'>
          <img src={Paint} alt="Paint" className='w-[19px] h-[19px] sm:w-7 sm:h-7 lg:w-10 lg:h-10' />
          <img src={Pictsart} alt="Pictsart" className='w-[35px] h-[16px] sm:w-16 sm:h-5 lg:w-24 lg:h-8' />
          <img src={Canva} alt="Canva" className='w-[19px] h-[19px] sm:w-7 sm:h-7 lg:w-10 lg:h-10' />
          <img src={Figma} alt="Figma" className='w-[19px] h-[19px] sm:w-7 sm:h-7 lg:w-10 lg:h-10' />
        </div>
      </div>
    </div>
  )
}

export default Tools