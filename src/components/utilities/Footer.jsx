import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsDribbble, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='bg-light-purple'>
      <div className='p-10'>
        <h3 className='text-[#000421] text-[24px] sm:text-[34px] font-semibold text-center'>Interested Working with Me ?</h3>
        <div className='text-center my-16'>
          <p className='text-[#E4EEF7] mb-4 text-lg'>Go get in touch</p>
          <div className='flex gap-5 items-center justify-center text-[#E4EEF7] text-lg'>
            <a href="https://www.linkedin.com/in/augita-yasmin-986054207/" target='_blank' rel='noreferrer'>
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/augiysmn/" target='_blank' rel='noreferrer'>
              <BsInstagram />
            </a>
            <a href="https://dribbble.com/augiysmn" target='_blank' rel='noreferrer'>
              <BsDribbble />
            </a>
            <a href="https://twitter.com/augiysmn" target='_blank' rel='noreferrer'>
              <BsTwitter />
            </a>
            <a href="https://wa.me/089607123166" target='_blank' rel='noreferrer'>
              <BsWhatsapp />
            </a>
            <a href="mailto:augitayasmin@gmail.com" target='_blank' rel='noreferrer'>
              <FiMail />
            </a>
          </div>
        </div>
        <div className='text-center font-medium'>
          <p className='text-xs sm:text-base'>Copyright © 2022 by Augita Yasmin</p>
        </div>
      </div>
    </div>
  )
}

export default Footer