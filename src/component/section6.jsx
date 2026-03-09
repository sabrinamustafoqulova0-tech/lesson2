import React from 'react'
import Btngreen from "./btngreen"
import karta from "../public/image 2.png"

const Section6 = () => {
  return (
    <div className='p-[30px] m-[20px] rounded-2xl bg-[#F4EDDE] '>
      <h1 className='text-4xl font-bold mb-[30px]'>Карта доставки</h1>
      <p>Доставка осуществляется каждый день с 06:00 до 12:00.</p>
      <p>Выбор интервала — 2 часа.</p>
      <div className='flex mt-[30px] justify-between md:flex-row flex-col items-center gap-[20px]'>
        <img src={karta} alt="" />
        <div className='flex flex-col gap-[20px] w-[350px]'>
            <button className=' border-2 border-solid border-[#1EB949] p-[10px] rounded-3xl'>По городу бесплатно</button>
            <button className=' border-2 border-solid border-[#D6CE72] p-[10px] rounded-3xl'>Пригород 25 км — 100 ₽</button>
            <button className=' border-2 border-solid border-[#FFBC4F] p-[10px] rounded-3xl'>Пригород 35 км — 300 ₽</button>
            <button className=' border-2 border-solid border-[#FC5239] p-[10px] rounded-3xl'>Пригород 50 км — 500 ₽</button>
            <p className='my-[20px]'>Уточните стоимость и время доставки</p>
            <div>
                <p className='font-bold text-[18px]'>+7 988 500-1-700</p>
                <p className='text-[14px]'>c 09:00 до 21:00</p>
            </div>
             <Btngreen text="Перезвоните мне" /> 
        </div>
      </div>
    </div>
  )
}

export default Section6
