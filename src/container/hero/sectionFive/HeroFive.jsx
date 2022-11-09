import React from 'react'
import section51 from '../../../image/section_5_1.webp'
import section52 from '../../../image/section_5_2.webp'
import section53 from '../../../image/section_5_3.webp'
import section54 from '../../../image/section_5_4.webp'

const HeroFive = () => {
  return (
    <div class="relative flex flex-col pb-8 sm:px-4 md:px-12 lg:px-16">
    <div class="flex flex-col justify-center items-center p-4">
      <span class="font-bold text-3xl">Our Categories</span>
      <span class="font-semibold text-gray-500 text-base">Our collection</span>
    </div>
    <div class="flex items-center justify-between gap-4 w-full sm:flex-wrap md:flex-nowrap">
      <div class="relative h-[500px] bg-cover sm:w-full md:w-[50%]"
        // style="background-position:center center; background-image:url('{section51}')"
        style={{ backgroundImage:`url(${section51})` }}

        >
        <div class="flex flex-col h-full w-full items-end justify-center text-right sm:px-8 lg:px-14">
          <span class="text-sm">New<span class="text-pink pl-2">Collections</span></span>
          <span class="text-black font-bold text-5xl py-4">New Red<br/> Jackets From</span>
          <span class="text-pink font-bold text-4xl pb-4">$48</span>
          <div class="flex justify-center items-center border bg-white text-black hover:bg-black hover:text-white px-6 py-2 font-semibold text-sm">
            <a href="/"><button>Add To Cart</button></a>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 sm:w-full md:w-[50%]">
        <div class="relative h-[250px] w-[100%] bg-cover"
        //   style="background-position:center center; background-image:url('{section52}')"
        style={{ backgroundImage:`url(${section52})` }}

          >
          <div class="flex flex-col h-full w-full items-start justify-center text-right sm:px-8 lg:px-14">
            <span class="text-3xl font-bold">New Hoodies from</span>
            <span class="text-4xl font-bold text-pink py-4">$34</span>
            <div class="flex justify-center items-center border bg-white text-black hover:bg-black hover:text-white px-6 py-2 font-semibold text-sm">
              <a href="/"><button>Add To Cart</button></a>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="relative h-[230px] w-[50%] bg-cover "
            // style="background-position:center center; background-image:url('{section53}')"
            style={{ backgroundImage:`url(${section53})` }}

            >
            <div class="absolute flex justify-center bottom-[20px] left-[60px] right-[60px]">
              <div class="flex flex-col items-center justify-center text-center h-[100px] w-[220px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
                <span class="text-xl font-bold text-white">
                  New Jacket
                </span>
                <span class="py-2">
                  <p class="uppercase text-[10px] font-bold tracking-widest text-white">Discount-70%</p>
                </span>
              </div>
            </div>
          </div>
          <div class="relative h-[230px] w-[50%] bg-cover "
            // style="background-position:center center; background-image:url('{section54}')"
            style={{ backgroundImage:`url(${section54})` }}

            >
            <div class="absolute flex justify-center bottom-[20px] left-[60px] right-[60px]">
              <div class="flex flex-col items-center justify-center text-center h-[100px] w-[220px] bg-[#212121c1] hover:bg-[#e22e5bc1]">
                <span class="text-xl font-bold text-white">
                  New Jacket
                </span>
                <span class="py-2">
                  <p class="uppercase text-[10px] font-bold tracking-widest text-white">Discount-70%</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default HeroFive