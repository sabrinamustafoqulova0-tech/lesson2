import React from 'react'
import Btngreen from './btngreen'
import imground from "../public/Ellipse 25.png"
import imginstagram from "../public/Group 73.png"
import endicons from "../public/Group 74.png"

const Section10 = () => {
  return (
    <div>
      <div className='p-[30px] m-[20px] bg-[#B89683] text-white rounded-3xl gap-[20px] flex md:flex-row flex-col justify-between items-center'>
        <div>
            <p className='text-5xl mb-[20px]'>Будьте всегда в курсе!</p>
            <p>Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и новостей!</p>
        </div>
        <div className='flex gap-[20px]'>
                <input className='bg-white text-black p-[10px] rounded-3xl' type="text" placeholder='Укажите вашу почту'/>
                 <Btngreen text="Подписаться" />
        </div>
      </div>


      <div className='p-[30px] mx-[20px] md:text-start text-center'>
        <div className='flex justify-between md:flex-row flex-col items-center gap-[20px]'>
             <div className='flex md:gap-[80px] gap-[30px] md:flex-row flex-col'>
                <div>
                    <p className='text-2xl font-bold'>+7 988 500-1-700</p>
                    <p className='text-[14px]'>Ежедневно c 09:00 до 21:00</p>
                </div>
                <a className='text-2xl font-bold' href="">hello@pora-poest.com</a>
             </div>
             <div className='flex gap-[20px]'>
                <img src={imground} alt="" />
                <img src={imground} alt="" />
                <img src={imginstagram} alt="" />
             </div>
        </div>
        <p className='my-[20px]'>ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5, офис 4</p>
        <p>© 2021 ПораПоесть — сервис доставки прогрессивного питания. </p>
        <div className='flex justify-between items-center md:flex-row flex-col gap-[20px]'>
            <p className='md:w-[900px]'>Внешний вид блюда может отличаться от фотографии на сайте. Указывая электронную почту и номер телефона на сайте, вы соглашаетесь с условиями <span className='text-[#4D8F76]'> Публичной оферты и Политикой конфедициальности</span></p>
            <img src={endicons} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section10
