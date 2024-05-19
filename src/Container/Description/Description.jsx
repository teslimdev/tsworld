import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../Compnents";
import pic4 from "../../../src/Assets/power4.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow } from "swiper/modules";
import Slides from "../../Compnents/Slides";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import power4 from "../../../src/Assets/power4.png";
import power5 from '../../../src/Assets/power5.png';
import itemsData from "../../../src/itemsData.json";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = {
  "power4.png": power4,
};

const Description = () => {
  const [items, setItems] = useState([]);
  const [recentlyClickedItems, setRecentlyClickedItems] = useState(
    JSON.parse(localStorage.getItem("recentlyClickedItems")) || []
  );
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const shuffledItems = shuffleArray(itemsData);
    const slicedItems = shuffledItems.slice(0, 6);
    setItems(slicedItems);

    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.randomIndex * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleItemClick = (item) => {
    const updatedRecentlyClickedItems = [
      item,
      ...recentlyClickedItems.filter((i) => i.id !== item.id),
    ];
    setRecentlyClickedItems(updatedRecentlyClickedItems);
    localStorage.setItem(
      "recentlyClickedItems",
      JSON.stringify(updatedRecentlyClickedItems)
    );
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-800">
        <div className="pt-24 lg:pt-32">
          <div className="bg-gray-300 px-3 flex flex-col pt-6 pb-6 lg:pb-20 lg:rounded-t-lg md:px-6 lg:max-w-[900px] m-auto md:gap-10 md:flex-row">
            <div className="max-w-[400px] m-auto md:hidden pb-3">
              <div className="relative overflow-auto max-h-[300px] custom-scrollbar">
                <div className="flex max-w-[1200px] gap-3 pt-4">
                  <img src={pic4} alt="" className="w-[250px] h-[250px]" />
                  <img src={pic4} alt="" className="w-[250px] h-[250px]" />
                  <img src={pic4} alt="" className="w-[250px] h-[250px]" />
                  <img src={pic4} alt="" className="w-[250px] h-[250px]" />
                </div>
              </div>
            </div>
            <div className="max-w-[300px] hidden md:block pb-10 relative">
              <Swiper
                modules={[
                  Pagination,
                  A11y,
                  EffectFade,
                  Autoplay,
                  EffectCoverflow,
                ]}
                effect=""
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 7000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                  waitForTransition: true,
                }}
                a11y={{
                  prevSlide: "true",
                  nextSlide: "true",
                }}
                breakpoints={{
                  768: {
                    spaceBetween: 20,
                  },
                }}
                slidesPerView={1}
                pagination={{
                  el: ".swiper-pagination-top",
                  clickable: true,
                }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <Slides image={pic4} />
                </SwiperSlide>
                <SwiperSlide>
                  <Slides image={power5} />
                </SwiperSlide>
                <SwiperSlide>
                  <Slides image={pic4} />
                </SwiperSlide>
              </Swiper>
              <div className=" pt-3">
                <div className="swiper-pagination-top flex gap-4 justify-center"></div>
              </div>
            </div>
            <div className="md:pt-3 max-w-[400px] m-auto md:m-0">
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                molestiae.
              </p>
              <p className="text-[0.9rem] pt-1">Brand: company</p>
              <p className="text-[1.2rem] text-gray-800 pt-1 font-bold">
                ₦ 260,000
              </p>
              <p className="text-[0.9rem] pt-1">In stock</p>
              <p className="text-[0.9rem] pt-1">
                Available for delivery or pick-up 24-72hrs after order is made
              </p>
              <div className="hidden md:block pt-6 relative">
                <button className="bg-gray-800 text-white py-2 w-full rounded-md">
                  ADD TO CART
                </button>
                <BsFillCartPlusFill className="absolute top-8 left-12 text-gray-200 text-[1.3rem]" />
              </div>
            </div>
          </div>
          <div className="bg-gray-300 lg:bg-gray-800 pt-2">
            <div className="lg:max-w-[900px] m-auto bg-gray-800 lg:bg-gray-600 py-2 px-4">
              <h2 className="text-gray-200">PRODUCT DETAILS</h2>
            </div>
            <div className="px-3 lg:px-0 lg:max-w-[900px] m-auto pt-2 pb-3 lg:pt-0">
              <ul className="bg-gray-300 shadow-2xl shadow-slate-700 mt-1 lg:mt-0 pb-12">
                <li className="py-2 description">
                  <p
                    className="text-[1.2rem] flex items-center border-b border-gray-700 pb-2 justify-between px-3 cursor-pointer"
                    onClick={handleToggleExpand}
                  >
                    Description <MdKeyboardArrowRight />
                  </p>
                  <div className="px-3 pt-3">
                    {isExpanded ? (
                      <div>
                        <p className="text-[0.9rem] pt-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                        </p>
                        <p className="text-[0.9rem] pt-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                        </p>
                        <p className="text-[0.9rem] pt-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                        </p>
                        <div className="pt-4">
                          <h2 className="text-[0.9rem] font-bold">Lightning</h2>
                          <ul className="list-disc space-y-1 pl-6">
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet.
                            </li>
                          </ul>
                        </div>
                        <div className="pt-6">
                          <h2 className="text-[0.9rem] font-bold">Key Features</h2>
                          <ul className="list-disc space-y-1 pl-6">
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                          </ul>
                        </div>
                        <div className="pt-6">
                          <h2 className="text-[0.9rem] font-bold">
                            What's in the box
                          </h2>
                          <ul className="list-disc space-y-1 pl-6">
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur adipisicing.
                            </li>
                          </ul>
                        </div>
                        <div className="pt-6">
                          <h2 className="text-[0.9rem] font-bold">Specifications</h2>
                          <ul className="list-disc space-y-1 pl-6">
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur.
                            </li>
                            <li className="text-[0.9rem]">
                              Lorem ipsum dolor sit amet consectetur.
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <p className="text-[0.9rem] pt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident libero sint explicabo consequatur, alias eum est ratione? Rem, eligendi.
                      </p>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800">
            <div className="">
              <div className="bg-gray-700 max-w-[900px] m-auto">
                <h2 className="px-6 py-2 text-white text-[1.1rem]">
                  You May Also Like
                </h2>
              </div>
            </div>
            <div className="pb-8 max-w-[900px] lg:px-6 bg-gray-300 m-auto">
              <div className="max-w-[800px] m-auto pt-6 px-6 sl:px-0 like">
                <Swiper
                  modules={[Pagination, A11y, Autoplay]}
                  loop={true}
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
                        to={{
                          pathname: "/description",
                          state: { item },
                        }}
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
              </div>
            </div>
          </div>
          <div className="md:hidden relative small sticky-button-container flex gap-4 items-center shadow-[3rem] border-gray-700 ">
            <div className="w-12 h-10">
              <FaPhoneAlt className="border border-gray-800 rounded-md w-full h-full py-2 text-[1rem]" />
            </div>
            <button className="bg-gray-800 text-white py-2 w-full rounded-md">
              ADD TO CART
            </button>
            <BsFillCartPlusFill className="absolute top-4 left-20 text-gray-200 text-[1.3rem]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Description;

