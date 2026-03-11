import React from 'react'

const Card1 = ({number,name,about}) => {
  return (
    <div className='shadow-2xl text-center shadow-gray-400 w-[330px] p-[20px]'>
      <h1 className='text-[50px] font-bold text-[#1178B280]'>{number}</h1>
      <p className='font-bold my-[20px]'>{name}</p>
      <p>{about}</p>
    </div>
  )
}

export default Card1
