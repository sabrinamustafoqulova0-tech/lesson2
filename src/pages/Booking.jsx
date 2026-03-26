import React from 'react'
import video from '../image/Group 2.png'
import imghome from '../image/image.png'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const Booking = () => {
  return (
    <>
    <div className='m-[20px] mx-[80px] flex justify-between bg-[#24AB700A] rounded-4xl'>
      <div className='w-[50%] p-[50px]'>
        <p className='text-[60px] font-bold'>Find your perfect place to stay</p>
        <p className='text-2xl text-[#555555] mt-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='flex items-center gap-4 mt-[80px]'>
          <img src={video} alt="" />
          <p className='font-bold text-2xl'>Watch video</p>
        </div>
      </div>
      <img src={imghome} alt="" />
    </div>
    
      <div className='flex absolute top-[600px] left-[200px] pl-[20px] justify-between w-[75%] bg-white rounded-[50px]'>
        <div className='flex gap-4 items-start my-[20px] pr-[10px] border-r-2 border-r-gray-200 pr-[40px]'>
          <LocationPinIcon sx={{color:"#24AB70"}}/>
          <div>
          <p className=' text-2xl'>Location</p>
          <p>United States</p>
          </div>
        </div>
        <div className='flex gap-4 items-start my-[20px] pr-[10px] border-r-2 border-r-gray-200 pr-[40px]'>
          <CalendarMonthIcon sx={{color:"#24AB70"}}/>
          <div>
          <p className=' text-2xl'>Chack out </p>
          <p>10 Jun 2021</p>
          </div>
          </div>
        <div className='flex gap-4 items-start my-[20px] pr-[10px] border-r-2 border-r-gray-200 pr-[40px]'>
          <CalendarMonthIcon sx={{color:"#24AB70"}}/>
          <div>
          <p className=' text-2xl'>Chack out</p>
          <p>15 Jun 2021</p>
          </div>
          </div>
        <div className='flex gap-4 items-start my-[20px] pr-[10px] '>
          <PersonIcon sx={{color:"#24AB70"}}/>
          <div>
          <p className=' text-2xl'>Rooms for</p>
          <p>1 room, 2 guests</p>
          </div>
          </div>
        <div className='flex gap-2 items-start bg-[#24AB70] text-white text-center px-[30px] py-[35px] rounded-[50px]'>
          <SearchIcon />
          <p>Search...</p>
        </div>
      </div>
      </>
  )
}

export default Booking
