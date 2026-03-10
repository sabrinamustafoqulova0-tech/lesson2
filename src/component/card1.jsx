import React from 'react'
import Btngray from "./btngray"

const Card1 = ({img,name,about}) => {
  return (
    <div className='w-[350px] p-[20px] bg-[#535353] rounded-tr-4xl'>
        <img className='m-[auto]' src={img} alt="" />
      <p className='text-3xl my-[10px]'>{name}</p>
      <p className='md:w-[260px] mb-[10px] text-[#D2D2D2]'>{about}</p>
      <Btngray name="Подробнее о товаре"/>
    </div>
  )
}

export default Card1
