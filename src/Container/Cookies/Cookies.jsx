import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Footer } from '../../Compnents';
import { useState ,useEffect } from 'react';

const Cookies = () => {
      const [loading, setLoading] = useState(true);
  useEffect(() => {
   

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
      <div>
        <div className="bg-gray-400 fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">
            cookie notice
            </h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>

       <div className=' pt-16 pb-12 bg-gray-200 '>
        <div className=' pt-6 max-w-[400px] md:max-w-[700px]  px-4 m-auto'>
          <h2 className="text-center capitalize text-[1.2rem] font-semibold text-gray-700 pb-10">TS-WORLD COOKIE NOTICE</h2>
        <div className=''>
         <ul className=' list-decimal  px-6'>
            <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
              <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
             <li className=' font-bold'>Introdution
            <div>
                <ul className=' pl-5 md:pl-7  pt-2 pb-6 text-[0.9rem] list-disc font-normal space-y-3'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique exercitationem. Voluptates quibusdam consequatur numquam nam quis ratione accusamus tenetur.</li>
                </ul>
            </div>
            </li>
         </ul>
       <p className=' text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, harum nihil ab ex aperiam sunt?</p>

        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cookies
