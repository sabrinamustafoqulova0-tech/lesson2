import React from 'react'
import { Link, Outlet } from 'react-router'
import facebook from "../image/Group 23.png"
import inctagram from "../image/Group 24.png"
import google from "../image/search 1.png"

const Layout = () => {
  return (
    <>
    <div  className='flex justify-between p-[20px] pl-[500px] pr-[80px]'>
      <nav className='flex gap-[50px] justify-center text-[18px]'>
        <Link to={"/"}>Booking</Link>
        <Link to={"/facilities"}>Facilities</Link>
        <Link to={"/aboutUs"}>About Us</Link>
        <Link to={"/location"}>Location</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav> 
      <button className='bg-green-600 text-white rounded-3xl py-[10px] px-[20px]'>Login</button>
    </div>
      <div>
        <Outlet/>
      </div>
      <footer className='flex justify-between p-[80px] pt-[200px] px-[190px]'>
        <div className='flex flex-col gap-5'>
            <p></p>
            <p className='w-[264px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='flex items-center gap-[20px]'>
                <img src={facebook} alt="" />
                <img src={inctagram} alt="" />
                <img src={google} alt="" />
            </div>
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

export default Layout
