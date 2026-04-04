import React, { Component } from "react";
import { Link, Outlet } from "react-router";
import i18n from "../i18n";
import { Button } from "@mui/material";
import logo from "../images/Logo (3).png";
import logofooter from "../images//Logo (4).png";
import indtag from "../images/Group 888.png";
import int from "../images/Path 7.png";
import facebook from "../images/Path 13.png";
import par from "../images/Path 6.png";

class Layout extends Component {
  render() {
    return (
      <>
        <div className="lg:px-[96px] md:px-[68px] px-[20px] p-[20px] items-center flex justify-between">
          <div className="flex md:gap-12 gap-5 text-[#999999] items-center">
            <img className="lg:block md:block hidden" src={logo} alt="" />
            <Link
              className="lg:text-[16px] md:text-[14px] text-[10px]"
              to={"/"}
            >
              Discover
            </Link>
            <p className="lg:text-[16px] md:text-[14px] text-[10px]">
              Creators
            </p>
            <p className="lg:text-[16px] md:text-[14px] text-[10px]">Sell</p>
            <p className="lg:text-[16px] md:text-[14px] text-[10px]">Stats</p>
          </div>
          <div className="flex items-center items-center gap-4">
            <select
              className="border md:p-[10px] lg:text-[16px] md:text-[14px] text-[10px]"
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option
                className="lg:text-[16px] md:text-[14px] text-[10px]"
                value="ru"
              >
                RU
              </option>
              <option
                className="lg:text-[16px] md:text-[14px] text-[10px]"
                value="en"
              >
                EN
              </option>
              <option
                className="lg:text-[16px] md:text-[14px] text-[10px]"
                value="tj"
              >
                TJ
              </option>
            </select>
            <Link to={"/profile"}>
              <Button variant="contained" sx={{ backgroundColor: "black" }}>
                Profile
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
        <footer className="bg-black px-[20px] md:px-[40px] lg:px-[80px] py-[40px] md:py-[60px] lg:py-[80px] text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-10 border-b border-b-gray-600 text-center md:text-left">
            <img src={logofooter} alt="" />

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 text-[#999999]">
              <p className="lg:text-[16px] md:text-[14px] text-[12px]">
                Privacy Policy
              </p>
              <p className="lg:text-[16px] md:text-[14px] text-[12px]">
                Term & Conditions
              </p>
              <p className="lg:text-[16px] md:text-[14px] text-[12px]">
                About Us
              </p>
              <p className="lg:text-[16px] md:text-[14px] text-[12px]">
                Contact
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 text-center md:text-left">
            <p className="text-[#999999] text-[12px] md:text-[14px]">
              © 2023 EATLY All Rights Reserved.
            </p>

            <div className="flex gap-6 md:gap-10 items-center text-[#999999]">
              <img src={indtag} alt="" />
              <img src={int} alt="" />
              <img src={facebook} alt="" />
              <img src={par} alt="" />
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Layout;
