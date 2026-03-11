import React from 'react'
import Btngreen from './btngreen'
import img1 from "../public/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1.png"
import img2 from "../public/rocket 1.png"

const Section2 = () => {
  return (
    <div className='lg:mx-[100px] lg:my-[50px] text-center lg:text-start p-[20px] md:px-[100px]'>
        <h1 className='text-[#1178B2] lg:text-[36px] font-bold lg:mb-[50px] text-2xl mb-[20px]'>Наши услуги</h1>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center mb-[20px] lg:mb-[200px]'>
        <div className='lg:w-[530px]'>
            <p className='font-bold text-[#1178B2]'>Аналитические исследования</p>
            <p className='my-[20px]'>Одним из наших ключевых направлений является анализ технологических трендов на международных рынках. Мы проводим анализ на основе публичных исследований McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY,  Crunchbase, Dealroom, F6S, PitchBook а также агрегируем и анализируем данные из открытых международных источников патенты, медиа, научные публикации</p>
            < Btngreen name="Узнать подробнее"/>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <img src={img2} alt="" />
        <div className='lg:w-[530px]'>
            <p className='font-bold text-[#1178B2]'>Онлайн акселератор для IT бизнеса</p>
            <p className='my-[20px]'>Онлайн программа аскелерации IT бизнеса позволит вашей команде открыть новые горизонты и возможности для бизнеса на глобальных рынках. В результате программы вы получите возможность презентовать свой проект для международных инвесторов и локальных партнеров</p>
            < Btngreen name="Узнать подробнее"/>
        </div>
      </div>
    </div>
  )
}

export default Section2
