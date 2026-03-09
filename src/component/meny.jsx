import React from 'react'

const Meny = (props) => {
  return (
    <div className='w-[300px]'>
      <img src={props.img} alt="" />
      <p className='text-[#A98C64]'>{props.name}</p>
      <p className='text-[18px] w-[300px]'>{props.about}</p>
    </div>
  )
}

export default Meny
