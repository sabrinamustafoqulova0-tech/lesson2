import React from 'react'
import calogo from "../images/calogo1 2 (1).png"
import language from '../images/Frame 1707480642.png'
import strelka from '../images/material-symbols_upload.png'
import img from '../images/image 8.png' 
import pismo from "../images/Icon (3).png"
import telefon from "../images/Icon (4).png"
import locazia from "../images/Icon (5).png"
import { Button } from '@mui/material'

const Contact = () => {
  return (
    <div className='bg-black text-white pb-[100px]'>
      <div className='bg-[#141414] rounded-2xl md:px-[50px] px-[10px] flex md:flex-row flex-col items-center md:gap-[200px]  md:mx-[100px] mx-[20px]'>
        <div>
          <p className='text-4xl font-bold'>Contact Us</p>
          <p className='text-[#ffffff92] my-[40px] md:w-[600px]'>Get in touch with our team to discuss how we can help transform your business. We’re here to help.</p>
          <Button variant='contained'>Get In Touch Now</Button>
        </div>
      <img src={calogo} alt="" />
      </div>
      <div className='flex justify-between md:px-[100px] px-[20px] md:flex-row flex-col gap-10 pt-[20px] mt-[50px]'>
        <div className='bg-[#1A1A1A] p-[20px] rounded-2xl md:w-[840px] '>
        <p className='font-bold text-[20px]'>Send Us a Message</p>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-3'>
            <input className='bg-[#FFFFFF0D] w-[50%] text-[#FFFFFF99] p-[5px] px-[10px] rounded-[10px]' type="text" placeholder='First Name*' />
            <input className='bg-[#FFFFFF0D] w-[50%] text-[#FFFFFF99] p-[5px] px-[10px] rounded-[10px]' type="text" placeholder='Last Name*' />
          </div>
            <input className='bg-[#FFFFFF0D] text-[#FFFFFF99] p-[5px] px-[10px] rounded-[10px]' type="text" placeholder='Email*' />
            <input className='bg-[#FFFFFF0D] text-[#FFFFFF99] p-[5px] px-[10px] rounded-[10px]' type="text" placeholder='Headline (Optional)' />
            <div className='bg-[#FFFFFF0D] text-[#FFFFFF99] py-[5px] px-[10px] rounded-[10px] flex items-center gap-3'>
              <img src={language} alt="" />
              <p>Phone Number</p>
            </div>
            <textarea className='bg-[#FFFFFF0D] text-[#FFFFFF99] p-[5px] px-[10px] rounded-[10px]' placeholder='Application Submission'></textarea>
            <div className='bg-[#FFFFFF0D] text-[#FFFFFF99] p-[10px] rounded-[10px] text-center'>
              <img className='m-auto' src={strelka} alt="" />
              <p>Drag & Drop File Here or <span className='text-[#0A84FF] underline'>Browse File</span></p>
            </div>
            <img className='w-[300px]' src={img} alt="" />
            <Button variant='contained'>Send</Button>
        </div>
      </div>
        <div className='md:w-[560px]'>
          <div className='bg-[#1A1A1A] p-[20px] rounded-2xl w-[100%]'>
            <p className='font-bold text-[20px]'>Contact Information</p>
            <div className='flex items-start gap-[10px] mt-[20px]'>
              <img src={pismo} alt="" />
              <div>
                <p className='font-bold'>Email</p>
                <p className='text-[#FFFFFFCC]'>contact@catalystanalytics.io</p>
              </div>
            </div>
            <div className='flex items-start gap-[10px] mt-[20px]'>
              <img src={telefon} alt="" />
              <div>
                <p className='font-bold'>Phone</p>
                <p className='text-[#FFFFFFCC]'>(469) 712-4672</p>
              </div>
            </div>
            <div className='flex items-start gap-[10px] mt-[20px]'>
              <img src={locazia} alt="" />
              <div>
                <p className='font-bold'>Office</p>
                <p className='text-[#FFFFFFCC]'>5511 Parkcrest Dr, Suite 103</p>
                <p className='text-[#FFFFFFCC]'>Austin, TX 78731</p>
                <p className='text-[#FFFFFFCC]'>United States</p>
              </div>
            </div>
          </div>

          <div className='bg-[#1A1A1A] p-[20px] rounded-2xl w-[100%] mt-[40px] flex flex-col gap-5'>
            <p className='font-bold text-[20px]'>Contact Information</p>
            <p>Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business.</p>
            <Button variant='contained'>Book a Meeting</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
