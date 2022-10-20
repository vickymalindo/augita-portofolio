import React from 'react'
import style from './PageOne.module.css'
import Certif1 from '../../images/Certif1.png'
import Certif2 from '../../images/Certif2.png'
import Certif3 from '../../images/Certif3.png'
import Certif4 from '../../images/Certif4.png'
import Certif5 from '../../images/Certif5.png'
import Certif6 from '../../images/Certif6.png'

const Certificate = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => {
      setIndex((prev) => prev + 1 === 7 ? 1 : prev + 1)
    }, 4500);
    setIndex(1)
  }, [])

  return (
    <div className='bg-light-blue py-5 sm:py-0'>
      <div className='w-full flex justify-center items-center flex-col gap-3'>
        <div className='md:p-16'>
          <h3 className={`${style.title_partner} text-center text-[30px] sm:text-[44px] lg:text-6xl font-extrabold lg:mt-8`}>My Certificate</h3>
          <div className='mt-12 md:px-12'>
            {index === 1 ?
              <div className='w-[340px] sm:w-[550px] sm:h-[450px] lg:w-[1100px] lg:h-[640px] box-border h-96 px-3'>
                <img src={Certif1} alt="Certif1" className='w-full h-full' />
              </div>
              : index === 2 ?
                <div className='w-[340px] sm:w-[550px] sm:h-[450px] lg:w-[1100px] lg:h-[640px] box-border h-96 px-3'>
                  <img src={Certif2} alt="Certif2" className='w-full h-full' />
                </div>
                : index === 3 ?
                  <div className='w-[340px] sm:w-[550px] sm:h-[450px] lg:w-[1100px] lg:h-[640px] box-border h-96 px-3'>
                    <img src={Certif3} alt="Certif3" className='w-full h-full' />
                  </div>
                  : index === 4 ?
                    <div className='w-[340px] sm:w-[550px] sm:h-[450px] lg:w-[1100px] lg:h-[640px] box-border h-96 px-3'>
                      <img src={Certif4} alt="Certif4" className='w-full h-full' />
                    </div>
                    : index === 5 ?
                      <div className='w-[340px] sm:w-[550px] sm:h-[450px] lg:w-[1100px] lg:h-[640px] box-border h-96 px-3'>
                        <img src={Certif5} alt="Certif5" className='w-full h-full' />
                      </div>
                      :
                      <div className='w-[390px] sm:w-[550px] sm:h-[450px] lg:w-[1100px] lg:h-[640px] box-border h-96 px-3'>
                        <img src={Certif6} alt="Certif6" className='w-full h-full' />
                      </div>
            }
          </div>
          <div className='flex gap-2 justify-center my-5'>
            <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 1 ? ' bg-slate-600' : ' bg-slate-400')}></span>
            <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 2 ? ' bg-slate-600' : ' bg-slate-400')}></span>
            <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 3 ? ' bg-slate-600' : ' bg-slate-400')}></span>
            <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 4 ? ' bg-slate-600' : ' bg-slate-400')}></span>
            <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 5 ? ' bg-slate-600' : ' bg-slate-400')}></span>
            <span className={'w-3 h-3 sm:w-4 sm:h-4 inline-block rounded-full' + (index === 6 ? ' bg-slate-600' : ' bg-slate-400')}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate