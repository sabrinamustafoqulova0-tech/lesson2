import React from 'react'
import Btngreen from "./btngreen"
import logo from "../public/Vector (1).png"
import strelka from "../public/Group (3).png"
import logessen from "../public/Group 161.png"
import pora from "../public/Group 31.svg"
import meny from "../public/Group 82.png"
import bludo from "../public/107823765_764851841011463_3291585847262786341_n 1.png"
import green from "../public/Ellipse 29.png"
import yellow from "../public/Ellipse 28.png"
import tri from "../public/Group 15.png"

const Section1 = () => {
  return (
    <div>
      <div className='p-2 flex justify-center w-[100%] md:gap-40 gap-10 bg-[#A98C64] text-white'>
        <div className='flex gap-5 items-center'>
        <img src={logo} alt="" />
        <h4>Скидка 10% при заказе от 2х недель</h4>
      </div>
      <div className=' gap-5 items-center md:flex hidden'>
        <h4 className='underline'>Заказать</h4>
        <img src={strelka} alt="" />
      </div>
      </div>

      <div className='text-[#493E3E] hidden  md:flex justify-between items-center p-12'>
        <img src={logessen} alt="" />
        <div className='flex gap-9'>
          <p>Подбор рациона</p>
          <p>Программы питания</p>
          <p>О нас</p>
          <p>Доставка</p>
          <p>Акции</p>
          <p>U5Q</p>
          <p>Отзывы </p>
        </div>
        <div>
          <p className='underline text-emerald-700'>Перезвоните мне</p>
          <h1 className='text-[24px] font-bold '>+7 988 500-1-700</h1>
          <p> с 09:00 до 21:00</p>
        </div>
      </div>

      <div className='md:hidden flex justify-between p-[20px]'>
        <img className='md:hidden ' src={pora} alt="" />
        <img className='md:hidden ' src={meny} alt="" />
      </div>

      <div className='flex flex-col md:flex-row md:px-12 p-[20px] items-center md:mt-[-90px] justify-between'>
        <div className='md:w-[700px]'>
          <h1 className='font-bold md:text-[55px] text-[28px]'>Прогрессивное питание на каждый день</h1>
          <p className='font-bold mt-5 text-[#493E3E]'>Сбалансированный рацион в современном формате — Супер-боул</p>
          <div className='flex gap-5 mt-10'>
          <Btngreen text="Подобрать питание" />           
          <button className='px-5 font-bold py-2 rounded-3xl text-[#4D8F76] border-2 border-solid border-[#4D8F76]'>Получить консультацию</button>
          </div>
        </div>
      <img className="z-10" src={bludo} alt="" />
      <img className="hidden z-20 md:block md:absolute top-[280px] right-24" src={green} alt="" />
      <img className="hidden md:block md:absolute top-[450px] left-[800px] z-0" src={yellow} alt="" />
    </div>
      <img className='m-[auto] pb-10' src={tri} alt="" />

















    </div>
  )
}

export default Section1

