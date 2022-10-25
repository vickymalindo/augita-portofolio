import React from 'react';
import Afgrey from '../../images/Afgrey.png';
import Alpha from '../../images/Alpha.png';
import Nyumml from '../../images/Nyumml.png';
import Tokopaedi from '../../images/Tokopaedi.png';
import style from './PageOne.module.css';
import Profile from './Profile';
import Project from './Project';

const Content = () => {
  return (
    <div className='bg-dark-blue'>
      <Profile />
      <div className='mt-4'>
        <div className='text-center mb-7'>
          <h3
            className={`${style.title_porto} text-[30px] sm:text-4xl lg:text-6xl font-extrabold mt-28`}>
            My Projects
          </h3>
        </div>
        <Project
          site='https://drive.google.com/file/d/1uNOHpcJY8DkdmJG9hFNuAsMzUYHeCAGA/view?usp=sharing'
          nameSite='View Application'
          image={Alpha}
          text='ALPHA is an application that connected with its microcontroller of Internet of Things project with title “Rancang Bangun Sistem Pendeteksi Asap Rokok Tembakau dan Uap Rokok Elektrik di Kamar Hotel Berbasis Internet of Things dan Aplikasi Android”'
        />
        <Project
          site='https://nyummyl.netlify.app/'
          nameSite='View Website'
          image={Nyumml}
          text='Nyummyl is a website for my own business that sold many variant of cookies. I made this for personal branding itself.'
        />
        <Project
          site='https://www.figma.com/proto/SOKbBAzu7Htd0Y29NkDLro/tokopaedi?node-id=60%3A504&scaling=scale-down&page-id=60%3A81&starting-point-node-id=60%3A504'
          nameSite='View Design'
          image={Tokopaedi}
          text='Tokopaedi is a website for online shopping. It’s inspired from Tokopedia and I try to rebuild with my own design.'
        />
        <Project
          site='https://www.figma.com/proto/WVkPws3X6lMFlAwTjcnfkN/ciwis?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2'
          nameSite='View Design'
          image={Afgrey}
          text='African Grey is a website for knowledge about what African Grey (Afgrey) Parrot is. It’s also a branding for my parents’ bird business.'
        />
      </div>
    </div>
  );
};

export default Content;
