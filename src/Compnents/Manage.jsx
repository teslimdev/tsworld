import React from 'react'
import Logo from '../../src/Assets/logo3.png'
const Manage = () => {
  return (
    <div className=' bg-gray-200 h-lvh'>
      <div className=' text-center pt-20 '>
     <div className=' flex justify-center'>
         <img src={Logo} alt="" className=' w-28 h-28' />
     </div>
        <h2 className=' font-bold text-[1.1rem]'>Hello Abdullah Teslim</h2>
      </div>

      <div className=' pt-10'>
        <ul className=' space-y-3 px-4'>
           <a href="/NumberChange"><li className=' py-3 border shadow-lg px-3 bg-gray-50 '>Edit Phone Number</li></a> 
           <a href=" /PasswordChange"> <li className=' py-3 border shadow-lg px-3 bg-gray-50 mt-3'><a href="/"></a>Change Password</li></a>
        </ul>
      </div>
      <div className=' flex justify-center'>
        <div  className=' absolute bottom-10  '>
        <h2>TS-WORLD</h2>
      </div>
      </div>
    </div>
  )
}

export default Manage
