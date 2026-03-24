import React from 'react'
import '../App.css';
import portfel from '../images/calogo1 2.png'
import iconcareer from '../images/Icon Container.png'
import sub from '../images/Sub Container (2).png'
import sub2 from '../images/Sub Container (3).png'
import { Button } from '@mui/material'

const Career = () => {
  return (
    <div className='bg-black text-white pb-[100px]'>
      <div className='bg-[#141414] rounded-2xl md:px-[50px] px-[20px] flex md:flex-row flex-col items-center md:gap-[200px]  md:mx-[100px] mx-[20px]'>
        <div>
          <p className='md:text-4xl text-2xl font-bold'>Build the Future with Us</p>
          <p className='text-[#ffffff92] md:my-[40px] my-[10px] md:w-[600px]'>We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.</p>
          <Button variant='contained'>Explore Open Positions</Button>
        </div>
      <img src={portfel} alt="" />
      </div>
      <div className='bg-[#0B0B0B] px-[100px] py-[30px] flex justify-between'>
        <select className='p-[10px] rounded-3xl bg-[#191919] w-[220px]'>
          <option value="">Departments</option>
        </select>
        <select className='p-[10px] rounded-3xl bg-[#191919] w-[220px]'>
          <option value="">Experience</option>
        </select>
        <select className='p-[10px] rounded-3xl bg-[#191919] w-[220px]'>
          <option value="">Job Type</option>
        </select>
        <select className='p-[10px] rounded-3xl bg-[#191919] w-[220px]'>
          <option value="">Workplace Type</option>
        </select>
        <input className='p-[10px] rounded-3xl bg-[#191919] w-[280px]' type="search" placeholder='Search by keywords...' />
      </div>
      
      <div className='md:px-[100px] px-[20px]'>
        <p className='text-center text-3xl font-bold pb-[50px]'>Open Positions</p>
        <div className='flex justify-between flex-wrap gap-9'>
          <div className='bg-[#1A1A1A] rounded-[20px] p-[40px] w-[623px]'>
            <div className='flex gap-7 items-center'>
              <img src={iconcareer} alt="" />
              <p className='text-2xl'>Web Designer</p>
            </div>
            <img className='my-[10px]' src={sub} alt="" />
            <div className='flex gap-4 flex-wrap'>
              <img src={sub2} alt="" />
              <img src={sub2} alt="" />
            </div>
              <p className='text-3xl my-[20px]'>Skills</p>
              <p className='text-[18px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
              <Button variant='contained' sx={{width:"100%", marginTop:"20px"}}>Apply Now</Button>
          </div>
          <div className='bg-[#1A1A1A] rounded-[20px] p-[40px] w-[623px]'>
            <div className='flex gap-7 items-center'>
              <img src={iconcareer} alt="" />
              <p className='text-2xl'>Web Designer</p>
            </div>
            <img className='my-[10px]' src={sub} alt="" />
            <div className='flex gap-4 flex-wrap'>
              <img src={sub2} alt="" />
              <img src={sub2} alt="" />
            </div>
              <p className='text-3xl my-[20px]'>Skills</p>
              <p className='text-[18px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
              <Button variant='contained' sx={{width:"100%", marginTop:"20px"}}>Apply Now</Button>
          </div>
          <div className='bg-[#1A1A1A] rounded-[20px] p-[40px] w-[623px]'>
            <div className='flex gap-7 items-center'>
              <img src={iconcareer} alt="" />
              <p className='text-2xl'>Web Designer</p>
            </div>
            <img className='my-[10px]' src={sub} alt="" />
            <div className='flex gap-4 flex-wrap'>
              <img src={sub2} alt="" />
              <img src={sub2} alt="" />
            </div>
              <p className='text-3xl my-[20px]'>Skills</p>
              <p className='text-[18px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
              <Button variant='contained' sx={{width:"100%", marginTop:"20px"}}>Apply Now</Button>
          </div>
          <div className='bg-[#1A1A1A] rounded-[20px] p-[40px] w-[623px]'>
            <div className='flex gap-7 items-center'>
              <img src={iconcareer} alt="" />
              <p className='text-2xl'>Web Designer</p>
            </div>
            <img className='my-[10px]' src={sub} alt="" />
            <div className='flex gap-4 flex-wrap'>
              <img src={sub2} alt="" />
              <img src={sub2} alt="" />
            </div>
              <p className='text-3xl my-[20px]'>Skills</p>
              <p className='text-[18px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
              <Button variant='contained' sx={{width:"100%", marginTop:"20px"}}>Apply Now</Button>
          </div>
        </div>
      </div>


      <div className='pt-[100px] bground m-auto rounded-4xl shadow-2xl shadow-gray-400 mt-[80px] border-1 border-gray-600 text-center'>
        <p className='text-5xl'>Ready to discuss</p>
        <p className='my-[20px] text-2xl'>your product needs with <span className='text-[#0A84FF]'>Catalyst Analytic</span> experts?</p>
        <Button variant='contained' className='m-auto'>Get In Touch</Button>
      </div>

    </div>
  )
}

export default Career
