import React from 'react'

const HeroNine = () => {
  return (
    <div class="flex items-center justify-around sm:flex-wrap sm:p-4 gap-8 md:p-10 lg:p-16 lg:flex-nowrap">
      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-brands fa-servicestack text-5xl text-pink"></i>
        </span>
        <span class="text-lg font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-solid fa-store text-4xl text-pink"></i>
        </span>
        <span class="text-lg font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-solid fa-credit-card text-4xl text-pink"></i>
        </span>
        <span class="text-xl font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>

      <div class="flex flex-col gap-2 items-center justify-center">
        <span>
          <i class="fa-solid fa-bag-shopping text-4xl text-pink"></i>
        </span>
        <span class="text-lg font-bold">Customer Services</span>
        <span class="text-base text-slate-500">Top notch customer services.</span>
      </div>
    </div>
  )
}

export default HeroNine