import React from 'react'
import Btngreen from "./btngreen"

const Section2 = () => {
  return (
    <div className='bg-[#E2DDC0] p-[20px] rounded-3xl m-[30px] mb-16' >
      <h1 className='text-3xl font-bold'>Подберите рацион для своих целей</h1>
      <div className='mt-[50px] flex flex-wrap items-center gap-[35px]'>
        <div className='px-[10px] py-[5px] bg-[#FAF6F2] rounded-2xl flex gap-2 items-center'>
          <p className='px-[5px] bg-[#DFCCB7] rounded-2xl'>Ж</p>
          <p>M</p>
        </div>
        <div className='px-[20px] py-[5px] bg-[#FAF6F2] rounded-2xl'>Ваш вес</div>
        <div className='px-[20px] py-[5px] bg-[#FAF6F2] rounded-2xl'>Ваш рост</div>
        <div className='px-[20px] py-[5px] bg-[#FAF6F2] rounded-2xl'>Ваш возраст</div>
        <select className='px-[20px] py-[5px] bg-[#FAF6F2] rounded-2xl'> <option value="">Активность</option></select>
        <select className='px-[20px] py-[5px] bg-[#FAF6F2] rounded-2xl'> <option value="">Выберите цель</option></select>
        <Btngreen text="Рассчитать рацион" />
      </div>
    </div>
  )
}

export default Section2

