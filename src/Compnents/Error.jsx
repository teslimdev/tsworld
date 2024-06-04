import React from 'react'
import Logo from "../../src/Assets/logo3.png";
const Error = () => {
  return (
    <div className='bg-gray-200 px-4 h-lvh'>
       <div className='  md:max-w-[500px] m-auto'>
        <div className=" text-center pt-16 ">
        <div className=" flex justify-center">
          <img src={Logo} alt="" className=" w-28 h-28" />
        </div>
       
      </div>
     <div className=' text-center'>
        <h1 className=' text-[7rem]  font-bold text-gray-800'>404</h1> 
        <p className=' pt-3 pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       <a href="/"> <button  className=' bg-gray-700 py-2 px-6 rounded-md text-lg text-gray-200'>Back to Home</button></a>
     </div>

      <div className=" flex justify-center py-8">
        <div className=" absolute bottom-10  ">
          <h2>TS-WORLD</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Error
