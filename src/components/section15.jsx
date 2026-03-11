import React from 'react'
import telegram from "../public/Group 665.png"
import whatsapp from "../public/Group 664.png"
import Btngreen from './btngreen'

const Section15 = () => {
  return (
    <div  className='background3 text-white lg:text-start flex items-center justify-between lg:h-[400px] md:h-[180px] h-[100px] lg:px-[220px] md:px-[100px] text-center lg:pt-[50px] md:pt-[10px]'>
      <div>
        <h1 className='lg:text-[36px] md:text-[24px] font-bold'>Остались вопросы?</h1>
        <p className='lg:mb-[100px]'>Оставьте заявку и наша команда свяжется с вами</p>
        <p className='font-bold lg:text-[18px]'>Или напишите нам:</p>
        <div className='lg:flex md:flex hidden items-center gap-[30px]'>
          <div className='flex items-center'>
            <img className='w-[80px]' src={telegram} alt="" />
            <p>Telegram</p>
          </div>
          <div className='flex items-center'>
            <img className='w-[80px]' src={whatsapp} alt="" />
            <p>Whatsapp</p>
          </div>
        </div>
      </div>
      <div className='bg-white md:text-start hidden lg:block md:block text-gray-400 lg:w-[600px] lg:p-[20px] rounded-2xl p-[10px]'>
        <p className='lg:py-[10px]'>Имя</p>
        <hr />
        <p className='lg:py-[10px]'>Почта</p>
        <hr />
        <p className='lg:py-[10px]'>(971)</p>
        <hr className='mb-[20px]' />
        <Btngreen name="Оставить заявку" />
      </div>
    </div>
  )
}

export default Section15
