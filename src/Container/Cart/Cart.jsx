import React from 'react'
import { useState ,useEffect } from 'react';
import { Footer, Header } from '../../Compnents'

const Cart = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

   if (loading) {
    return (
      <div className="fflex justify-center items-center relative container  bg-gray-300  h-svh">
        <div className="absolute top-[20rem]  sl:top-[25rem] box border"></div>
      </div>
    );
  }

  return (
    <div>
      <Header/>

    <div className=' pt-28'>
      <h3> hello</h3>
    </div>


      <Footer/>
    </div>
  )
}

export default Cart
