import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import pic1 from "../../src/Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // State for cart item count
  const location = useLocation();

  // Function to calculate total cart item count
 const updateCartItemCount = () => {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    const totalQuantity = JSON.parse(storedCartItems).reduce((total, cartItem) => {
      const storedQuantity = localStorage.getItem(`quantity_${cartItem.itemId}`);
      return total + (storedQuantity ? parseInt(storedQuantity) : 0);
    }, 0);
    setCartItemCount(totalQuantity);
    // Update localStorage with the latest count
    localStorage.setItem("cartItemCount", totalQuantity.toString());
  } else {
    setCartItemCount(0);
    localStorage.setItem("cartItemCount", "0");
  }
};



  useEffect(() => {
    // Calculate total cart item count when component mounts
    updateCartItemCount();

    // Listen for changes in local storage
    const storageListener = () => {
      updateCartItemCount();
    };
    window.addEventListener("storage", storageListener);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("storage", storageListener);
    };
  }, []);

  useEffect(() => {
    // Update cart item count whenever cart items change
    updateCartItemCount();
  }, [location.pathname]); // Listen for changes in location.pathname

  // Function to handle changes in cart quantity
  const handleCartQuantityChange = () => {
    // Update the cart item count
    updateCartItemCount();
  };

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
  

  return (
    <div>
      <div className="z-[80] w-full">
        <nav>
          <div id="navmain" className="py-2 w-full fixed bg-gray-300 shadow-lg z-10">
            <div className="sl:max-w-[1200px] px-6 sl:px-0 m-auto">
              <div className="flex justify-between items-center">
                <div>
                  <a href="/" className="">
                    <img src={pic1} alt="" className="w-16 3xl:w-20" />
                  </a>
                </div>
                <div className="relative pt-1 ml hidden lg:flex">
                  <form action="" className="flex gap-2">
                    <input
                      type="search"
                      className="bg-gray-400 w-[400px] border border-gray-700 rounded placeholder:text-xl placeholder:text-white pl-10 pr-3 py-1 outline-none"
                      placeholder="search"
                    />
                    <CiSearch className="absolute top-3 text-xl left-3" />
                    <button className="border border-black hover:bg-black hover:text-white hover:transition duration-200 px-6">
                      search
                    </button>
                  </form>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-6 xl:gap-16">
                    <a href="/Signup">
                      <p className="flex items-center gap-2">
                        <IoPersonOutline className="text-2xl font-light text-gray-700" />
                        <span className="hidden lg:flex">Account</span>
                      </p>
                    </a>
                    <a href="/Cart">
                      <div className=" relative   flex  gap-3  ">
                       <div>
                         <IoCartOutline className="text-2xl font-light text-gray-700" />
                        {cartItemCount > 0 && (
                          <div className="absolute  top-[-14px] right-[-10px] lg:right-7 bg-gray-700 rounded-full w-fit h-fit">
                            <p className="px-2 text-center rounded-full text-[0.7rem] text-gray-200">{cartItemCount}</p>
                          </div>
                        )}
                       </div>
                        <span className="hidden lg:flex">Cart</span>
                      </div>
                     
                    </a>
                  </div>
                  <div className="lg:hidden">
                    {!nav ? (
                      <FaBars className="text-gray-700 text-2xl cursor-pointer" onClick={isOpen} />
                    ) : (
                      <div id="ul" className="right-0 h-full bg-gray-600 fixed">
                        <div className="pt-6 pb-3">
                          <div className="flex items-center justify-between px-6">
                            <div></div>
                            <div className="text-end" onClick={closeNav}>
                              <FaTimes className="text-2xl cursor-pointer text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="pt-10">
                          <ul className="text-white gap-6 px-6 space-y-8">
                            <div>
                              <a
                                href="/"
                                className={`${
                                  location.pathname === "/"
                                    ? "text-white text-[0.9rem] font-semibold"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">HOME</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Inverter"
                                className={`${
                                  location.pathname === "/Inverter"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">INVERTERS</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Lithium"
                                className={`${
                                  location.pathname === "/Lithium"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">LITHIUM BATTERIES</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Acid"
                                className={`${
                                  location.pathname === "/Acid"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">ACID BATTERIES</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Solar"
                                className={`${
                                  location.pathname === "/Solar"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">SOLAR PANELS</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Tubular"
                                className={`${
                                  location.pathname === "/Tubular"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">TUBULAR BATTERIES</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Products"
                                className={`${
                                  location.pathname === "/Products"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">ALL PRODUCTS</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Logo"
                                className={`${
                                  location.pathname === "/Contacts"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">ABOUT US</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/Contacts"
                                className={`${
                                  location.pathname === "/Contacts"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">CONTACT US</li>
                              </a>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative pt-1 ml lg:hidden">
                <form action="">
                  <input
                    type="search"
                    className="bg-gray-400 w-full rounded-full border border-gray-700 placeholder:text-xl placeholder:text-black pl-10 pr-3 py-1 outline-none"
                    placeholder="search"
                  />
                  <CiSearch className="absolute top-3  text-xl left-3" />
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
