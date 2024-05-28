import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import call from "../../../src/Assets/call.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import power4 from "../../../src/Assets/power4.png";
import itemsData from "../../../src/itemsData.json";
import { Footer } from "../../Compnents";
const images = {
  "power4.png": power4,
};
const Contacts = () => {
  const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
  const [recentlyClickedItems, setRecentlyClickedItems] = useState(
    JSON.parse(localStorage.getItem("recentlyClickedItems")) || []
  );

  useEffect(() => {
    const shuffledItems = shuffleArray(itemsData);
    const slicedItems = shuffledItems.slice(0, 6);
    setItems(slicedItems);
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
          <div className="flex items-center justify-between max-w-[1200px] m-auto px-4 py-2">
            <p className="text-whit text-3xl">
              <Link to="/">
                <IoIosArrowRoundBack />
              </Link>
            </p>
            <h2 className="text-whit text-[1.1rem] uppercase">NEED HELP?</h2>
            <div></div>{" "}
            {/* This empty div creates space for the center alignment */}
          </div>
        </div>
      </div>

      <div className=" pt-10 md:pt-16 bg-gray-200">
        <div className=" max-w-[1200px] bg-gray-300 m-auto">
          <div className=" py-16 px-3  md:grid grid-cols-2 md:max-w-[700px] lg:max-w-[1000px] gap-8 m-auto md:place-items-center">
            <img
              src={call}
              alt=""
              className=" w-full h-[250px]  md:order-2 md:h-[300px] md:w-[500px]  rounded-tr-[3rem] rounded-bl-[3rem]"
            />
            <div>
              <p className=" text-[0.9rem] md:order-1 pt-2 md:pt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto aut rem quos adipisci distinctio labore ea, quisquam
                atque? Vitae, expedita?
              </p>
              <div className="  md:flex justify-center gap-20">
              <div className=" text-center md:text-start pt-6 ">
                  <a href="tel:+2348184370911" className=" relative">
                    <button className=" bg-gray-700  text-white py-2 px-6 rounded-md w-fit ">
                      Call Us
                    </button>
                    <div className=" absolute w-10 h-10 top-[-10px] bg-gray-500   flex justify-center items-center rounded-full left-[-20px] ">
                      <FaPhoneAlt className="     text-white   " />
                    </div>
                  </a>
                </div>
                <div className=" text-center md:text-start pt-6  ">
                  <a href="https://wa.link/jzu6e1" className=" relative ">
                    <button className=" bg-gray-700  text-white py-2 px-6 rounded-md w-fit ">
                      Chat with Us
                    </button>
                    <div className=" absolute w-10 h-10 top-[-10px] bg-gray-500  flex justify-center items-center rounded-full left-[-20px] ">
                      <IoChatboxEllipses className="     text-white   " />
                    </div>
                  </a>
                </div>
                
              </div>
              <p className=" text-[0.9rem] md:order-1 pt-6 hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto aut rem quos adipisci distinctio labore ea, quisquam
                atque? Vitae, expedita?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200">
        <div className="  pb-10 px-3">
          <h2 className=" text-center py-6 text-[1.2rem]">
            {" "}
            Frequently Asked Questions
          </h2>

          <div>
            <div className=" max-w-[700px] bg-gray-700  border  m-auto  py-2 gap-6 ">
              <h3 className=" text-white md:text-center  pl-4 text-[1.1rem] ">
                How to track your order
              </h3>
            </div>
            <div className=" max-w-[700px] m-auto">
              <p className=" text-[0.9rem] py-3">
                To track your delivery on TS-WORLD you can follow this steps
              </p>
              <ul className=" space-y-2">
                <li className=" text-[0.9rem]">
                  <p>step 1: Lorem ipsum dolor sit amet.</p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 2: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Debitis et sapiente commodi dolor quidem animi.
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 3: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime consectetur animi vel sunt soluta reprehenderit
                    dolore dignissimos?
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 4: Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Consectetur dolore possimus perspiciatis, quia
                    praesentium quam aliquam vero repellendus.
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 5: Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Asperiores non recusandae quibusdam unde quas,
                    accusamus ab autem aliquam qui!
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 6: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Qui commodi quisquam sunt quia ipsa aliquid
                    repudiandae fugiat incidunt a culpa!
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className=" pt-8">
            <div className=" max-w-[700px] bg-gray-700  border  m-auto  py-2 gap-6 ">
              <h3 className=" text-white md:text-center  pl-4 text-[1.1rem] ">
                How to track your order
              </h3>
            </div>
            <div className=" max-w-[700px] m-auto">
              <p className=" text-[0.9rem] py-3">
                To track your delivery on TS-WORLD you can follow this steps
              </p>
              <ul className=" space-y-2">
                <li className=" text-[0.9rem]">
                  <p>step 1: Lorem ipsum dolor sit amet.</p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 2: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Debitis et sapiente commodi dolor quidem animi.
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 3: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime consectetur animi vel sunt soluta reprehenderit
                    dolore dignissimos?
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 4: Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Consectetur dolore possimus perspiciatis, quia
                    praesentium quam aliquam vero repellendus.
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 5: Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Asperiores non recusandae quibusdam unde quas,
                    accusamus ab autem aliquam qui!
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 6: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Qui commodi quisquam sunt quia ipsa aliquid
                    repudiandae fugiat incidunt a culpa!
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className=" pt-8">
            <div className=" max-w-[700px] bg-gray-700  border  m-auto  py-2 gap-6 ">
              <h3 className=" text-white md:text-center  pl-4 text-[1.1rem] ">
                How to track your order
              </h3>
            </div>
            <div className=" max-w-[700px] m-auto">
              <p className=" text-[0.9rem] py-3">
                To track your delivery on TS-WORLD you can follow this steps
              </p>
              <ul className=" space-y-2">
                <li className=" text-[0.9rem]">
                  <p>step 1: Lorem ipsum dolor sit amet.</p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 2: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Debitis et sapiente commodi dolor quidem animi.
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 3: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Maxime consectetur animi vel sunt soluta reprehenderit
                    dolore dignissimos?
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 4: Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Consectetur dolore possimus perspiciatis, quia
                    praesentium quam aliquam vero repellendus.
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 5: Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Asperiores non recusandae quibusdam unde quas,
                    accusamus ab autem aliquam qui!
                  </p>
                </li>
                <li className=" text-[0.9rem]">
                  <p>
                    step 6: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Qui commodi quisquam sunt quia ipsa aliquid
                    repudiandae fugiat incidunt a culpa!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200">
     <div className=" py-6">
          <div className="bg-gray-700">
          <h2 className="px-6 max-w-[1200px] m-auto py-2 text-white text-[1.1rem] ">
            You May Also Like
          </h2>
        </div>
     </div>
          <div className=" pb-8">
        <div className="max-w-[1200px] m-auto  px-6 sl:px-0 like">
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              className=""
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                   to={{
                  pathname: `/description/${item.itemId}`,
                  state: { item }
                    }}
                    onClick={() => handleItemClick(item)} // Add this onClick event
                  >
                    <div className="shadow-2xl w-fit h-[12rem] grid grid-cols-2">
                      <img
                        src={images[item.imageSrc]}
                        alt=""
                        className="h-[192px] w-fit"
                      />
                      <div className="rounded-e-lg bg-gray-500  px-3 py-3">
                        <h3 className="text-[.9rem] pb-2">{item.title}</h3>
                        <ul className="list-disc pl-4">
                          {item.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <p className="pt-5">₦ {item.price}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts;
