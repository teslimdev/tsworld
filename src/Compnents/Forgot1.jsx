import React from 'react'
import Logo from "../../src/Assets/logo3.png";
const Forgot1 = () => {
  return (
    <div>
      <div className="  bg-gray-200 h-lvh px-4 ">
      <div className='  md:max-w-[500px] m-auto'>
        <div className=" text-center pt-20 ">
        <div className=" flex justify-center">
          <img src={Logo} alt="" className=" w-28 h-28" />
        </div>
        <h2 className=" font-bold text-[1.1rem] pb-2">Registered Phone Number</h2>
        <p className=" pt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eum
          ipsam eaque possimus facere rem!
        </p>
      </div>
      <div className=" pt-4">
        <form action="">
          <div>
            <input
              type="tel"
             required
              name="mobile"
              placeholder="Mobile No"
              className="w-full mt-3 pl-5  text-gray-200 shadow-lg placeholder:text-gray-700  py-2 outline-none  border border-gray-400 focus:text-gray-200 focus:bg-gray-900 focus:placeholder:text-gray-200 rounded-full"
            />
          </div>
           <div className="pt-8">
        <button
          type="submit"
          className="bg-gray-600 text-white  hover:bg-gray-900 py-2 w-full rounded-full"
        >
          Send Code
        </button>
      </div>
        </form>
      </div>
     

      <div className=" flex justify-center">
        <div className=" absolute bottom-10  ">
         <a href="/Forgot2">  <h2>TS-WORLD</h2></a>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Forgot1
