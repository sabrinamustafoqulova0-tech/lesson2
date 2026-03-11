import React from 'react'
import pupil1 from '../public/Ellipse 545.png'
import pupil2 from '../public/Ellipse 546.png'
import pupil3 from '../public/Ellipse 548.png'
import pupil4 from '../public/Ellipse 544.png'
import Card6 from './card6'
import logoimg1 from '../public/Снимок экрана 2022-09-08 в 1.50 (2).png'
import logoimg2 from '../public/Dealroom 1 (1).png'
import logoimg3 from '../public/Снимок экрана 2022-07-01 в 5.07 1.png'
import logoimg4 from '../public/Снимок экрана 2022-07-01 в 5.09 1.png'
let data=[
    {
        img:pupil1,
        name:"Юрий Ким",
        about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
        img:pupil2,
        name:"Эшли Абрамс",
        about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
        img:pupil3,
        name:"Фатими Юсуф",
        about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
    },
    {
        img:pupil4,
        name:"Майкл Донован",
        about:"Проведение исследования целевой аудитории позволит сформировать Product market fit"
    }
]

const Section12 = () => {
  return (
    
     <div className='lg:mx-[100px] lg:my-[50px] text-center lg:text-start p-[20px] md:px-[100px]'>
        <h1 className='text-[#1178B2] lg:text-[36px] font-bold lg:mb-[50px] text-2xl mb-[20px]'>Эксперты и трекеры программы</h1>
      <div className='flex lg:justify-between gap-[80px] overflow-auto'>
        {
            data.map((e)=>{
                return(
                    < Card6 
                    key={e}
                    img={e.img}
                    name={e.name}
                    about={e.about}
                    />
                )
            })
        }
      </div>
      <div className='mt-[100px]'>
        <h1 className='text-[#1178B2] lg:text-[36px] font-bold lg:mb-[50px] text-2xl mb-[20px]'>Эксперты и трекеры программы</h1>
        <div className='flex flex-wrap justify-center gap-[20px]'>
            <div className='p-[30px] lg:w-[265px] md:w-[230px] w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg1} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px]  md:w-[230px] w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg2} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px] md:w-[230px]  w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg3} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px] shadow-2xl  w-[150px] md:w-[230px]   shadow-gray-300'>
            <img className='m-[auto]' src={logoimg4} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px] md:w-[230px]  w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg4} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px]  md:w-[230px]  w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg3} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px]  md:w-[230px] w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg2} alt="" />
            </div>
            <div className='p-[30px] lg:w-[265px] md:w-[230px] w-[150px] shadow-2xl shadow-gray-300'>
            <img className='m-[auto]' src={logoimg1} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section12
