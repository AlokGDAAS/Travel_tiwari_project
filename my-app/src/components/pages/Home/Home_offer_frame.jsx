import React from "react";
import { assets } from "../../../assets/assets";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Timer_box from "../../utils/Home_offer_frame/Timer_box";
import Home_offer_card from "../../utils/Home_offer_frame/Home_offer_card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";

const Home_offer_frame = () => {
  const target_date = "2026-01-20T00:00:00";
  const swiperRef = useRef(null);
  const card_data = [
    {
      id: 1,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 2,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 3,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 4,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 5,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 6,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 7,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 8,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
    {
      id: 9,
      city: "Nepal City",
      img: assets.offer_img,
      cost: 160,
      rating: 4.9,
    },
  ];

  return (
    <div>
      <div className=" ">
        {/* left */}

        <div className="flex flex-col md:flex-row">
          {/* Left section */}
          <div className="w-full md:w-1/2 bg-[var(--primary)] flex items-center justify-center">
            <div className="bg-[var(--primary)]  px-[6vw] py-[10vw] flex  justify-center">
              <div>
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src={assets.fifty_off}
                      alt=""
                      className="md:w-[24vw]"
                    />
                  </div>
                </div>
                {/* Timer */}
                <div>
                  <Timer_box target_date={target_date} />
                </div>
              </div>
            </div>
          </div>

          {/* Right section (carousel) */}

          <div className="w-full md:w-1/2 bg-[url('/shape_3.png')] md:py-[4vw] py-[4vw]">
            <div className="md:flex justify-between pl-[4vw] pr-[12vw] md:pr-0 pt-[8vw] pb-[4vw] ">
              <div>
                <p className="montez font_33 text-[var(--primary)] m_font_24">
                  Deals & Offers
                </p>
                <p className="font_50 font-extrabold text-white m_font_30">
                  Last-Minute Deals
                </p>
              </div>
              <div className="text-white font_24 flex items-center my-[2vw]">
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="md:p-[1vw] p-[2vw] bg-white/20 rounded-full mr-[0.5vw] hover:bg-[var(--primary)] cursor-pointer"
                >
                  <BsArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="md:p-[1vw] p-[2vw] bg-white/20 rounded-full hover:bg-[var(--primary)] cursor-pointer"
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              className="overflow-hidden"
            >
              {card_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex items-center justify-center">
                    <Home_offer_card {...item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_offer_frame;
