import React from 'react'
import TvIcon from '@mui/icons-material/Tv';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import WifiIcon from '@mui/icons-material/Wifi';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const AboutUs = () => {
  return (
    <div className='px-[80px] mt-[50px] flex justify-between items-start'>
      <div className='w-[411px] flex flex-col gap-10 items-start justify-start'>
        <p className='text-[40px]'>We do our best facilities provide you</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
        <button className='px-[20px] mt-[10px] py-[10px] rounded-2xl bg-green-600 text-white '>Contact Now</button>
      </div>
      <div className='flex flex-wrap gap-4 w-[850px]'>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <TvIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <LocalParkingIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <FreeBreakfastIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <WifiIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <FlashOnIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <PoolIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <FitnessCenterIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
        <div className='border-2 border-solid border-gray-300 rounded-[20px] w-[193px] flex flex-col gap-6 items-center  justify-center py-[51px]'>
        <MoreHorizIcon sx={{ color:"green"}}/>
        <p>Private Workspace</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
