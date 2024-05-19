import React from 'react'

const Slides = ({image}) => {
  return (
    <div>
        <div className='   pt-4'>
             <img src={image} alt="" className=' w-[300px] h-[300px]' />
             
          </div>
    </div>
  )
}

export default Slides
