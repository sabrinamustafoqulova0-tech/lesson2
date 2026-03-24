import { Button } from '@mui/material'
import React from 'react'
import users from "../images/Group 20.png"
import robot from "../images/robot area.png"
import image1 from "../images/Card.png"
import image2 from "../images/Card (1).png"
import image3 from "../images/Card (5).png"
import image4 from "../images/Card (2).png"
import image5 from "../images/Card (3).png"
import image6 from "../images/Card (4).png"
import divimg1 from "../images/72355892508 1.png"
import divimg2 from "../images/72355892508 1 (1).png"
import divimg3 from "../images/72355892508 1 (2).png"
import number1 from "../images/Container (13).png"
import number2 from "../images/Container (14).png"
import number3 from "../images/Container (15).png"
import number4 from "../images/Container (16).png"
import number5 from "../images/Container (17).png"

const Home = () => {
  return (
    <div className='bg-black text-white '>
      <div className='md:pl-[100px] p-[10px] flex gap-20 items-center md:mt-[-200px]'>
        <div>
          <h1 className='font-bold md:text-7xl'>Transforming Data</h1>
          <div className='flex gap-3.5 mt-[10px]'>
            <p className='font-bold md:text-7xl'>into</p>
            <p className='bg-[#0A84FF] px-[10px] rounded-2xl font-bold md:text-7xl'>Decisions</p>
          </div>
          <p className='my-[40px] md:text-[20px] md:w-[500px]'>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
          <Button variant="contained">Book a Meeting</Button>
          <div className='flex items-center mt-[10px]'>
            <img src={users} alt="" />
            <p>Over 100+ clients have worked with us</p>
          </div>
        </div>
        <img className='ml-[-300px] hidden md:block' src={robot} alt="" />

      </div>
      <div className='md:mx-[100px] mx-[20px] flex flex-wrap justify-between md:py-[50px] py-[10px] mt-[10px] border-y-4 border-y-[#0A84FF]'>
        <img className='md:w-[202px] w-[100px]' src={image1} alt="" />
        <img className='md:w-[202px] w-[100px]' src={image2} alt="" />
        <img className='md:w-[202px] w-[100px]' src={image3} alt="" />
        <img className='md:w-[202px] w-[100px]' src={image4} alt="" />
        <img className='md:w-[202px] w-[100px]' src={image5} alt="" />
        <img className='md:w-[202px] w-[100px]' src={image6} alt="" />
      </div>
      <div className='md:p-[100px] p-[10px]'>
        <p className='md:text-2xl md:w-[500px] text-center m-auto'>Our Ultimate Set of Services for Your Ideas Implementation</p>
        <div className='flex justify-between items-center gap-2 md:flex-row flex-col mt-[30px] mb-[60px]'>
          <div className='bg-[#141414] rounded-2xl p-[40px] text-center md:w-[350px] w-[300px]'>
            <img className='m-auto' src={divimg1} alt="" />
            <p className='font-bold my-[10px] text-[20px]'>Predictive Analytics</p>
            <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
          </div>
          <div className='bg-[#141414] rounded-2xl p-[40px] text-center md:w-[350px] w-[300px]'>
            <img className='m-auto' src={divimg2} alt="" />
            <p className='font-bold my-[10px] text-[20px]'>AI Consulting</p>
            <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
          </div>
          <div className='bg-[#141414] rounded-2xl p-[40px] text-center md:w-[350px] w-[300px]'>
            <img className='m-auto' src={divimg3} alt="" />
            <p className='font-bold my-[10px] text-[20px]'>Data Engineering</p>
            <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
          </div>
        </div>
      </div>
      <div className='pb-[100px]'>
        <p className='md:text-4xl text-[20px] font-bold text-center mb-[40px]'>Frequently Asked Questions</p>
        <div className='bg-[#1E1E1E] p-[20px] rounded-2xl md:w-[840px] w-[300px] m-auto'>
          <div className='flex items-center justify-between gap-2 md:flex-row flex-col'>
            <div className='flex gap-4 items-center'>
              <img src={number1} alt="" />
              <div>
              <p className='text-blue-600 text-[18px]'>What services does Catalyst Analytics provide?</p>
             </div>
            </div>
            <p className="text-3xl text-blue-600 ">+</p>
          </div>
           <p className='md:w-[700px] ml-[100px]'>Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>
       </div>
        <div className='bg-[#141414] p-[20px] rounded-2xl md:w-[840px] w-[300px] m-auto flex items-center justify-between mt-[30px]'>
            <div className='flex gap-4 items-center'>
              <img src={number2} alt="" />
              <div>
              <p className=' md:text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
             </div>
            </div>
            <p className="text-3xl ">+</p>
          </div>
        <div className='bg-[#141414] p-[20px] rounded-2xl md:w-[840px] w-[300px] m-auto flex items-center justify-between mt-[30px]'>
            <div className='flex gap-4 items-center'>
              <img src={number3} alt="" />
              <div>
              <p className=' md:text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
             </div>
            </div>
            <p className="text-3xl ">+</p>
          </div>
        <div className='bg-[#141414] p-[20px] rounded-2xl md:w-[840px] w-[300px] m-auto flex items-center justify-between mt-[30px]'>
            <div className='flex gap-4 items-center'>
              <img src={number4} alt="" />
              <div>
              <p className=' md:text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
             </div>
            </div>
            <p className="text-3xl ">+</p>
          </div>
        <div className='bg-[#141414] p-[20px] rounded-2xl md:w-[840px] w-[300px] m-auto flex items-center justify-between mt-[30px]'>
            <div className='flex gap-4 items-center'>
              <img src={number5} alt="" />
              <div>
              <p className=' md:text-[18px]'>Lorem Ipsum is simply dummy text of the printing </p>
             </div>
            </div>
            <p className="text-3xl ">+</p>
          </div>
      </div>

    </div>

  )
}

export default Home
