import React, { useState , useEffect } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import Logo from '../../../src/Assets/logo3.png'
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const Account = () => {
     const [loading, setLoading] = useState(true);
useEffect(() => {
   

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

   if (loading) {
    return (
      <div className="fflex justify-center items-center relative container  bg-gray-300  h-svh">
        <div className="absolute top-[20rem]  sl:top-[25rem] box border"></div>
      </div>
    );
  }

  return (
    <div className="  bg-gray-200 h-lvh ">
     <div>
        <div className=" shadow-lg  fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack /> 
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">Account Overview</h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>
   <div className="  md:max-w-[700px] m-auto">
      <div className=' text-center pt-20 '>
     <div className=' flex justify-center'>
         <img src={Logo} alt="" className=' w-28 h-28' />
     </div>
        <h2 className=' font-bold text-[1.1rem]'>Hello Abdullah Teslim</h2>
      </div>

     
     <div>
        <ul className=" space-y-3 px-3 pt-6">
           <a href="/Orders ">  <li className=" flex items-center justify-between px-4 py-3 shadow-lg  border bg-white    "><p className=" flex items-center gap-3"><MdProductionQuantityLimits /> Orders</p><RiArrowRightSLine /></li></a>
       <a href="/Manage "> <li className=" flex items-center justify-between px-4 py-3 shadow-lg  border bg-white   mt-3  "><p className=" flex items-center gap-3"><MdManageAccounts /> Account Management </p><RiArrowRightSLine /></li></a>
        <a href="/CloseAccount ">  <li className=" flex items-center justify-between px-4 py-3 shadow-lg  border bg-white  mt-3   "><p className=" flex items-center gap-3"><IoLockClosedSharp /> Close Account</p><RiArrowRightSLine /></li></a>
        </ul>
     </div>
    <div className=" flex justify-center   relative">
       <div className=" absolute bottom-[-6rem] ">
         <button className="text-center  font-bold text-gray-800">LOGOUT</button>
       </div>
    </div>
   </div>
    </div>
  )
}

export default Account
