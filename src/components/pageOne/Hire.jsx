import React from 'react';
import Colab from '../../images/Colab.png';
import Deadline from '../../images/Deadline.png';
import Learner from '../../images/Learner.png';
import Listen from '../../images/Listen.png';
import style from './PageOne.module.css';

const Hire = () => {
  return (
    <div className={`${style.bg_hire} py-0 lg:py-2`}>
      <div className='py-2 lg:py-10 px-9 sm:px-16 lg:px-24'>
        <h3
          className={`${style.title_hire} text-[33px] sm:text-[50px] md:text-[70px] text-center font-bold mb-8 mt-12`}>
          Why Hire Me ?
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-4'>
          <div className='p-4'>
            <img src={Learner} alt='Learner' className='w-36 h-28 m-auto' />
            <div className='mt-4'>
              <h3 className='text-center text-lg'>Lifelong Learner Person</h3>
              <p className='text-justify mt-4'>
                I love to explore new things. It’s proven by I take some courses
                about Digital Marketing untill UI/UX Design. I also do
                illustration design since it was my hobby.
              </p>
            </div>
          </div>
          <div className='p-4'>
            <img src={Colab} alt='Colab' className='w-36 h-28 m-auto' />
            <div className='mt-4'>
              <h3 className='text-center mt-11 sm:mt-0 text-lg'>
                Collaborative
              </h3>
              <p className='text-justify mt-[42px] sm:mt-[42px] lg:mt-4'>
                I can work in a team and also individually. In a team, I usually
                collaborate with my front-end friends, beside I’m the designer I
                also able to discuss for the idea in more detail to do our
                project.
              </p>
            </div>
          </div>
          <div className='p-4'>
            <img src={Listen} alt='Listen' className='w-36 h-28 m-auto' />
            <div className='mt-4'>
              <h3 className='text-center text-lg'>A Good Listener</h3>
              <p className='text-justify mt-4 sm:mt-[42px] lg:mt-4'>
                I deeply accepting to any kind advices. I like to get some
                feedbacks that make me grown up through every mistake that i’ve
                made.
              </p>
            </div>
          </div>
          <div className='p-4'>
            <img src={Deadline} alt='Deadline' className='w-36 h-28 m-auto' />
            <div className='mt-4'>
              <h3 className='text-center text-lg'>Work under Deadlines</h3>
              <p className='text-justify mt-4'>
                I like doing my work neatly and well-organized even I should
                work under deadlines, it got no matters to me because I’ll do
                the easy one first for the efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
