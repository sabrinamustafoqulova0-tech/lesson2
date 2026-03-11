import React from 'react'
import logo from "../public/INNOMA.VC.png"
import logo2 from "../public/Group 929.png"

const Section16 = () => {
  return (
    <div className='backgroundend  flex items-center justify-between lg:h-[100px] md:h-[60px] h-[30px] mt-[10px] text-white lg:px-[200px] md:px-[80px] px-[10px]'>
        <div>
          <img className='w-[50px] md:w-[100px] lg:w-[200px]' src={logo} alt="" />
          <p className='hidden lg:block'>Все права защищены</p>
        </div>
        <div className=' lg:text-[16px] md:text-[12px] text-[10px] gap-[10px] flex md:gap-[10px] lg:gap-[50px]'>
          <p>Кто мы?</p>
          <p>Услуги</p>
          <p>Акселератор</p>
          <p>Новости</p>
        </div>
        <div className='lg:w-[300px]  lg:text-[16px] md:w-[200px] hidden lg:block md:block md:text-[12px]'>
          <p>Dubai, Single Business Tower 1503, Business Bay</p>
          <a href="">Sales@innoma.vc</a>
        </div>
            
    </div>
    
  )
}

export default Section16
