import style from '../pageOne/PageOne.module.css'
import Nav from '../utilities/Nav'
import Footer from '../utilities/Footer'
import TwoImg from './TwoImg'
import SixImg from './SixImg'
import ThreeImg from './ThreeImg'
import mart from '../../images/mart.png'
import weather from '../../images/weather.png'
import Beauty from '../../images/Beauty.png'
import Nyummyl from '../../images/Nyummyl.png'
import Wolf from '../../images/Wolf.png'
import Girl from '../../images/Girl.png'
import Fishing from '../../images/Fishing.png'
import Face from '../../images/Face.png'
import Mount from '../../images/Mount.png'
import People from '../../images/People.png'
import Masker from '../../images/Masker.png'
import LogoNyummyl from '../../images/LogoNyummyl.png'
import Ding from '../../images/Ding.png'
import SWeather from '../../images/SWeather.png'
import NyusMart from '../../images/NyusMart.png'
import Dong from '../../images/Dong.png'
import Left from '../../images/Left.png'
import Middle from '../../images/Middle.png'
import Right from '../../images/Right.png'
import Tools from './Tools'

const PageTwo = () => {
  return (
    <div className='bg-light-blue'>
      <Nav />
      <h3 className={`${style.title_work} text-center text-[30px] font-extrabold sm:text-5xl lg:text-6xl mt-[100px]`}>How I Work</h3>
      <TwoImg img1={mart} img2={weather} title='UI/UX Design' link1='https://nyunyumart.netlify.app/' link2='https://nyussweather.netlify.app/' />
      <TwoImg img1={Beauty} img2={Nyummyl} title='Feed Instagram' link1='https://www.instagram.com/nature.allbeauty/' link2='https://www.instagram.com/nyummyl/' />
      <SixImg title='Illustration Design' img1={Wolf} img2={Girl} img3={Fishing} img4={Face} img5={Mount} img6={People} />
      <SixImg title='Logo Design' img1={Masker} img2={LogoNyummyl} img3={Ding} img4={SWeather} img5={NyusMart} img6={Dong} />
      <ThreeImg title='College’s Event Design' img1={Left} img2={Middle} img3={Right} />
      <Tools />
      <Footer />
    </div>
  )
}

export default PageTwo