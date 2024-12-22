import React from "react";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Card4 from "../assets/Card4.png";
import Card5 from "../assets/Card5.png";
import Cart6 from "../assets/Cart6.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function IngredientsCard() {
  return (
    <div>
      {/* --------------------MAIN FLEX -------------------- */}
      <div className="mx-5 md:mx-10 flex justify-center items-center flex-wrap gap-10 xl:-translate-y-48">
        {/* -----------------div-1---------------- */}
        <div className=" w-full max-w-[90%] md:max-w-[500px] p-4 py-5 break-words text-center md:text-left">
          <p className="text-sm text-[#003569] font-semibold">INGREDIENTS</p>
          <h1 className="text-3xl text-[#17414f] mt-3 font-semibold">
            Better Ingredients
          </h1>
          <p className="text-sm text-neutral-600 mt-6">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high-quality products!
          </p>
        </div>

        {/* -----------------div-2---------------- */}
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "0.1s" } }}
            src={Card1}
            className="w-80 h-44 rounded-2xl object-cover"
            alt=""
          />
          <p className="text-[#2D3F59] text-xl font-semibold absolute top-5 left-5">
            Vitamin C
          </p>
          <p className="text-neutral-600 text-sm font-[500] absolute top-14 left-5 w-40">
            Vitamin C as ascorbic acid
          </p>
          <p className="underline-offset-4 text-[#003569] font-[500] text-xs absolute bottom-3 left-5 underline">
            SEE MORE
          </p>
        </div>

        {/* -----------------div-3---------------- */}
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "0.1s" } }}
            src={Card2}
            className="w-80 h-44 rounded-2xl object-cover"
            alt=""
          />
          <p className="text-[#2D3F59] text-xl font-semibold absolute top-5 left-5">
            Vitamin B3
          </p>
          <p className="text-neutral-600 text-sm font-[500] absolute top-14 left-5 w-40">
            Niacin for healthy gut and skin
          </p>
          <p className="underline-offset-4 text-[#003569] font-[500] text-xs absolute bottom-3 left-5 underline">
            SEE MORE
          </p>
        </div>

        {/* -----------------div-4---------------- */}
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "0.1s" } }}
            src={Card3}
            className="w-80 h-44 rounded-2xl object-cover"
            alt=""
          />
          <p className="text-[#2D3F59] text-xl font-semibold absolute top-5 left-5">
            Magnesium
          </p>
          <p className="text-neutral-600 text-sm font-[500] absolute top-14 left-5 w-40">
            Boost energy and support muscle function
          </p>
          <p className="underline-offset-4 text-[#003569] font-[500] text-xs absolute bottom-3 left-5 underline">
            SEE MORE
          </p>
        </div>

        {/* -----------------div-5---------------- */}
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "0.1s" } }}
            src={Card4}
            className="w-80 h-44 rounded-2xl object-cover"
            alt=""
          />
          <p className="text-[#2D3F59] text-xl font-semibold absolute top-5 left-5">
            Hyaluronic Acid
          </p>
          <p className="text-neutral-600 text-sm font-[500] absolute top-14 left-5 w-40">
            For smooth, supple and soft skin!
          </p>
          <p className="underline-offset-4 text-[#003569] font-[500] text-xs absolute bottom-3 left-5 underline">
            SEE MORE
          </p>
        </div>

        {/* -----------------div-6---------------- */}
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "0.1s" } }}
            src={Card5}
            className="w-80 h-44 rounded-2xl object-cover"
            alt=""
          />
          <p className="text-[#2D3F59] text-xl font-semibold absolute top-5 left-5">
            Lactobacillus
          </p>
          <p className="text-neutral-600 text-sm font-[500] absolute top-14 left-5 w-40">
            Invigorate your gut microbiome
          </p>
          <p className="underline-offset-4 text-[#003569] font-[500] text-xs absolute bottom-3 left-5 underline">
            SEE MORE
          </p>
        </div>

        {/* -----------------div-7---------------- */}
        <div className="relative">
          <LazyLoadImage
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "0.1s" } }}
            src={Cart6}
            className="w-20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default IngredientsCard;
