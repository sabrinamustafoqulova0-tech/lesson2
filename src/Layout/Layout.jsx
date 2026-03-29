import React, { useRef } from 'react'
import { Link, Outlet } from 'react-router'
import logo from "../image/manifold_logotype.svg"
import logo2 from "../image/Frame 32 (2).png"
import endelogo from "../image/Frame 30.png"
import { Button } from '@mui/material'

const Layout = () => {
  
    let inpRef=useRef()
    let focus=()=>{
    inpRef.current.focus()
    }
  return (
    <>
    <div className='border-b-2 border-b-gray-200 md:px-[50px] flex justify-between items-center p-[20px]'>
    <nav className='flex gap-20 items-center '>
      <img className='w-[80px] md:w-[180px]' src={logo} alt="" />
      <Link className='hidden md:block' to={"/"}>Services</Link>
      <Link className='hidden md:block'>Portfolio</Link>
      <Link className='hidden md:block'>Email Marketing Audit</Link>
      <Link className='hidden md:block' to={"/table"}>Table</Link>
    </nav>
    <img className='md:hidden block' src={logo2} alt="" />
    <Button onClick={()=>focus()} sx={{bgcolor:"red"}} variant='contained'>CONTACT US</Button>
    </div>
    <div>
      <Outlet/>
    </div>
    
          <div className='bg-black flex justify-between md:flex-row  flex-col  md:my-[100px] mx-[40px] p-[20px] md:p-[40px] rounded-2xl text-white'>
            <div>
            <p className='md:w-[700px] md:text-[80px] text-4xl font-bold'>Subscribe to <span className='text-red-600'>L.U.Y.E</span></p>
            <p className='text-red-600'> Level Up Your Email Newsletter</p>
            </div>
            <div>
              <p>Our aim is to level up your email marketing to world-class standards. We want to bring joy to your readers and deliver excellent ROI for your business. That’s why we created our email newsletter.</p>
              <br />
              <p>But here is the thing: it's not just about us promoting our agency services (we promise!). In our emails, we share valuable advice and practical tips based on our own experiences. Our goal is to help you enhance your email marketing without breaking the bank.</p>
             <br />
              <p className='text-red-600'>Let's join forces and make your emails shine!</p>
              <br />
              <p className='text-2xl font-bold'>Subscribe to L.U.Y.E.</p>
              <div className='flex items-center'>
                <input ref={inpRef} className='bg-white text-gray-600 px-[20px] p-[5px]' type="text" placeholder='Your Email'/>
            <Button sx={{bgcolor:"red"}} variant='contained'>SUBSCRIBE</Button>
              </div>
              <p>Согласие на получение писем?</p>
            </div>
          </div>
    <footer className='bg-black text-white p-[40px] flex items-start justify-between flex-wrap'>
      <div className='flex justify-between items-start  flex-wrap gap-16'>
      <img src={logo} alt="" />
      <div className='flex flex-col gap-2'>
        <p>Services</p>
        <p>About Us</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p>Email Marketing Audit</p>
        <p>Portfolio</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p>Blog</p>
        <p>Privacy Policy</p>
      </div>
      </div>
      <img src={endelogo} alt="" />
    </footer>
    </>
  )
}

export default Layout
