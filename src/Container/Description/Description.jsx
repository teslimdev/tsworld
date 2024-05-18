import React from 'react'
import { Footer, Header } from '../../Compnents'
import pic4 from '../../../src/Assets/power4.png'

const Description = () => {
  return (
    <div>
    <Header/>
       <div className=' bg-gray-300'>
        <div className=' max-w-[400px] pt-28 px-3'>
          <div className=' flex max-w-[1200px] overflow-auto gap-3 pt-4'>
             <img src={pic4} alt="" className=' w-[250px] h-[250px]' />
             <img src={pic4} alt="" className=' w-[250px] h-[250px]' />
             <img src={pic4} alt="" className=' w-[250px] h-[250px]' />
             <img src={pic4} alt="" className=' w-[250px] h-[250px]' />
          </div>
        </div>
       </div>
      <Footer/>
    </div>
  )
}

export default Description
