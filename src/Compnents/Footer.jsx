import React from 'react'
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-400 text-black pt-6">
          <div className=" flex   flex-col-reverse md:flex-row  justify-around lg:max-w-[1200px] m-auto">
            <div className=" basis-[20%]  text-center md:text-start pt-6 md:pt-0">
              <h2>Join Us On</h2>
              <ul className=" flex gap-4 pt-2 justify-center md:justify-start">
                <li>
                  <Link to="/">
                    <FaTiktok />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" basis-[70%]">
              <ul className="    flex flex-wrap justify-center  gap-y-4 md:grid grid-cols-3   md:max-w-[700px]  lg:max-w-[1000px] ">
                <a href="/Help">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Help Center
                  </li>
                </a>
                <a href="/Contacts">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Contact Us
                  </li>
                </a>
                <a href="/">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Terms & Conditions
                  </li>
                </a>
                <a href="/">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Privacy Notice
                  </li>
                </a>
                <a href="/">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Cookie Notice
                  </li>
                </a>
                <a href="/">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Request For Upgrade
                  </li>
                </a>
                <a href="/">
                  <li className=" flex-auto w-full  md:w-full   px-4 text-[0.8rem]">
                    Request For Repair
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className=" text-center  pt-6">
            <p className=" border-t border-gray-600 py-3"> All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
