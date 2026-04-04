import React from "react";
import check from '../images/icon.svg'
import img from '../images/Illustration Left (1).png'
import Group from "../images/Group 427320345.png"
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const Colection = () => {
const { t, i18n } = useTranslation();
return (
<> <div className="flex flex-col md:flex-row px-[20px] md:pl-[80px] justify-between items-center md:items-start gap-10 my-[60px] md:my-[140px]"> <div> <p className="text-[28px] md:text-[40px] lg:text-[45px] font-bold text-[#C5C5C5]">Just Unleash - </p> <p className="text-[28px] md:text-[40px] lg:text-[45px] font-bold">Your Inner Collector</p> <div className="flex items-center gap-2 mb-[14px]"> <img src={check} alt="" /> <p className="text-[#12141D] text-sm md:text-base">{t("Best Seller All Around World")}</p> </div> <div className="flex items-center gap-2 mb-[14px]"> <img src={check} alt="" /> <p className="text-[#12141D] text-sm md:text-base">{t("$2M+ Transections Every Day")}</p> </div> <div className="flex items-center gap-2 mb-[14px]"> <img src={check} alt="" /> <p className="text-[#12141D] text-sm md:text-base">{t("Secure Transactions")}</p> </div> <div className="flex items-center gap-2 mb-[14px]"> <img src={check} alt="" /> <p className="text-[#12141D] text-sm md:text-base">{t("Exclusive Collections From Sellers")}</p> </div> <div className="flex items-center gap-2 mb-[14px]"> <img src={check} alt="" /> <p className="text-[#12141D] text-sm md:text-base">{t("Easy Buying and Selling")}</p> </div> <div className="flex items-center gap-2 mb-[14px]"> <img src={check} alt="" /> <p className="text-[#12141D] text-sm md:text-base">{t("Join Our Community")}</p> </div>
<Button variant="contained" sx={{ backgroundColor: "black" }}>
{t("Explore More")} </Button> </div>


  <img className="w-full md:w-[400px] lg:w-auto" src={img} alt="" />
  </div>

  <div className="w-full max-w-[1061px] aspect-square text-center m-auto rounded-[50%] border-2 border-solid border-gray-900 px-4">
  <div className="w-full max-w-[831px] m-auto mt-[40px] md:mt-[90px] aspect-square p-[40px] md:p-[120px] pt-[80px] md:pt-[200px] rounded-[50%] border-2 border-solid border-gray-900">
    <p className="text-2xl md:text-4xl lg:text-5xl font-bold ">{t("Join The")} </p>
    <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#C5C5C5] ">{t("Community")}</p>
    <p className="text-[#12141D] my-[20px] md:my-[50px] text-sm md:text-base">{t("Our vibrant community is full of collectors, artists, and enthusiasts who share a passion for one-of-a-kind digital.")}</p>
    
     <Button variant="contained" sx={{ backgroundColor: "black" }}>
       {t("Join  Our Community")} 
     </Button>
  </div>
  </div>

  <div>
    <p className="text-2xl md:text-4xl lg:text-5xl text-center mt-[40px] md:mt-[80px] font-bold ">{t("Frequently Asked ")} </p>
    <p className="text-2xl md:text-4xl lg:text-5xl text-center mb-[40px] md:mb-[80px] font-bold text-[#C5C5C5] ">{t("Questions")}</p>
    <div className="px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex justify-between items-center py-[15px] md:py-[20px] border-b-2 border-gray-400">
            <p className="text-lg md:text-2xl font-bold">{t("What is an NFT?")}</p>
            <div className="bg-black text-white text-center px-[15px] md:px-[20px] py-[5px] md:py-[10px] text-xl md:text-3xl rounded-[50%]"><p>+</p></div>
        </div>
        <div className="flex justify-between items-center py-[15px] md:py-[20px] border-b-2 border-gray-400">
            <p className="text-lg md:text-2xl font-bold">{t("What can I use NFTs for?")}</p>
            <div className="bg-black text-white text-center px-[15px] md:px-[20px] py-[5px] md:py-[10px] text-xl md:text-3xl rounded-[50%]"><p>+</p></div>
        </div>
        <div className="flex justify-between items-center py-[15px] md:py-[20px] border-b-2 border-gray-400">
            <p className="text-lg md:text-2xl font-bold">{t("What is an NFT?")}</p>
            <div className="bg-black text-white text-center px-[15px] md:px-[20px] py-[5px] md:py-[10px] text-xl md:text-3xl rounded-[50%]"><p>+</p></div>
        </div>
        <div className="flex justify-between items-center py-[15px] md:py-[20px] border-b-2 border-gray-400">
            <p className="text-lg md:text-2xl font-bold">{t("What can I use NFTs for?")}</p>
            <div className="bg-black text-white text-center px-[15px] md:px-[20px] py-[5px] md:py-[10px] text-xl md:text-3xl rounded-[50%]"><p>+</p></div>
        </div>
        <div className="flex justify-between items-center py-[15px] md:py-[20px] border-b-2 border-gray-400">
            <p className="text-lg md:text-2xl font-bold">{t("What can I use NFTs for?")}</p>
            <div className="bg-black text-white text-center px-[15px] md:px-[20px] py-[5px] md:py-[10px] text-xl md:text-3xl rounded-[50%]"><p>+</p></div>
        </div>
    </div>
  </div>

  <div className="mx-[20px] md:mx-[40px] lg:mx-[80px] rounded-4xl my-[40px] bg-black text-white p-[20px] md:pl-[40px] flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold" >Create and Sell NFTs</h1>
        <p className="text-lg md:text-2xl text-[#C5C5C5] mb-[30px] md:mb-[60px]">World’s Largest NFT Place</p>

        <div className='flex flex-col sm:flex-row gap-3 md:gap-5 my-[20px] justify-center md:justify-start'>
              <Button sx={{backgroundColor:"white", color:"black"}} variant='contained'>
                {t("Explore More")}
              </Button>
        
              <Button sx={{color:"white", border:"2px solid white"}} variant='outlined'>
                {t("create NFT")}
              </Button>
            </div>
    </div>
    <img className="w-full md:w-[300px]" src={Group} alt="" />
  </div>
</>


);
};

export default Colection;
