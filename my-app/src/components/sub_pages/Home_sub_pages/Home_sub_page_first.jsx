import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";


// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";


const Home_sub_page_first = () => {

      const [dateRange, setDateRange] = useState([]);

  return (
    <div style={{}}>
                {/* Swiper Slider */}
        <div className="swiper background-swiper" id="backgroundSwiper">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".background-button-next",
              prevEl: ".background-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="background-swiper h-100"
          >
            <SwiperSlide>
              <div
                className="vh-100"
                style={{ backgroundImage: "url('/1.jpg')",backgroundSize:"cover",backgroundPosition:"center" ,height:"100vh" }}
                
              >Hello</div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="vh-100"
                style={{ backgroundImage: "url('/1.jpg')",backgroundSize:"cover",backgroundPosition:"center" ,height:"100vh" }}
              ></div>
            </SwiperSlide>
            {/* Add more slides if needed */}
          </Swiper>
        </div>
    </div>
  )
}

export default Home_sub_page_first