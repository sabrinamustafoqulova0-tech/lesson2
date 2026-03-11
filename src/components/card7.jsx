import React from 'react'

const Card7 = ({img,about,date,name,imgtel}) => {
  return (
    <div className=' lg:w-[350px] md:w-[230px] rounded-b-2xl flex md:block lg:block items-center gap-[10px] shadow-2xl shadow-gray-300'>
      <img  className='w-[100%] hidden lg:block md:block' src={img} alt="" />
      <img className=' lg:hidden h-[100%] md:hidden' src={imgtel} alt="" />
      
      <div className='p-[20px]'>
        <p className='font-bold'>{name}</p>
        <p>{about}</p>
        <p className='mt-[40px]'>{date}</p>
      </div>
    </div>
  )
}

export default Card7
