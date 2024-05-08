import { Link, useLocation } from "react-router-dom";
import React, { useState,  } from "react";
import pic1 from "../../src/Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const [nav, setNav] = useState(false);
  const isOpen = () => {
    setNav(true);
    document.getElementById("navmain").classList.remove("items-center");
    document.getElementById("navmain").classList.remove("py-3");
  };
  const closeNav = () => {
    setNav(false);
    document.getElementById("navmain").classList.add("items-center");
    document.getElementById("navmain").classList.add("py-3");
  };
  const location = useLocation();
  return (
    <div>
      <div className="  z-[80] w-full ">
        <nav className="     ">
          <div id="navmain" className={`py-2 w-full  fixed    bg-white z-10  `}>
            <div className={` sl:max-w-[1200px] px-6 sl:px-0  m-auto   `}>
              <div className={` flex justify-between    items-center  `}>
                <div className={` `}>
                  <a href="/" className=" ">
                    <img src={pic1} alt="" className=" w-16 3xl:w-20" />
                  </a>
                </div>
                <div className="relative  pt-1 ml hidden lg:flex ">
                <form action=" " className=" flex gap-2 ">
                  <input type="search"
                  className=" border  border-[#14381f]  w-[400px] rounded  placeholder:text-xl  placeholder:text-[#14381f] pl-10   pr-3  py-1 outline-none"
                   placeholder="search"
                   
                   />
                   <CiSearch className=" absolute top-3 text-xl left-3" />
                   <button className="  border border-black hover:bg-black hover:text-white hover:transition duration-200  px-6">search</button>
                </form>
              </div>
                <div className=" flex items-center gap-6">
                  <div  className=" flex items-center gap-6  xl:gap-16">
                  <p className=" flex items-center gap-2"> <IoPersonOutline  className=" text-2xl font-light text-[#14381f] "/> <span className=" hidden lg:flex">Account</span></p>
                   <p className=" flex items-center gap-2"> <IoCartOutline  className=" text-2xl font-light text-[#14381f] "/><span className=" hidden lg:flex">Cart</span></p>
                  </div>
                  <div className=" lg:hidden">
                    {!nav ? (
                      <FaBars
                        className={`text-[#14381f] text-2xl `}
                        onClick={isOpen}
                      />
                    ) : (
                      <div id="ul" className="  right-0 h-full  bg-[#14381f]  fixed">
                        <div className="  pt-6  pb-3 ">
                          <div className=" flex items-center justify-between px-6">
                            <div className=" "></div>
                            <div className=" text-end" onClick={closeNav}>
                              <FaTimes className="  text-2xl  text-white " />
                            </div>
                          </div>
                        </div>
                        <div className="  pt-10 ">
                          <ul className=" text-white gap-6 px-6 space-y-8 ">
                            <div>
                              <a
                                href="/"
                                className={`  ${
                                  location.pathname === "/"
                                    ? "text-white text-[0.9rem] font-semibold"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  HOME
                                </li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Inverter"
                                className={` ${
                                  location.pathname === "/Inverter"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : " text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  INVERTERS
                                </li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Lithium"
                                className={` ${
                                  location.pathname === "/Lithium"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : " text-[0.9rem]"
                                }`}
                              >
                                <li className="  border-b py-1 border-white">
                                  LITHIUM BATTRIES
                                </li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Acid"
                                className={` ${
                                  location.pathname === "/Acid"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  ACID BATTERIES
                                </li>
                              </a>
                            </div>
                             <div>
                              <a
                                href="/Solar"
                                className={` ${
                                  location.pathname === "/Solar"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  SOLAR PANELS
                                </li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Tubular"
                                className={` ${
                                  location.pathname === "/Tubular"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  TUBULAR BATTERIES
                                </li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Products"
                                className={` ${
                                  location.pathname === "/Products"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : " text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  ALL PRODUCTS
                                </li>
                              </a>
                            </div>
                             <div>
                              <a
                                href="/Contacts"
                                className={` ${
                                  location.pathname === "/Contacts"
                                    ? "  text-white  font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  ABOUT US
                                </li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Contacts"
                                className={` ${
                                  location.pathname === "/Contacts"
                                    ? "  text-white  font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                {" "}
                                <li className="  border-b py-1 border-white">
                                  CONTACT US
                                </li>
                              </a>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative  pt-1 ml lg:hidden ">
                <form action="">
                  <input type="search"
                  className=" border  border-black w-full rounded-full  placeholder:text-xl  placeholder:text-black pl-10   pr-3  py-1 outline-none"
                   placeholder="search"
                   
                   />
                   <CiSearch className=" absolute top-2 text-xl left-3" />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
