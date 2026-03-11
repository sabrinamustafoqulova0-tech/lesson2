import React from 'react'
import Btngreen from './btngreen'
import logo1 from "../public/Снимок экрана 2022-09-08 в 1.50.png"
import logo2 from "../public/Снимок экрана 2022-09-08 в 1.50 (1).png"
import logo3 from "../public/Dealroom 1.png"
import logo4 from "../public/unnamed 1.png"
import logo5 from "../public/f6s 3.png"
import logo6 from "../public/B1i30JrIEAE3bt1 1.png"

const Section8 = () => {
  return (
      <div className='background3 text-white lg:text-start flex items-center justify-between lg:h-[400px] md:h-[180px] h-[100px] lg:px-[220px] md:px-[100px] text-center lg:pt-[50px] md:pt-[10px]'>
        <div className='lg:w-[550px] lg:text-[18px] md:text-[18px] text-[12px]'>
          <h1 className=' lg:text-[40px] md:text-[18px] text-[12px]'>Попадите на радары инвесторов и партнеров</h1>
          <p className=' lg:mb-[30px]  lg:text-[18px] md:text-[18px] text-[12px]'>В результате прохождения обучения мы создадим профили вашей компании на всех международных скаутинговых площадках</p>
          < Btngreen name="Записаться в акселератор" />
        </div>
        <div className='jg:w-[430px] md:w-[430px] w-[250px] lg:flex hidden gap-[10px] flex-wrap'>
          <div className='lg:w-[205px] rounded-2xl bg-white py-[20px]'>
            <img className='m-[auto]' src={logo1} alt="" />
          </div>
          <div className='lg:w-[205px] rounded-2xl bg-white py-[20px]'>
            <img className='m-[auto]' src={logo2} alt="" />
          </div>
          <div className='lg:w-[205px] rounded-2xl bg-white py-[20px]'>
            <img className='m-[auto]' src={logo3} alt="" />
          </div>
          <div className='lg:w-[205px] rounded-2xl bg-white py-[20px]'>
            <img className='m-[auto]' src={logo4} alt="" />
          </div>
          <div className='lg:w-[205px] rounded-2xl bg-white py-[20px]'>
            <img className='m-[auto]' src={logo5} alt="" />
          </div>
          <div className='lg:w-[205px] rounded-2xl bg-white py-[20px]'>
            <img className='m-[auto]' src={logo6} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Section8
