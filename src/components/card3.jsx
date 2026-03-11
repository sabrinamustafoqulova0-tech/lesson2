import React from 'react'
import strelka from "../public/Group 1017.png"

const Card3 = ({module,theme}) => {
  return (
          <div className='p-[20px] px-[50px] flex-col lg:flex-row items-center md:flex-row text-center lg:text-start flex justify-between shadow-2xl shadow-gray-300 border-solid border-gray-300 rounded-3xl mb-12'>
            <div className='flex flex-col lg:flex-row items-center md:flex-row  lg:gap-[20px] md:gap-[40px] text-[20px]'>
                <p className='text-[#1178B2] font-bold text-2xl'>{module}</p>
                <p>{theme}</p>
            </div>
              <img src={strelka} alt="" />
          </div>
  )
}

export default Card3
