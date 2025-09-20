import React from 'react'
import { assets } from '../../../assets/assets'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import BreadCrumb from '../../utils/BreadCrumb';


const Destination_details = () => {
  return (
    <div>

             
      {/* Breadcrumb Section  */}
      <div>
       <BreadCrumb head="Destination Details" link="Home"/>
      </div>

             
         <div className="destination-details-section">
       
            <div className="divider"></div>

            <div className="container">
     
                <div className="destination-details-wrapper mb-5">
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".destination-details-button-prev",
                      nextEl: ".destination-details-button-next",
                    }}
                            loop={true}
                          spaceBetween={20}
                          breakpoints={{
                            320: { slidesPerView: 1 },  // mobile
                            640: { slidesPerView: 1 },  // tablet
                            1024: { slidesPerView: 1 }, // laptop
                            1280: { slidesPerView: 1 }, // desktop
                          }}
                    className="destination-details-swiper"
                  >
                    <SwiperSlide>
                      <img src={assets.hundred_three_three} alt="slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={assets.hundred_three_three} alt="slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={assets.hundred_three_three} alt="slide 3" />
                    </SwiperSlide>
                  </Swiper>

                  {/* Navigation Buttons */}
                  <button className="destination-details-button-prev">
                    <i className="icon-arrow-left"></i>
                  </button>
                  <button className="destination-details-button-next">
                    <i className="icon-arrow-right"></i>
                  </button>
                </div>

               <div className="row g-5">
                  <div className="col-12 col-lg-8">
             
                     <div className="destination-details-content">
                        <h2>Overview</h2>
                        <p className="mb-0">Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et
                           dolore
                           of magna
                           aliqua. ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco laboris
                           nisi
                           ut
                           aliquip ex ea dolor commodo consequat duis aute irure and dolor in reprehenderit.Nullam
                           semper
                           quam
                           mauris nec mollis felis aliquam eu ut non gravida mi nec mollis felis aliquam eu ut
                           phasellus.
                        </p>

                        <h2>Top Destinations</h2>
                        <p className="mb-0">Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et
                           dolore
                           of magna aliqua. ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco
                           laboris
                           nisi ut aliquip ex ea dolor commodo consequat duis aute irure and dolor in reprehenderit.</p>

                        <div className="row g-4">
                           <div className="col-12 col-lg-6">
                              <img src={assets.hundred_three_four} alt=""/>
                           </div>
                           <div className="col-12 col-lg-6">
                             <img src={assets.hundred_three_five} alt=""/>
                           </div>
                        </div>

                        <p>Consectetur adipisicing elit sed do eiusmod tempor is incididunt ut labore et dolore of magna
                           aliqua.
                           ut enim ad minim veniam made of owl the quis nostrud exercitation ullamco laboris nisi ut
                           aliquip
                           ex
                           ea dolor commodo consequat duis aute irure and dolor in reprehenderit.Nullam semper quam
                           mauris nec
                           mollis felis aliquam eu ut non gravida mi quam mauris nec mollis felis aliquam eu ut
                           phasellus.</p>
                     </div>

                     <h2 className="mb-4 mt-5 faq-title">Frequently Ask Question</h2>

                 
                     <div className="faq-accordion style-three">
                        <div className="accordion gap-4" id="faqAccordion">
                          
                           <div className="accordion-item">
                              <div className="accordion-header">
                                 <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                                    How do I book a tour with your agency?
                                 </button>
                              </div>
                              <div id="faqQuestion1" className="accordion-collapse collapse show"
                                 data-bs-parent="#faqAccordion">
                                 <div className="accordion-body">
                                    <p>If you need immediate assistance, click the button below to chat live with a
                                       Customer
                                       Service Customer live with Service Customer representative.If you need immediate
                                       assistance, click the button below to chat live with a Customer Service Customer
                                       live
                                       with
                                       Service Customer representative.</p>
                                    <div className="faq-image">
                                       <img src={assets.hundred_three_six} alt=""/>
                                    </div>
                                 </div>
                              </div>
                           </div>

                 
                           <div className="accordion-item">
                              <div className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                                    What payment methods do you accept?
                                 </button>
                              </div>
                              <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                 <div className="accordion-body">
                                    <p>If you need immediate assistance, click the button below to chat live with a
                                       Customer
                                       Service Customer live with Service Customer representative.If you need immediate
                                       assistance, click the button below to chat live with a Customer Service Customer
                                       live
                                       with
                                       Service Customer representative.</p>
                                    <div className="faq-image">
                                       <img src={assets.hundred_three_six} alt=""/>
                                    </div>
                                 </div>
                              </div>
                           </div>

                      
                           <div className="accordion-item">
                              <div className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                                    Can I customize my travel itinerary?
                                 </button>
                              </div>
                              <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                 <div className="accordion-body">
                                    <p>If you need immediate assistance, click the button below to chat live with a
                                       Customer
                                       Service Customer live with Service Customer representative.If you need immediate
                                       assistance, click the button below to chat live with a Customer Service Customer
                                       live
                                       with
                                       Service Customer representative.</p>
                                    <div className="faq-image">
                                        <img src={assets.hundred_three_six} alt=""/>
                                    </div>
                                 </div>
                              </div>
                           </div>

                          
                           <div className="accordion-item">
                              <div className="accordion-header">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                                    How do I book a tour with your agency?
                                 </button>
                              </div>
                              <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                 <div className="accordion-body">
                                    <p>If you need immediate assistance, click the button below to chat live with a
                                       Customer
                                       Service Customer live with Service Customer representative.If you need immediate
                                       assistance, click the button below to chat live with a Customer Service Customer
                                       live
                                       with
                                       Service Customer representative.</p>
                                    <div className="faq-image">
                                       <img src={assets.hundred_three_six} alt=""/>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-lg-4">
                     <div className="d-flex flex-column gap-5">
                      
                        <div className="blog-widget">
                           <div className="h4 fw-bold text-primary mb-4">Some Information</div>

                       
                           <ul className="destination-info-list list-unstyled">
                              <li><span>County:</span> <span>London</span></li>
                              <li><span>Visa Requirements:</span> <span>Yes</span></li>
                              <li><span>Per Person:</span> <span>1500$</span></li>
                              <li><span>Languages:</span> <span>English, French, German</span></li>
                              <li><span>Area(Km4):</span> <span>90.000 Km5</span></li>
                           </ul>
                        </div>

                 
                        <div className="map-widget">
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988656217!2d-0.2664030361512999!3d51.52873980507674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1746429272896!5m2!1sen!2sbd"
                              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="divider"></div>
         </div>
    </div>
  )
}

export default Destination_details