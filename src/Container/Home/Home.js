import pic1 from "../../../src/Assets/logo.png";
import Header from "../../Compnents/Header";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, EffectCards } from "swiper/modules";
import { Slide } from "../../Compnents";
import power from "../../../src/Assets/power.jpg";
import power2 from "../../../src/Assets/power2.png";
import power3 from "../../../src/Assets/power3.png";
import power4 from "../../../src/Assets/power4.png";
import power5 from "../../../src/Assets/power5.png";
import power6 from "../../../src/Assets/power6.png";
import power7 from "../../../src/Assets/power7.png";
import power8 from "../../../src/Assets/power8.png";
import power9 from "../../../src/Assets/power9.png";
import itemsData from "../../../src/itemsData.json";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    // Shuffle the items to get random order
    const shuffledItems = shuffleArray(itemsData);
    // Select only the first 10 items
    const slicedItems = shuffledItems.slice(0, 15);
    setItems(slicedItems);
  }, []);

  // Function to shuffle array items
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  const [lithiumItems, setLithiumItems] = useState([]);

  useEffect(() => {
    // Filter items with id 'lithium'
    const filteredItems = itemsData.filter((item) => item.id === "lithium");
    setLithiumItems(filteredItems);
  }, []);
  return (
    <div className="bg-[#f2f2f2]">
      <Header />
      <div className="pt-[7.3rem] lg:pt-[4.3rem]">
        <div className="bg-[#14381f] py-4">
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
      <div className="bg-[#f2f2f2] ">
        <h2 className="py-3 px-6">Good Deals!!!</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 m-auto px-6 gap-3 md:gap-4 lg:gap-6 lg:max-w-[1200px] item">
          {items.map((item, index) => (
            <Link to="/Description" key={index}>
              {" "}
              {/* Link to the description page */}
              <div className="shadow-2xl h-[12rem] grid grid-cols-2">
                <img
                  src={images[item.imageSrc]}
                  alt=""
                  className="h-[192px] w-full"
                />
                <div className="rounded-e-lg bg-[#14381f] text-white px-3 py-3">
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
          ))}
        </div>
      </div>

      <div className=" py-10 ">
        <div className="  bg-[#14381f] ">
          <h2 className="  px-6 max-w-[1200px] m-auto py-2 text-white text-[1.1rem] uppercase ">
            {" "}
            lithium Battries
          </h2>
        </div>
        <div className="lithium max-w-[1200px] m-auto pt-6 px-6">
          <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay, EffectCoverflow]}
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
            breakpoints={{
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024:{
                slidesPerView:3,
                spaceBetween: 20,
              }
          
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
            {lithiumItems.map((item, index) => (
        <SwiperSlide key={index} className="shadow-2xl w-[24rem] flex-shrink-0">
          <Link to={`/Description`}>
            <div className="grid grid-cols-2">
              <img src={power4} alt="" className="w-full h-[192px]" />
              <div className="bg-[#14381f] text-white py-3 px-4">
                <h3 className="text-[.9rem] pb-2">{item.title}</h3>
                <ul className="list-disc pl-4">
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="pt-2">{item.price}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
