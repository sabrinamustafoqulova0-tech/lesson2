import { Button } from '@mui/material'
import React from 'react'
import img1 from "./images/image (16).png"
import star from "./images/Group 10 (2).png"

const App = () => {
  return (
    <>
    <div className='flex justify-between items-center py-[20px] px-[80px]'>
      <div className='flex gap-16 ml-[400px]'>
        <p>Booking</p>
        <p>Facilities</p>
        <p>About Us</p>
        <p>Location</p>
        <p>Contact</p>
      </div>
      <button className='px-[40px] py-[20px] rounded-4xl bg-green-600 text-white'>Login</button>
    </div>
    <div className='flex justify-between  px-[150px]'>
      <img src={img1} alt="" />
      <div className='w-[550px]'>
        <p className='text-green-600'>London NW8 7JT England</p>
        <p className='text-2xl font-bold mt-[20px]'>Danubius Hotel Regents Park</p>
        <div className='flex items-center gap-4 my-[20px]'>
          <p className='text-[18px] font-bold pr-4 border-r-2 border-r-gray-400'>$200 Par Night</p>
          <img src={star} alt="" />
        </div>
        <p>Как уже неоднократно упомянуто, базовые сценарии поведения пользователей рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Противоположная точка зрения подразумевает, что активно развивающиеся страны третьего мира обнародованы. Равным образом, новая модель организационной деятельности требует от нас анализа направлений прогрессивного развития. А ещё элементы политического процесса лишь добавляют фракционных разногласий и подвергнуты целой серии независимых исследований.</p>
      <button className='py-[10px] w-[200px] ml-[250px] mt-[50px] rounded-4xl bg-green-600 text-white'>To book Now</button>
      </div>
    </div>
    </>
  )
}

export default App
