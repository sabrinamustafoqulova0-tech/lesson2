import React from 'react'
import str from "../public/Group 1492.svg"

const Card2 = ({name,price,about}) => {
  return (
    <div className='py-[30px] px-[20px] bg-[#F6F6F7] md:w-[400px]'>
      <h1 className='text-2xl'>{name}</h1>
      <hr />
      <p className='text-[#0E9E2F] my-[20px]'>{price}</p>
      <p className='text-[#92938F]'>{about}</p>
      <div className='flex justify-between items-center mt-[50px]'>
        <p className='text-[#0E9E2F] font-bold '>Подробнее</p>
        <img src={str} alt="" />
      </div>
    </div>
  )
}

export default Card2
