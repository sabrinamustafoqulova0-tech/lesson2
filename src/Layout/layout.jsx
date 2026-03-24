import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router";
import logo from "../images/Logo2.png";
import adres from "../images/Sub Container (1).png";
import pismo from "../images/Icon (3).png";
import telefon from "../images/Icon (4).png";
import locazia from "../images/Icon (5).png";
const Layout = () => {
  return (
    <>
      <nav className="flex items-center p-[10px] gap-4 md:px-[100px] justify-between py-[20px] bg-black text-white">
        <img className="hidden md:inline" src={logo} alt="" />

        <div className="flex items-center md:gap-[60px] gap-[3px] relative z-20 md:text-[18px] text-[12px]">
          <Link to={"/"}>Home</Link>
          <Link to={"/servic"}>Services</Link>
          <Link to={"/career"}>Careers</Link>
          <Link to={"/careerdatails"}>Career Details</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <Button sx={{ fontSize: "8px" }} variant="contained">
          Contact Us
        </Button>
      </nav>
      <div>
        <Outlet />
      </div>
      <div className="border-t-4 border-t-[#858585] md:px-[100px] md:py-[20px] p-[10px] bg-black text-white">
        <div className="flex items-center justify-between md:gap-[60px] gap-[3px] text-[12px]">
          <img className="hidden md:block" src={logo} alt="" />

          <div className="flex md:gap-[60px] md:text-[18px] gap-[5px]">
            <p>Home</p>
            <p>Services</p>
            <p>Careers</p>
            <p>Career Details</p>
            <p>Contact</p>
          </div>

          <img className="md:w-[300px] w-[80px]" src={adres} alt="" />
        </div>
        <div className="flex justify-between md:flex-row flex-col my-[40px]">
          <div className="flex md:flex-row flex-col items-center gap-6">
            <div className="flex gap-2">
              <img src={pismo} alt="" />
              <p>contact@catalystanalytics.io</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={telefon} alt="" />
              <p>+1 (469) 712-4672</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={locazia} alt="" />
              <p>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
            </div>
          </div>
          <div className="flex gap-8 text-gray-400">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <p className="text-center text-gray-400 ">
          © 2025 Catalyst Analytics. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Layout;
