import React from 'react'
import play from '../public/Group 1501.svg'

const Section4 = () => {
  return (
    <div className='bgimg2 md:h-[100vh] p-[30px] h-[auto]  md:mx-[120px] md:pt-[100px]  md:pb-[20px] md:pl-[130px] md:pr-[50px] text-white flex flex-wrap justify-between'>
      <div className='md:w-[500px]'>
        <h1 className='md:text-6xl text-3xl font-bold'>Стабильные поставки за счет собственной лесозаготовки</h1>
        <div className='flex items-center gap-[20px]'>
            <img src={play} alt="" />
            <p className='text-[#0E9E2F] font-bold text-[18px] md:my-[60px]'>Смотреть видео о заводе</p>
        </div>
        <p className='p-[20px] md:text-2xl text-[#D2D2D2]'>Гибкий подход к условиям сотрудничества – скидки, различные формы оплаты, условия поставки.. </p>
      </div>
      <div className='bg-[#0e9e30b1]  rounded-tr-4xl md:p-[45px] p-[20px] md:h-[608px] md:block hidden'>
        <h1 className='text-3xl font-bold'>Сертификат FSС</h1>
        <p className='md:w-[350px] mt-[16px] mb-[50px] text-[18px]'>Сертифицированная продукция (FSC 100%) по системе Forest Stewardship Council®.</p>
        <h1 className='text-3xl font-bold'>Соответствие регламенту EUTR</h1>
        <p className='md:w-[350px] mt-[16px] mb-[50px] text-[18px]'>Сертифицированная продукция (FSC 100%) по системе Forest Stewardship Council®.</p>
        <h1 className='text-3xl font-bold'>Сертификат CARB / CARB2	</h1>
        <p className='md:w-[430px] mt-[16px] mb-[50px] text-[18px]'>Для поставок в США и другие страны, запрашивающие сертификацию на соответствие производства и продукции стандартам по выбросам формальдегида.</p>
      </div>
    </div>
  )
}

export default Section4
