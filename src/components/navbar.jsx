import React from "react";
import { Link } from "react-router-dom";
import NaacLogo from "../assets/images/naac_logo.png";
import nirfLogo from "../assets/images/nirf_logo.png";
import ManuuLogo from "../assets/images/manuu_logo.png";
const Navbar = () => {
  return (
    <div className="Navbar flex flex-col m-0 p-0 w-full items-center justify-center">
      <div className="header-wrapper flex flex-col w-11/12 m-0 p-0">
        <div className="header flex w-full m-0 p-0 items-center justify-between">
          <img src={NaacLogo} alt="" className="h-[90px] w-[120px]" />
          <img src={ManuuLogo} alt="" className="h-[90px] w-[320px]" />
          <img src={nirfLogo} alt="" className="h-[70px] w-[100px]" />
        </div>
      </div>
      <div className="navbar-wrapper flex flex-col w-full m-0 p-0 items-center justify-center bg-tertiary mt-5">
        <div className="navbar-content w-11/12  flex flex-row ">
          <div className="nav-item flex items-center justify-center ">
            <Link className="bg-slate-500 p-3 px-4 text-white">Home</Link>
          </div>
          <div className="nav-item flex items-center justify-center ">
            <Link className="p-3 px-4 text-white">Important Dates</Link>
          </div>
          <div className="nav-item flex items-center justify-center ">
            <Link className="p-3 px-4 text-white">Call for Papers</Link>
          </div>
          <div className="nav-item flex items-center justify-center ">
            <Link className="p-3 px-4 text-white">Committees</Link>
          </div>
          <div className="nav-item flex items-center justify-center ">
            <Link className="p-3 px-4 text-white">Author Info</Link>
          </div>
          <div className="nav-item flex items-center justify-center ">
            <Link className="p-3 px-4 text-white">Schedule</Link>
          </div>
          <div className="nav-item flex items-center justify-center ">
            <Link className="p-3 px-4 text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
