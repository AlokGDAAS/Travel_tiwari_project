import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../../../assets/assets";

const Home_deals = () => {

    const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section
      className="deals-section"
      style={{ backgroundImage: "url('/shape3.png')" }}
    >
      {/* ---------------- Countdown ---------------- */}
      <div className="countdown-timer">
        <img
          className="fadeInUp"
          data-delay="0.3"
          src={assets.fifty_off}
          alt=""
        />

        <ul
          className="list-unstyled flex-wrap justify-content-center fadeInUp"
          data-delay="0.5"
          id="countdownClock"
          data-target-date="2025-12-31"
          data-target-time="23:59:59"
        >
          <li>
            <span id="days">{timeLeft.days}</span>
            <span>Days</span>
          </li>
          <li>
            <span id="hours">{timeLeft.hours}</span>
            <span>Hours</span>
          </li>
          <li>
            <span id="minutes">{timeLeft.minutes}</span>
            <span>Mins</span>
          </li>
          <li>
            <span id="seconds">{timeLeft.seconds}</span>
            <span>Seconds</span>
          </li>
        </ul>
      </div>

      <div className="deals-content">
        <div className="divider"></div>

        {/* ---------------- Heading + Navigation ---------------- */}
        <div className="d-flex flex-wrap justify-content-between gap-5 align-items-center">
          <div className="section-heading">
            <span className="sub-title">Deals &amp; Offers</span>
            <h2 className="mb-0 text-white">Last-Minute Deals</h2>
          </div>

          {/* Swiper Navigation Buttons */}
          <div className="deals-navigation-container">
            <div className="deals-button-prev">
              <i className="icon-arrow-left"></i>
            </div>
            <div className="deals-button-next">
              <i className="icon-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        {/* ---------------- Swiper Slider ---------------- */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".deals-button-next",
            prevEl: ".deals-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          className="deals-swiper"
            breakpoints={{
                320: { // mobile
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                640: { // small tablets
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: { // desktops
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: { // large screens
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.sixteen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Nepal City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.seventeen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Dhaka City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.eighteen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Sylhet City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.ninteen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Cox's Bazar City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.sixteen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Paro City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.seventeen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Galle City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 7 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.eighteen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Mumbai City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 8 */}
          <SwiperSlide>
            <div className="deals-slide">
              <img src={assets.ninteen} alt="" />
              <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                <div>
                  <h4 className="mb-1">Pune City</h4>
                  <p className="mb-0">$160</p>
                </div>
                <span className="badge bg-primary">
                  <i className="ti ti-star"></i> 4.9
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="divider"></div>
      </div>
    </section>
  );
};

export default Home_deals;