import React from "react";
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
const Description = () => {
  return (
    <div>
      <Header />
      <div className=" bg-gray-300">
        <div className="max-w-[400px] pt-28 px-3 md:hidden pb-3">
  <div className="relative overflow-auto max-h-[300px] custom-scrollbar">
    <div className="flex max-w-[1200px] gap-3 pt-4">
      <img src={pic4} alt="" className="w-[250px] h-[250px]" />
      <img src={pic4} alt="" className="w-[250px] h-[250px]" />
      <img src={pic4} alt="" className="w-[250px] h-[250px]" />
      <img src={pic4} alt="" className="w-[250px] h-[250px]" />
    </div>
  </div>
</div>
        <div className=" max-w-[300px] hidden md:block pt-28 pb-10 relative">
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
              <Slides image={pic4} />
            </SwiperSlide>
            <SwiperSlide>
              <Slides image={pic4} />
            </SwiperSlide>
            <SwiperSlide>
              <Slides image={pic4} />
            </SwiperSlide>
          </Swiper>
          <div className="     ">
            <div className="swiper-pagination   flex gap-4  justify-center  "></div>
          </div>
        </div>
        <div>
               
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Description;
