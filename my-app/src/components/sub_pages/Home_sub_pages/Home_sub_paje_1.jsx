import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Flatpickr from "react-flatpickr";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Flatpickr CSS
import "flatpickr/dist/flatpickr.css";

const Home_sub_paje_1 = () => {
  const [dateRange, setDateRange] = useState([]);

  return (
    <div>
      <div className="hero-section ">
        {/* Cloud Image */}
        <div
          className="cloud-img"
          style={{ backgroundImage: "url('./cloud.png')" }}
        ></div>

        {/* Social Icons */}
        <div className="social-icons d-none d-sm-flex">
          <a href="#">
            <i className="ti ti-brand-facebook"></i>
          </a>
          <a href="#">
            <i className="ti ti-brand-x"></i>
          </a>
          <a href="#">
            <i className="ti ti-brand-linkedin"></i>
          </a>
          <a href="#">
            <i className="ti ti-brand-instagram"></i>
          </a>
        </div>

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
                className="h-100 bg-cover"
                style={{ backgroundImage: "url('/1.jpg')" }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="h-100 bg-cover"
                style={{ backgroundImage: "url('/2.jpg')" }}
              ></div>
            </SwiperSlide>
            {/* Add more slides if needed */}
          </Swiper>
        </div>

        {/* Slider Nav */}
        <div className="background-slider-nav d-none d-sm-flex">
          <div className="background-button-prev">
            <i className="icon-arrow-left"></i>
          </div>
          <div className="background-button-next">
            <i className="icon-arrow-right"></i>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-9 offset-sm-1 col-xl-10 offset-xl-1 offset-xxl-0">
              <div className="hero-content home-one">
                <h3 className="ff-montez heading-line" data-delay="0.3">
                  Experience Unmatched Delight With Us.
                </h3>
                <h2 className="text-white mb-4 heading-line" data-delay="0.6">
                  Where Exceptional Memories Begin
                </h2>
                <p className="text-white heading-line" data-delay="0.7">
                  Welcome to our Vitour website! We are a professional and
                  reliable tours company that offers a wide range of printing
                  services are many variations of passages.
                </p>

                {/* Search Form */}
                <div className="hero-search-form fadeInUp" data-delay="0.9">
                  <form
                    className="row align-items-center g-3 g-xxl-2"
                    action="#"
                  >
                    {/* Location */}
                    <div className="col-12 col-md-6 col-xxl">
                      <div className="search-item d-flex align-items-center gap-3">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                          </svg>
                        </div>
                        <div className="form-group">
                          <label htmlFor="location" className="form-label">
                            Location
                          </label>
                          <select
                            name="location"
                            id="location"
                            className="touria-select"
                            defaultValue="new-york"
                          >
                            <option value="new-york">New York City</option>
                            <option value="paris">Paris</option>
                            <option value="madrid">Madrid</option>
                            <option value="tokyo">Tokyo</option>
                            <option value="rome">Rome</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Date Picker (Flatpickr) */}
                    <div className="col-12 col-md-6 col-xxl">
                      <div className="search-item d-flex align-items-center gap-3">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calendar4-week"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </div>
                        <div className="form-group d-flex align-items-end">
                          <div>
                            <label
                              className="form-label d-block"
                              htmlFor="time-range-picker"
                            >
                              Time Period
                            </label>
                            <Flatpickr
                              id="time-range-picker"
                              className="time-range-picker"
                              placeholder="Select date range"
                              options={{ mode: "range", dateFormat: "Y-m-d" }}
                              value={dateRange}
                              onChange={setDateRange}
                            />
                          </div>
                          <i className="ti ti-chevron-down me-5"></i>
                        </div>
                      </div>
                    </div>

                    {/* Tour Type */}
                    <div className="col-12 col-md-6 col-xxl">
                      <div className="search-item d-flex align-items-center gap-3">
                        <div className="icon">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16699 18.3346V1.66797H5.83366V3.33464H17.5003L15.8337 7.5013L17.5003 11.668H5.83366V18.3346H4.16699ZM10.417 9.16797C10.8753 9.16797 11.2678 9.00491 11.5945 8.6788C11.9212 8.35269 12.0842 7.96019 12.0837 7.5013C12.0831 7.04241 11.92 6.65019 11.5945 6.32464C11.2689 5.99908 10.8764 5.83575 10.417 5.83464C9.95755 5.83352 9.56533 5.99686 9.24033 6.32464C8.91533 6.65241 8.75199 7.04464 8.75033 7.5013C8.74866 7.95797 8.91199 8.35047 9.24033 8.6788C9.56866 9.00714 9.96088 9.17019 10.417 9.16797ZM5.83366 10.0013H15.042L14.042 7.5013L15.042 5.0013H5.83366V10.0013Z"
                              fill="#767676"
                            />
                          </svg>
                        </div>
                        <div className="form-group">
                          <label htmlFor="tour-type" className="form-label">
                            Tour Type
                          </label>
                          <select
                            name="tour-type"
                            id="tour-type"
                            className="touria-select2"
                            defaultValue="family-tour"
                          >
                            <option value="family-tour">Family Tour</option>
                            <option value="adventure-tour">
                              Adventure Tour
                            </option>
                            <option value="solo-tour">Solo Tour</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-12 col-md-6 col-xxl-2">
                      <button type="submit" className="btn btn-primary w-100">
                        Search Now
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Search Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_sub_paje_1;
