import React from 'react'
import str from "../public/Group 1492.svg"
import imge1 from "../public/unsplash_6tAIO3pxde4.jpg"
import imge2 from "../public/unsplash_okI5SSlYAvM.jpg"
import imge3 from "../public/unsplash_8KfCR12oeUM (1).jpg"
import Card3 from "./card3"
let data=[
    {
        id:"1",
        img:imge1,
        name:"Вышли на международный рынок",
        about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
        date:"25.12.2021"
    },
    {
        id:"2",
        img:imge2,
        name:"Встреча с европепйскими коллегами",
        about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
        date:"25.12.2021"
    },
    {
        id:"3",
        img:imge3,
        name:"Новое оборудование",
        about:"Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции",
        date:"25.12.2021"
    }
]

const Section8 = () => {
  return (
    <div className='md:ml-[140px] md:mt-[140px]'>
          <div className='flex  md:flex-row flex-col items-center justify-between md:mr-[140px]'>
            <h1 className='md:text-5xl text-3xl  text-[#494B44] font-bold'>Новости</h1>
            <div className='flex gap-[5px] items-center'>
            <img src={str} alt="" />
            <p className='text-2xl text-[#0E9E2F]'>Читать все новости</p>
          </div>
    </div>
    <div className='flex  md:flex-row flex-col items-center justify-between md:mr-[140px] flex-wrap my-[20px]'>
        {
            data.map((e)=>{
                return(
                    <Card3 
                    key={e}
                    img={e.img}
                    name={e.name}
                    about={e.about}
                    date={e.date}
                    />
                )
            })
        }
    </div>
    </div>
  )
}

export default Section8
