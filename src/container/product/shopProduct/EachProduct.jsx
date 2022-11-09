import React from 'react'
import section31 from '../../../image/section_3_1.webp'
import section32 from '../../../image/section_3_2.webp'
import section33 from '../../../image/section_3_3.webp'

const EachProduct = () => {
  return (
    <>
    
    <div class="flex flex-col w-[250px] justify-center">
      <div class="relative flex justify-center h-[410px] w-full bg-cover "
    //   style="background-position:center center; background-image:url('{section31}'); "
    style={{ backgroundImage:`url(${section31})` }}

      >
        <div class="absolute flex items-center gap-2 px-6 bottom-4">
          <span class=" hover:visible">
            <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
          <span>
            <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
          <span>
            <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
          </span>
          <span>
            <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
        </div>
      </div>
      <div class="flex justify-between items-center py-2 w-full">
        <div class="flex flex-col items-start gap-2">
          <span class="text-slate-500">B&Y Jacket</span>
          <span class="font-semibold text-md">Slim Fit Plasitc...</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="flex gap-2">
            <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
              <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
          </span>
          <span class="font-bold text-xl text-pink">$78.00</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-[250px] justify-center">
      <div class="relative flex justify-center h-[410px] w-full bg-cover "
    //   style="background-position:center center; background-image:url('{section32}'); "
    style={{ backgroundImage:`url(${section32})` }}

      >
        <div class="absolute flex items-center gap-2 px-6 bottom-4">
          <span class=" hover:visible">
            <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
          <span>
            <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
          <span>
            <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
          </span>
          <span>
            <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
        </div>
      </div>
      <div class="flex justify-between items-center py-2 w-full">
        <div class="flex flex-col items-start gap-2">
          <span class="text-slate-500">B&Y Jacket</span>
          <span class="font-semibold text-md">Slim Fit Plasitc...</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="flex gap-2">
            <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
              <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
          </span>
          <span class="font-bold text-xl text-pink">$78.00</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center w-[250px]">
      <div class="relative flex justify-center h-[410px] w-full bg-cover "
    //   style="background-position:center center; background-image:url('{section33}'); "
    style={{ backgroundImage:`url(${section33})` }}

      >
        <div class="absolute flex items-center gap-2 px-6 bottom-4">
          <span class=" hover:visible">
            <i class="fa-solid fa-bag-shopping text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
          <span>
            <i class="fa-solid fa-eye text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
          <span>
            <i class="fa-solid fa-repeat text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i> 
          </span>
          <span>
            <i class="fa-regular fa-heart text-md  text-slate-600 hover:text-white bg-white p-[10px] hover:bg-[#e22e5b8a]"></i>
          </span>
        </div>
      </div>
      <div class="flex justify-between items-center py-2 w-full">
        <div class="flex flex-col items-start gap-2">
          <span class="text-slate-500">B&Y Jacket</span>
          <span class="font-semibold text-md">Slim Fit Plasitc...</span>
        </div>
        <div class="flex flex-col items-end">
          <span class="flex gap-2">
            <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
              <i class="fa-solid fa-star text-yellow-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
              <i class="fa-solid fa-star text-slate-500 text-lg"></i>
          </span>
          <span class="font-bold text-xl text-pink">$78.00</span>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default EachProduct