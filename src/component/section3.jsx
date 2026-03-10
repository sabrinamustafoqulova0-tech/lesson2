import React from 'react'
import img1 from '../public/unsplash_zbD8iz5ZJk4.jpg'
import img11 from '../public/unsplash_zbD8iz5ZJk4 (1).jpg'
import img2 from '../public/unsplash_2yNMsw-A2eI (1).jpg'
import img3 from '../public/unsplash_2yNMsw-A2eI.jpg'
import img4 from '../public/unsplash_zbD8iz5ZJk4 (3).jpg'

const Section3 = () => {
  return (
    <div className='md:p-[120px] p-[20px] flex flex-col gap-[60px]'>
    <h1 className='text-[#494B44] text-5xl font-bold text-center'>основная деятельность</h1>
    <div>
    <div className='flex justify-between flex-wrap items-center mt-[20px]'>
        <div className='w-[400px]'>
            <p className='text-4xl font-bold text-[#0E9E2F]'>Производство</p>
            <br />
            <br />
            <p className='text-[#92938F]'>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции.</p>
            <br />
            <br />
            <p className='text-[#92938F]'>Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.</p>
        </div>
        <img className='md:w-[860px]' src={img1} alt="" />
    </div>
    <div className='flex flex-wrap justify-between mt-[20px]'>
        <img className='md:w-[400px]' src={img2} alt="" />
        <img className='md:w-[400px]' src={img3} alt="" />
        <img className='md:w-[400px]' src={img4} alt="" />
    </div>
    </div>
    <div>
    <div className='flex justify-between flex-wrap items-center mt-[20px]'>
        <div className='w-[400px]'>
            <p className='text-4xl font-bold text-[#0E9E2F]'>Лесоуправление  и заготовка</p>
            <br />
            <br />
            <p className='text-[#92938F]'>Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека – 320 000 м3. Общая площадь арендованного леса – 306 000 Га - cертифицирована по стандартам международной добровольной лесной сертификации (FSC).</p>
            </div>
        <img className='md:w-[860px]' src={img11} alt="" />
    </div>
    <div className='flex flex-wrap justify-between mt-[20px]'>
        <img className='md:w-[400px]' src={img2} alt="" />
        <img className='md:w-[400px]' src={img3} alt="" />
        <img className='md:w-[400px]' src={img4} alt="" />
    </div>
    </div>
    <div>
    <div className='flex justify-between flex-wrap items-center mt-[20px]'>
        <div className='w-[400px]'>
            <p className='text-4xl font-bold text-[#0E9E2F]'>Питомник</p>
            <br />
            <br />
            <p className='text-[#92938F]'>Задача лесопитомника – обеспечение посадочным материалом собственной и сторонней лесозаготовки.</p>
            <br />
            <br />
            <p className='text-[#92938F]'>Питомник полностью покрывает потребности Пермского края в сеянцах сибирской ели. Общая площадь теплиц – 4800 м3, питомника – 15 Га. Потенциал – до 4 млн. сеянцев в год.</p>
        </div>
        <img className='md:w-[860px]' src={img11} alt="" />
    </div>
    <div className='flex flex-wrap justify-between mt-[20px]'>
        <img className='md:w-[400px]' src={img2} alt="" />
        <img className='md:w-[400px]' src={img3} alt="" />
        <img className='md:w-[400px]' src={img4} alt="" />
    </div>
    </div>
    </div>
  )
}

export default Section3
