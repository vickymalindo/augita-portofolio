import React from 'react'
import Vicky from '../../images/Vicky.png'
import Alifa from '../../images/Alifa.png'
import style from './PageOne.module.css'

const Review = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => {
      setIndex((prev) => prev + 1 === 3 ? 1 : prev + 1)
    }, 4500);
    setIndex(1)
  }, [])

  return (
    <div className='bg-light-blue px-3 py-8 sm:p-3 sm:mb-0'>
      <h3 className={`${style.title_partner} text-center text-[24px] sm:text-[37px] font-extrabold lg:text-6xl mt-10 lg:mt-20 mb-16 sm:mb-0`}>What’s My Partner Said</h3>
      <div className={`flex justify-center items-center flex-col h-screen gap-4 py-0 px-5`}>
        {index === 1 ?
          <div className={`sm:w-full`}>
            <div className="flex items-center justify-center flex-col sm:flex-row py-2 md:px-5 gap-5">
              <img src={Vicky} alt="Vicky" className='w-36 h-36 sm:w-60 sm:h-60 lg:w-72 lg:h-72' />
              <div className='py-2 px-10 lg:w-2/3'>
                <p className='text-justify'>
                  “Since I collaborated with her, I've seen a willingness to learn more about UI and UX. It can be seen from the initial design to the current design that there are many changes to the design that she made. She is also a creative person in my opinion. Therefore, I recommend her and so excited to collaborate for the next project.”
                </p>
                <div className='mt-6'>
                  <p className='font-semibold'>Vicky Malindo</p>
                  <p>Student of Universitas Gunadarma</p>
                  <p>Majoring in IT</p>
                </div>
              </div>
            </div>
          </div>
          :
          <div className={`sm:w-full`}>
            <div className='flex items-center justify-center flex-col sm:flex-row py-2 md:px-4 gap-5'>
              <img src={Alifa} alt="Alifa" className='w-36 h-36 sm:w-60 sm:h-60 lg:w-72 lg:h-72' />
              <div className='py-2 px-10 lg:w-2/3'>
                <p className='text-justify'>
                  “Augita is a person who can manage time well. She is diligent and keeps an eye on the scheduled deadlines. I had saw how she the list of her works that were arranged and given a separate deadline before the time that should be submitted. During the Thesis/Final Project, she conceptualized the workings of our project and designed the application for me.”
                </p>
                <div className='mt-6'>
                  <p className='font-semibold'>Alifa Humairah</p>
                  <p>Student of Politeknik Negeri Jakarta</p>
                  <p>Majoring in Electrical Engineer</p>
                </div>
              </div>
            </div>
          </div>
        }
        <div className='flex gap-2'>
          <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 1 ? ' bg-slate-600' : ' bg-slate-400')}></span>
          <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 2 ? ' bg-slate-600' : ' bg-slate-400')}></span>
        </div>
      </div>
    </div>
  )
}

export default Review