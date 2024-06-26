import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../Compnents";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import { Slide } from "../../Compnents";
import itemsData from "../../../src/itemsData.json";
import power from "../../../src/Assets/power.jpg";
import power2 from "../../../src/Assets/power2.png";
import power3 from "../../../src/Assets/power3.png";
import power4 from "../../../src/Assets/power4.png";
import power5 from "../../../src/Assets/power5.png";
import power6 from "../../../src/Assets/power6.png";
import power7 from "../../../src/Assets/power7.png";
import power8 from "../../../src/Assets/power8.png";
import power9 from "../../../src/Assets/power9.png";

const images = {
  "power.jpg": power,
  "power2.png": power2,
  "power3.png": power3,
  "power4.png": power4,
  "power5.png": power5,
  "power6.png": power6,
  "power7.png": power7,
  "power8.png": power8,
  "power9.png": power9,
};

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [recentlyClickedItems, setRecentlyClickedItems] = useState(
    JSON.parse(localStorage.getItem("recentlyClickedItems")) || []
  );
  const [loading, setLoading] = useState(false); // Set initial loading state to false
 
  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null;

    if (!isFirstVisit) {
      // Not first visit, set loading state to true
      setLoading(true);
      // Fetch items
      fetchItems();
    } else {
      // First visit, fetch items and disable loading
      fetchItems();
      localStorage.setItem("isFirstVisit", "false");
    }
  }, []);

  const fetchItems = () => {
    const shuffledItems = shuffleArray(itemsData);
    const slicedItems = shuffledItems.slice(0, 12);
    setItems(slicedItems);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false); // After fetching items, set loading state to false
    }, 2000);

    return () => clearTimeout(timer);
  };

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

    // Redirect to the Description page with itemId
    navigate(`/description/${item.itemId}`);
  };

  return (
    <div className=" ">
      {!loading && <Header />}{" "}
      {/* Render header only when loading is complete */}
      {loading && (
         <div class="loading-container absolute top-[15rem]">
    <div class="loading"></div>
    <div id="loading-text">loading</div>
</div>
      )}
      {!loading && (
        <>
         <div className="lg:bg-gray-600">
           <div className="pt-[7.3rem] lg:pt-[4.3rem] w-full  relative   ">
            <div className="bg-gray-700 py-4">
              <div className="max-w-[400px] m-auto">
                <Swiper
                  modules={[
                    Pagination,
                    A11y,
                    EffectFade,
                    Autoplay,
                    EffectCoverflow,
                  ]}
                  effect="f"
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
                  slidesPerView={1}
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                  }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide>
                    <Slide text={"CALL TO ORDER: 08184370911"} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slide text={"REDEFINE THE WAY YOU CHARGE"} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

        <div className=" max-w-[1000px] bg-gray-300  m-auto">
           <div className=" ">
           <div className="bg-gray- ">
         <a href="/Account">   <h2 className="py-3 px-6">Good Deals!!!</h2></a>
            <div className="grid md:grid-cols-2  lg:max-w-[900px]  m-auto bg-gray-300  bg-transparent  px-6 sl:px-0 gap-3 md:gap-4 lg:gap-6  item">
              {items.map((item) => (
                <div key={item.itemId} onClick={() => handleItemClick(item)}>
                  <Link
                    
                  >
                    <div className="shadow-2xl h-[12rem] grid grid-cols-2 relative">
                      <img
                        src={images[item.imageSrc]}
                        alt=""
                        className="h-[192px] w-full"
                      />
                      <div className="rounded-e-lg bg-gray-500 tex px-3 py-3">
                        <h3 className="text-[.9rem] pb-2">{item.title}</h3>
                        <ul className="list-disc pl-4">
                          {item.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <p className="absolute bottom-4">₦ {item.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="py-10 bg-gray-300 sl:bg-transparent ">
            <div className="bg-gray-700 ">
              <h2 className="px-6 sl:px-0  lg:max-w-[900px]  m-auto py-2 text-white text-[1.1rem] uppercase">
                recently viewed
              </h2>
            </div>
            <div className="px-6 sl:px-0 lg:max-w-[900px]  m-auto  pt-7">
              {recentlyClickedItems.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No results</p>
              ) : (
                <Swiper
                  modules={[
                    Pagination,
                    A11y,
                    EffectFade,
                    Autoplay,
                    EffectCoverflow,
                  ]}
                  effect="f"
                  speed={1200}
                  autoplay={{
                    delay: 4000,
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
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                  }}
                  scrollbar={{ draggable: true }}
                  className=""
                >
                  {recentlyClickedItems.map((item) => (
                    
                    <SwiperSlide key={item.itemId}>
                      <Link
                        to={{
                          pathname: `/description/${item.itemId}`,
                          state: { item },
                        }}
                      >
                       
                        <div className="shadow-2xl  h-[12rem] grid grid-cols-2 relative">
                          <img
                            src={images[item.imageSrc]}
                            alt=""
                            className="h-[192px] w-full"
                          />
                          <div className="rounded-e-lg bg-gray-500  px-3 py-3">
                            <h3 className="text-[.9rem] pb-2">{item.title}</h3>
                            <ul className="list-disc pl-4">
                              {item.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                            <p className="absolute bottom-4">₦ {item.price}</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
         </div>
        </div>
         </div>
        </>
      )}
      {!loading && <Footer />}{" "}
      {/* Render footer only when loading is complete */}
    </div>
  );
};

export default Home;
