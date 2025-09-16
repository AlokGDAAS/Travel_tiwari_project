import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react"; // for arrows (optional)

export default function Sliding_bg_2() {
  return (
    <div className="relative w-full h-screen">
      {/* Swiper Background */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {/* Slides */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/bg-img/1.jpg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/bg-img/2.jpg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/img/bg-img/3.jpg')" }}
          ></div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute inset-0 flex justify-between items-center px-6 pointer-events-none">
        <button className="custom-prev bg-black/40 text-white p-3 rounded-full pointer-events-auto">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="custom-next bg-black/40 text-white p-3 rounded-full pointer-events-auto">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
