import React from "react";

import Tablet1 from "../assets/Tablet1.jpeg";
import Tablet2 from "../assets/Tablet2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LatestNewsCard() {
  return (
    <div className="xl:-translate-y-32">
      <div className="text-center ">
        <p className="text-xs text-[#003569] font-bold">OUR BLOG</p>

        <p className="text-4xl text-[#17414F] font-semibold mt-5">
          Latest news
        </p>
      </div>

      {/* --------------MAIN FLEX --------------- */}
      <div className="flex justify-center items-center flex-wrap gap-10 mt-14">
        {/* -----------------div-1---------------- */}

        <div className="flex flex-col gap-4">
          <div className="text-white relative">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Tablet2}
              className=" w-72 rounded-lg cursor-pointer"
              alt=""
            />
            <p className="text-xs bg-[#003569] px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
              20 APR
            </p>

            <p className="text-xs font-semibold absolute top-12 mx-2">
              The Covid-19 Epidemic In 2022 <br />
              back
            </p>
          </div>

          <div className="text-white relative">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Tablet1}
              className=" w-72 cursor-pointer h-32 object-cover  rounded-lg"
              alt=""
            />
            <p className="text-xs bg-[#003569] px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
              20 APR
            </p>

            <p className="text-xs font-semibold absolute top-12 mx-2">
              The Covid-19 Epidemic In 2023 <br />
              back
            </p>
          </div>
        </div>

        {/* -----------------div-2---------------- */}

        <div className="flex  flex-col-reverse gap-4">
          <div className="text-white relative">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Tablet1}
              className=" w-72 rounded-lg cursor-pointer "
              alt=""
            />
            <p className="text-xs bg-[#003569]  px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
              20 APR
            </p>

            <p className="text-xs font-semibold absolute top-12 mx-2">
              The Covid-19 Epidemic In 2023 <br />
              back
            </p>
          </div>

          <div className="text-white relative ">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Tablet2}
              className=" w-72  h-32 cursor-pointer object-cover object-top  rounded-lg"
              alt=""
            />
            <p className="text-xs bg-[#003569] px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
              20 APR
            </p>

            <p className="text-xs font-semibold absolute top-12 mx-2">
              The Covid-19 Epidemic In 2022 <br />
              back
            </p>
          </div>
        </div>

        {/* -----------------div-3---------------- */}

        <div className="flex flex-col gap-4">
          <div className="text-white relative">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Tablet2}
              className=" w-72 rounded-lg cursor-pointer"
              alt=""
            />
            <p className="text-xs bg-[#003569]  px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
              20 APR
            </p>

            <p className="text-xs font-semibold absolute top-12 mx-2">
              The Covid-19 Epidemic In 2022 <br />
              back
            </p>
          </div>

          <div className="text-white relative">
            <LazyLoadImage
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "0.1s" } }}
              src={Tablet1}
              className=" w-72 h-32 object-cover  rounded-lg cursor-pointer"
              alt=""
            />
            <p className="text-xs bg-[#003569] px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
              20 APR
            </p>

            <p className="text-xs font-semibold absolute top-12 mx-2">
              The Covid-19 Epidemic In 2023 <br />
              back
            </p>
          </div>
        </div>

        {/* -----------------div-4---------------- */}

        <div className="">
          <div className="flex  flex-col-reverse gap-4">
            <div className="text-white relative">
              <LazyLoadImage
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "0.1s" } }}
                src={Tablet1}
                className=" w-72 rounded-lg cursor-pointer"
                alt=""
              />
              <p className="text-xs bg-[#003569] px-3 py-1 rounded-r-full w-fit absolute top-3 left-0 ">
                20 APR
              </p>

              <p className="text-xs font-semibold absolute top-12 mx-2">
                The Covid-19 Epidemic In 2023 <br />
                back
              </p>
            </div>

            <div className="text-white relative">
              <LazyLoadImage
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "0.1s" } }}
                src={Tablet2}
                className=" w-72 h-32 object-cover  rounded-lg object-top cursor-pointer"
                alt=""
              />
              <p className="text-xs bg-[#003569] px-3 py-1 rounded-r-full w-fit absolute top-3 left-0">
                20 APR
              </p>

              <p className="text-xs font-semibold absolute top-12 mx-2 ">
                The Covid-19 Epidemic In 2022 <br />
                back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsCard;
