import React from 'react'
import Card1 from './card1.jsx'

let data=[
    {
        id:"1",
        number:"01",
        name:"IT проекты на стадии идеи",
        about:"Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
    },
    {
        id:"2",
        number:"02",
        name:"Инновационный бизнес",
        about:"Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
    },
    {
        id:"3",
        number:"03",
        name:"Корпорации",
        about:"Для уже работающего технологического бизнес, позволим найти новые международне рынки сбыта, масштабировать бизнес"
    }
]
const Section3 = () => {
  return (
    <div className='lg:mx-[200px] lg:my-[50px] md:p-[30px] p-[20px]'>
        <h1 className='text-[#1178B2] lg:text-[36px] font-bold lg:mb-[50px] text-2xl mb-[20px]'>Для кого мы?</h1>
    <div className='flex flex-wrap  justify-between text-center '>
      {
        data.map((e)=>{
            return(
            <Card1
            key={e}
            number={e.number}
            name={e.name}
            about={e.about}
            />
            )
        })
      }
    </div>
    </div>
  )
}

export default Section3
