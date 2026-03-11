import React from 'react'
import "../App.css"
import Btngreen from "./btngreen"
import logo from "../public/INNOMA.VC.png"
import logo2 from "../public/Group 929.png"

const Section1 = () => {
  return (
    <div className='background lg:h-[100vh] md:h-[80vh] h-[50vh] text-white lg:px-[200px] md:px-[80px] px-[10px]'>
            <div className='flex justify-between  flex-wrap items-center md:pt-[20px] pt-[10px] lg:pt-[30px]'>
                <img src={logo} alt="" />
                <div className='lg:flex md:flex lg:gap-[40px] md:gap-[20px] hidden '>
                    <p>Кто мы?</p>
                    <p>Услуги</p>
                    <p>Акселератор</p>
                    <p>Новости</p>
                </div>
                <Btngreen name="Войти"/>
                <img className='md:hidden w-[20px]' src={logo2} alt="" />
            </div>
            <div className='lg:mt-[150px] md:mt-[30px] lg:text-start text-center lg:w-[700px]'>
                <p className='lg:text-[43px] font-bold text-[14px]  md:text-[36px]'>Запустите <br /> <Btngreen name="технологический IT-бизнес" /> на международных рынках</p>
                <p className='lg:text-4xl lg:my-[10px] md:text-2xl'>Открыт набор заявок на акселератор</p>
                <button className='btnblue lg:text-2xl lg:p-[20px] md:p-[15px] p-[7px] text-[10px] rounded-2xl'>Подать заявку</button>
            </div>
    </div>
  )
}

export default Section1
