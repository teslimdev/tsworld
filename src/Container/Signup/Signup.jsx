import React from 'react'
import logo from '../../../src/Assets/logo.png'
import logo1 from '../../../src/Assets/logo1.png'
import logo2 from '../../../src/Assets/logo2.png'
import logo3 from '../../../src/Assets/logo3.png'
import logo4 from '../../../src/Assets/logo4.png'
import logo5 from '../../../src/Assets/logo5.png'
import logo6 from '../../../src/Assets/logo6.png'
const Signup = () => {
  return (
    <div className='  '>
 <div  className=' bg-gray-500 w-full   h-svh '>
     <div className='  flex justify-center     '>
     <div className='  bg-gray-800  w-full   md:rounded-lg md:py-10 md:mx-6 md:top-[15%] lg:top-[20%] absolute md:px-6 md:w-fit m-auto h-full md:h-fit '>
     <div className=' md:grid grid-cols-2 md:max-w-fit gap-10 m-auto   '>
         <div className='  text-center pt-5'>
        <div className=' flex justify-center'>
            <img src={logo2} alt=""  className=' w-[100px]'/>
        </div>
        <p className=' pb-4 text-gray-200 '>Create your account. <br  className=' md:hidden'/> it's free and only takes a minute</p>
     </div>
     <div className=' px-3 max-w-[400px] m-auto'>
        <form action="">
            <div>
                <input type="text" 
                required
                placeholder='Name'
                 className=' w-full mt-3 py-2 bg-gray-500 text-gray-200 placeholder:text-gray-200 outline-none  border border-gray-700 rounded-full pl-5'/>
            </div>
             <div className=' pt-4'>
                <input type="tel" 
                required
                placeholder='Mobile No'
                 className=' w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none  border border-gray-700 rounded-full'/>
            </div>
             <div className=' pt-4'>
                <input type="password"  
                required
                placeholder='Password'
                className=' w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none  border border-gray-700 rounded-full'/>
            </div>
             <div className=' pt-4'>
                <input type="text" 
                required
                placeholder='Confirm Password'
                 className=' w-full mt-3 pl-5 bg-gray-500 text-gray-200 placeholder:text-gray-200  py-2 outline-none  border border-gray-700 rounded-full'/>
            </div>
            <div className=' pt-4'>
                <input type="checkbox"
                required
                 />
                <label htmlFor=" " className=' pl-2 text-gray-200'>I accept the Terms of Use and Privacy Policy</label>
            </div>
            <div className=' pt-6'>
                <button className=' bg-gray-100 hover:text-white hover:bg-gray-600 py-2 w-full rounded-full'>SIGN UP</button>
                <p className=' pt-3 text-center text-gray-200'>Already a member?<a href="/" className=' underline'>Sign in</a></p>
            </div>
        </form>
     </div>
    </div>
   </div>
  </div>
 </div>
    </div>
  )
}

export default Signup
