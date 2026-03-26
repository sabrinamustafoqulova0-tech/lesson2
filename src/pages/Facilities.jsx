import React, { useState } from 'react'
import img1 from "../image/image (12).png"
import img2 from "../image/image (13).png"
import img3 from "../image/image (14).png"
import star from "../image/Group 10 (1).png"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Facilities = () => {
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
        modules={[Pagination]}
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
  )
}

export default Facilities
