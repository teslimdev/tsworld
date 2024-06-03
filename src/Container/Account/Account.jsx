import React, { useState ,useMemo, useEffect } from "react";
import { Footer, Header } from "../../Compnents";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoLockClosedSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
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
    <div className="  ">
      <Header/>
   <div className=" h-[90vh] bg-gray-200">
      <div className=" pt-28">
         <div className=" bg-gray-800 py-2 pl-4" >
        <h2 className=" font-semibold text-gray-200 py-2">Welcome, Abdullah</h2>
        <p className=" font-semibold text-gray-200">08123456789</p>
      </div>
     </div>

     <div className=" pt-4">
        <div className=" bg-gray-700 py-2"><h2 className=" text-center text-gray-200 text-[1.1rem] font-semibold"> Account Overview</h2></div>
     </div>
     <div>
        <ul className=" space-y-3 px-3 pt-6">
            <li className=" flex items-center justify-between px-4 py-3 shadow-lg  border bg-white    "><p className=" flex items-center gap-3"><MdProductionQuantityLimits /> Orders</p><RiArrowRightSLine /></li>
       <a href="/Manage "> <li className=" flex items-center justify-between px-4 py-3 shadow-lg  border bg-white   mt-3  "><p className=" flex items-center gap-3"><MdManageAccounts /> Account Management </p><RiArrowRightSLine /></li></a>
         <li className=" flex items-center justify-between px-4 py-3 shadow-lg  border bg-white    "><p className=" flex items-center gap-3"><IoLockClosedSharp /> Close Account</p><RiArrowRightSLine /></li>
        </ul>
     </div>
    <div className=" flex justify-center   relative">
       <div className=" absolute bottom-[-6rem] ">
         <button className="text-center  font-bold text-gray-800">LOGOUT</button>
       </div>
    </div>
   </div>
  <Footer/>
    </div>
  )
}

export default Account
