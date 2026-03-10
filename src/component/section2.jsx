import React from 'react'
import Card1 from "./card1"
import Image1 from "../public/unsplash_Xp9hn1HzzDk.png"
import Image2 from "../public/unsplash_Xp9hn.png"
import Image3 from "../public/unsplash_Xp9hn1HzzDk (2).png"
import Image4 from "../public/unsplash_Xp9hn1HzzDk@2x.png"
import Image6 from "../public/unsplash_Xp9hn1HzzDk (4).png"
import Image7 from "../public/unsplash_Xp9hn1HzzDk (5).png"
import Image8 from "../public/unsplash_Xp9hn1HzzDk (6).png"


let data=[
    {
        id:"1",
        img:Image1,
        name:"Латофлекс",
        about:"Шпон березовый лущеный, ГОСТ 99-96 В Смола марки КФМТ - 15, класс эмиссии Е0",
    },
    {
        id:"2",
        img:Image2,
        name:"Фанера",
        about:"Шпон березовый лущеный, ГОСТ 99-96В. Смола марки КФМТ - 15, класс эмиссии Е0",
    },
    {
        id:"3",
        img:Image3,
        name:"Брикеты топливные RUF",
        about:"Прессованные березовые опилкибез применения химических добавок",
    },
    {
        id:"4",
        img:Image4,
        name:"Пиломатериалы",
        about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина",
    },
    {
        id:"5",
        img:Image1,
        name:"Кроватные основания",
        about:"Из берёзового шпона или из массива на ленте",
    },
    {
        id:"6",
        img:Image6,
        name:"Уголь",
        about:"Шпон березовый лущеный, ГОСТ 99-96 В Смола марки КФМТ - 15, класс эмиссии Е0",
    },
    {
        id:"7",
        img:Image7,
        name:"Саженцы",
        about:"Шпон березовый лущеный, ГОСТ 99-96 В Смола марки КФМТ - 15, класс эмиссии Е0",
    },
    {
        id:"8",
        img:Image8,
        name:"Отходы производства",
        about:"Шпон березовый лущеный, ГОСТ 99-96 В Смола марки КФМТ - 15, класс эмиссии Е0",
    },
    {
        id:"9",
        img:Image6,
        name:"Уголь",
        about:"Шпон березовый лущеный, ГОСТ 99-96 В Смола марки КФМТ - 15, класс эмиссии Е0",
    }
]

const Section2 = () => {
  return (
    <div className='p-[120px] bg-[#686868] text-white'>
      <p className='text-[45px] font-bold'>Продукция завода</p>
      <p className='md:w-[500px] text-[#D2D2D2]'>Ниже представлен список нашей продукции. Получить дополнительную информацию, а также оставить заявку можно по контактам коммерческой службы.</p>
        <div className='flex justify-between gap-[20px] flex-wrap'>
            {
            data.map((e)=>{
                return(
                    <Card1 
                    key={e}
                    img={e.img}
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

export default Section2
