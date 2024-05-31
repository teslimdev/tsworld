import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
const Pages = () => {
  return (
    <div>
      <div className=" w-[300px]   ">
        <ul className=" list-none border  grid gap-3  bg-gray-400 ">
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>HOME</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>INVERTERS</p><MdKeyboardArrowRight /> </li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>LITHIUM BATTERIES</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>ACID BATTERIES</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>SOLAR PANELS</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>TUBULAR BATTERIES</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>ALL PRODUCTS</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-b border-white px-3 py-2 flex items-center justify-between"><p>ABOUT US</p> <MdKeyboardArrowRight /></li>
          </a>
          <a href="/">
            <li className=" border-white px-3 py-2 flex items-center justify-between"><p>CONTACT US</p> <MdKeyboardArrowRight /></li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Pages;
