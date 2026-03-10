import React from 'react'
import register from "../public/Group 1513.png"
const Section9 = () => {
  return (
    <div className='bgraund3 md:h-[100vh] md:mt-[50px] text-white md:py-[80px]'>
      <div className='flex p-[30px] md:mx-[140px] justify-between '>
        <div className='md:w-[560px]'>
            <h1 className='text-4xl font-bold'>Свяжитесь с нашим специалистом</h1>
            <p className='md:mt-[30px] md:mb-[80px]'>Заинтерисованы в сотрудничестве  или остались вопросы? Заполните форму обратной связи и наши менеджеры обязательно свяжутся с вами</p>
            <div className='md:flex gap-[50px] hidden'>
                <p className='w-[100px]'>15 минут, в рабочее</p>
                <p className='w-[150px]'>Бережем ваши персональные данные</p>
            </div>
        </div>
        <img className='h-[600px] hidden md:block' src={register} alt="" />
      </div>
    </div>
  )
}

export default Section9
