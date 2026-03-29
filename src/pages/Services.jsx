import { Button } from '@mui/material'
import React, { useRef } from 'react'
import icon1 from "../image/6476f21ab8cad4706f751e11_lev 1.png"
import icon2 from "../image/asdfghj.png"
import icon3 from "../image/qwerty.png"
import icon4 from "../image/63c1e496dd3beb601e472dd7_lrp400 1.png"
import icon5 from "../image/rtyui.png"
import icon6 from "../image/kfc.png"
import usor from "../image/Ресурс 1 1 (1).png"
import tels from "../image/Frame 18 (1).png"
import frame from "../image/Frame.png"
import vector from "../image/Vector 2 (1).png"

const Services = () => {
  return (
    <div>
      <div className='md:ml-[40px] md:mt-[50px] p-[10px] md:h-[70vh]'>
        <h1 className='md:w-[1000px] md:text-[80px] text-4xl font-bold'> <span className='text-red-500'>Boost</span> your email marketing results!</h1>
        <p className='text-[20px] text-gray-500 my-[20px] '>We help B2C brands grow their email-attributed revenue</p>
        <Button sx={{bgcolor:"red"}} variant='contained'>Boost your results</Button>
      </div>
      <div className='flex flex-wrap justify-between items-center gap-3 md:p-[30px] '>
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon1} alt="" />
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon2} alt="" />
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon3} alt="" />
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon4} alt="" />
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon4} alt="" />
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon5} alt="" />
        <img className='md:w-[130px] m-[20px] w-[60px]' src={icon6} alt="" />
      </div>
      
      <img className='hidden md:block' src={usor} alt="" />
      <div className='bg-black md:absolute md:top-[700px] md:left-0 flex md:mt-[300px] md:flex-row md:w-[90%] gap-[100px] flex-col md:my-[100px] mx-[40px] p-[20px] md:p-[40px] rounded-2xl text-white'>
        <h1 className='md:w-[700px] md:text-[80px] text-4xl font-bold'>We are here to <span className='text-red-500'>help</span> when:</h1>
        <div className='flex flex-col gap-3'>
          <p><span className='text-red-600 text-4xl'>.</span>Your email revenue is 20% or less</p>
          <p><span className='text-red-600 text-4xl'>.</span>You need ideas to grow your email channel</p>
          <p><span className='text-red-600 text-4xl'>.</span>You want expert help with implementing strategies</p>
          <p><span className='text-red-600 text-4xl'>.</span>Your competitors' emails outperform yours</p>
          <p><span className='text-red-600 text-4xl'>.</span>Your competitors' emails outperform yours</p>
        </div>
      </div>

      <div className='flex justify-center md:flex-row items-center flex-col md:p-[100px] p-[10px] '>
        <img className='w-[800px]' src={tels} alt="" />
        
        <div>
          <div className='md:w-[400px]'>
          <img src={icon1} alt="" />
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-red-500'>Result:</p>
            <p className='text-red-500'>Type:</p>
            <p className='text-red-500'>Company: </p>
            <p className='text-red-500'>Product:</p>
            <p className='text-red-500'>Result:</p>
            <p className='text-red-500'>Platform:</p>
          </div>
          <div>
            <p>$20K per email campaign</p>
            <p>Subscription e-commerce</p>
            <p>Lev Haolam</p>
            <p>Handmade gifts from Israel</p>
            <p>Klaviyo</p>
          </div>
        </div>
        <Button sx={{bgcolor:"red",marginTop:"100px"}} variant='contained'>Boost your results</Button>
      </div>
      </div>


      <img className='hidden md:block' src={usor} alt="" />
      <div className='bg-black md:absolute md:top-[2350px] md:left-0 md:w-[90%]  md:my-[100px] mx-[40px] p-[20px] md:p-[40px] rounded-2xl text-white'>
      <div className='md:flex-row flex flex-col gap-[100px] '>
        <h1 className='md:w-[1000px] md:text-[80px] text-4xl font-bold'>We <span className='text-red-600'>take careof</span> all your emailmarketing activities</h1>
        <div className='flex flex-col gap-3'>
          <p><span className='text-red-600 text-4xl'>.</span>Your email revenue is 20% or less</p>
          <p><span className='text-red-600 text-4xl'>.</span>You need ideas to grow your email channel</p>
          <p><span className='text-red-600 text-4xl'>.</span>You want expert help with implementing strategies</p>
          <p><span className='text-red-600 text-4xl'>.</span>Your competitors' emails outperform yours</p>
          <p><span className='text-red-600 text-4xl'>.</span>Your competitors' emails outperform yours</p>
        </div>
      </div>
        <div className=' flex justify-between mt-[30px]'>
          <p className='p-[20px] border-r-2 border-r-gray-600'><span className='text-red-600 '>For midsize businesses</span>, we become your budget-friendly email marketing team, ensuring revenue from emails at a fraction of in-house costs. Discover how it works!</p>
          <p  className='p-[20px]'><span className='p-[20px] text-red-600'>For email marketers at larger companies</span>, we enhance your productivity by handling execution, allowing you to focus on strategy. Learn why we are your support, not your competition!</p>
        </div>
      </div>


      <div className='flex justify-between md:flex-row  flex-col items-center pl-[20px] mt-[40px]'>
        <div>
        <h1 className='md:text-7xl font-bold'>Testimonials</h1>
        <div className='flex p-[20px] my-12 rounded-2xl shadow-2xl md:w-[750px] items-start gap-4'>
          <img src={frame} alt="" />
          <div>
            <p>You have ensured a systematic approach to our email strategy and helped us streamline all chaotic thoughts and ideas we had about our emails!</p>
            <p className='text-red-600'>Natalia Pereldik,</p>
            <p className='font-bold'>CEO, Funexpected Games</p>
          </div>
        </div>
        <div className='flex p-[20px] rounded-2xl shadow-2xl md:w-[750px] items-start gap-4'>
          <img src={frame} alt="" />
          <div>
            <p>You have ensured a systematic approach to our email strategy and helped us streamline all chaotic thoughts and ideas we had about our emails!</p>
            <p className='text-red-600'>Natalia Pereldik,</p>
            <p className='font-bold'>CEO, Funexpected Games</p>
          </div>
        </div>
        </div>
        <img className='w-[600px]' src={vector} alt="" />
      </div>
      

    </div>
  )
}

export default Services
