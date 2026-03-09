import React from 'react'
import Card1 from "./card1"
import Nedeli from "./nedeli"
import Meny from "./meny"
import Btngreen from "./btngreen"
import bludo1 from "../public/image 20.png"
import bludo2 from "../public/image 22.png"
import bludo3 from "../public/image 21.png"
import bludo4 from "../public/image 23.png"
import imggeen from "../public/Group 62.png"

import vilkalogo from "../public/Group 76.png"
const Section3 = () => {
  return (
    <div className='bg-white rounded-3xl  m-[30px] mb-[80px]'>
      <div className='flex justify-between p-[20px]'>
        <h1 className='font-bold text-3xl'>Программа питания</h1>
        <div className='flex gap-2 items-center '>
          <img src={vilkalogo} alt="" />
          <p className='text-[#4D8F76]'>Каждый день новое меню</p>
        </div>
      </div>
      <p className='my-3 p-[20px]'>Калорийность</p>
      <p className='text-[#A98C64] p-[20px]'>Норма калорий позволяет достигать цели. Как расчитать? На сайте есть <span className='text-[#4D8F76]'>калькулятор</span> </p>
      <div className='flex gap-11 my-[20px] p-[20px] overflow-x-auto'>
        <Card1 kal="900 ккал" bludo="3 блюд"/>
        <Card1 kal="1 250 ккал " bludo="5 блюд" />
        <Card1 kal="1 600 ккал" bludo="5 блюд" />
      <Card1 kal="2 050 ккал" bludo="6 блюд" />
      <Card1 kal="Индивидуально" bludo="подобрать" />
      </div>
      <p className='font-bold text-[18px] p-[20px]'>Продолжительность</p>
      <div className='flex gap-11 mt-[20px] p-[20px] overflow-x-auto'>
        <Card1 kal="Пробные 2 дня" bludo="за 2 900 ₽"/>
        <Card1 kal="1 неделя" bludo="1 700 ₽ в день" />
        <Card1 kal="2 недели" bludo="1 600 ₽ в день" />
      <Card1 kal="3 недели" bludo="1 520 ₽ в день" />
      <Card1 kal="4 недели" bludo="1 450 ₽  в день" />
      </div>

      <div className='w-[353px] flex items-center my-7 p-[20px]'>
        <p>Выберите, сколько дней в неделю вы хотите питаться</p>
        <div className='px-[7px] py-[5px] bg-[#FAF6F2] rounded-3xl flex gap-5 items-center border-2 border-solid border-[#DFCCB7]'>
          <p className='px-[7px] bg-[#DFCCB7] rounded-2xl'>5</p>
          <p>6</p>
          <p>7</p>
        </div>
      </div>
      <h2 className='text-[18px] font-bold md:text-start text-center p-[20px]'>Пример недельного рациона</h2>
      <h2 className='text-[18px] text-[#A98C64] md:text-start text-center p-[20px]'>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</h2>  
      <div className='flex gap-11 mt-[10px] overflow-x-auto p-[20px]'>
        <Nedeli dni="понедельник" />
        <Nedeli dni="вторник" />
        <Nedeli dni="четверг" />
        <Nedeli dni="пятница" />
        <Nedeli dni="суббота"/>
        <Nedeli dni="воскресенье"/>
      </div>
      <div className='flex gap-11 mt-[10px] overflow-x-auto md:text-start text-center p-[20px]'>
        <Meny img={bludo1} name="Завтрак  300 гр" about="Геркулес с зелёным яблоком и семенами льна" />
        <Meny img={bludo2} name="Ланч  160 гр" about="Дольки яблок в клюквенном маринаде" />
        <Meny img={bludo3} name="Обед  275 гр" about="Рагу из морепродуктов" />
        <Meny img={bludo4} name="Ужин 4150 гр" about="Гречневая каша с куриным филе" />
      </div>


      <div className='w-[100%] bg-[#A2BE95] text-white p-[20px] rounded-b-3xl flex md:gap-[82px] gap-[30px] md:flex-row flex-col'>
        <div className='text-center'>
          <Btngreen text="Заказать 10 дней питания за 16 000 ₽" />
          <p>1 250 ккал за 1 600 ₽ в день</p>
        </div>
        <div className='flex items-center  md:gap-[61px] gap-[20px] md:flex-row flex-col'>
          <img src={imggeen} alt="" />
          <div>
            <p className='text-[20px] font-bold'>Будем доставлять наборы каждый день.</p>
            <p  className='md:w-[700px]'>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа. Заявки принимаются не позднее, чем за день до предполагаемой доставки.</p>
          </div>
        </div>
        
      </div>



    </div>
  )
}

export default Section3

