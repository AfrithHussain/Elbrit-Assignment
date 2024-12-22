import React from 'react'
import Probiotic from '../assets/Probiotic.png'
import Pill from '../assets/Pill.png'
import Weightscale from '../assets/Weightscale.png'
import Powder from '../assets/Powder.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function BlueContainer() {
  return (
    <div>
      <div className="blue-color h-[1000px]  md:h-[800px] mt-5 w-[95%] mx-auto">
               <div className="">
               <h1 className='text-4xl md:text-6xl lg:text-7xl  xl:text-8xl text-center font-bold darksky translate-y-12 '>Essential Vitamins</h1>
               </div>


               {/* ------MAIN FLEX-------- */}
               <div className="flex justify-evenly items-center mt-20 lg:mt-14  flex-wrap gap-y-20 gap-x-10 ">
                  {/* -----FLEX-1----- */}
                  <div className="flex flex-col gap-2 lg:translate-y-4">
                      <p className='text-neutral-500 text-lg'>Online Medical Supplies</p>
                      <p className='text-[#17414F] text-2xl font-semibold'>Get Your Vitamins <br />
                      & Minerals</p>
                      <button className='bg-[#17414F] text-white text-sm p-2 px-7 rounded-full mt-3'>EXPLORE</button>
                  </div>
                  


                  {/* -----FLEX-2----- */}
                  <div className="bg-[#FFE9B5] w-60 h-60 radius">
                       <LazyLoadImage wrapperProps={{ style: {transitionDelay: "0.1s"}}} effect='blur' src={Probiotic} className='-translate-y-10 ' alt="" />
                     
                  </div>


                  {/* -----FLEX-3----- */}
                  <div className="lg:translate-y-10">
                      <div className="flex items-center gap-4   ">
                          <LazyLoadImage wrapperProps={{ style: {transitionDelay: "0.1s"}}} effect='blur' src={Pill} className='w-14' alt="" />
                          <div className="">
                          <p className='text-[#17414F] text-2xl font-semibold gap-4'>Vitamins</p>
                          <p className='text-neutral-600 text-sm'>Increased Vitamins and <br />
                          minerals in your diet</p>
                          </div>
                      </div>

                      <div className="flex  items-center mt-5 gap-4">
                          <LazyLoadImage wrapperProps={{ style: {transitionDelay: "0.1s"}}} effect='blur' className='w-14' src={Weightscale} alt="" />
                         <div className="">
                         <p className='text-[#17414F] text-2xl font-semibold '>Weight Loss</p>
                          <p className='text-neutral-600 text-sm'> Weight Loss  <br />
                          Find scientifically proven solutions</p>
                         </div>
                      </div>

                      <div className="flex items-center mt-5 gap-4">
                          <LazyLoadImage wrapperProps={{ style: {transitionDelay: "0.1s"}}} effect='blur'  className='w-14' src={Powder} alt="" />
                          <div className="">
                          <p className='text-[#17414F] text-2xl font-semibold  '>Fuctional Foods</p>
                          <p className='text-neutral-600 text-sm'>Functional Foods <br />
                          From protein powers to baby formula</p>
                          </div>
                      </div>
                  </div>
               </div>
         
      </div>
    </div>
  )
}

export default BlueContainer