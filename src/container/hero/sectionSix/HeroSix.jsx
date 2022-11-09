import React from 'react'
import ProductOne from '../../product/productOne/ProductOne'

const HeroSix = () => {
  return (
    
    <div class="relative flex flex-col pb-8 sm:px-4 md:px-12 lg:px-16 ">
      <div class="flex flex-col justify-center items-center p-4">
        <span class="font-bold text-3xl">New Arrival</span>
        <span class="font-semibold text-gray-500 text-base">Our collection</span>
      </div>
      <div class="flex flex-col justify-center gap-2">
        <ProductOne />
        <ProductOne />
      </div>
    </div>
  )
}

export default HeroSix