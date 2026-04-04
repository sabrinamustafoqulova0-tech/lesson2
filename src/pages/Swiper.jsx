import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../images/Mask Group (1).png";
import img2 from "../images/Mask Group (3).png";
import img3 from "../images/Mask Group (4).png";
import img4 from "../images/Mask Group (5).png";
import img5 from "../images/Mask Group (2).png";

import { Pagination } from "swiper/modules";

import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
const Swiperr = () => {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  return (
    <>
      <div className="bg-[#F1F1F1] py-[80px]">
        <p className="text-[#C5C5C5] text-[45px] font-bold text-center">
          {t("Weekly - Top NFT")}
        </p>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4.5}
          spaceBetween={30}
          breakpoints={{
            360: { slidesPerView: 1.5 }, 
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 4.5 }
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="mb-[150px] mt-[50px]">
            <div className="bg-white rounded-4xl p-[15px] relative">
              <img className="w-[100%] rounded-4xl h-[320px]" src={img1} alt="" />
              <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-7 right-7 text-white">
                07h 09m 12s
              </span>
              <p className="text-2xl font-bold">{t("Sun-Glass")}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#94A3B8]">{t("Current bid")}</p>
                  <p>$ 1.75</p>
                </div>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  {t("PLACE BID")}
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-[150px] mt-[50px]">
            <div className="bg-white rounded-4xl p-[15px] relative">
              <img className="w-[100%] h-[320px]" src={img2} alt="" />
              <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-7 right-7 text-white">
                07h 09m 12s
              </span>
              <p className="text-2xl font-bold">{t("Sun-Glass")}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#94A3B8]">{t("Current bid")}</p>
                  <p>$ 1.75</p>
                </div>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  {t("PLACE BID")}
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-[150px] mt-[50px]">
            <div className="bg-white rounded-4xl p-[15px] relative">
              <img className="w-[100%] h-[320px]" src={img3} alt="" />
              <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-7 right-7 text-white">
                07h 09m 12s
              </span>
              <p className="text-2xl font-bold">{t("Sun-Glass")}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#94A3B8]">{t("Current bid")}</p>
                  <p>$ 1.75</p>
                </div>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  {t("PLACE BID")}
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-[150px] mt-[50px]">
            <div className="bg-white rounded-4xl p-[15px] relative">
              <img className="w-[100%] h-[320px]" src={img4} alt="" />
              <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-7 right-7 text-white">
                07h 09m 12s
              </span>
              <p className="text-2xl font-bold">{t("Sun-Glass")}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#94A3B8]">{t("Current bid")}</p>
                  <p>$ 1.75</p>
                </div>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  {t("PLACE BID")}
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-[150px] mt-[50px]">
            <div className="bg-white rounded-4xl p-[15px] relative">
              <img className="w-[100%] h-[320px]" src={img5} alt="" />
              <span className="bg-[#1C1D2059] p-[7px] rounded-[10px] absolute top-7 right-7 text-white">
                07h 09m 12s
              </span>
              <p className="text-2xl font-bold">{t("Sun-Glass")}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#94A3B8]">{t("Current bid")}</p>
                  <p>$ 1.75</p>
                </div>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  {t("PLACE BID")}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="bg-white shadow-[0px_14px_6px_0px] shadow-gray-400  p-[30px] rounded-2xl flex w-[250px] m-auto justify-between items-center">
          <Button onClick={handlePrev} sx={{ color: "black" }}>
            <ArrowBackIcon />
          </Button>
          <p className="text-4xl text-[#E6E8EC]">|</p>
          <Button onClick={handleNext} sx={{ color: "black" }}>
            <ArrowForwardIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Swiperr;
