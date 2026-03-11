import React from 'react'
import user from '../public/Group 763.png'

const Section5 = () => {
  return (
    <div className='lg:px-[200px] lg:py-[50px] p-[10px]'>
      <h1 className='lg:text-[36px] text-[#1178B2] font-bold'>С какими рынками мы работаем?</h1>
      <div className='flex justify-between text-center mt-[20px] lg:mt-[50px] bg-[#EEF1F4]'>
        <p className='lg:px-[20px] md:px-[60px] p-[5px] py-[10px] text-[14px] lg:w-[283px] bg-[#88BBD8]'>Ближний восток</p>
        <p className='lg:px-[20px] md:px-[60px] p-[5px] py-[10px] text-[14px] lg:w-[283px] border-2 border-solid border-gray-300'>Азия</p>
        <p className='lg:px-[20px] md:px-[60px] p-[5px] py-[10px] text-[14px] lg:w-[283px] border-2 border-solid border-gray-300'>Латинская Америка</p>
        <p className='lg:px-[20px] md:px-[60px] p-[5px] py-[10px] text-[14px] lg:w-[283px] border-2 border-solid border-gray-300'>Африка</p>
      </div>
      <div className='flex flex-wrap md:flex-nowrap lg:flex-wrap lg:flex items-center gap-[70px] mt-[30px]'>
        <div className='w-[400px]'>
            <p className='font-bold text-2xl '>Чем интересен</p>
            <p className='font-bold text-2xl text-[#07AF91]'>Рынок MENA:</p>
            <p className='my-[20px]'>ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис, Йемен, Египет, Алжир</p>
            <button className='btnblue lg:text-2xl lg:p-[20px] md:p-[15px] p-[7px] text-[10px] text-white rounded-2xl'>Выйти на рынок</button>
            <img src={user} alt="" />
        </div>
        <div className='w-[600px] lg:w-[600px] md:[300px] md:p-[20px] flex flex-wrap text-center lg:gap-[20px] md:gap-[5px] gap-[20px]'>
            <div className='w-[180px] lg:w-[250px] px-[20px] py-[30px] shadow-2xl shadow-gray-300'>
                <div className='text-[#1178B280] font-bold justify-center flex items-center'>
                    <h1 className='text-4xl '> 5,5 </h1>
                    <p>Млрд</p>
                </div>
                <p>Инвестиции pre-seed, seed</p>
            </div>
            <div className='w-[180px] lg:w-[250px] px-[20px] py-[30px] shadow-2xl shadow-gray-300'>
                    <h1 className='text-4xl text-[#1178B280] font-bold'> 300 </h1>
                <p>Акселераторов, инкубаторов</p>
            </div>
            <div className='w-[180px] lg:w-[250px] px-[20px] py-[30px] shadow-2xl shadow-gray-300'>
                    <h1 className='text-4xl text-[#1178B280] font-bold'>73 </h1>
                <p>Венчурных фонда</p>
            </div>
            <div className='w-[180px] lg:w-[250px] px-[20px] py-[30px] shadow-2xl shadow-gray-300'>
                    <h1 className='text-4xl text-[#1178B280] font-bold'> 5,5 </h1>
                <p>Инвестиции pre-seed, seed</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
