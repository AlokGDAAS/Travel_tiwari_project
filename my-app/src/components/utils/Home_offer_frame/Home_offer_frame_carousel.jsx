import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import Home_offer_card from "./Home_offer_card";

export default function Home_offer_frame_carousel() {
  const swiperRef = useRef(null);

  return (
    <div className="w-[60vw]  bg-yellow-700">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        className="rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
            <Home_offer_card/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
           <Home_offer_card/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
            <Home_offer_card/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
            <Home_offer_card/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
            <Home_offer_card/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
            <Home_offer_card/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  flex items-center justify-center text-white text-2xl font-bold">
            <Home_offer_card/>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* External Buttons */}
      <div className="flex gap-4 justify-center mt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
