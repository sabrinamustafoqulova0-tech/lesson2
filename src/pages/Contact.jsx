import React, { useRef } from 'react'
import '../App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import maks from "../image/Mask Group.png"

import 'swiper/css';
import 'swiper/css/navigation';


const Contact = () => {
  
  const inputRef = useRef(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <Swiper navigation={true} spaceBetween={30} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='flex pl-[50px] w-[100%] justify-center gap-32 items-center  mr-[100px]  rounded-2xl bg-[#FAFAFA]'>
            <div className='w-[686px]'>
              <p className='text-gray-400'><span className='text-2xl text-green-500'>"</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span className='text-2xl text-green-500'>"</span></p>
              <br />
              <br />
              <p className='font-bold text-[18px]'>Alexandr Ivchenko</p>
              <p className='text-gray-400'>Businessman</p>
            </div>
            <img src={maks} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex pl-[50px] w-[100%] justify-center gap-32 items-center  mr-[100px]  rounded-2xl bg-[#FAFAFA]'>
            <div className='w-[686px]'>
              <p className='text-gray-400'><span className='text-2xl text-green-500'>"</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span className='text-2xl text-green-500'>"</span></p>
              <br />
              <br />
              <p className='font-bold text-[18px]'>Alexandr Ivchenko</p>
              <p className='text-gray-400'>Businessman</p>
            </div>
            <img src={maks} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex pl-[50px] w-[100%] justify-center gap-32 items-center  mr-[100px]  rounded-2xl bg-[#FAFAFA]'>
            <div className='w-[686px]'>
              <p className='text-gray-400'><span className='text-2xl text-green-500'>"</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.<span className='text-2xl text-green-500'>"</span></p>
              <br />
              <br />
              <p className='font-bold text-[18px]'>Alexandr Ivchenko</p>
              <p className='text-gray-400'>Businessman</p>
            </div>
            <img src={maks} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <button className='p-[20px] px-[40px] bg-green-600 mt-[40px] rounded-4xl text-white ml-[45%]' onClick={handleFocus}>Your Email</button>

      <div className='baground mx-[80px] mt-[40px] rounded-4xl pt-[23%] px-[30px]'>
        <div className='w-[100%] bg-white rounded-3xl p-[40px] flex justify-between items-end'>
          <div>
          <h1 className='text-3xl font-bold'>Location of our Hotelos</h1>
          <br />
          <p className='w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
        <div className='flex w-[436px] rounded-4xl  bg-[#FAFAFA] justify-between'>
        <input ref={inputRef} type="text" className='pl-[40px] rounded-l-4xl' placeholder='Email...'/>
        <button className='p-[20px] px-[40px] bg-green-600 text-white rounded-4xl'>Contact</button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact

