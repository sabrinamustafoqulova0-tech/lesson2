import React from 'react'
import img1 from "../public/Rectangle 29.png"
import img2 from "../public/Rectangle 46.png"
import img3 from "../public/Rectangle 30.png"
import img4 from "../public/Rectangle 29 (1).png"

const Section5 = () => {
  return (
    <div className='flex pl-[30px] md:pl-[50px] justify-between md:flex-row flex-col mt-[100px]'>
      <div className='md:w-[645px]'>
        <p>Доставка правильного питания «Пора поесть» – это специально разработанные программы здорового, раздельного и, несомненно, вкусного питания. </p>
        <p className='font-bold text-[#4D8F76] text-[20px] my-[20px]'>Уникальность проекта заключается в объединении медицинских знаний и современных методов приготовления пищи.</p>
        <p>Программы питания разработаны шеф-поваром нашей компании совместно  с диетологами. А это предполагает, что организм регулярно будет получать  в необходимом количестве и оптимальных соотношениях многие питательные вещества – белки, жиры, воду, минеральные вещества и витамины, а наш шеф-повар позаботился о вкусовых качествах наших блюд</p>
      </div>
      <div>
        <div className='flex items-start gap-[30px] md:flex-row flex-wrap justify-center'>
            <div>
                <img className='mb-[30px]' src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Section5
