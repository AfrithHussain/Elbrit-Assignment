import React from "react";

import Email from "../assets/Email.png";
import Location from "../assets/Location.png";
import Phonecall from "../assets/Phonecall.png";
import Logo from "../assets/Logo.png";
import { SlLocationPin } from "react-icons/sl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Footer() {
  return (
    <div>
      <footer className="bg-[#17414F] text-white pt-10 mt-10">
        {/* ------------MAINFLEX--------------------------- */}

        <div className="flex justify-center items-center flex-wrap gap-5 px-5 sm:gap-10">
          {/* -------------------flex-1------------ */}
          <div className="flex items-center gap-2 bg-[#215D72] rounded-md p-3 sm:p-2 text-white text-sm sm:px-14 sm:py-2">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Phonecall}
              className="w-10 sm:w-14 cursor-pointer"
              alt="Phonecall"
            />
            <div>
              <p>Phone Number</p>
              <p className="font-semibold">+974 3118 1843</p>
            </div>
          </div>

          {/* -------------------flex-2------------ */}
          <div className="flex items-center gap-2 bg-[#215D72] rounded-md p-3 sm:p-2 text-white text-sm sm:px-14 sm:py-2">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Email}
              className="w-10 sm:w-14 cursor-pointer"
              alt="Email"
            />
            <div>
              <p>Email Address</p>
              <p className="font-semibold">Elbrithcqhr@gmail.com</p>
            </div>
          </div>

          {/* -------------------flex-3------------ */}
          <div className="flex items-center gap-2 bg-[#215D72] rounded-md p-3 sm:p-2 text-white text-sm sm:px-14 sm:py-2">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Location}
              className="w-10 sm:w-14"
              alt="Location"
            />
            <div>
              <p>Office Location</p>
              <p className="font-semibold cursor-pointer">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        {/* -------LOGO AND SOME TEXT */}
        <div className="mt-10 px-5">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 flex-wrap justify-center items-center">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Logo}
              className="w-32 sm:w-48 bg-white p-2 cursor-pointer"
              alt="Logo"
            />
            <p className="text-sm leading-6 text-center sm:text-left sm:w-1/3">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>

        {/* -------Address Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 justify-center px-5 text-center sm:text-left">
          <SlLocationPin className="text-xl cursor-pointer"  />
          <p className="text-sm">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
