import React, { Component } from "react";
import cover from "../images/Cover.png";
import pic from "../images/Pic.png";
import Socials from "../images/Socials.png";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import img1 from "../images/Mask Group (1).png";
import img2 from "../images/Mask Group (3).png";
import img3 from "../images/Mask Group (4).png";
import img4 from "../images/Mask Group (5).png";
import img5 from "../images/Mask Group (2).png";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative">
        <img className="m-auto w-full h-[200px] md:h-[300px] object-cover" src={cover} alt="" />
        <img className="absolute top-[120px] md:top-[200px] left-[50%] -translate-x-1/2 md:left-[200px] md:translate-x-0 w-[120px] md:w-[150px]" src={pic} alt="" />
      </div>

      <div className="px-[20px] md:px-[80px] lg:px-[150px] mb-[50px] flex flex-col md:flex-row justify-between items-start mt-[100px] gap-10">
        
        <div className="w-full md:w-[367px]">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-[20px] md:py-[40px] gap-4">
            <div>
              <h1 className="text-[28px] md:text-[35px]">{t("Harry K.")}</h1>
              <p className="text-gray-400">@Harryknft</p>
            </div>
            <Button sx={{ backgroundColor: "black" }} variant="contained">
              {t("Follow +")}
            </Button>
          </div>

          <div className="flex py-[30px] md:py-[50px] border-t-4 border-t-gray-200 justify-center md:justify-start gap-5 md:gap-7 flex-wrap">
            <div>
              <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[25px]">
                486 ETH
              </h1>
              <h1 className="text-[10px] md:text-[12px] text-gray-400">
                {t("Art Works")}
              </h1>
            </div>

            <div>
              <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[25px]">
                12K
              </h1>
              <h1 className="text-[10px] md:text-[12px] text-gray-400">
                {t("Creators")}
              </h1>
            </div>

            <div>
              <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[25px]">
                587
              </h1>
              <h1 className="text-[10px] md:text-[12px] text-gray-400">
                {t("Collections")}
              </h1>
            </div>
          </div>

          <p className="font-bold text-2xl md:text-3xl text-gray-400">Bio</p>
          <p className="text-gray-400 pb-[30px] md:pb-[50px] text-sm md:text-base">
            {t("the artist who transforms the intangible into priceless assets with their incredible NFT creations. From stunning visuals to mind-bending concepts,")}
          </p>

          <img src={Socials} alt="" className="w-[150px] md:w-auto" />
        </div>

        <div className="flex justify-center md:justify-between w-full md:w-[780px] gap-6 flex-wrap">
          
          {/* CARD 1 */}
          <div className="bg-white border w-full sm:w-[48%] md:w-[240px] h-[350px] rounded-4xl p-[15px] relative">
            <img className="w-full h-[200px] object-cover" src={img1} alt="" />
            <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-5 right-5 text-white text-[12px]">
              07h 09m 12s
            </span>
            <p className="text-xl md:text-2xl font-bold">{t("Sun-Glass")}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{t("Current bid")}</p>
                <p>$ 1.75</p>
              </div>
              <Button variant="contained" sx={{ backgroundColor: "black", fontSize: "10px" }}>
                {t("PLACE BID")}
              </Button>
            </div>
          </div>


          <div className="bg-white border w-full sm:w-[48%] md:w-[240px] h-[350px] rounded-4xl p-[15px] relative">
            <img className="w-full h-[200px] object-cover" src={img2} alt="" />
            <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-5 right-5 text-white text-[12px]">
              07h 09m 12s
            </span>
            <p className="text-xl md:text-2xl font-bold">{t("Sun-Glass")}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{t("Current bid")}</p>
                <p>$ 1.75</p>
              </div>
              <Button variant="contained" sx={{ backgroundColor: "black", fontSize: "10px" }}>
                {t("PLACE BID")}
              </Button>
            </div>
          </div>
          <div className="bg-white border w-full sm:w-[48%] md:w-[240px] h-[350px] rounded-4xl p-[15px] relative">
            <img className="w-full h-[200px] object-cover" src={img3} alt="" />
            <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-5 right-5 text-white text-[12px]">
              07h 09m 12s
            </span>
            <p className="text-xl md:text-2xl font-bold">{t("Sun-Glass")}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{t("Current bid")}</p>
                <p>$ 1.75</p>
              </div>
              <Button variant="contained" sx={{ backgroundColor: "black", fontSize: "10px" }}>
                {t("PLACE BID")}
              </Button>
            </div>
          </div>
          <div className="bg-white border w-full sm:w-[48%] md:w-[240px] h-[350px] rounded-4xl p-[15px] relative">
            <img className="w-full h-[200px] object-cover" src={img4} alt="" />
            <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-5 right-5 text-white text-[12px]">
              07h 09m 12s
            </span>
            <p className="text-xl md:text-2xl font-bold">{t("Sun-Glass")}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{t("Current bid")}</p>
                <p>$ 1.75</p>
              </div>
              <Button variant="contained" sx={{ backgroundColor: "black", fontSize: "10px" }}>
                {t("PLACE BID")}
              </Button>
            </div>
          </div>
          <div className="bg-white border w-full sm:w-[48%] md:w-[240px] h-[350px] rounded-4xl p-[15px] relative">
            <img className="w-full h-[200px] object-cover" src={img5} alt="" />
            <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-5 right-5 text-white text-[12px]">
              07h 09m 12s
            </span>
            <p className="text-xl md:text-2xl font-bold">{t("Sun-Glass")}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{t("Current bid")}</p>
                <p>$ 1.75</p>
              </div>
              <Button variant="contained" sx={{ backgroundColor: "black", fontSize: "10px" }}>
                {t("PLACE BID")}
              </Button>
            </div>
          </div>
          <div className="bg-white border w-full sm:w-[48%] md:w-[240px] h-[350px] rounded-4xl p-[15px] relative">
            <img className="w-full h-[200px] object-cover" src={img1} alt="" />
            <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-5 right-5 text-white text-[12px]">
              07h 09m 12s
            </span>
            <p className="text-xl md:text-2xl font-bold">{t("Sun-Glass")}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm">{t("Current bid")}</p>
                <p>$ 1.75</p>
              </div>
              <Button variant="contained" sx={{ backgroundColor: "black", fontSize: "10px" }}>
                {t("PLACE BID")}
              </Button>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Profile;