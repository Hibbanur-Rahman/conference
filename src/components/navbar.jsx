import React from "react";
import { Link } from "react-router-dom";
import NaacLogo from "../assets/images/naac_logo.png";
import NirfLogo from "../assets/images/nirf_logo.png";
import ManuuLogo from "../assets/images/manuu_logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="w-11/12 flex items-center justify-between py-4">
        <img src={NaacLogo} alt="NAAC Logo" className="h-20 w-28" />
        <img src={ManuuLogo} alt="MANUU Logo" className="h-20 w-80" />
        <img src={NirfLogo} alt="NIRF Logo" className="h-16 w-24" />
      </div>

      {/* Navbar Section */}
      <div className="w-full bg-tertiary flex justify-center mt-5">
        <div className="w-11/12 flex">
          <NavItem title="Home" to="/" />
          <NavDropdown title="About">
            <DropdownItem to="/about-manuu">About MANUU</DropdownItem>
            <DropdownItem to="/about-csit">About CS & IT</DropdownItem>
            <DropdownItem to="/about-conference">About Conference</DropdownItem>
          </NavDropdown>
          <NavDropdown title="Papers">
            <DropdownItem to="/call-for-papers">Call for Papers</DropdownItem>
            <DropdownItem to="/paper-submission">
              Paper Submissions
            </DropdownItem>
            <DropdownItem to="/special-sessions">
              Call for Special Sessions
            </DropdownItem>
          </NavDropdown>
          <NavItem title="Special Sessions" to="/special-sessions" />
          <NavItem title="Sponsorships" to="/sponsorships" />
          <NavDropdown title="Committees">
            <DropdownItem to="/steering-committee">
              Steering Committee
            </DropdownItem>
            <DropdownItem to="/technical-program-committee">
              Technical Program Committee
            </DropdownItem>
            <DropdownItem to="/advisory-committee">
              Advisory Committee
            </DropdownItem>
          </NavDropdown>
          <NavItem title="Author Info" to="/author-info" />
          <NavItem title="Schedule" to="/schedule" />
          <NavItem title="Contact Us" to="/contact-us" />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ title, to }) => (
  <div className="nav-item flex items-center justify-center">
    <Link to={to} className="p-3 px-4 text-white hover:bg-slate-500">
      {title}
    </Link>
  </div>
);

const NavDropdown = ({ title, children }) => (
  <div className="nav-item flex items-center justify-center relative group">
    <Link
      to="#"
      className="p-3 px-4 text-white hover:bg-slate-500 flex items-center"
    >
      {title} <i className="bi bi-chevron-down ml-2"></i>
    </Link>
    <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-slate-500 z-10">
      {children}
    </div>
  </div>
);

const DropdownItem = ({ to, children }) => (
  <Link
    to={to}
    className="p-3 px-4 text-white hover:bg-black whitespace-nowrap"
  >
    {children}
  </Link>
);

export default Navbar;
