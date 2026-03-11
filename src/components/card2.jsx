import React from 'react'

const Card2 = ({img,name}) => {
  return (
    <div className='lg:px-[80px] md:px-[20px] lg:py-[40px] flex md:block lg:block items-center gap-[10px] p-[20px] pt-[10px] text-center shadow-2xl shadow-gray-300'>
      <img className='m-[auto]' src={img} alt="" />
      <p className='mt-[10px] font-bold'>{name}</p>
    </div>
  )
}

export default Card2
