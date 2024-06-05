import React from 'react'
import Logo from "../../src/Assets/logo3.png";
const Forgot2 = () => {
  return (
    <div className="bg-gray-200 h-lvh">
      <div className=' md:max-w-[500px] m-auto'>
        <div className=" text-center pt-20 ">
        <div className=" flex justify-center">
          <img src={Logo} alt="" className=" w-28 h-28" />
        </div>
        <h2 className=" font-bold text-[1.1rem]">Create New Password</h2>
      </div>
      <div className=" px-3">
        <form action="">
          <div className="pt-4">
            <input
              type="password"
              required
              name="password"
              placeholder=" New Password"
              className="w-full mt-3 py-2  text-gray-200 shadow-lg placeholder:text-gray-700 outline-none  border border-gray-400 focus:text-gray-200 focus:bg-gray-900 focus:placeholder:text-gray-200 rounded-full pl-5"
            />
          </div>
          <div className="pt-4">
            <input
              type="Password"
              required
              name="Password"
              placeholder=" Confirm New  Password"
              className="w-full mt-3 py-2  text-gray-200 shadow-lg placeholder:text-gray-700 outline-none  border border-gray-400 focus:text-gray-200 focus:bg-gray-900 focus:placeholder:text-gray-200 rounded-full pl-5"
            />
          </div>
          <div className="pt-8">
                  <button
                    type="submit"
                    className="bg-gray-600 text-white  hover:bg-gray-900 py-2 w-full rounded-full"
                  >
                    SAVE
                  </button>
                
                </div>
        </form>
      </div>
      <div className=" flex justify-center">
        <div className=" absolute bottom-10  ">
          <h2>TS-WORLD</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Forgot2
