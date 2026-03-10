import React from 'react'
import "../App.css"
import Btngray from "./btngray"
import logo from "../public/Ресурс 1 1.png"
import number from "../public/Group 1324.png"
import email from "../public/Group 1323.png"
import ru from "../public/Group 1384.png"
import watsApp from "../public/WhatsApp_white.png"
import tri from "../public/Group 1533.png"

const Section1 = () => {
  return (
    <div className='bgimage text-white md:h-[100vh] h-[auto]'>
        <div className='flex md:p-[20px] p-[10px] md:px-[40px] items-center justify-between md:bg-transparent bg-[#313131a6]'>
            <img className='md:hidden' src={logo} alt="" />
            <div className='md:flex hidden items-center gap-[30px]'>
                <img src={logo} alt="" />
                <p>Продукция</p>
                <p>Поставщикам</p>
                <p>Вакансии </p>
                <p>Новости</p>
                <p>контакты</p>
            </div>
            <div className='md:flex hidden items-center gap-[20px]'>
                <img src={number} alt="" />
                <img src={email} alt="" />
                <img src={ru} alt="" />
            </div>
            <img className='md:hidden' src={tri} alt="" />
        </div>
        <div className='ml-[40px]'>
             <h1 className='md:text-6xl font-bold md:w-[800px] md:mt-[250px] text-2xl mb-[40px]'>Группа компаний Гремячинский ДОК</h1>
             <p className='md:w-[580px]'>Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
        </div>
        <div className='flex justify-between items-center mx-[40px] md:mt-[40px]'>
            <Btngray name="Связаться с нами" />
            <img className='bg-white rounded-4xl md:w-[60px] w-[50px]' src={watsApp} alt="" />
        </div>
    </div>
  )
}

export default Section1


