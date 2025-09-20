import React from "react";
import BreadCrumb from "../utils/BreadCrumb";
import { assets } from "../../assets/assets";
import Home_about from "../sub_pages/Home_sub_pages/Home_about";
import Home_deals from "../sub_pages/Home_sub_pages/Home_deals";
import Home_why_choose from "../sub_pages/Home_sub_pages/Home_why_choose";
import Home_contact from "../sub_pages/Home_sub_pages/Home_contact";
import Home_testimonial_re from "../sub_pages/Home_sub_pages/Home_testimonial_re";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const AboutUs = () => {
  return (
    <div>
      {/* Breadcrumb Section  */}
      <div>
        <BreadCrumb head="About Us" link="Home" />
      </div>

      <div>
        <Home_about />
        <Home_deals />
        <Home_why_choose />
      </div>

      <section class="team-section">
        <div class="divider"></div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-xl-6">
              <div class="section-heading text-center">
                <span class="sub-title">Meet With Guide</span>
                <h2 class="mb-0">Meet With Expert Team</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="divider-sm"></div>

        <div class="container">
          <div class="row g-5">
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="team-card fadeInUp" data-delay="0.3">
                <div class="team-thumb mb-4">
                  <img src={assets.sixty_four} alt="" />

                  <div class="team-social">
                    <a href="#">
                      <i class="ti ti-brand-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-x"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="text-center">
                  <a href="guider-details.html">
                    <h4>Ralph Edwards</h4>
                  </a>
                  <span>Tourist Guide</span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="team-card fadeInUp" data-delay="0.5">
                <div class="team-thumb mb-4">
                  <img src={assets.sixty_five} alt="" />

                  <div class="team-social">
                    <a href="#">
                      <i class="ti ti-brand-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-x"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="text-center">
                  <a href="guider-details.html">
                    <h4>Leslie Alexander</h4>
                  </a>
                  <span>Tourist Guide</span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="team-card fadeInUp" data-delay="0.7">
                <div class="team-thumb mb-4">
                  <img src={assets.sixty_six} alt="" />

                  <div class="team-social">
                    <a href="#">
                      <i class="ti ti-brand-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-x"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="text-center">
                  <a href="guider-details.html">
                    <h4>Kathryn Murphy</h4>
                  </a>
                  <span>Tourist Guide</span>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-3">
              <div class="team-card fadeInUp" data-delay="0.9">
                <div class="team-thumb mb-4">
                  <img src={assets.sixty_seven} alt="" />

                  <div class="team-social">
                    <a href="#">
                      <i class="ti ti-brand-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-x"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-linkedin"></i>
                    </a>
                    <a href="#">
                      <i class="ti ti-brand-instagram"></i>
                    </a>
                  </div>
                </div>

                <div class="text-center">
                  <a href="guider-details.html">
                    <h4>Edwards Ralph</h4>
                  </a>
                  <span>Tourist Guide</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="divider"></div>
      </section>

      <div>
        <Home_contact />
        <Home_testimonial_re />
      </div>

      <div class="follow-instagram-section">
        <div class="swiper follow-instagram-swiper" id="followInstagramSwiper">
          <div class="swiper-wrapper align-items-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={5}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="follow-instagram-swiper"
            >
              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.eighty_eight} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.eighty_nine} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.ninety} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.ninety_one} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.ninety_two} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.ninety_three} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.ninety_four} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="follow-instagram-card">
                  <img src={assets.ninety_five} alt="" />
                  <a href="#" className="instagram-btn">
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                </div>
              </SwiperSlide>

              {/* repeat if needed */}
            </Swiper>
          </div>
        </div>

        <div class="divider"></div>
      </div>
    </div>
  );
};

export default AboutUs;
