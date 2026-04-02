import { Button } from '@mui/material'
import React, { Component } from 'react'
import logo from "./images/icon-layout.png"
import divyellow from './images/Rectangle.png'
import card1 from './images/Card 1.png'
import card2 from './images/Card 2.png'
import card3 from './images/Card 3.png'
import card4 from './images/Card 4.png'   
import card5 from './images/🗻 Simple.png'   
import card6 from './images/🗻 Simple2.png'   
import card7 from './images/🗻 Simpl3.png'   
import Dots from './images/🎨 Dots 1.png'   
import Green from './images/99 dp.png'   
import fone from './images/icon-phone-call.png'   

class App extends Component {
  render(){
  return (
    <>
      <div className='md:px-[150px] top-0 fixed bg-white md:w-[100%] w-[78%] z-10  items-center flex justify-between md:py-[10px] '>
        <div className='flex md:gap-4  items-center'>
          <img src={logo} alt="" />
          <h1 className='md:text-4xl text-2xl font-bold'>Grid</h1>
        </div>
        <div className='md:flex hidden gap-5 items-center '>
          <p>How it works</p>
          <p className='text-amber-300'>•</p>
          <p className='text-[#6C5CE7]'>Who we are</p>
          <p className='text-amber-300'>•</p>
          <p className='text-[#6C5CE7]'>What we do</p>
          <p className='text-amber-300'>•</p>
          <p className='text-[#6C5CE7]'>Contact us</p>
        </div>
        <button className='md:w-[170px] md:p-[20px] p-[10px] rounded-2xl md:rounded-4xl bg-[#6C5CE7] md:text-[20px] font-bold text-white'>Sign In</button>
      </div>
      <div>
        <img className='absolute z-[-2] md:top-[50px] top-[30px] right-[-100px] md:right-0' src={divyellow} alt="" />
        <img className='absolute z-[-2] md:top-[150px] md:w-[200px] w-[130px] top-[100px] right-0' src={Dots} alt="" />
        <img className='absolute md:block hidden z-[-2] md:top-[290px] md:right-[41%]' src={Green} alt="" />
      </div>
        
        <div className='md:pt-[200px] pt-[100px] p-[20px] md:text-center md:bg-transparent bg-[#ffeaa774]'>
          <div className='flex justify-center '>
          <h1 className='md:text-[96px] text-[55px] font-bold'>Combine <span className='text-red-500'>fine</span> images</h1>
          </div>
          <p className='md:text-[64px] text-3xl  text-center  font-bold'>To represent a product</p>
        </div>
          <div className='md:px-[170px] px-[20px] mt-[100px] justify-between items-start flex flex-col md:flex-row gap-10'>
  
  <div className='md:w-[270px] w-full flex flex-col gap-6 items-center md:items-start text-center md:text-left'>
    <p>Use mixed grid with imagery, replace with your own photos and descriptions</p>
    <img src={card1} alt="" className='w-full max-w-[300px]' />
    
    <button className='p-[10px] rounded-2xl md:rounded-4xl bg-[#6C5CE7] text-[18px] md:text-[30px] font-bold text-white w-full md:w-auto'>
      Sign In
    </button>
  </div>

  <div className='w-full md:w-[870px]'>
    <div className='flex flex-col md:flex-row gap-[20px] md:gap-[30px] items-center md:items-end'>
      <img src={card2} alt="" className='w-full md:w-auto' />
      
      <div className='w-full md:w-[370px] text-center md:text-left'>
        <p className='text-[#2D3436] font-bold mb-[20px]'>
          This is multipurpose grid, it fits for portfolio, services or agency web site
        </p>
        
        <div className='flex justify-between gap-4'>
          <img src={card5} alt="" className='w-[48%] md:w-auto' />
          <img src={card6} alt="" className='w-[48%] md:w-auto' />
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between items-center md:items-start mt-[30px] gap-5'>
      <img src={card3} alt="" className='w-full md:w-auto' />
      <img src={card4} alt="" className='w-full md:w-auto' />
      <img src={card7} alt="" className='w-full md:w-auto' />
    </div>
  </div>
</div>
<div className='md:px-[140px] mt-[100px] px-[20px]'>
  <p className='font-bold text-3xl my-[20px]'>Delivering good designs since 1954 🚚💨</p>
  <p className='text-[18px]'>We’re the first multi-purpose design kit solutions for businesses. We help you bridge <br /> gaps between your layouts, templates and developers to empower all involved.</p>

    <div className='flex justify-between flex-wrap mt-[40px]'>
      <div className='md:w-[270px] w-[135px] flex flex-col gap-3'>
        <div className='bg-[#E84393] w-[60px] rounded-[50%]'>
        <img src={fone} alt="" />
        </div>
        <p className='font-bold text-2xl'>Support</p>
        <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
        <button className='p-[10px] rounded-[10px] border'>
          <p className='text-purple-500 font-bold'>Learn more</p>
        </button>
      </div>
      <div className='md:w-[270px] w-[135px] flex flex-col gap-3'>
        <div className='bg-[#0984E3] w-[60px] rounded-[50%]'>
        <img src={fone} alt="" />
        </div>
        <p className='font-bold text-2xl'>Support</p>
        <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
        <button className='p-[10px] rounded-[10px] border'>
          <p className='text-purple-500 font-bold'>Learn more</p>
        </button>
      </div>
      <div className='md:w-[270px] w-[135px] flex flex-col gap-3'>
        <div className='bg-[#6C5CE7] w-[60px] rounded-[50%]'>
        <img src={fone} alt="" />
        </div>
        <p className='font-bold text-2xl'>Support</p>
        <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
        <button className='p-[10px] rounded-[10px] border'>
          <p className='text-purple-500 font-bold'>Learn more</p>
        </button>
      </div>
      <div className='md:w-[270px] w-[135px] flex flex-col gap-3'>
        <div className='bg-[#00B894] w-[60px] rounded-[50%]'>
        <img src={fone} alt="" />
        </div>
        <p className='font-bold text-2xl'>Support</p>
        <p>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
        <button className='p-[10px] rounded-[10px] border'>
          <p className='text-purple-500 font-bold'>Learn more</p>
        </button>
      </div>
    </div>
</div>
<div>
  <h1 className='text-center font-bold text-5xl mt-[100px] mb-[20px]'>Affordable pricing</h1>
  <p  className='text-center font-bold text-2xl'>Bill me <span className='text-purple-600'>monthly</span> • yearly</p>
  <div className='md:px-[140px] flex md:flex-row flex-col justify-between mt-[30px]'>
    <div className='w-[370px] h-[536px] p-[20px] '>
      <p className='text-purple-600 font-bold'>Like a pussy</p>
      <span className='font-bold text-3xl'>Free </span>
      <span> / forever</span>
      <div className='flex items-center gap-4 my-[20px]'>
        <div className='bg-[#C2C2C2] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#C2C2C2] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#C2C2C2] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <button className='p-[10px] w-[100%] mt-[180px] rounded-[10px] border'>
          <p className='text-purple-500 font-bold'>Try for free</p>
        </button>
    </div>
    <div className='w-[370px] h-[536px] p-[20px] shadow-2xl shadow-gray-500'>
      <p className='text-purple-600 font-bold'>Like a pussy</p>
      <span className='font-bold text-3xl'>$24  </span>
      <span> / forever</span>
      <div className='flex items-center gap-4 my-[20px]'>
        <div className='bg-[#FDCB6E] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#FDCB6E] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#FDCB6E] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#FDCB6E] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#FDCB6E] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <button className=' w-[100%] mt-[50px]  '>
          <p className='bg-purple-500 p-[10px] rounded-[10px] text-white font-bold'>Try for free</p>
        </button>
    </div>
    <div className='w-[370px] h-[536px] p-[20px] '>
      <p className='text-purple-600 font-bold'>Like a pussy</p>
      <span className='font-bold text-3xl'>$212 </span>
      <span> / forever</span>
      <div className='flex items-center gap-4 my-[20px]'>
        <div className='bg-[#55EFC4] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#55EFC4] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <div className='flex items-center gap-4 mb-[20px]'>
        <div className='bg-[#55EFC4] p-[10px] rounded-[50%] text-center'>
          <p>✔️</p>
        </div>
        <p>Components-driven system</p>
      </div>
      <button className='p-[10px] w-[100%] mt-[180px] rounded-[10px] border'>
          <p className='text-purple-500 font-bold'>Try for free</p>
        </button>
    </div>
  </div>
</div>

<div className=" mt-[50px] px-[20px] md:px-[100px] py-[40px]">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-8 w-full md:w-1/2">
          <div>
            <p className="text-gray-400 text-sm mb-4 tracking-widest">FOLLOW US</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4 tracking-widest">INFORMATION</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[#2D3436] text-sm">
              <p>About Fapster app</p>
              <p className="underline">Onhovered / Active</p>
              <p>We are hiring!</p>
              <p>Get in Touch</p>
              <p>Privacy Policy</p>
              <p>Resources</p>
              <p>Things We Like</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          
          <p className="text-gray-400 text-sm tracking-widest">FOLLOW US</p>
          <h2 className="text-[#6C5CE7] font-bold text-[24px] md:text-[28px] mb-6">
            hello@fapsterapp.com
          </h2>
          <p className="text-gray-400 text-sm mb-4 ">KEEP IN TOUCH</p>
            <div className="flex flex-col gap-4">
            
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your name"
                className=" bg-gray-200 rounded-xl p-3 outline-none"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="w-full bg-gray-200 rounded-xl p-3 outline-none"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <textarea
                placeholder="Leave your message"
                className="w-full bg-gray-200 rounded-xl p-3 outline-none h-[60px] md:h-[70px]"
              />

              <button className="bg-[#6C5CE7] text-white font-bold px-6 py-3 rounded-xl md:rounded-2xl w-full md:w-[150px]">
                SEND
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}
}

export default App
