import React from 'react'
import cardimg1 from "../public/3.png"
import cardimg2 from "../public/Vector (5).png"
import cardimg3 from "../public/Vector (7).png"
import Card2 from './card2'
import video from '../public/Group 840 (2).png'

let data=[
    {
        id:"1",
        img:cardimg1,
        name:"Месяца обучения"
    },
    {
        id:"2",
        img:cardimg2,
        name:"Приглашенные эксперты"
    },
    {
        id:"3",
        img:cardimg3,
        name:"Персональный менеджер"
    }
]
const Section6 = () => {
  return (
    <div className='lg:px-[200px] lg:py-[50px] p-[10px]'>
      <h1 className='lg:text-[36px] text-[#1178B2] font-bold'>С какими рынками мы работаем?</h1>
      <p>Программа акселератора расчитана на 8 недель интенсивного онлайн  курса с вебинарами приглашенных экспертов по международным рынкам, разборами ваших идей и проектов </p>
        <div className='flex justify-between flex-wrap my-[20px]'>
            {
                data.map((e)=>{
                    return(
                        <Card2
                        key={e}
                        img={e.img}
                        name={e.name}
                        />
                    )
                })
            }
        </div>
        <img src={video} alt="" />
    </div>
  )
}

export default Section6
