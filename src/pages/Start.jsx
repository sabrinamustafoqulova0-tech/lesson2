import { Button } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import header  from '../images/Hero Header (1).png';

const Start = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
     <div className='pl-[20px] md:pl-[60px] lg:pl-[100px] flex flex-col md:flex-row items-center justify-between gap-10'>
  
  <div className='w-full md:w-[500px] lg:w-[576px] mt-[20px] md:mt-[50px] text-center md:text-left'>
    
    <h1 className='text-[32px] md:text-[55px] lg:text-[75px] font-bold'>
      {t("Discover And Create NFTs")}
    </h1>

    <p className='text-[14px] md:text-[16px]'>
      {t("Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a ")}
      <span className='font-bold'> {t("$20 bonus.")}</span>
    </p>

    <div className='flex flex-col sm:flex-row gap-3 md:gap-5 my-[20px] justify-center md:justify-start'>
      <Button sx={{backgroundColor:"black"}} variant='contained'>
        {t("Explore More")}
      </Button>

      <Button sx={{color:"black", border:"2px solid black"}} variant='outlined'>
        {t("create NFT")}
      </Button>
    </div>

    <div className='flex justify-center md:justify-start gap-5 md:gap-7 flex-wrap'>
      <div>
        <h1 className='font-bold text-[24px] md:text-[30px] lg:text-[36px]'>430K+</h1>
        <h1 className='text-[10px] md:text-[12px] text-gray-400'>{t("Art Works")}</h1>
      </div>

      <div>
        <h1 className='font-bold text-[24px] md:text-[30px] lg:text-[36px]'>159K+</h1>
        <h1 className='text-[10px] md:text-[12px] text-gray-400'>{t("Creators")}</h1>
      </div>

      <div>
        <h1 className='font-bold text-[24px] md:text-[30px] lg:text-[36px]'>87K+</h1>
        <h1 className='text-[10px] md:text-[12px] text-gray-400'>{t("Collections")}</h1>
      </div>
    </div>

  </div>

  <img 
    src={header} 
    alt="" 
    className='w-[250px] md:w-[350px] lg:w-auto'
  />

</div>
    </>
  )
}

export default Start
