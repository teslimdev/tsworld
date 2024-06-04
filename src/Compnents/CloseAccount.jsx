import React from 'react'
import Logo from "../../src/Assets/logo3.png";
const CloseAccount = () => {
  return (
    <div className='bg-gray-200 px-4'>
      <div className='  md:max-w-[500px] m-auto'>
        <div className=" text-center pt-16 ">
        <div className=" flex justify-center">
          <img src={Logo} alt="" className=" w-28 h-28" />
        </div>
        <h2 className=" font-bold text-[1.1rem] pb-2">We hate to see you go</h2>
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
              disabled
              name="mobile"
              placeholder="Mobile No"
              className="w-full mt-3 pl-5 bg-gray-300  text-gray-200 shadow-lg placeholder:text-gray-700  py-2 outline-none  border border-gray-400 focus:text-gray-200 focus:bg-gray-900 focus:placeholder:text-gray-200 rounded-full"
            />
          </div>
          <div className="pt-4">
            <input
              type="password"
              required
              name="password"
              placeholder="  Password"
              className="w-full mt-3 py-2  text-gray-200 shadow-lg placeholder:text-gray-700 outline-none  border border-gray-400 focus:text-gray-200 focus:bg-gray-900 focus:placeholder:text-gray-200 rounded-full pl-5"
            />
          </div>
           <div className="pt-8">
        <button
          type="submit"
          className="bg-gray-600 text-white  hover:bg-gray-900 py-2 w-full rounded-full"
        >
        Close my  account
        </button>
      </div>
        </form>
      </div>
     <div>
        <h3 className=' pt-2'>Please read this carefully</h3>
        <p className=' text-[0.8rem] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro nemo, voluptatum aut rem omnis est dolore eum numquam minus.</p>
     <p className=' py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum veniam, dicta delectus totam ipsam?</p>
     </div>

      <div className=" flex justify-center py-8">
        <div className="  ">
          <h2>TS-WORLD</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CloseAccount
