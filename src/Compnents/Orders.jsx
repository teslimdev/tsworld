import React from 'react'
import Footer from './Footer'
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const Orders = () => {
  return (
    <div className=' bg-gray-200 '>
      <div>
        <div className=" shadow-lg  fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack /> 
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">Orders</h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>
      <div className=' h-lvh relative'>
       <div className=' flex justify-center'>
        <div className=' absolute top-[20rem]'>
            <h2 className=' text-[1.1rem]'>No Recent Orders</h2>
        </div>
       </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Orders
