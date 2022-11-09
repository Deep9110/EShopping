import React from 'react'
import Image from '../../../image/hero-image.webp'


// const sectionStyle = {
//     width: "100%",
//     height: "100vh",
//     backgroundImage: `url(${HeroImage})`
//   };
const Hero = () => {

   
  return (
    <div>
        <div className="relative flex w-full h-screen">
      {/* <!-- left side --> */}
        <div className="absolute h-screen flex flex-col justify-center items-start bg-[#232323] sm:p-4 sm:invisible sm:hidden sm:w-full md:p-8 lg:p-12 lg:visible lg:flex lg:w-[28%] ">
            <h1 className="text-[40px] text-white font-bold">Raw Ham Colorblock T-shirt</h1>
            <span className="flex items-center gap-2 py-4">
                <i className="text-lg text-yellow-500 fa-solid fa-star"></i>
                <i className="text-lg text-yellow-500 fa-solid fa-star"></i>
                <i className="text-lg text-yellow-500 fa-solid fa-star"></i>
                <i className="text-lg text-yellow-500 fa-solid fa-star"></i>
                <i className="text-lg text-yellow-500 fa-solid fa-star"></i>
                <span>
                    <p className="font-medium text-white">( 5040 Review )</p>
                </span>
            </span>
            <span>
                <p className="text-gray-300 font-md">The international hoodies with excellent durable fabric, not to heavy but
                    simply perfect for Indian summer.
                </p>
            </span>
            <span className="py-4">
                <span className="text-white font-bold text-[35px]">$49.55</span>
                <span className="text-pink font-bold text-[25px]">$49.55</span>
            </span>

            <div className="flex items-start">
                <div className="flex items-center">
                    <div className="relative">
                      <select className="bg-[#1d1d1d] text-white appearance-none py-2 focus:outline-none   text-base pl-3 pr-10">
                        <option className="text-sm">Size</option>
                        <option className="text-sm">SM</option>
                        <option className="text-sm">M</option>
                        <option className="text-sm">L</option>
                        <option className="text-sm">XL</option>
                      </select>
                      <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-white pointer-events-none">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                      </span>
                    </div>
                </div>
                <div className="flex items-center ml-4">
                    <div className="relative">
                      <select className="bg-[#1d1d1d] text-white appearance-none py-2 focus:outline-none text-base pl-3 pr-10">
                        <option className="text-sm">Color</option>
                        <option className="text-sm">Black</option>
                        <option className="text-sm">White</option>
                        <option className="text-sm">Blue</option>
                        <option className="text-sm">Gray</option>
                      </select>
                      <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-white pointer-events-none">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                      </span>
                    </div>
                </div>
                <div className="flex items-center ml-4">
                    <div className="relative">
                      <select className="bg-[#1d1d1d] text-white appearance-none py-2 focus:outline-none text-base pl-3 pr-10">
                        <option className="text-sm">Qty</option>
                        <option className="text-sm">1</option>
                        <option className="text-sm">2</option>
                        <option className="text-sm">3</option>
                        <option className="text-sm">4</option>
                      </select>
                      <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-white pointer-events-none">
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg> */}
                      </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 py-8">
                <div className="flex items-center justify-center ">
                    <a href="/"><button className="px-6 py-2 text-sm font-semibold text-black bg-white border hover:bg-transparent hover:border hover:border-white hover:text-white">Add To Cart</button></a>
                </div>
                <div>
                    <span className="flex justify-center">
                        <i className="fa-regular fa-heart text-md border border-pink hover:border hover:border-pink text-white hover:text-pink bg-pink font-bold p-[10px] hover:bg-black"></i>
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white">Share With</span>
              <ul className="flex gap-4 px-4 py-1 bg-[#1d1d1d]">
                <li><a href="/"><i className="text-blue-700 fa-brands fa-facebook-f"></i></a></li>
                <li><a href="/"><i className="text-green-500 fa-brands fa-google"></i></a></li>
                <li><a href="/"><i className="fa-brands fa-twitter text-sky-400"></i></a></li>
              </ul>
            </div>
        </div>

        {/* <!-- right side --> */}
        <div className="absolute flex h-screen bg-cover bg-no-repeat sm:w-[100vw] lg:w-[72%] lg:left-[28%]"
            //  style={{ background-position:"center center", background-image:url({HeroImage})}} 
            style={{ backgroundImage:`url(${Image})` }}
             >
          <div className="flex flex-col items-start justify-center h-full pl-12">
            <span className="text-lg font-semibold">
              Sale<span className="pl-2 text-pink">70% OFF</span>
            </span>
            <span className="py-6">
              <h1 className="text-6xl font-bold text-black">New <br/> Tranding <br /> Fashion</h1>
            </span>
            <span className="py-4">
              <p className="font-bold tracking-widest uppercase text-md">Buy One Get One <span className="text-pink">Free</span></p>
            </span>
            <div className="flex gap-4 py-4">
              <div className="">
                <i className="fa-solid fa-play text-md bg-pink text-white py-[14px] px-[16px] p rounded-full border-4 border-slate-200"></i>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl text-pink">Discover</span>
                <span className="text-sm text-slate-800">Our Collection</span>
              </div>
            </div>
          </div>
          {/* <!-- <img src="{heroimage}" alt=""> --> */}
        </div>
        
        
    </div>
    </div>
    
  )
}

export default Hero