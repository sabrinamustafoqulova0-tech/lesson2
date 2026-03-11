import React from 'react'

const Card6 = ({img,name,about}) => {
  return (
    <div className='lg:w-[230px] md:w-[230px] w-[204px] text-center'>
    <img src={img} alt="" />
    <p className='font-bold my-[10px]'>{name}</p>
    <p className='w-[100%]'>{about}</p>
    </div>
  )
}

export default Card6
