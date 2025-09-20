import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'
import I_frame from "../../utils/I_frame";
import { useState } from "react";
import BreadCrumb from "../../utils/BreadCrumb";

const Card_1 = () => {
  return (
    <div className="featured-destination-card fadeInUp" data-delay="0.2">
      <img src={assets.ten} alt="Destination" />

      <div className="overlay-content d-flex flex-wrap gap-4 align-items-end justify-content-between">
        <div>
          <p className="mb-1 text-white">Travel To</p>
          <h4 className="mb-0 text-white">Manhattan</h4>
        </div>
        <span className="badge bg-primary">3 Tours</span>
      </div>
    </div>
  );
};

const Destination = () => {

    const slides = ["/61.jpg", "/62.jpg", "/63.jpg"];

    const [vedioOpen , setVideoOpen] =useState(false)

    const card_1_number = [1,2,3,4,5,6]
    
  return (
    <div>
          
   <div id="smooth-wrapper">
      <div id="smooth-content">

        
      {/* Breadcrumb Section  */}
      <div>
       <BreadCrumb head="Destination" link="Home"/>
      </div>

        
         <section className="featured-destination bg-secondary">
            <div className="shape">
               <img src={assets.shape2} alt=""/>
            </div>

  
            <div className="divider"></div>

            <div className="container">
            <div className="row g-4">
                {card_1_number.map((i) => (
                <div key={i} className="col-12 col-sm-6 col-lg-4">
                    <Card_1 />
                </div>
                ))}
            </div>
            </div>


            <div className="divider"></div>
         </section>

    <div className="video-gallery-section">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{
          el: ".video-gallery-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            // return custom bullet with background image
            return `<span class="${className}" style="
              background-image: url('${slides[index]}');
              background-size: cover;
              background-position: center;
            "></span>`;
          },
        }}
        className="video-gallery-swiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="video-gallery-card"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "", // ensure slide is visible
              }}
            >
              <div className="container h-100 d-flex align-items-center justify-content-center">
                
               
                    <I_frame
                    videoUrl="https://www.youtube.com/embed/zCSmY_WjvPs"
                    onPlay={() => setVideoOpen(true)}
                    onClose={() => setVideoOpen(false)}
                    />

                    {/* <i className="ti ti-player-play-filled"></i> */}
               
           
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination container */}
      <div className= {vedioOpen ? "":"video-gallery-pagination-container"}>
        <div className={vedioOpen ? "":"video-gallery-pagination"}></div>
      </div>
    </div>

   
         <section className="trip-section">
   
            <div className="trolley-img" data-speed="0.8">
               <img src={assets.trolley} alt=""/>
            </div>

     
            <div className="plane-img" data-speed="0.8">
               <img src={assets.plane} alt=""/>
            </div>


            <div className="divider"></div>

            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-12 col-lg-8">
                 
                     <div className="section-heading text-center">
                        <span className="sub-title">Explore The World</span>
                        <h2 className="mb-0">Awesome Trip with us</h2>
                     </div>
                  </div>
               </div>

               <div className="divider-sm"></div>

               <div className="row g-4">
         
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="trip-card fadeInUp" data-delay="0.2">
                        <img src={assets.thirteen} alt=""/>
                  
                        <div className="trip-body">
                           <h4 className="mb-4 trip-title">Experience The Incredible India With Travolo</h4>
                  
                           <div className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
                              <ul className="list-unstyled d-flex flex-column gap-3">
                                 <li><i className="ti ti-map-pin-filled"></i> Bhutan, India, Pokhara</li>
                                 <li><i className="ti ti-clock"></i> 6 Days - 2 Nights</li>
                              </ul>
                              <div className="line"></div>
                              <div className="text-end">
                                 <span className="badge bg-primary mb-2">50% Off</span>
                                 <h2 className="mb-0 trip-price">$450<span>$650</span></h2>
                              </div>
                           </div>
                  
                           <Link to="/book-now" className="btn btn-light w-100">Book Now</Link>
                        </div>
                     </div>
                  </div>

               
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="trip-card fadeInUp" data-delay="0.4">
                        <img src={assets.fourteen} alt=""/>
                   
                        <div className="trip-body">
                           <h4 className="mb-4 trip-title">Discover Our Luxury Tour Thailand & Vietnam</h4>
                   
                           <div className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
                              <ul className="list-unstyled d-flex flex-column gap-3">
                                 <li><i className="ti ti-map-pin-filled"></i> Bhutan, India, Pokhara</li>
                                 <li><i className="ti ti-clock"></i> 6 Days - 2 Nights</li>
                              </ul>
                              <div className="line"></div>
                              <div className="text-end">
                                 <span className="badge bg-primary mb-2">50% Off</span>
                                 <h2 className="mb-0 trip-price">$350<span>$450</span></h2>
                              </div>
                           </div>
                          
                            <Link to="/book-now" className="btn btn-light w-100">Book Now</Link>
                        </div>
                     </div>
                  </div>

                
                  <div className="col-12 col-md-6 col-lg-4">
                     <div className="trip-card fadeInUp" data-delay="0.6">
                        <img src={assets.fifteen} alt=""/>
                   
                        <div className="trip-body">
                           <h4 className="mb-4 trip-title">Adventure South Africa & Mozambique</h4>
                     
                           <div className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
                              <ul className="list-unstyled d-flex flex-column gap-3">
                                 <li><i className="ti ti-map-pin-filled"></i> Bhutan, India, Pokhara</li>
                                 <li><i className="ti ti-clock"></i> 6 Days - 2 Nights</li>
                              </ul>
                              <div className="line"></div>
                              <div className="text-end">
                                 <span className="badge bg-primary mb-2">50% Off</span>
                                 <h2 className="mb-0 trip-price">$250<span>$350</span></h2>
                              </div>
                           </div>
                         
                            <Link to="/book-now" className="btn btn-light w-100">Book Now</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          
            <div className="divider"></div>
         </section>

 

      </div>
   </div>
       {/* Scroll To Top  */}
   <button id="scrollTopButton" className="touria-scrolltop scrolltop-hide">
      <i className="icon-arrow-up"></i>
   </button>
    </div>
  )
}

export default Destination