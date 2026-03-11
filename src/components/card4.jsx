import React from 'react'

const Card4 = ({number,name,about}) => {
  return (
    <div className='p-[20px] lg:w-[360px] md:w-[230px]  text-center rounded-2xl shadow-2xl shadow-mist-300'>
      <h1 className='lg:text-[80px] md:text-[64px] text-[#1178B280] font-bold text-[48px]'>{number}</h1>
      <p className='font-bold mb-[10px]'>{name}</p>
      <p>{about}</p>
    </div>
  )
}

export default Card4
