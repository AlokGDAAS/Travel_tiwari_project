import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../../../assets/css/HomeTestimonial.scss"

const testimonials = [
  {
    id: 1,
    img: "/24.jpg",
    name: "Marvin McKinney",
    role: "Product Manager",
    text: "Working with several word the templates the last years only can say this is best every level use it for my reviews that I hav already are company and reviews that I hav already are company and the reviews that I have already are all excellent.",
  },
  {
    id: 2,
    img: "/24.jpg",
    name: "Jane Doe",
    role: "Designer",
    text: "Working with several word the templates the last years only can say this is best every level use it for my reviews that I hav already are company and reviews that I hav already are company and the reviews that I have already are all excellent.",
  },
  {
    id: 3,
    img: "/24.jpg",
    name: "John Smith",
    role: "Developer",
    text: "Working with several word the templates the last years only can say this is best every level use it for my reviews that I hav already are company and reviews that I hav already are company and the reviews that I have already are all excellent.",
  },
  {
    id: 4,
    img: "/24.jpg",
    name: "Marvin McKinney",
    role: "Product Manager",
    text: "Working with several word the templates the last years only can say this is best every level use it for my reviews that I hav already are company and reviews that I hav already are company and the reviews that I have already are all excellent.",
  },
  {
    id: 5,
    img: "/24.jpg",
    name: "Jane Doe",
    role: "Designer",
    text: "Working with several word the templates the last years only can say this is best every level use it for my reviews that I hav already are company and reviews that I hav already are company and the reviews that I have already are all excellent.",
  },
  {
    id: 6,
    img: "/24.jpg",
    name: "John Smith",
    role: "Developer",
    text: "Working with several word the templates the last years only can say this is best every level use it for my reviews that I hav already are company and reviews that I hav already are company and the reviews that I have already are all excellent.",
  },
];

const Home_testimonial_re = () => {
      const [expanded, setExpanded] = useState(null);
    
      const handleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
      };
  return (
    <section className="testimonial-section">
        <div class="divider"></div>
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-sm-6">
            <div className="section-heading">
              <span className="sub-title">Testimonial</span>
              <h2 className="mb-0">What Our Clients Say</h2>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="testimonial-navigation-container justify-content-sm-end">
              <div className="testimonial-button-prev">
                <i className="icon-arrow-left"></i>
              </div>
              <div className="testimonial-button-next">
                <i className="icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>


        <div className="">
            <div class="divider-sm"></div>
        <Swiper
          modules={[Navigation]}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          grabCursor={true}
          navigation={{
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev",
          }}

            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4, // cards auto-size, works with your expanding card
                spaceBetween: 30,
              },
            }}
          className="testimonial-swiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide
              key={t.id}
              className={`testimonial-card ${
                expanded === index ? "slide-expand" : ""
              }`}
              style={{ backgroundImage: `url(${t.img})` }}
              onClick={() => handleExpand(index)}
            >
              {/* Testimonial Content */}
              <div className="testimonial-content">
                           <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54"
                              fill="none">
                              <path
                                 d="M12.6562 8.19922C5.67612 8.19922 0 13.8769 0 20.8555C0 27.2268 4.7307 32.5137 10.8672 33.385C10.3759 36.9539 9.01325 40.3497 6.88426 43.2944C6.47019 43.8691 6.4857 44.6477 6.9275 45.2039C7.36098 45.7511 8.11424 45.9586 8.77532 45.6797C18.8206 41.4868 25.3125 31.7412 25.3125 20.8555C25.3125 13.8769 19.6364 8.19922 12.6562 8.19922ZM41.3438 8.19922C34.3636 8.19922 28.6875 13.8769 28.6875 20.8555C28.6875 27.2268 33.4182 32.5137 39.5547 33.385C39.0634 36.9539 37.7008 40.3497 35.5718 43.2944C35.1577 43.8691 35.1732 44.6477 35.615 45.2039C36.0485 45.7511 36.8017 45.9586 37.4628 45.6797C47.5081 41.4868 54 31.7412 54 20.8555C54 13.8769 48.3239 8.19922 41.3438 8.19922Z"
                                 fill="#3CB371" />
                           </svg>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="border-top"></div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>

              {/* Thumbnail */}
              <div
                className="testimonial-thumbnail"
                style={{ backgroundImage: `url(${t.img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
      <div class="divider"></div>
    </section>
  )
}

export default Home_testimonial_re