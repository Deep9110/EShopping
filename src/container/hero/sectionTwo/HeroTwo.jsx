import React from 'react'
import Section21 from '../../../image/section_2_1.webp'
import Section22 from '../../../image/section_2_2.webp'
import Section23 from '../../../image/section_2_3.webp'

const HeroTwo = () => {
  return (
    <div class="relative flex items-center justify-center gap-6 sm:p-4 sm:flex-wrap md:p-12 md:flex-nowrap lg:p-16 ">
            
        <div class="relative h-[400px] w-[450px] bg-cover"
            style={{ backgroundImage:`url(${Section21})` }}
        >
        <div class="absolute w-full">
          <div class="flex items-center justify-between p-6">
            <span>
              <i class="fa-regular fa-heart text-md rounded-full  text-slate-600 hover:text-pink bg-white p-[8px] hover:bg-[#e22e5b8a]"></i>
            </span>
            <span class="text-md font-bold text-black">26%<span class="hover:text-pink pl-1">OFF</span></span>
          </div>
        </div>
        <div class="absolute flex justify-center bottom-[60px] left-[60px] right-[60px]">
          <div class="flex flex-col items-center justify-center text-center h-[130px] w-[320px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
            <span class="text-2xl font-bold text-white">
              New Hoodie
            </span>
            <span class="py-2">
              <p class="uppercase text-md font-bold tracking-widest text-white">Buy One Get One free</p>
            </span>
          </div>
        </div>
        </div>
        <div class="relative h-[400px] w-[450px] bg-cover"
            style={{ backgroundImage:`url(${Section22})` }}
        >
        <div class="absolute w-full">
          <div class="flex items-center justify-between p-6">
            <span>
              <i class="fa-regular fa-heart text-md rounded-full  text-slate-600 hover:text-pink bg-white p-[8px] hover:bg-[#e22e5b8a]"></i>
            </span>
            <span class="text-md font-bold text-black">26%<span class="hover:text-pink pl-1">OFF</span></span>
          </div>
        </div>
        <div class="absolute flex justify-center bottom-[60px] left-[60px] right-[60px]">
          <div class="flex flex-col items-center justify-center text-center h-[130px] w-[320px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
            <span class="text-2xl font-bold text-white">
              New Hoodie
            </span>
            <span class="py-2">
              <p class="uppercase text-md font-bold tracking-widest text-white">Buy One Get One free</p>
            </span>
          </div>
        </div>
        </div>
        <div class="relative h-[400px] w-[450px] bg-cover"
            style={{ backgroundImage:`url(${Section23})` }}
        >
        <div class="absolute w-full">
          <div class="flex items-center justify-between p-6">
            <span>
              <i class="fa-regular fa-heart text-md rounded-full  text-slate-600 hover:text-pink bg-white p-[8px] hover:bg-[#e22e5b8a]"></i>
            </span>
            <span class="text-md font-bold text-black">26%<span class="hover:text-pink pl-1">OFF</span></span>
          </div>
        </div>
        <div class="absolute flex justify-center bottom-[60px] left-[60px] right-[60px]">
          <div class="flex flex-col items-center justify-center text-center h-[130px] w-[320px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
            <span class="text-2xl font-bold text-white">
              New Hoodie
            </span>
            <span class="py-2">
              <p class="uppercase text-md font-bold tracking-widest text-white">Buy One Get One free</p>
            </span>
          </div>
        </div>
        </div>

    </div>
  )
}

export default HeroTwo