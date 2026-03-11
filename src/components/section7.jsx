import React from 'react'
import strelka from '../public/Group 1017.png'
import Card3 from './card3'
let data=[
    {
        module:"Модуль 2",
        theme:"Стартап подход к созданию международного IT продукта",
        id:"1"
    },
    {
        module:"Модуль 3",
        theme:"Бизнес моделирование и поиск Product Market Fit",
        id:"2"
    },
    {
        module:"Модуль 4",
        theme:"Что такое MVP и почему это важно",
        id:"3"
    },
    {
        module:"Модуль 5",
        theme:"Unit экономика и финансовое моделирование",
        id:"4"
    },
    {
        module:"Модуль 6",
        theme:"Что такое дорожная карта продукта?",
        id:"5"
    },
    {
        module:"Модуль 7",
        theme:"Документы дя международных инвесторов",
        id:"6"
    },
    {
        module:"Модуль 8",
        theme:"Открытие юридического лица. Возможности для стартапов",
        id:"7"
    },
]

const Section7 = () => {
  return (
    <div className='lg:px-[200px] lg:py-[50px] p-[10px]'>
      <h1 className='lg:text-[36px] text-[#1178B2] font-bold'>Программа акселератора</h1>
      <div className='w-[100%] shadow-2xl shadow-gray-400 rounded-3xl my-[30px]'>
        <div className='p-[20px] px-[50px] flex-col lg:flex-row items-center md:flex-row text-center lg:text-start flex justify-between border-b-2 border-solid border-gray-300'>
            <div className='flex items-center gap-[20px] text-[20px]'>
                <p className='text-[#1178B2] font-bold text-2xl'>Модуль 1</p>
                <p>Тенденции и тренды современного мира</p>
            </div>
            <img src={strelka} alt="" />
        </div>
        <div className='p-[20px] px-[50px] flex justify-between border-b-2 border-solid border-gray-300 text-[#555555]'>
            <p>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</p>
        </div>
        <div className='p-[20px] px-[50px] flex justify-between border-b-2 border-solid border-gray-300 text-[#555555]'>
            <p>Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема</p>
        </div>
        <div className='p-[20px] px-[50px] flex justify-between border-b-2 border-solid border-gray-300 text-[#555555]'>
            <p> 3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?</p>
        </div>
        <div className='p-[20px] px-[50px] flex justify-between border-b-2 border-solid border-gray-300 text-[#2A79C2]'>
            <p>9 видео роликов, вебинар с приглашенным экспертом</p>
        </div>
      </div>
      <div>
        {
            data.map((e)=>{
                return(
                    <Card3
                    key={e}
                    module={e.module}
                    theme={e.theme}
                    />
                )
            })
        }
      </div>
        <div className='p-[20px] px-[50px] shadow-2xl shadow-gray-300 border-solid flex justify-between  '>
                <p className='text-[#1178B2] font-bold text-2xl'>Демо день </p>
            <img src={strelka} alt="" />
        </div>
        <button className='btnblue lg:text-[18px] mt-[20px] text-white lg:p-[20px] md:p-[8px] p-[7px] text-[10px] rounded-2xl'>Получить полную программу</button>
    </div>
  )
}

export default Section7
