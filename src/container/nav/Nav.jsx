import React from 'react'
import { Link } from 'react-router-dom'
// import Shop from '../../component/shop/Shop'

const Nav = () => {
  return (
    <>
      <div className=" sm:invisible sm:hidden xl:visible xl:flex xl:w-[60%]  ">
			<ul className="flex gap-2 ">
				<li className="px-4 text-base font-bold uppercase">
          <Link to="/">Home <i className="fa-solid fa-angle-down"></i></Link>
        </li>
				<li className="px-4 text-base font-bold uppercase">
          <Link to="/shop">Shop<i className="pl-3 fa-solid fa-angle-down"></i></Link>
        </li>
				<li className="px-4 text-base font-bold uppercase">
          <Link to="/product">Product <i className="fa-solid fa-angle-down"></i></Link>
          
        </li>

        <li className="px-4 text-base font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-black to-pink">
          <Link to="/profile">Pages <i className="fa-solid fa-angle-down"></i></Link>
        </li>

				{/* <li className="px-4 text-base font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-black to-pink"><Link to="/"><span className="">Voxo Plus </span> <i className="fa-solid fa-angle-down"></i></Link></li> */}
				{/* <li className="px-4 text-base font-bold uppercase"><Link href="/">Blog <i className="fa-solid fa-angle-down"></i></Link></li> */}
			</ul>
			
		</div>
    </>
  )
}

export default Nav