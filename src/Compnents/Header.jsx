import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import pic1 from "../../src/Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // State for cart item count
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="z-10">
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
                <div
                  onClick={toggleDropdown}
                  className={`categories cursor-pointer hidden lg:flex relative ${dropdownOpen ? 'bg-gray-700 text-gray-200  w-48 py-2 px-3 rounded-tl-md rounded-tr-md' : ' w-48 bg-gray-500 py-2 px-3 rounded-md'}`}
                >
                  <h3 className="flex items-center justify-between w-full gap-1">
                    Categories
                    <IoIosArrowDown />
                  </h3>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-gray-300 border text-gray-700 border-gray-500 shadow-xl rounded-bl-md rounded-br-md w-48 z-20">
                      <ul className="py-2">
                        <a href="/Inverter"><li className="px-4 py-2 hover:bg-gray-100">Inverters</li></a>
                        <a href="/Lithium"><li className="px-4 py-2 hover:bg-gray-100">Lithium Batteries</li></a>
                        <a href="/Acid"><li className="px-4 py-2 hover:bg-gray-100">Acid Batteries</li></a>
                        <a href="/Solar"><li className="px-4 py-2 hover:bg-gray-100">Solar Panels</li></a>
                        <a href="/Tubular"><li className="px-4 py-2 hover:bg-gray-100">Tubular Batteries</li></a>
                        <a href="/Products"><li className="px-4 py-2 hover:bg-gray-100">All Products</li></a>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="relative pt-1 ml hidden lg:flex">
                  <form action="" className="flex gap-2">
                    <input
                      type="search"
                      className="bg-gray-400 w-[300px] sl:w-[400px] border border-gray-700 rounded placeholder:text-xl placeholder:text-white pl-10 pr-3 py-1 outline-none"
                      placeholder="search"
                    />
                    <CiSearch className="absolute top-3 text-xl left-3" />
                    <button className="border border-gray-900 hover:bg-gray-900  text-gray-800 hover:text-gray-200 hover:transition duration-200 px-6">
                      search
                    </button>
                  </form>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-6 xl:gap-16">
                    <a href="/Account">
                      <p className="flex items-center gap-2">
                        <IoPersonOutline className="text-2xl font-light text-gray-700" />
                        <span className="hidden lg:flex">Account</span>
                      </p>
                    </a>
                    <a href="/Cart">
                      <div className="relative flex gap-3">
                        <div>
                          <IoCartOutline className="text-2xl font-light text-gray-700" />
                          {cartItemCount > 0 && (
                            <div className="absolute top-[-14px] right-[-10px] lg:right-7 bg-gray-700 rounded-full w-fit h-fit">
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
                     <div  className={`overlay ${nav ? 'bg-black w-full' : 'bg-transparent'}`}>
                       <div id="ul" className="right-0 h-full overflow-scroll pb-10 bg-gray-600  fixed  ">
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
                                href="/Enquiries"
                                className={`${
                                  location.pathname === "/Contacts"
                                    ? "text-white font-semibold text-[0.9rem]"
                                    : "text-[0.9rem]"
                                }`}
                              >
                                <li className="border-b py-1 border-white">ENQUIRIES</li>
                              </a>
                            </div>
                            <div>
                              <a
                                href="/About"
                                className={`${
                                  location.pathname === "/Account"
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
                  <CiSearch className="absolute top-3 text-xl left-3" />
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
