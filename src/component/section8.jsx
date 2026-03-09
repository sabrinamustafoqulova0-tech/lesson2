import React from 'react'
import Btngreen from "./btngreen"
import Tel from "../public/cta 1.png"

const Section8 = () => {
  return (
    <div className='bg-[#A2BE95] m-[20px] md:mt-[165px] px-[30px] pt-[30px] md:pb-[20px] gap-[20px] rounded-2xl text-white flex md:flex-row flex-col'>
        <div>
            <h1 className='md:text-5xl md:w-[750px] md:text-start text-4xl text-center'>Бесплатная консультация диетолога</h1>
            <div className='flex gap-[30px] my-[20px] md:mb-[90px]'>
                <input className='bg-white text-black p-[10px] rounded-3xl' type="text" placeholder='Ваше имя'/>
                <input className='bg-white text-black p-[10px] rounded-3xl' type="text" placeholder='Телефон'/>
            </div>
            <Btngreen text="Отправить заявку" />  
        </div>
      <img className='md:hidden' src={Tel} alt="" />
      <img className='hidden md:block absolute left-[880px] top-[760vh]' src={Tel} alt="" />
    </div>

  )
}

export default Section8
