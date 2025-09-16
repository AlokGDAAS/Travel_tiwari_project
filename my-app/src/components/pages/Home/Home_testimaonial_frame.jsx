import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
import Home_testimonial_card from "../../utils/Home_testimonial_utils.jsx/Home_testimonial_card";

const Home_testimaonial_frame= () => {
  
  const swiperRef = useRef(null);
  const [enable, setEnable] = useState(null);



  const card_data = [
    {
      id: 1,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 2,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 3,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 4,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 5,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 6,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 7,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 8,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    },
    {
      id: 9,
      city: "Nepal City",
      cost: 160,
      rating: 4.9,
    }

  ];


  return (
    <div>
        <div className='md:px-[8vw] px-[4vw] py-[8vw] '>
          
          <div className="md:flex justify-between">
            <div>
              <p className="montez font_33 text-[var(--primary)] m_font_24">
                Testimonials
              </p>
              <p className="font_50 font-extrabold m_font_30">
                What Our Clients Says
              </p>
            </div>
            <div className="text-[var(--primary)] font_24 flex gap-[2vw] items-center my-[4vw] md:my-0">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="md:p-[1vw] p-[2vw] bg-white/20 rounded-full mr-[0.5vw] hover:bg-[var(--primary)] cursor-pointer border hover:text-white"
              >
                <BsArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="md:p-[1vw] p-[2vw] bg-white/20 rounded-full hover:bg-[var(--primary)] cursor-pointer border hover:text-white"
              >
                <BsArrowRight />
              </button>
            </div>
          </div>

          {/* Card box */}

          <div className="pb-[4vw] md:pl-[4vw]">
            <div className="">
              {/* Swiper Carousel */}
              <Swiper
                modules={[Navigation, Autoplay]}
                // autoplay={{ delay: 2000, disableOnInteraction: true }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={5}
                slidesPerView={3.2}
                  breakpoints={{
                      320: { slidesPerView: 1.5 },   // mobile
                      640: { slidesPerView: 2.5 }, // small tablets
                      1024: { slidesPerView: 3.2 } // desktop/larger screens
                    }}                
                className="rounded-xl overflow-hidden"
              >
                {card_data.map((item,i) => (
                  <div key={i}>
                    <SwiperSlide>
                      <div className="  flex items-center justify-center text-white text-2xl font-bold">
                        <Home_testimonial_card
                          id={item.id}
                          city={item.city}
                          cost={item.cost}
                          rating={item.rating}
                          enable={enable}
                          setEnable={setEnable}
                        />
                      </div>
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home_testimaonial_frame