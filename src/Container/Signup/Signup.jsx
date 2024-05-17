import React from 'react'
import logo from '../../../src/Assets/logo.png'
const Signup = () => {
  return (
    <div className=' bg-gray-400 h-screen'>
   <div className='   '>
     <div className=' md:grid grid-cols-2 md:max-w-fit gap-20 m-auto  md:relative top-[50%] '>
         <div className='  text-center pt-2'>
        <div className=' flex justify-center'>
            <img src={logo} alt=""  className=' w-[100px]'/>
        </div>
        <p className=' pb-3 text-gray-700 '>Create your account. <br  className=' md:hidden'/> it's free and only takes a minute</p>
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
                <label htmlFor=" " className=' pl-2 text-gray-700'>I accept the Terms of Use and Privacy Policy</label>
            </div>
            <div className=' pt-4'>
                <button className=' bg-gray-700 py-2 w-full rounded-full'>SIGN UP</button>
                <p className=' pt-2 text-center text-gray-700'>Already a member?<a href="/" className=' underline'>Sign in</a></p>
            </div>
        </form>
     </div>
    </div>
   </div>
    </div>
  )
}

export default Signup
