import React from 'react'
import moshini from '../public/Group 1515 (1).png'
import karta from '../public/Group 1536.png'

const Section5 = () => {
  return (
    <div className='md:m-[120px]'>
      <div className='flex justify-between flex-wrap p-[20px]'>
        <p className='md:text-5xl text-3xl  text-[#494B44] font-bold'>География Поставок</p>
        <img src={moshini} alt="" />
      </div>
      <img className='mt-[50px]' src={karta} alt="" />
    </div>
  )
}

export default Section5
