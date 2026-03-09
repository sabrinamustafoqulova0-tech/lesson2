import React from 'react'

const Card1 = (props) => {
  return (
    <div className='p-[10px] w-[220px] text-center border-2 border-solid border-[#DFCCB7] rounded-3xl '>
        <h2 className='text-[20px] font-bold'>{props.kal}</h2>
        <p className='w-[220px]'>{props.bludo}</p>
    </div>
  )
}

export default Card1
