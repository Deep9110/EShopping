import React from 'react'
import  Section41 from '../../../image/section_4_1.webp'
import  Section42 from '../../../image/section_4_2.webp'
import  Section43 from '../../../image/section_4_3.webp'
import  Section44 from '../../../image/section_4_4.webp'

const HeroFour = () => {
  return (
    <div class="relative flex justify-center flex-col pb-8 sm:px-4 md:px-12 lg:px-16">
      <div class="flex flex-col justify-center items-center p-4">
        <span class="font-bold text-3xl">Our Categories</span>
        <span class="font-semibold text-gray-500 text-base">Our collection</span>
      </div>
      <div class="flex relative gap-6 sm:flex-col lg:flex-row">
        <div class="absolute flex items-center justify-between sm:w-full sm:h-[120px] lg:w-[250px] bg-pink text-white px-6 py-8">
          <div class="flex flex-col gap-4">
            <span class="text-3xl text-white font-bold">Our Top</span>
            <span class="text-md tracking-wide text-white font-semibold uppercase">C a t e g o r i e s</span>
          </div>
          <div class="flex flex-col gap-4">
            <i class="fa-solid fa-chevron-left px-[12px] py-[6px] rounded-full bg-white hover:text-pink text-black text-sm"></i>
            <i class="fa-solid fa-chevron-right px-[12px] py-[6px] rounded-full bg-white hover:text-pink text-black text-sm"></i>
          </div>
        </div>
        <div class="flex sm:mt-[125px] sm:overflow-auto lg:overflow-hidden  sm:ml-0  lg:mt-0 lg:ml-[260px] gap-6">
          <div class="relative h-[120px] w-[260px] bg-cover "
            //   style="background-position:center center; background-image:url('{section41}')"
            style={{ backgroundImage:`url(${Section41})` }}

            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover"
            //   style="background-position:center center; background-image:url('{section42}')"
            style={{ backgroundImage:`url(${Section42})` }}

            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Hoodies</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover "
            //   style="background-position:center center; background-image:url('{section43}')"
            style={{ backgroundImage:`url(${Section43})` }}

            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Pants</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover "
            //   style="background-position:center center; background-image:url('{section44}')"
            style={{ backgroundImage:`url(${Section44})` }}

            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Hoodies</span>
              <span class="text-base text-black">Fashion</span>
            </div>
          </div>
          <div class="relative h-[120px] w-[260px] bg-cover "
            //   style="background-position:center center; background-image:url('{section41}')"
            style={{ backgroundImage:`url(${Section41})` }}

            >
            <div class="h-full w-full px-4 flex flex-col justify-center text-right items-right">
              <span class="text-2xl text-pink font-bold">Shoes</span>
              <span class="text-base text-black">Fashion</span>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default HeroFour