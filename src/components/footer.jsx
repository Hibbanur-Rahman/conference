import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex w-full items-center justify-center bg-tertiary py-10">
      <div className="w-11/12 flex md:flex-row flex-col   justify-center">
        <div className="md:w-4/12 w-full md:px-5">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.246725744552!2d78.3593024898176!3d17.4298535201107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5ada6d80f%3A0x6d6400aee08b61a1!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1722459969858!5m2!1sen!2sin"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:w-4/12 w-full md:px-5 md:mt-0 mt-5">
          <h2 className="font-semibold text-xl text-white">Useful Links</h2>
          <Link to="/#" className=" flex items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-white me-3"></div>
            <p className="text-white mt-3 mb-3">Home</p>
          </Link>
          <Link to="/#" className=" flex items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-white me-3"></div>

            <p className="text-white mt-3 mb-3">committees</p>
          </Link>
          <Link to="/#" className=" flex items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-white me-3"></div>

            <p className="text-white mt-3 mb-3">Schedule</p>
          </Link>
          <Link to="/#" className=" flex items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-white me-3"></div>

            <p className="text-white mt-3 mb-3">Speakers</p>
          </Link>
        </div>
        <div className="md:w-4/12 w-full md:mt-0 mt-5">
          <h2 className="font-semibold text-xl text-white">Contact Us</h2>
          <p className="text-white mt-3 mb-3">
            Email:{" "}
            <a
              href="
          "
              className="text-white"
            >
              info@manuu.edu.in
            </a>
          </p>
          <p className="text-white mt-3 mb-3">
            Phone:{" "}
            <a
              href="
          "
              className="text-white"
            >
              +92 21 9921 1000
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
