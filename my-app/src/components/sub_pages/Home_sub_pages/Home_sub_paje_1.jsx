import React from "react";

const Home_sub_paje_1 = () => {
  return (
    <div>
      <div className="hero-section bg-dark">
        {/* Cloud Image */}
        <div
          className="cloud-img"
          style={{ backgroundImage: "url('./cloud.png')" }}
        ></div>

        {/* Social Icons */}
        <div className="social-icons d-none d-sm-flex">
          <a href="#"><i className="ti ti-brand-facebook"></i></a>
          <a href="#"><i className="ti ti-brand-x"></i></a>
          <a href="#"><i className="ti ti-brand-linkedin"></i></a>
          <a href="#"><i className="ti ti-brand-instagram"></i></a>
        </div>

        {/* Swiper Slider */}
        <div className="swiper background-swiper" id="backgroundSwiper">
          <div className="swiper-wrapper h-100">
            <div
              className="swiper-slide h-100"
              style={{ backgroundImage: "url('./assets/img/bg-img/1.jpg')" }}
            ></div>
            <div
              className="swiper-slide h-100"
              style={{ backgroundImage: "url('./assets/img/bg-img/2.jpg')" }}
            ></div>
            <div
              className="swiper-slide h-100"
              style={{ backgroundImage: "url('./assets/img/bg-img/1.jpg')" }}
            ></div>
            <div
              className="swiper-slide h-100"
              style={{ backgroundImage: "url('./assets/img/bg-img/2.jpg')" }}
            ></div>
          </div>
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
                  <form className="row align-items-center g-3 g-xxl-2" action="#">
                    {/* Location */}
                    <div className="col-12 col-md-6 col-xxl">
                      <div className="search-item d-flex align-items-center gap-3">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.38467 18.4463C9.38467 18.4463 3.33301 13.3496 3.33301 8.33464C3.33301 6.56653 4.03539 4.87083 5.28563 3.62059C6.53587 2.37035 8.23156 1.66797 9.99967 1.66797C11.7678 1.66797 13.4635 2.37035 14.7137 3.62059C15.964 4.87083 16.6663 6.56653 16.6663 8.33464C16.6663 13.3496 10.6147 18.4463 10.6147 18.4463C10.278 18.7563 9.72384 18.753 9.38467 18.4463ZM9.99967 11.2513C10.3827 11.2513 10.762 11.1759 11.1158 11.0293C11.4697 10.8827 11.7912 10.6679 12.0621 10.397C12.3329 10.1262 12.5477 9.80466 12.6943 9.4508C12.8409 9.09693 12.9163 8.71766 12.9163 8.33464C12.9163 7.95161 12.8409 7.57234 12.6943 7.21848C12.5477 6.86461 12.3329 6.54308 12.0621 6.27224C11.7912 6.0014 11.4697 5.78656 11.1158 5.63999C10.762 5.49341 10.3827 5.41797 9.99967 5.41797C9.22613 5.41797 8.48426 5.72526 7.93728 6.27224C7.3903 6.81922 7.08301 7.56109 7.08301 8.33464C7.08301 9.10818 7.3903 9.85005 7.93728 10.397C8.48426 10.944 9.22613 11.2513 9.99967 11.2513Z"
                              fill="#767676"
                            />
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
                            {/* ... other options */}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Date Picker */}
                    <div className="col-12 col-md-6 col-xxl">
                      <div className="search-item d-flex align-items-center gap-3">
                        <div className="icon">
                          {/* Calendar SVG */}
                        </div>
                        <div className="form-group d-flex align-items-end">
                          <div>
                            <label
                              className="form-label d-block"
                              htmlFor="time-range-picker"
                            >
                              Time Period
                            </label>
                            <input
                              type="text"
                              id="time-range-picker"
                              className="time-range-picker"
                              placeholder="Select date range"
                              readOnly
                            />
                          </div>
                          <i className="ti ti-chevron-down me-5"></i>
                        </div>
                      </div>
                    </div>

                    {/* Tour Type */}
                    <div className="col-12 col-md-6 col-xxl">
                      <div className="search-item d-flex align-items-center gap-3">
                        <div className="icon">{/* SVG */}</div>
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
                            <option value="adventure-tour">Adventure Tour</option>
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
