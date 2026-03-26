import { Button } from '@mui/material'
import React, { useState } from 'react'
import img1 from "./images/image (17).png"
import img2 from "./images/image (18).png"
import img3 from "./images/image (19).png"
import img4 from "./images/Perfect Place 1.png"

import imglocation from "./images/image (20).png"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import img from "./images/image (16).png"
import star from "./images/Group 10 (2).png"

const App = () => {
  let [card, setCard]=useState([
    {
      id:1,
      img:img1,
      name:"Danubius Hotel Regents Park",
      adres:"London NW8 7JT England",
      price:"$200 Par Night"
    },
    {
      id:2,
      img:img2,
      name:"The Resident Soho",
      adres:"London Bridge Hotel ",
      price:"$200 Par Night"
    },
    {
      id:3,
      img:img3,
      name:"Danubius Hotel Regents Park",
      adres:"London NW8 7JT England",
      price:"$200 Par Night"
    },
    {
      id:4,
      img:img1,
      name:"Danubius Hotel Regents Park",
      adres:"London Bridge Hotel",
      price:"$200 Par Night"
    },
  ])
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
      <img src={img} alt="" />
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

     <div className='px-[80px]'>
      <h1 className='text-3xl font-bold'>Our most popular Hotels</h1>
      <div className='flex justify-between items-center mt-[30px]'>
        <p className='w-[409px] text-[#555555]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='bg-[#24AB701A] rounded-2xl p-[5px] px-[10px] text-[#24AB70]'>View All</button>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }} 
        className="mySwiper"
      >
        {
          card.map((e)=>{
            return(
              <SwiperSlide>
                <div className='w-[411px] rounded-2xl mt-[40px]'>
                  <img className='w-[100%]' src={e.img} alt="" />
                <div className='p-[20px] bg-[#f0f0f0] rounded-b-2xl'>
                  <p className='text-green-600'>{e.adres}</p>
                  <h1 className='text-2xl font-bold my-[20px]'>{e.name}</h1>
                  <div className='flex items-center gap-6'>
                    <p className='border-r-3 pr-[20px] border-r-gray-300'>{e.price}</p>
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>

     <div className='m-[20px] mx-[80px] mt-[80px] pr-[50px] flex justify-between bg-[#24AB700A] rounded-4xl'>
      <img src={imglocation} alt="" />
      <div className='w-[50%] p-[50px]'>
        <p className='text-[50px] font-bold'>Discover our History</p>
        <p className='text-[18px] text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='text-[18px] text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='px-[20px] mt-[10px] py-[10px] rounded-2xl bg-green-600 text-white '>Contact Now</button>

      </div>
    </div>
    <div className='m-[20px] mx-[80px] mt-[80px] pr-[50px] flex justify-between  rounded-4xl'>
      <div className='w-[410px]'>
        <p className='text-3xl font-bold'>Frequently Asked</p>
        <p className='text-3xl font-bold text-green-600 mb-[20px]'>Questions</p>
        <p className='text-gray-400'>You can book massages 7 days a week from 6 am to 11 pm, including public holidays.</p>
      </div>
      <div className='w-[682px]'>
        <div className='w-[100%] p-[20px] border rounded-[10px]'>
        <div className='flex justify-between mb-[20px]'>
          <p className='text-2xl font-bold'>How far is nearset bus station ?</p>
          <p className='text-2xl font-bold'>^</p>
        </div>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

        </div>
        <div className='w-[100%] p-[20px] border rounded-[10px] mt-6'>
        <div className='flex justify-between '>
          <p className='text-2xl font-bold'>How far is nearset bus station ?</p>
          <p className='text-2xl font-bold'>^</p>
        </div>
        </div>
        <div className='w-[100%] p-[20px] border rounded-[10px] mt-6'>
        <div className='flex justify-between '>
          <p className='text-2xl font-bold'>How far is nearset bus station ?</p>
          <p className='text-2xl font-bold'>^</p>
        </div>
        </div>
      </div>
    </div>

    
     <div className='m-[20px] mx-[80px] mt-[80px] pr-[50px] flex justify-between bg-[#24AB700A] rounded-4xl'>
      <img src={img4} alt="" />
      <div className='w-[50%] p-[50px]'>
        <p className='text-[50px] font-bold'>About Us</p>
        <p className='text-[18px] text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='text-[18px] text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='px-[20px] mt-[10px] py-[10px] rounded-2xl bg-green-600 text-white '>Read More</button>

      </div>
    </div>
     <footer className='flex justify-between p-[80px] pt-[200px] px-[190px]'>
        <div className='flex flex-col gap-5'>
            <p></p>
            <p className='w-[264px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
           
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-2xl'>Home</p>
            <p>Booking</p>
            <p>Facilities</p>
            <p>Location</p>
            <p>Contact</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-2xl'>Help</p>
            <p>About Us</p>
            <p>Help center</p>
            <p>Privacy policy</p>
            <p>FAQs</p>
        </div>
        <div className='flex flex-col gap-3'>
            <p className='text-2xl'>Get the app</p>
            <p>iOS app</p>
            <p>Android app</p>
        </div>
      </footer>
    </>
  )
}

export default App
