import React from 'react'
import section7 from  '../../../image/section_7.webp'

const HeroSeven = () => {
  return (
    <div class="sm:p-4 md:p-8 lg:p-12 xl:p-16">
      <div class="relative flex justify-center h-[650px] w-[100%] bg-cover sm:p-4 md:p-12"
        //   style="background-position:center center; background-image:url('{section7}'); "
        style={{ backgroundImage:`url(${section7})` }}

          >
        <div class="absolute flex flex-col justify-center items-center left-0 top-[40%] h-[100px] w-[300px] bg-[#e22e5bc6] sm:invisible sm:hidden lg:visible lg:flex">
          <span class="text-white font-bold text-xl">Latest Jacket</span>
          <span class="text-white uppercase font-bold text-sm tracking-widest">Buy One Get One Free</span>
        </div>
        <div class="flex flex-col justify-center items-center text-center leading-[50px]">
          <span>
            <i class="fa-regular fa-heart text-md rounded-full text-pink font-bold p-[10px] bg-[#e22e5b8a]"></i>
          </span>
          <span class="text-black">Special Discount <span class="text-pink">70% OFF</span></span>
          <span class="font-bold py-4 sm:text-3xl lg:text-4xl">Deal Of The Day<br/> From <span class="text-pink">$75</span></span>
          <div class="flex gap-2 py-4">
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">314</span>
              <span>Days</span>
            </div>
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">8</span>
              <span>Hour</span>
            </div>
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">9</span>
              <span>Min</span>
            </div>
            <div class="flex flex-col justify-center items-center leading-6 px-4 py-2 bg-white">
              <span class="font-bold text-xl text-pink">20</span>
              <span>Second</span>
            </div>
          </div>
          <div class="py-4">
            <div class="flex justify-center items-center border bg-pink text-white px-6 py-2 font-semibold text-sm">
              <a href="/"><button>Add To Cart</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSeven