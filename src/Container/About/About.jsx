import React from "react";
import pic from "../../../src/Assets/pic.png";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import me from "../../../src/Assets/teslim2.png";
import logo from '../../../src/Assets/logo3.png'
import { useState ,useEffect } from 'react';
import { Footer } from "../../Compnents";
const About = () => {
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
       <div class="loading-container absolute top-[15rem]">
    <div class="loading"></div>
    <div id="loading-text">loading</div>
</div>
    );
  }
  return (
    <div className="">
      <div className="bg-gray-900 fixed w-full z-20">
        <div className="flex items-center justify-between max-w-[1200px] m-auto px-3 py-2">
          <p className="text-gray-200 text-3xl">
            <Link to="/">
              <IoIosArrowRoundBack />
            </Link>
          </p>
          <h2 className="text-gray-200 text-[1.1rem] uppercase">About us</h2>
          <div></div>{" "}
          {/* This empty div creates space for the center alignment */}
        </div>
      </div>
      <div className=" pt-10">
        <div className=" relative  h-60 sl:h-72 pt- ">
          <div
            style={{ backgroundImage: `url(${pic})` }}
            className=" h-60 sl:h-72 bg-no-repeat bg-cover ]  bg-center m-auto   "
          >
            <div className=" bg-black w-full opacity-60  absolute top-0 h-full"></div>
          </div>
          <div className=" flex justify-center text-gray-200">
            <div className=" absolute top-[30%] text-center px-3">
              <h2 className=" text-xl pb-3">About Us</h2>
              <p className=" text-[.9rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia enim quas qui perferendis deleniti laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300  ">
        <div className=" px-6 flex w-full flex-col md:flex-row max-w-[1000px] py-14 sl:max-w-[1200px]    m-auto gap-10 items-center">
          <div className=" max-w-[600px] md:max-w-[350px] sl:max-w-[500px] m-auto">
            <h2 className=" text-xl pb-3">About TS-WORLD</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur necessitatibus optio rerum veritatis quaerat
              doloribus, nam sequi delectus mollitia voluptate hic non
              blanditiis tempora aperiam explicabo omnis voluptates ratione
              nihil.
            </p>
          </div>
          <div className=" md:max-w-[400px] max-w-[600px] sl:max-w-[500px] m-auto">
            <img src={me} alt="" className=" rounded-[3rem]" />
          </div>
        </div>
      </div>

      <div className="bg-gray-200  px-6 " >
        <h2 className=" text-gray-900 text-xl uppercase text-center pt-8">our vision</h2>
        <div className=" py-8 ">
          <div className=" grid md:grid-cols-2 max-w-[1200px] m-auto md:bg-gray-300  gap-3  md:gap-0  place-items-center   rounded-md border-gray-500  md:border">
           <div className=" md:border-r h-full w-full border-b py-8  bg-gray-400  border-gray-500  ">
             <div className="  max-w-[400px] m-auto  px-3">
              <p className=" text-[4rem] flex items-center gap-3  text-gray-800 font-semibold">
                01{" "}
                <span className=" text-xl border-gray-500  border-b pb-3">
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
               <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              odit repellendus facilis commodi iusto omnis aliquid nihil eveniet
              enim facere alias a vitae doloremque, iure, ipsa pariatur atque
              iste ipsam.
            </p>
            </div>

           </div>
           <div className=" border-b  w-full py-8 border-gray-500 bg-gray-300 ">
             <div className=" max-w-[400px] m-auto px-3">
              <p className=" text-[4rem] flex items-center gap-3 text-gray-800   font-semibold">
                01{" "}
                <span className=" text-xl border-gray-500  border-b pb-3">
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
               <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              odit repellendus facilis commodi iusto omnis aliquid nihil eveniet
              enim facere alias a vitae doloremque, iure, ipsa pariatur atque
              iste ipsam.
            </p>
            </div>
           </div>

           <div className=" md:border-r h-full w-full border-b py-8 border-gray-500  bg-gray-400 md:bg-gray-300">
             <div className="  max-w-[400px] m-auto px-3 ">
              <p className=" text-[4rem] flex items-center gap-3  text-gray-800 font-semibold">
                01{" "}
                <span className=" text-xl border-gray-500  border-b pb-3">
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
               <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              odit repellendus facilis commodi iusto omnis aliquid nihil eveniet
              enim facere alias a vitae doloremque, iure, ipsa pariatur atque
              iste ipsam.
            </p>
            </div>

           </div>

             <div className=" border-b  w-full py-8 border-gray-500  bg-gray-300 md:bg-gray-400">
             <div className=" max-w-[400px] m-auto px-3">
              <p className=" text-[4rem] flex items-center gap-3 text-gray-800   font-semibold">
                01{" "}
                <span className=" text-xl border-gray-500  border-b pb-3">
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
               <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              odit repellendus facilis commodi iusto omnis aliquid nihil eveniet
              enim facere alias a vitae doloremque, iure, ipsa pariatur atque
              iste ipsam.
            </p>
            </div>
           </div>

           
           <div className=" md:border-r h-full w-full border-b py-8 border-gray-500 bg-gray-400">
             <div className="  max-w-[400px] m-auto  px-3">
              <p className=" text-[4rem] flex items-center gap-3  text-gray-800 font-semibold">
                01{" "}
                <span className=" text-xl border-gray-500  border-b pb-3">
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
               <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              odit repellendus facilis commodi iusto omnis aliquid nihil eveniet
              enim facere alias a vitae doloremque, iure, ipsa pariatur atque
              iste ipsam.
            </p>
            </div>

           </div>
             <div className=" border-b  w-full py-8 border-gray-500 bg-gray-300 ">
             <div className=" max-w-[400px] m-auto px-3">
              <p className=" text-[4rem] flex items-center gap-3  text-gray-800  font-semibold">
                01{" "}
                <span className=" text-xl border-gray-500  border-b pb-3">
                  Lorem ipsum dolor sit amet.
                </span>
              </p>
               <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              odit repellendus facilis commodi iusto omnis aliquid nihil eveniet
              enim facere alias a vitae doloremque, iure, ipsa pariatur atque
              iste ipsam.
            </p>
            </div>
           </div>

          </div>
        </div>
      </div>

      <div>
        <div className=" bg-gray-300 py-8 lg:py-16 ">
            <div className=" flex items-center flex-col md:flex-row max-w-[1200px] m-auto px-6     bg-gray-40  py-8 ">
                <div className=" l">
                    <img src={logo} alt=""  className=" w-32"/>
                </div>
                <div className=" text-center  md:text-start">
                    <h2 className=" text-[1rem] font-semibold pb-3 ">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p className=" text-[.9rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem, accusamus molestiae inventore obcaecati natus libero nisi est tenetur omnis, quia perferendis iusto itaque. Doloribus dolorum voluptatem repellendus est soluta.</p>
                </div>
            </div>
           <div className=" px-3">
             <div className=" flex flex-col lg:flex-row text-center lg:text-start gap-3 md:gap-4 bg-gray-40  items-center text-gray-700 mt-6  border-gray-900 w-fit border border-dashed py-6  md:px-24 justify-center m-auto px-6 lg:px-6">
                <p>Welcome to TS-WORLD</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="/">
                    <button className=" bg-gray-900 text-gray-200 py-2 px-6 rounded-md w-fit m-auto hover:bg-gray-50 hover:text-gray-900 lg:m-0">Start Shopping</button>
                </a>
            </div>
           </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
