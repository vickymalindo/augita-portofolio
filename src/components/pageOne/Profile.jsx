import React from 'react'
import { BsDownload } from 'react-icons/bs'
import Linkedin from '../../images/Linkedin.png'
import Instagram from '../../images/Instagram.png'
import Dribbble from '../../images/Dribbble.png'
import Twitter from '../../images/Twitter.png'
import Whatsapp from '../../images/Whatsapp.png'
import Messege from '../../images/Messege.png'
import profile from '../../images/profile.png'
import CV from '../../images/CV.pdf'

const Profile = () => {
  return (
    <div className='bg-light-blue rounded-b-3xl'>
      <div className='flex flex-col-reverse justify-center items-center sm:flex-row px-9 lg:px-16 py-3 lg:py-7'>
        <div className='p-6'>
          <h3 className='text-pink font-semibold text-2xl text-center sm:text-start sm:text-[24px] lg:text-4xl'>Hi ! I’m Augita Yasmin</h3>
          <h2 className='font-bold text-2xl text-center sm:text-start sm:text-4xl lg:text-4xl'>Wanna be a</h2>
          <h2 className='font-bold text-2xl text-center sm:text-start sm:text-4xl lg:text-4xl'>UI/UX Designer</h2>
          <p className='text-justify mt-7'>
            I’m from Indonesia, especially located in DKI Jakarta. I’m fresh graduated from Politeknik Negeri Jakarta in Telecommunication Engineer’s field. Therefore, I’m interesting about how is the user interfaces were affect their user’s life in this digitalization era. Even though I don’t get any subject that focusing on UI/UX at my college, but I learn from Youtuber that named Mas KukuhAldy and practicing it on Figma directly. I also take a course and watch webinar that has UI/UX session on it. I will always keep in mind to learn more and be a good UI/UX Designer. So right now, I’m looking forward to collaborate with you!
          </p>
          <div className='flex flex-col md:flex-row items-center justify-start gap-5 lg:gap-8 mt-10'>
            <div>
              <a href={CV} className='flex items-center gap-4 bg-light-purple text-dark-blue px-2 py-1.5 lg:px-6 lg:py-3 rounded font-semibold text-sm sm:text-base lg:text-lg'><BsDownload className='text-xl' />  My CV</a>
            </div>
            <div className='flex items-center gap-5'>
              <a href="https://www.linkedin.com/in/augita-yasmin-986054207/" target='_blank' rel='noreferrer'><img src={Linkedin} alt="Linkedin" className='w-5 h-5 sm:w-6 sm:h-6' /></a>
              <a href="https://www.instagram.com/augiysmn/" target='_blank' rel='noreferrer'><img src={Instagram} alt="Instagram" className='w-5 h-5 sm:w-6 sm:h-6' /></a>
              <a href="https://dribbble.com/augiysmn" target='_blank' rel='noreferrer'><img src={Dribbble} alt="Dribbble" className='w-5 h-5 sm:w-6 sm:h-6' /></a>
              <a href="https://twitter.com/augiysmn" target='_blank' rel='noreferrer'><img src={Twitter} alt="Twitter" className='w-5 h-5 sm:w-6 sm:h-6' /></a>
              <a href="https://wa.me/089607123166" target='_blank' rel='noreferrer'><img src={Whatsapp} alt="Whatsapp" className='w-5 h-5 sm:w-6 sm:h-6' /></a>
              <a href="mailto:augitayasmin@gmail.com" target='_blank' rel='noreferrer'><img src={Messege} alt="Message" className='w-5 h-5 sm:w-6 sm:h-6' /></a>
            </div>
          </div>
        </div>
        <img src={profile} alt="profile" className='w-64 h-64 sm:w-1/3 sm:h-1/3' />
      </div>
    </div>
  )
}

export default Profile