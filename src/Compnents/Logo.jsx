import React from 'react'
import logo from '../../src/Assets/logo3.png'
const Logo = () => {
  return (
    <div>
      <div className='  bg-gray-300 h-lvh'>
        <div className=' flex justify-center  relative '>
            
            <div className=' absolute top-32'>
                <img src={logo} alt="" className=' w-[300px]' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
