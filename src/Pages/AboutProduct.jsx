import React from "react";
import Chemical from "../assets/Chemical.png";
import Leaves from "../assets/Leaves.png";
import Package from "../assets/Package.png";
import Plus from "../assets/Plus.png";
import Shopping from "../assets/Shopping.png";
import Moreleaves from "../assets/Moreleaves.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function AboutProduct() {
  return (
    <div>
      <div className="bg-[#17414F] py-10 md:py-16 lg:py-20 rounded-[50px] text-white w-[90%] xl:w-[60%] mx-auto -translate-y-10 md:-translate-y-40 xl:-translate-y-80">
        {/* ------------MAIN FLEX ---------------- */}
        <div className="flex justify-center items-center flex-wrap gap-10">
          {/* -------Flex-1--------------- */}
          <div className="flex flex-col items-center justify-center gap-2 xl:-translate-y-10">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              wrap
              src={Chemical}
              className="w-16 object-cover rounded-full h-16 p-3 bg-white"
              alt=""
            />
            <p className="text-xl font-[500]">Clinically Studied</p>
            <p className="text-center text-xs text-neutral-300 w-52">
              All products that we offer have undergone lab and safety tests
            </p>
          </div>

          {/* -------Flex-2--------------- */}
          <div className="flex flex-col items-center justify-center gap-2 xl:-translate-y-10">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              wrap
              src={Leaves}
              className="w-16 object-cover rounded-full h-16 p-3 bg-white"
              alt=""
            />
            <p className="text-xl font-[500]">Vegetarian Friendly</p>
            <p className="text-center text-xs text-neutral-300 w-52">
              We have a wide selection of vegetarian products to meet your needs
            </p>
          </div>

          {/* -------Flex-3--------------- */}
          <div className="flex flex-col items-center justify-center gap-2 xl:-translate-y-10">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              wrap
              src={Plus}
              className="w-16 object-cover rounded-full h-16 p-3 bg-white"
              alt=""
            />
            <p className="text-xl font-[500]">Made in India</p>
            <p className="text-center text-xs text-neutral-300 w-52">
              Shop local and explore health products made right here in India
            </p>
          </div>

          {/* -------Flex-4--------------- */}
          <div className="flex flex-col items-center justify-center gap-2">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              wrap
              src={Shopping}
              className="w-16 object-cover rounded-full h-16 p-3 bg-white"
              alt=""
            />
            <p className="text-xl font-[500]">Free shipping</p>
            <p className="text-center text-xs text-neutral-300 w-52">
              We deliver to your door with no shipping costs on your orders
            </p>
          </div>

          {/* -------Flex-5--------------- */}
          <div className="flex flex-col items-center justify-center gap-2">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              wrap
              src={Package}
              className="w-16 object-cover rounded-full h-16 p-3 bg-white"
              alt=""
            />
            <p className="text-xl font-[500]">No Risk</p>
            <p className="text-center text-xs text-neutral-300 w-52">
              We ensure that all products are safe and within their use-by date
            </p>
          </div>

          {/* -------Flex-6--------------- */}
          <div className="flex flex-col items-center justify-center gap-2">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              wrap
              src={Moreleaves}
              className="w-16 object-cover rounded-full h-16 p-3 bg-white"
              alt=""
            />
            <p className="text-xl font-[500]">GMO free</p>
            <p className="text-center text-xs text-neutral-300 w-52">
              Natural, no modified products and derivatives for those who need
              it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
