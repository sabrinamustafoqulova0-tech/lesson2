import React from 'react'

const Card3 = ({img,name,about,date}) => {
  return (
    <div className='w-[360px]'>
      <img src={img} alt="" />
      <h2 className='text-2xl text-[#494B44] my-[10px]'>{name}</h2>
      <p className='text-[#92938F]'>{about}</p>
      <p className='text-[#0E9E2F] mt-[10px]'>{date}</p>
    </div>
  )
}

export default Card3
