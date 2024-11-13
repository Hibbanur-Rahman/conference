import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NaacLogo from "../assets/images/naac_logo.png";
import ManuuLogo from "../assets/images/manuu_logo.png";
import nirfLogo from "../assets/images/nirf_logo.png";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Navbar flex flex-col w-full items-center justify-center relative">
      {/* Header section */}
      <div className="header-wrapper flex flex-col w-11/12 m-0 p-0">
        <div className="header flex w-full m-0 p-0 items-center justify-between">
          <img src={NaacLogo} alt="NAAC Logo" className="h-[90px] w-[120px]" />
          <img
            src={ManuuLogo}
            alt="MANUU Logo"
            className="h-[90px] w-[320px]"
          />
          <img src={nirfLogo} alt="NIRF Logo" className="h-[70px] w-[100px]" />
        </div>
      </div>

      {/* Navbar section */}
      <div
        className={`navbar-wrapper flex flex-col w-full items-center justify-center bg-tertiary  ${
          isSticky ? "fixed top-0 z-50 shadow-lg" : "mt-5"
        }`}
      >
        <div className="navbar-content w-11/12 flex-row bg-tertiary md:flex hidden">
          <div className="nav-item flex items-center justify-center">
            <Link to="/" className="p-3 px-4 text-white hover:bg-slate-500">
              Home
            </Link>
          </div>
          <div className="nav-item flex items-center justify-center relative">
            <Link className="p-3 px-4 text-white hover:bg-slate-500">
              About <i className="bi bi-chevron-down"></i>
            </Link>
            <div className="w-max absolute sub-item flex-col bg-slate-500 top-[46px]">
              <Link
                to="/about-manuu"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                About Manuu
              </Link>
              <Link
                to="/about-csit"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                About CS & IT
              </Link>
              <Link
                to="/conference"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                About Conference
              </Link>
            </div>
          </div>
          <div className="nav-item flex items-center justify-center relative">
            <Link className="p-3 px-4 text-white hover:bg-slate-500">
              Papers <i className="bi bi-chevron-down"></i>
            </Link>
            <div className="w-max absolute sub-item flex-col bg-slate-500 top-[46px]">
              <Link
                to="/call-for-papers"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                Call for Papers
              </Link>
              <Link
                to="/paper-submission"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                Paper Submissions
              </Link>
              <Link
                to="/special-sessions"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                Call for Special Sessions
              </Link>
            </div>
          </div>
          <div className="nav-item flex items-center justify-center">
            <Link
              to="/special-sessions"
              className="p-3 px-4 text-white hover:bg-slate-500"
            >
              Special Sessions
            </Link>
          </div>
          <div className="nav-item flex items-center justify-center">
            <Link
              to="/sponsor"
              className="p-3 px-4 text-white hover:bg-slate-500"
            >
              Sponsorships
            </Link>
          </div>
          <div className="nav-item flex items-center justify-center relative">
            <Link className="p-3 px-4 text-white hover:bg-slate-500">
              Committees <i className="bi bi-chevron-down"></i>
            </Link>
            <div className="w-max absolute sub-item flex-col bg-slate-500 top-[46px]">
              <Link
                to="/steering-committee"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                Steering Committee
              </Link>
              <Link
                to="/technical-program-committee"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                Technical Program Committee
              </Link>
              <Link
                to="/advisory-committee"
                className="p-3 px-4 text-white w-full hover:bg-[black]"
              >
                Advisory Committee
              </Link>
            </div>
          </div>
          <div className="nav-item flex items-center justify-center">
            <Link
              to="/author-info"
              className="p-3 px-4 text-white hover:bg-slate-500"
            >
              Author Info
            </Link>
          </div>
          <div className="nav-item flex items-center justify-center">
            <Link
              to="/schedule"
              className="p-3 px-4 text-white hover:bg-slate-500"
            >
              Schedule
            </Link>
          </div>
          <div className="nav-item flex items-center justify-center">
            <Link
              to="/contact-us"
              className="p-3 px-4 text-white hover:bg-slate-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/**Navbar Section mobile view */}
        <div className="w-full flex justify-between items-center md:hidden">
          <div className="nav-item flex items-center justify-center">
            <Link to="/" className="p-3 px-4 text-white hover:bg-slate-500">
              Home
            </Link>
          </div>
          <i
            className="bi bi-list text-3xl text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          ></i>
        </div>
      </div>
      {/* Sidebar section mobile view */}
      {isSidebarOpen && (
        <div className="sidebar w-10/12 flex flex-col  left-0 z-[100] min-h-[100vh] top-0 bg-tertiary fixed">
          <div className="header-nav w-full flex justify-between">
              <img src={ManuuLogo} alt="" className="w-auto h-[150px]" />
              <div className="">
                <i className="bi bi-x text-white text-4xl cursor-pointer"></i>
              </div>
          </div>
          <div className="nav-item flex items-center justify-center">
            <Link to="/" className="p-3 px-4 text-white hover:bg-slate-500 text-4xl">
              Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
