import React from 'react'
import ProductTwo from '../../product/productTwo/ProductTwo'

const HeroEight = () => {
  return (
    <div class="relative flex flex-col pb-8 sm:px-4">
        <div class="flex flex-col justify-center items-center p-4">
          <span class="font-bold text-3xl">Instagram Shop</span>
          <span class="font-semibold text-gray-500 text-base">New collection</span>
        </div>
        <div class="relative flex items-center p-4 gap-6 overflow-x-auto sm:justify-center md:justify-between">
            <ProductTwo/>
        </div>
    </div>
  )
}

export default HeroEight