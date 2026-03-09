import React from 'react'

const Card2 = (props) => {
  return (
    <div className='w-[430px]'>
    <img className='m-[auto] md:ml-[0px]' src={props.avatar} alt="" />
    <p className='font-bold text-[24px] my-[10px]'>{props.information}</p>
    <p>{props.page}</p>
    </div>
  )
}

export default Card2
