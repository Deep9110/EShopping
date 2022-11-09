import React from 'react'
import Nav from '../../container/nav/Nav'
// import CartIcon from '../../image/cart.svg'
import './Header.css'

const Header = () => {
  return (
   <>
 <div className="w-full bg-white ">
	<div className="flex items-center justify-between  h-[90px] sm:px-4 md:px-12 lg:px-16 xl:px-24">
		<div className="flex items-center justify-start xl:w-[10%]">
			<a className="flex items-center gap-1" href="/">
				<i className="pr-2 text-3xl font-bold fa-solid fa-star-of-life text-pink"></i>
				<span className="text-[28px] font-bold">Voxo</span>
				<div className="flex pl-[4px] pt-[6px] sm:visible xl:invisible xl:hidden">
					<i className="fa-solid fa-bars"></i>
				</div>
			</a>
	
		</div>
		<Nav/>
		<div className="xl:w-[30%] flex items-center sm:gap-4 lg:gap-6 xl:gap-8 justify-end">
			<ul className="flex items-center px-4 sm:gap-2 sm:px-1 md:gap-4 xl:gap-6">
				<li className="flex items-center pt-1"><a href="/">
					<i class='bx bx-search-alt-2 text-2xl' ></i>
					</a></li>
				<li><a href="./auth/login">
					<i className="text-lg fa-regular fa-user"></i>
				</a></li>
				<li className="relative flex sm:invisible sm:hidden md:visible md:flex">
					<a href="./wishlist"><i className="text-lg fa-regular fa-heart"></i>
					</a>
					<span className="absolute bg-pink left-3 bottom-4 rounded-full text-white font-bold text-[12px] px-[6px]">5</span>

				</li>

					
			</ul>
			<div className="flex justify-end border-2 border-transparent md:text-lg">
				<a href="./cart">
					<button className="flex items-center text-lg text-white transition-[0.5s] hover:text-black hover:bg-white border-2 bg-pink px-[16px] hover:border-pink py-[8px] sm:px-2 md:px-6">
						
					<i className='text-xl bx bx-cart'></i>					
						 <span className="pl-2 font-semibold text-[16px]">$4500.25</span>

					</button>
				</a>
			</div>
		</div>
		
	</div>	
</div>  


</>


   
 )
}

export default Header

