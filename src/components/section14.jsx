import React from 'react'
import logodisign1 from '../public/иллюстрация-вектора-карты-в-регионе-mena-eps-167723480 1.png'
import logodisign2 from '../public/434ba4f5a20d0c361d4ae733771006a7 1.png'
import logodisign3 from '../public/Снимок экрана 2022-11-15 в 1.13 1.png'
import logodisigntel1 from '../public/иллюстрация-вектора-карты-в-регионе-mena-eps-167723480 1 (1).png'
import logodisigntel2 from '../public/434ba4f5a20d0c361d4ae733771006a7 1 (1).png'
import logodisigntel3 from '../public/Снимок экрана 2022-11-15 в 1.13 1 (1).png'
import Card7 from './card7'

let data=[
    {
        id:"1",
        img:logodisign1,
        imgtel:logodisigntel1,
        about:"Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем раундов, ТОП сферы)",
        date:"22.11.2022",
        name:"Новый отчет по MENA"
    },
    {
        id:"2",
        img:logodisign2,
        imgtel:logodisigntel2,
        about:"Поговорим с экспертами рынков в формате дискуссии",
        date:"22.11.2022",
        name:"Вебинар по особенностям рынков "
    },
    {
        id:"3",
        img:logodisign3,
        imgtel:logodisigntel3,
        about:"Поговорим с экспертами рынков в формате дискуссии",
        date:"22.11.2022",
        name:"Вебинар по особенностям рынков "
    }
]

const Section14 = () => {
  return (
    <div className='lg:px-[200px] lg:py-[50px] p-[10px]'>
      <h1 className='lg:text-[36px] text-[#1178B2] font-bold'>Мероприятия и события</h1>
      <div className='flex justify-between gap-[20px] flex-wrap my-[20px]'>
        {
            data.map((e)=>{
                return(
                    <Card7 
                    key={e}
                    img={e.img}
                    name={e.name}
                    about={e.about}
                    date={e.date}
                    imgtel={e.imgtel}
                    />
                )
            })
        }
      </div>
    </div>
  )
}

export default Section14
