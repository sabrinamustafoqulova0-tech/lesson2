import React from 'react'
import logo from "../public/Ресурс 1 1.png"

const Section10 = () => {
  return (
    <div className='bg-[#313131] flex flex-wrap p-[20px] md:px-[100px] py-[60px] text-white justify-between  gap-[30px] '>
        <div className='w-[280px] flex flex-col gap-[30px]'>
            <img src={logo} alt="" />
            <p>Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
        </div>
        <div className=' flex flex-col md:gap-[10px]'>
            <p className='text-[#787878]'>Реализация</p>
            <p>Латофлекс</p>
            <p>Фанера</p>
            <p>Брикеты топливные RUF</p>
            <p>Пиломатериалы</p>
            <p>Кроватные основания</p>
            <p>Уголь</p>
            <p>Саженцы</p>
            <p>Отходы производства</p>
        </div>
        <div className=' flex flex-col md:gap-[10px]'>
            <p className='text-[#787878]'>О компании</p>
            <p>Продукция</p>
            <p>Деятельность</p>
            <p>Приемущества</p>
            <p>Поставщикам</p>
            <p>Вакансии</p>
            <p>Новости</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#787878] md:mb-[40px]'>О Отдел закупок</p>
            <p className='md:mb-[40px]'>purchase@grdok.ru</p>
            <p className='text-[#787878] md:mb-[40px]'>Отдел продаж</p>
            <p className='md:mb-[10px]'>sale@grdok.ru</p>
            <p className='md:mb-[10px]'>@gremdok_bot</p>
            <p>Мелкий опт, «карандаши»,</p>
            <p>«пятаки» : +7 (342) 502-16-91</p>
        </div>
        <div className=' flex flex-col'>
            <p className='text-[#787878] md:mb-[40px]'>Контакты</p>
            <p className='md:mb-[40px]'>info@grdok.ru</p>
            <p className='text-[#787878] md:mb-[40px]'>Адрес</p>
            <p>Гремячинск Пермский край</p>
            <p>618270 РФ, г. Гремячинск,</p>
            <p> ул. Коммунистическая, д.1</p>
        </div> 
    </div>
  )
}

export default Section10
