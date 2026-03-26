import React from 'react'
import imglocation from "../image/image (15).png"

const Location = () => {
  return (
     <div className='m-[20px] mx-[80px] pr-[50px] flex justify-between bg-[#24AB700A] rounded-4xl'>
      <img src={imglocation} alt="" />
      <div className='w-[50%] p-[50px]'>
        <p className='text-[50px] font-bold'>Discover our History</p>
        <p className='text-[18px] text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='text-[18px] text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='px-[20px] mt-[10px] py-[10px] rounded-2xl bg-green-600 text-white '>Contact Now</button>

      </div>
    </div>
  )
}

export default Location
