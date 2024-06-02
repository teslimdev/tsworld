import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Footer } from "../../Compnents";

const Enquiries = () => {
    const [loading, setLoading] = useState(true);
  const otherDetailsRef = useRef(null);
  const adjustTextareaHeight = () => {
    const textarea = otherDetailsRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight(); // Adjust height initially
  }, []);
  
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
      <div>
        <div className="bg-gray-400 fixed w-full z-20">
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
            <p className="text-black text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-black text-[1.1rem] uppercase">Enquiries</h2>
            <div></div> {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>
      <div className="pt-16">
        <h2 className="text-center capitalize text-[1.2rem] font-semibold text-gray-700">Please fill in the form below</h2>
        <div className="pt-6 max-w-[400px] md:max-w-[600px] px-4 m-auto">
          <p className="text-[0.9rem] pb-6">
            <span className="text-[1rem] font-bold">Note:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo minima ex enim adipisci eum sit temporibus in placeat vel? Cumque!
          </p>
          <form >
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Joe"
              className="outline-none border w-full mb-6 mt-3 border-gray-600 bg-gray-300 rounded pl-4 pr-4 py-1"
            />
            <br />
            <label htmlFor="phone">Mobile No</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-gray-300 rounded mb-6 mt-3 w-full pl-4 pr-4 py-1 outline-none border border-gray-600"
              placeholder="08123456789"
            />
            <br />
           
            <div className="">
              <label htmlFor="details" className="text-[1.1rem]">Your Enquiry Message</label>
              <br />
              <div className="pt-3">
                <textarea
                  id="details"
                  name="details"
                  required
                  ref={otherDetailsRef}
                  className="bg-gray-300 border w-full border-gray-600 rounded pl-4 pr-4 py-1 outline-none resize-none overflow-hidden"
                  onInput={adjustTextareaHeight}
                ></textarea>
              </div>
            </div>
          
            <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda ad illo saepe officia facere totam animi tenetur consectetur! Fugit quis culpa dolorum hic quos at illum, aspernatur dicta vel.</p>
            <input type="checkbox" required />
            <label htmlFor=""> I agree to the above condition</label>
            <br />
            <div className="pb-12">
              <button type="submit" className="mt-4 bg-gray-500  hover:bg-gray-700 hover:text-white px-4 py-2 w-full rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
      
       <Footer/>
    </div>
  )
}

export default Enquiries
