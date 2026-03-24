import React from 'react'
import '../App.css';
import { Button } from '@mui/material';
import romb from "../images/Frame 81.png"
import sub from '../images/Sub Container (2).png'
import sub2 from '../images/Sub Container (3).png'
import language from '../images/Frame 1707480642.png'
import strelka from '../images/material-symbols_upload.png'
import img from '../images/image 8.png'
import iconcareer from '../images/Icon Container.png'



const CareerDetails = () => {
  return (
    <div className='bg-black text-white pb-[50px]'>
      <div className='backgroundimg pt-[90px]'>
        <p className='font-bold text-7xl text-center text-white mb-[40px]'>Web Designer</p>
        <Button sx={{marginLeft:"650px", paddingLeft:"60px", paddingRight:"60px"}} variant='contained'>Apply Now</Button>
      </div>
      <div className='px-[100px] py-[40px] flex justify-between items-start'>
        <div className='bg-[#1A1A1A] p-[20px] w-[840px] rounded-[10px]'>
          <p className='text-2xl '>About this position</p>
          <br />
          <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <br />
          <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <br />
          <p className='text-2xl '>Responsibilities</p>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <br />
          <p className='text-2xl '>Requirements</p>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <div className='flex items-start gap-4 mt-[10px]'>
            <img src={romb} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <br />
          <p className='text-2xl '>About this position</p>
          <br />
          <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <br />
          <p className='text-[#B3B3B2]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='bg-[#1A1A1A] p-[20px] rounded-2xl w-[430px]'>
          <h2 className='text-2xl'>Web Designer</h2>
          <img className='mt-[15px]' src={sub} alt="" />
          <img className='mt-[15px]' src={sub2} alt="" />
          <img className='my-[15px]' src={sub2} alt="" />
          <h2 className='text-2xl'>Skills</h2>
          <p className='my-[20px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
          <Button sx={{width:"100%"}} variant='contained'>Apply Now</Button>
        </div>
      </div>

      <div className='bg-[#1A1A1A] p-[20px] rounded-2xl w-[840px] ml-[100px]'>
        <p className='font-bold text-[20px]'>Apply Now</p>
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
            <Button variant='contained'>Submit Application</Button>
        </div>
      </div>
            
    <div className='px-[100px]'>
      <p className=' text-3xl font-bold py-[50px]'>Similar Positions</p>
      <div className='flex justify-between flex-wrap gap-9'>
        <div className='bg-[#1A1A1A] rounded-[20px] p-[40px] w-[623px]'>
          <div className='flex gap-7 items-center'>
            <img src={iconcareer} alt="" />
            <p className='text-2xl'>Web Designer</p>
          </div>
          <img className='my-[10px]' src={sub} alt="" />
          <div className='flex gap-4'>
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
          <div className='flex gap-4'>
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
          <div className='flex gap-4'>
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
          <div className='flex gap-4'>
            <img src={sub2} alt="" />
            <img src={sub2} alt="" />
          </div>
            <p className='text-3xl my-[20px]'>Skills</p>
            <p className='text-[18px]'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
            <Button variant='contained' sx={{width:"100%", marginTop:"20px"}}>Apply Now</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CareerDetails
