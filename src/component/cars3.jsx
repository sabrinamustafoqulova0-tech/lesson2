import React from 'react'

const Cars3 = () => {
  return (
    <div className='p-[20px] flex gap-[20px] w-[700px] md:flex-row flex-col justify-between bg-[#EA9DA3] text-white rounded-4xl'>
        <div>
            <p className='font-bold text-[20px] w-[250px]'>Наименование акции</p>
            <p className='mt-[20px] mb-[80px]'>Краткое описание акции</p>
            <button className='px-[20px] py-[5px] rounded-3xl border-1 border-solid border-white'>Подробнее</button>
        </div>
        <div className='w-[195px] h-[195px] rounded-[50%] bg-white'></div>
    </div>
  )
}

export default Cars3
