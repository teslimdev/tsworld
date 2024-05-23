import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../Compnents";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectFade, EffectCoverflow } from "swiper/modules";
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
  const [items, setItems] = useState([]);
  const [recentlyClickedItems, setRecentlyClickedItems] = useState(
    JSON.parse(localStorage.getItem("recentlyClickedItems")) || []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const shuffledItems = shuffleArray(itemsData);
    const slicedItems = shuffledItems.slice(0, 12);
    setItems(slicedItems);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
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

  if (loading) {
    return (
      <div className="fflex justify-center items-center relative container  bg-gray-300  h-svh">
        <div className="absolute top-[20rem]  sl:top-[25rem] box border"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-300">
      <Header />
      <div className="pt-[7.3rem] lg:pt-[4.3rem]">
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
      <div className="bg-gray-300 ">
        <h2 className="py-3 px-6">Good Deals!!!</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 m-auto px-6 gap-3 md:gap-4 lg:gap-6 lg:max-w-[1200px] item">
          {items.map((item) => (
            <div key={item.itemId} onClick={() => handleItemClick(item)}>
              <Link
                to={{
                  pathname: `/description/${item.itemId}`,
                  state: { item },
                }}
              >
                <div className="shadow-2xl h-[12rem] grid grid-cols-2">
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
                    <p className="pt-5">{item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10 bg-gray-300">
        <div className="bg-gray-700">
          <h2 className="px-6 max-w-[1200px] m-auto py-2 text-white text-[1.1rem] uppercase">
            recently viewed
          </h2>
        </div>
        <div className="px-6 max-w-[1200px] m-auto pt-7">
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
              loop={true}
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
              {recentlyClickedItems.map((item) => (
                <SwiperSlide key={item.itemId}>
                  <Link to={{
                    pathname: `/description/${item.itemId}`,
                    state: { item },
                  }}>
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
                        <p className="pt-5">{item.price}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
