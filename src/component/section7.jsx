import React from 'react'
import vector from '../public/Vector (2).png'
import Cars3 from './cars3'
import Nedeli from './nedeli'

const Section7 = () => {
  return (
    <div className='p-[30px]'>
      <h1 className='text-4xl font-bold'>Акции</h1>
      <div className='flex justify-between overflow-auto gap-[20px]'>
        <Cars3 />
        <Cars3 />
      </div>
      <h1 className='text-4xl font-bold my-[30px]'>Частые вопросы</h1>
      <div className='flex gap-[20px] overflow-auto'>
        <Nedeli dni="Продукты"/>
        <Nedeli dni="Программы"/>
        <Nedeli dni="Оплата и доставка"/>
        <Nedeli dni="Хранение"/>
      </div>
      <div className='bg-white p-[30px] flex justify-between items-center rounded-4xl mt-[20px]'>
        <p className='text-2xl font-bold'>Как я могу оплатить заказ?</p>
        <img src={vector} alt="" />
      </div>
      <div className='bg-white p-[30px] flex justify-between items-start rounded-4xl mt-[20px]'>
        <div>
            <p className='text-2xl font-bold'>Могу ли я изменить адрес и время доставки?</p>
            <p className='md:w-[70%]'>Каждый вечер, в день доставки, с вами связывается курьер, ориентировочно с 19:00 до 20:00 для уточнения адреса и времени доставки. При необходимости, вы можете их изменить, сообщив об этом курьеру при звонке.</p>
        </div>
        
        <img src={vector} alt="" />
      </div>
      <div className='bg-white p-[30px] flex justify-between items-center rounded-4xl mt-[20px]'>
        <p className='text-2xl font-bold'>Могу ли я перенести день доставки?</p>
        <img src={vector} alt="" />
      </div>
      <div className='bg-white p-[30px] flex justify-between items-center rounded-4xl mt-[20px]'>
        <p className='text-2xl font-bold'>Могу ли я приостановить доставку, на какой срок?</p>
        <img src={vector} alt="" />
      </div>
    </div>
  )
}

export default Section7
