import pic1 from '../../../src/Assets/logo.png'
import Header from '../../Compnents/Header'
import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCoverflow, EffectCards } from "swiper/modules";
 import { Slide } from '../../Compnents';
 import power from '../../../src/Assets/power.jpg'
 import power2 from '../../../src/Assets/power2.png'
  import power3 from '../../../src/Assets/power3.png'
   import power4 from '../../../src/Assets/power4.png'
    import power5 from '../../../src/Assets/power5.png'
     import power6 from '../../../src/Assets/power6.png'
      import power7 from '../../../src/Assets/power7.png'
       import power8 from '../../../src/Assets/power8.png'
        import power9 from '../../../src/Assets/power9.png'
const Home = () => {
  return (
    <div className='bg-[#f2f2f2]'>
    <Header/>
     <div  className=' pt-[7.3rem]  lg:pt-[4.3rem]'>
      <div className=' bg-[#222222]  py-4'>
       <div className='max-w-[400px] m-auto'>
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
              <Slide text={'CALL TO ORDER: 08184370911'}/>
          
             
            </SwiperSlide>
            <SwiperSlide>
             
             <Slide text={'REDEFINE THE WAY YOU CHARGE'}/>
             
            </SwiperSlide>
          </Swiper>
       </div>
      </div>
     </div>
     <div className=' bg-[#f2f2f2] pb-28'>
      <h2 className=' py-3 px-6'>Good Deals!!!</h2>
      <div className=' grid grid-cols-2 md:grid-cols-3 m-auto px-6 gap-3 md:gap-4 lg:gap-6  lg:max-w-[1200px]'>
        <div className='   shadow-2xl  w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
        <div className='   shadow-2xl  w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
         <div className='   shadow-2xl   w-full '>
          <img src={power4} alt=""  className='   w-full '/>
          <div className='  border-t border-black px-3 py-3'>
            <h3 className=' text-[.9rem]' >100kmah powerbank</h3>
            <p>#180,000</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home
