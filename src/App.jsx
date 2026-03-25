import React, { useRef, useState } from 'react';
import { Button } from '@mui/material'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "./images/uhr.jpg"
import img2 from "./images/telefon.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const App = () => {
  const [data, setData]=useState([
    {
      id:1,
      name:"Часы",
      price:140,
      img:img1,
    },
    {
      id:2,
      name:"Часы",
      price:140,
      img:img2,
    },
    {
      id:3,
      name:"Часы",
      price:140,
      img:img1,
    },
    {
      id:4,
      name:"Часы",
      price:140,
      img:img2,
    },
    {
      id:1,
      name:"Часы",
      price:140,
      img:img1,
    },
    {
      id:2,
      name:"Часы",
      price:140,
      img:img2,
    },
    {
      id:3,
      name:"Часы",
      price:140,
      img:img1,
    },
    {
      id:4,
      name:"Часы",
      price:140,
      img:img2,
    }
  ])
  const videoRef = useRef(null);
  const inputRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  
  return (
    <>
    
    <Swiper
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
    {
      data.map((e)=>{
        return(
        <SwiperSlide>
          <div className='border-3 border-gray-300 p-[20px] rounded-2xl w-[300px] '>
            <img src={e.img} alt="" />
            <p className='text-2xl'>{e.name}</p>
            <p>{e.price}$</p>
          </div>
        </SwiperSlide>
        )
      })
    }
    
      </Swiper>













    <div style={{ padding: '20px', marginTop:"100000px" }}>
      <div className="mb-8">
        <video 
          ref={videoRef} 
          width="400" 
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
          className="rounded shadow-lg"
        />
        <br />
        <button 
          onClick={togglePlay} 
          className="bg-blue-500 text-white p-2 mt-2 rounded"
        >
          Воспроизвести / Пауза
        </button>
      </div>

      <hr className="my-6" />


      <div className="flex flex-col gap-2 w-64">
        <button 
          onClick={handleFocus} 
          className="bg-green-500 text-white p-2 rounded"
        >
          Фокус на поле ввода
        </button>
        <input 
          className="border p-2 rounded" 
          ref={inputRef} 
          placeholder="Нажми кнопку выше..."
        />
      </div>
    </div>
    </>
  );
}

export default App;
