import React from 'react'

const Card5 = ({img,name,gotovnost,lang,price}) => {
  return (
    <div className='p-[20px] lg:w-[360px] w-[320px] rounded-2xl shadow-2xl shadow-mist-300'>
        <img className='m-[auto]' src={img} alt="" />
        <h1 className='font-bold text-center md:w-[300px] w-[100%] mb-[10px]'>{name}</h1>
        <hr />
        <p className='mb-[5px] pt-[10px]'>Что входит в отчет?</p>
        <p className='py-[5px]'>1. Анализ конкурентов</p>
        <p className='py-[5px]'>2. Анализ инвесторов</p>
        <p className='py-[5px]'>3. Размеры рынка (TAM,SAM,SOM)</p>
        <p className='py-[5px]'>4. Анализ СМИ</p>
        <p className='py-[5px]'>5. Анализ запрос в сети интернет</p>
        <p  className='flex justify-between border-t-2 border-solid py-[10px] border-gray-300'>
            <p>Готовность</p>
            <p>{gotovnost}</p>
        </p>
        <p className='flex justify-between border-t-2 border-solid py-[10px] border-gray-300'>
            <p>Язык</p>
            <p>{lang}</p>
        </p>
        <p className='flex justify-between border-t-2 border-solid py-[10px] border-gray-300'>
            <p>Стоимость</p>
            <p>{price}</p>
        </p>
        <button className='mt-[20px] btnblue text-white lg:text-[20px] w-[100%] md:p-[15px] p-[7px] text-[10px] rounded-2xl'>Оставить заявку</button>
            
    </div>
  )
}

export default Card5