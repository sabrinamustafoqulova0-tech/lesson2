import React from 'react'
import chat1 from '../public/Rectangle 34.png'
import chat2 from '../public/Rectangle 35.png'
import chat3 from '../public/Rectangle 36.png'
import chat4 from '../public/Rectangle 37.png'
import img from '../public/image.png'
import Btngreen from './btngreen'

const Section9 = () => {
  return (
    <div className='p-[50px]'>
    <p className='text-4xl font-bold'>Отзывы</p>
    <div className='flex overflow-auto justify-between mt-[20px] gap-[20px]'>
        <img className='w-[307px]' src={chat1} alt="" />
        <img className='w-[307px]' src={chat2} alt="" />
        <img className='w-[307px]' src={chat3} alt="" />
        <img className='w-[307px]' src={chat4} alt="" />
    </div>
        <div className='flex flex-col md:flex-row md:gap-[300px] gap-[20px] items-center mt-[100px]'>
            <div>
                <p className='text-4xl font-bold'>Пробный рацион</p>
                <p className='md:w-[500px] mt-[20px] mb-[50px]'>Сомневаетесь? Начните с пробного меню на два дня Попробуйте полноценную дневную программу всего за 2 900 ₽</p> 
                <Btngreen text="Попробовать" />      
            </div>
            <img className='w-[500px]' src={img} alt="" />
        </div>

    </div>
  )
}

export default Section9
