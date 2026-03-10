import React from 'react'

const Btngray = (props) => {
  return (
    <button className='p-[10px] px-[20px] rounded-[5px] bg-[#0E9E2F] text-white'>
        <p className='font-bold'>{props.name}</p>
    </button>
  )
}

export default Btngray
