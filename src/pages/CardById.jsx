import React, { useReducer } from "react";
import { Link, useParams } from "react-router";
import img1 from "../images/Mask Group (1).png";
import img2 from "../images/Mask Group (3).png";
import img3 from "../images/Mask Group (4).png";
import img4 from "../images/Mask Group (5).png";
import img5 from "../images/Mask Group (2).png";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import logo from "../images/Logo (3).png";
import logofooter from "../images/Logo (4).png";
import indtag from "../images/Group 888.png";
import int from "../images/Path 7.png";
import facebook from "../images/Path 13.png";
import par from "../images/Path 6.png";
import Ellipse from "../images/Ellipse 28 (1).png";

const initialState = {
  data: [
    {
      id: 1,
      name: "Sun-Glass",
      status: false,
      img: img1,
      price: "$ 1.75",
    },
    {
      id: 2,
      name: "Sun-Glass",
      status: true,
      img: img2,
      price: "$ 1.75",
    },
    {
      id: 3,
      name: "Sun-Glass",
      status: true,
      img: img3,
      price: "$ 1.75",
    },
    {
      id: 4,
      name: "NuEvey",
      status: true,
      img: img4,
      price: "$1.25",
    },
    {
      id: 5,
      name: "Sun-Glass",
      status: true,
      img: img5,
      price: "$1.75",
    },
    {
      id: 6,
      name: "NuEvey",
      status: true,
      img: img1,
      price: "$1.25",
    },
    {
      id: 7,
      name: "Sun-Glass",
      status: true,
      img: img4,
      price: "$1.75",
    },
    {
      id: 8,
      name: "NuEvey",
      status: true,
      img: img3,
      price: "$1.25",
    },
  ],
  open: false,
  openEdit: false,
  setName: "",
  setprice: "",
  setIdx: null,
};

function reducer(state, action) {
  return state;
}

const CardById = () => {
  const { t, i18n } = useTranslation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();
  const card = state.data.find((e) => e.id == id);

  if (!card) return <div>Card not found</div>;

  return (
    <>
      <div className="lg:px-[96px] md:px-[68px] sm:px-[20px] px-[20px] py-[20px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row md:gap-12 gap-5 text-[#999999] items-center">
          <img
            className="lg:block md:block hidden w-[120px] md:w-[100px] sm:w-[80px]"
            src={logo}
            alt=""
          />
          <Link
            className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]"
            to={"/"}
          >
            Discover
          </Link>
          <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">
            Creators
          </p>
          <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">
            Sell
          </p>
          <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]">
            Stats
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <select
            className="border p-[6px] sm:p-[8px] md:p-[10px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="tj">TJ</option>
          </select>
          <Link to={"/profile"}>
            <Button variant="contained" sx={{ backgroundColor: "black" }}>
              Profile
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-[20px] sm:p-[40px] md:p-[60px] lg:p-[80px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Product Detail
        </h1>
        <div className="p-[10px] sm:p-[20px] shadow-2xl rounded-3xl md:rounded-4xl flex flex-col md:flex-row justify-between items-start gap-6">
          <img
            className="w-full sm:w-[300px] md:w-[500px] h-auto md:h-[480px] rounded-3xl md:rounded-4xl"
            src={card.img}
            alt=""
          />
          <div className="w-full md:w-[650px] flex flex-col gap-4">
            <h1>
              <p className="text-[28px] sm:text-[36px] md:text-[51px] font-bold">
                {t("Project ")}
                <span>{card.name}</span>
              </p>
              <p className="text-[14px] sm:text-[16px] md:text-2xl text-[#888888B2]">
                {t("A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.")}
              </p>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 my-6">
              <div className="flex items-center gap-3">
                <img src={Ellipse} alt="" className="w-[30px] sm:w-[40px]" />
                <div>
                  <p className="text-[12px] sm:text-[16px] text-[#888888B2]">
                    Created by
                  </p>
                  <p className="font-bold text-[16px] sm:text-2xl">Perperzon</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={Ellipse} alt="" className="w-[30px] sm:w-[40px]" />
                <div>
                  <p className="text-[12px] sm:text-[16px] text-[#888888B2]">
                    Created by
                  </p>
                  <p className="font-bold text-[16px] sm:text-2xl">Perperzon</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mb-[20px] sm:mb-[40px] gap-4">
              <div>
                <p
                  className={`${card.status ? "text-green-800" : "text-red-800"} text-xl sm:text-2xl`}
                >
                  {card.status ? "Active" : "Inactive"}
                </p>
                <p className="text-xl sm:text-2xl font-bold">{card.price}</p>
              </div>
              <div>
                <p className="text-[14px] sm:text-2xl text-[#888888B2]">
                  End in
                </p>
                <p className="text-xl sm:text-2xl font-bold">
                  Jun 17, 2023 at 05:08
                </p>
              </div>
            </div>

            <Button
              sx={{
                backgroundColor: "black",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
              }}
              variant="contained"
            >
              Place Bid
            </Button>
          </div>
        </div>
      </div>

      <footer className="bg-black px-[20px] sm:px-[40px] md:px-[80px] py-[40px] sm:py-[60px] md:py-[80px] text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-10 border-b border-b-gray-600 text-center md:text-left">
          <img src={logofooter} alt="" />
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-10 text-[#999999]">
            <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">
              {t("Privacy Policy")}
            </p>
            <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">
              {t("Term & Conditions")}
            </p>
            <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">
              {t("About Us")}
            </p>
            <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]">
              {t("Contact")}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 text-center sm:text-left">
          <p className="text-[#999999] text-[12px] sm:text-[14px]">
            {t(" © 2023 EATLY All Rights Reserved.")}
          </p>
          <div className="flex gap-6 sm:gap-10 items-center text-[#999999]">
            <img src={indtag} alt="" />
            <img src={int} alt="" />
            <img src={facebook} alt="" />
            <img src={par} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default CardById;
