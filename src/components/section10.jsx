import React from 'react'
import image1 from "../public/Vector (8).png"
import image2 from "../public/Vector (9).png"
import image3 from "../public/Vector (10).png"
import Card5 from './card5'
let data=[
    {
        img:image1,
        name:"Анализ международных рынков",
        gotovnost:"7 раб. дней",
        lang:"анг. / нем.",
        price:"$5 060 "
    },
    {
        img:image2,
        name:"Упаковка стартапа под локальные",
        gotovnost:"6 раб. дней",
        lang:"рус. / англ.",
        price:"$1 000 "
    },
    {
        img:image3,
        name:"Акселератор вашего бизнеса",
        gotovnost:"4 раб. дней",
        lang:"нем. / рус.",
        price:"$1 600 "
    }
]

const Section10 = () => {
  return (
    <div className='lg:px-[200px] lg:py-[50px] p-[10px]'>
      <h1 className='lg:text-[36px] text-[#1178B2] font-bold'>Стоимость</h1>
      <div className='flex flex-wrap gap-[20px]'>
        {
            data.map((e)=>{
                return(
                    < Card5 
                    key={e}
                    img={e.img}
                    name={e.name}
                    gotovnost={e.gotovnost}
                    lang={e.lang}
                    price={e.price}
                    />

                )
            })
        }
      </div>
    </div>
  )
}

export default Section10
