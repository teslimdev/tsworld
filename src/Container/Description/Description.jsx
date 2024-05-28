import React, { useEffect, useState, useCallback } from "react";
import { Footer, Header } from "../../Compnents";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Slides from "../../Compnents/Slides";
import itemsData from "../../../src/itemsData.json";
import descriptionData from "../../../src/descriptionData.json";
import power4 from "../../../src/Assets/power4.png";
import power5 from "../../../src/Assets/power5.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

const images = {
  "power4.png": power4,
  "power5.png": power5,
};

const Description = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 1024);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingYouMayLike, setLoadingYouMayLike] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1); // State for item quantity
  const [initialQuantity, setInitialQuantity] = useState(1); // State for initial quantity

  useEffect(() => {
    const shuffledItems = shuffleArray(itemsData);
    const slicedItems = shuffledItems.slice(0, 6);
    setItems(slicedItems);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 1024 ? true : isExpanded);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded]);

  useEffect(() => {
    if (itemId) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const selectedItem = descriptionData.find((item) => item.itemId === itemId);
        setItem(selectedItem);
        setIsLoading(false);
      }, 3000);

      // Load quantity from local storage for the current item
      const storedQuantity = localStorage.getItem(`quantity_${itemId}`);
      if (storedQuantity) {
        const parsedQuantity = parseInt(storedQuantity);
        setQuantity(parsedQuantity);
        setInitialQuantity(parsedQuantity); // Set initial quantity
      }

      return () => clearTimeout(timer);
    }
  }, [itemId]);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleItemClick = useCallback((clickedItem) => {
    setLoadingYouMayLike(true);
    const timer = setTimeout(() => {
      setLoadingYouMayLike(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle expansion state
  };

  const handleAddToCartClick = () => {
    console.log("Adding item to cart:", item); // Debug log
    if (item) {
      const isItemInCart = cartItems.some(
        (cartItem) => cartItem.itemId === item.itemId
      );
      console.log("Is item already in cart?", isItemInCart); // Debug log

      if (!isItemInCart) {
        const updatedCartItems = [...cartItems, item];
        console.log("Updated cart items:", updatedCartItems); // Debug log
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        // Set initial quantity to 1 when adding the item to cart
        setQuantity(1);
        localStorage.setItem(`quantity_${item.itemId}`, 1); // Save quantity to localStorage
      } else {
        console.log("Item is already in the cart");
      }
    }
  };

const handleChangeQuantity = (newQuantity) => {
  // Ensure quantity does not go below 1
  newQuantity = Math.max(newQuantity, 0);

  // If the new quantity is 0, change back to the Add to Cart button
  if (newQuantity === 0) {
    // Reset cart items and remove quantity from local storage
    setCartItems([]);
    localStorage.removeItem(`quantity_${itemId}`);
  } else {
    // Update local storage with the new quantity
    localStorage.setItem(`quantity_${itemId}`, newQuantity);
  }

  // Update quantity state
  setQuantity(newQuantity);
};







  if (isLoading || loadingYouMayLike) {
    return (
      <div className="flex justify-center items-center relative container w-full bg-gray-400 h-screen">
        <div className="absolute top-[20rem] sl:top-[25rem] box w-full"></div>
      </div>
    );
  }

  if (!item) {
    return <div>No item found for itemId: {itemId}</div>;
  }

  // Check if item is already in cart
  const isItemInCart = cartItems.some((cartItem) => cartItem.itemId === item.itemId);

  // Render plus and minus buttons with quantity if item is in cart
 const addToCartButton = isItemInCart ? (
  <div className="flex items-center gap-2 w-full shadow-md">
    {/* Minus button */}
    <div className="w-16 h-10 bg-gray-800">
      <button className="border border-gray-800 rounded-md w-full h-full text-[1rem] text-gray-200 " onClick={() => handleChangeQuantity(quantity - 1)}>-</button>
    </div>
    <span className="w-full text-center">{quantity}</span>
    {/* Plus button */}
    <div className="w-16 h-10 bg-gray-800">
       <button className="border border-gray-800 rounded-md w-full h-full text-[1rem] text-gray-200 " onClick={() => handleChangeQuantity(quantity + 1)}>+</button>
    </div>
  </div>
) : (
  <button onClick={handleAddToCartClick} className="bg-gray-800 text-white py-2 w-full rounded-md">
    ADD TO CART
  </button>
);


  return (
    <div>
      <Header />
      <div className="bg-gray-800">
        <div className="pt-24 lg:pt-32">
          <div className="bg-gray-300 px-3 flex flex-col pt-6 pb-6 lg:pb-20 lg:rounded-t-lg md:px-6 lg:max-w-[900px] m-auto md:gap-10 md:flex-row">
            <div className="max-w-[400px] m-auto md:hidden pb-3">
              <div className="relative overflow-auto max-h-[300px] custom-scrollbar">
                <div className="flex max-w-[1200px] gap-3 pt-4">
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={images[image]}
                      alt={`Product ${index + 1}`}
                      className="w-[250px] h-[250px]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="max-w-[300px] hidden md:block pb-10 relative">
              <Swiper
                modules={[Pagination, A11y, EffectFade, Autoplay]}
                autoplay={{
                  delay: 7000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: true,
                }}
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination-top",
                  clickable: true,
                }}
                scrollbar={{ draggable: true }}
              >
                {item.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Slides image={images[image]} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className=" pt-3">
                <div className="swiper-pagination-top flex gap-4 justify-center"></div>
              </div>
            </div>
            <div className="md:pt-3 max-w-[400px] m-auto md:m-0">
              <p className="text-[0.9rem]">
                {isExpanded
                  ? item.description
                  : item.description.substring(
                      0,
                      isExpanded ? item.description.length : 100
                    )}
                {item.description.length > 100 && (
                  <button
                    onClick={handleToggleExpand}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {isExpanded ? "Show Less" : "Show More"}{" "}
                    <MdKeyboardArrowRight />
                  </button>
                )}
              </p>
              <p className="text-[0.9rem] pt-1">Brand: {item.brand}</p>
              <p className="text-[1.2rem] text-gray-800 pt-1 font-bold">
                {item.price}
              </p>
              <p className="text-[0.9rem] pt-1">{item.stockStatus}</p>
              <p className="text-[0.9rem] pt-1">{item.deliveryInfo}</p>
              <div className="hidden md:block pt-6 relative">
                {addToCartButton}
                {!isItemInCart && (
                  <BsFillCartPlusFill className="absolute top-8 left-12 text-gray-200 text-[1.3rem]" />
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-300 lg:bg-gray-800 pt-2">
            <div className="lg:max-w-[900px] m-auto bg-gray-800 lg:bg-gray-600 py-2 px-4">
              <h2 className="text-gray-200">PRODUCT DETAILS</h2>
            </div>
            <div className="px-3 lg:px-0 lg:max-w-[900px] m-auto pt-2 pb-3 lg:pt-0">
              <ul className="bg-gray-300 shadow-2xl shadow-slate-700 mt-1 lg:mt-0 pb-12">
                <li className="py-2 description ">
                  <p
                    className="text-[1.2rem] flex items-center border-b pl-4 border-gray-700 pb-2 justify-between px-3 cursor-pointer"
                    onClick={handleToggleExpand}
                  >
                    {isExpanded ? "Description" : "Description"}{" "}
                    <MdKeyboardArrowRight />
                  </p>
                  <div className="px-5 pt-3">
                    {isExpanded ? (
                      <div>
                        {item.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>
                            <h2 className="text-[1rem] font-bold pt-5 pb-2">
                              {detail.sectionTitle}
                            </h2>
                            <ul className="list-disc space-y-1 pl-6 ">
                              {detail.content.map((item, index) => (
                                <li key={index} className="text-[0.9rem]">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[0.9rem] pt-1">{item.description}</p>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-8 max-w-[900px] bg-gray-300 m-auto">
            <div className="">
              <div className="bg-gray-700 max-w-[900px] m-auto">
                <h2 className="px-6 py-2 text-white text-[1.1rem]">
                  You May Also Like
                </h2>
              </div>
            </div>
            <div className="max-w-[800px] m-auto pt-6 px-6 sl:px-0 like">
              <Swiper
                modules={[Pagination, A11y, Autoplay]}
                autoplay={{
                  delay: 5000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  300: {
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
              >
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      to={`/description/${item.itemId}`}
                      key={index}
                      onClick={() => handleItemClick(item)}
                    >
                      <div className="shadow-2xl w-fit h-[12rem] grid grid-cols-2">
                        <img
                          src={images[item.imageSrc]}
                          alt=""
                          className="h-[192px] w-fit"
                        />
                        <div className="rounded-e-lg bg-gray-500 px-3 py-3">
                          <h3 className="text-[.9rem] pb-2">{item.title}</h3>
                          <ul className="list-disc pl-4">
                            {item.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                          <p className="pt-5">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              {loadingYouMayLike && <div>Loading...</div>}
            </div>
          </div>
          <div className="md:hidden relative small sticky-button-container flex gap-4 items-center shadow-[3rem] border-gray-700 ">
            <div className="w-12 h-10">
              <FaPhoneAlt className="border border-gray-800 rounded-md w-full h-full py-2 text-[1rem]" />
            </div>
            {addToCartButton}
            {!isItemInCart && (
              <BsFillCartPlusFill className="absolute top-4 left-24 text-gray-200 text-[1.3rem]" />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Description;