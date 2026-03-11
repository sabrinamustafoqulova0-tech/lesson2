import React from 'react'
import Btngreen from "./btngreen"
import cardimg from "../public/Снимок экрана 2022-11-14 в 5.45 1.png"
import cardimgboy from "../public/Group 841.png"
import logoimg1 from "../public/IMG_6197 2.png"
import logoimg2 from "../public/test23444 1.png"
import logoimg3 from "../public/test233 1.png"
import logoimg4 from "../public/Снимок экрана 2022-09-02 в 1.56 1.png"
import logoimg5 from "../public/IMG_6198 2.png"

const Section11 = () => {
  return (
     <div className='lg:mx-[100px] lg:my-[50px] text-center lg:text-start p-[20px] md:px-[100px]'>
        <h1 className='text-[#1178B2] lg:text-[36px] font-bold lg:mb-[50px] text-2xl mb-[20px]'>Кто мы?</h1>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center mb-[20px] lg:mb-[200px]'>
        <img src={cardimg} alt="" />
        <div className='lg:w-[450px] lg:text-[18px] md:text-[18px]'>
            <p className='mb-[40px]'><span className='text-[#1178B2] font-bold'>INNOMA.VC</span> -  Международное аналитическое агентство по запуску IT бизнеса на локальных рынках регионов Азии, Ближнего Востока, Латинской Америки, Африки</p>
            <p>Наша команда состоит из профессионалов своего дела и основной нашей целью является помощь IT компаниям получить необходимые знания и пакеты документов, чтобы успешно запустить свой продукт на международных рынках. </p>
        </div>
      </div>
      <div className='flex shadow-2xl px-[30px] pt-[30px] shadow-gray-300 flex-col-reverse  lg:flex-row justify-between items-center'>
        <img src={cardimgboy} alt="" />
        <div className='lg:w-[530px]'>
            <p>Всем привет!</p>
            <p className='lg:mb-[80px] md:mb-[50px] mb-[30px]'> Меня зовут Роман. Последние 6 лет я являюсь частью инновационной экосистемы СНГ,  прошел путь от проектного менеджера до руководителя продукта по автоматизированному скаутингу и скорингу стартапов. За 6 лет работы я увидел  множество ошибок и отсутствие ориентации акселерационных программ под запросы стартапов. Все акселераторы выполнялись ради акселераторв и выполнения КПЭ. </p>
            <p className='font-bold'>Роман Гайн</p>
            <p>Основатель INNOMA.VC</p>
        </div>
      </div>
      <div className='flex mt-[50px] gap-[16px] overflow-auto'>
        <img className='w-[210px]' src={logoimg1} alt="" />
        <img className='w-[210px]' src={logoimg2} alt="" />
        <img className='w-[210px]' src={logoimg3} alt="" />
        <img className='w-[210px]' src={logoimg4} alt="" />
        <img className='w-[210px]' src={logoimg5} alt="" />
      </div>
    </div>
  )
}

export default Section11
