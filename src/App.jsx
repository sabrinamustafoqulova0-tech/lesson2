import { Button } from '@mui/material'
import React, { Component } from 'react'
import logo from "./images/icon-layout.png"
import divyellow from './images/Rectangle.png'
import card1 from './images/Card 1.png'
import card2 from './images/Card 2.png'
import card3 from './images/Card 3.png'
import card4 from './images/Card 4.png'   

class App extends Component {
  render(){
  return (
    <>
      <div className='md:px-[150px] to-0 fixed bg-white w-[100%] z-10 p-[10px] items-center flex justify-between py-[10px] '>
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
        <img className='absolute z-[-2] md:top-[-50px] md:right-0' src={divyellow} alt="" />
      </div>
        
        <div className='pt-[200px] text-center'>
          <h1 className='text-[96px] font-bold'>Combine <span className='text-red-500'>fine</span> images</h1>
          <p className='text-[64px] font-bold'>To represent a product</p>
        </div>
         <div className=" p-6">
      <div className="md:grid md:grid-cols-4 md:grid-rows-3 md:gap-4 md:px-[100px] mx-auto">
        
        <div className="col-span-1 row-span-3  rounded-3xl p-5 flex flex-col justify-between">
           <div>
            <p className='text-[#2D3436]'>Use mixed grid with imagery, replace with your own photos and descriptions</p>
            <img src={card1} alt="" className="my-[20px] " />
          </div>

          <button className="bg-purple-500 py-3 text-white rounded-full">
            Learn more
          </button>
        </div>

        <div className="col-span-2 row-span-2  overflow-hidden relative">
          <img src={card2} alt="" className="w-full h-full object-cover" />
          
        </div>

        <div className="col-span-1 row-span-1 bg-[#efe7d7] rounded-3xl p-4 text-sm">
          This is multipurpose grid
        </div>

        <div className="bg-gray-200 rounded-3xl flex items-center justify-center text-4xl font-bold">
          A
        </div>

        <div className="bg-blue-500 rounded-3xl">
          <img src={card3} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white rounded-3xl p-3">
          <img src={card4} alt="" className="" />
        </div>

        <div className="col-span-2 bg-pink-200 rounded-3xl relative overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover" />
          <h2 className="absolute top-4 left-4 text-xl font-bold">
            See my goal?
          </h2>
        </div>

        <div className="bg-gray-400 rounded-3xl">
          <img src="" alt="" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
    </>
  )
}
}

export default App
