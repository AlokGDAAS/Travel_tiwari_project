import React from 'react'
import { assets } from '../../../assets/assets'

const Home_deals = () => {
  return (
    <div>
     
         <section className="deals-section" style={{backgroundImage:"url('/shape3.png')"}}>

            <div className="countdown-timer">
               <img className="fadeInUp" data-delay="0.3" src={assets.fifty_off} alt=""/>

   
               <ul className="list-unstyled flex-wrap justify-content-center fadeInUp" data-delay="0.5" id="countdownClock"
                  data-target-date="2025-12-31" data-target-time="23:59:59">
                  <li><span id="days">00</span><span>Days</span></li>
                  <li><span id="hours">00</span><span>Hours</span></li>
                  <li><span id="minutes">00</span><span>Mins</span></li>
                  <li><span id="seconds">00</span><span>Seconds</span></li>
               </ul>
            </div>


            <div className="deals-content">
 
               <div className="divider"></div>


               <div className="d-flex flex-wrap justify-content-between gap-5 align-items-center">
                  <div className="section-heading">
                     <span className="sub-title">Deals &amp; Offers</span>
                     <h2 className="mb-0 text-white">Last-Minute Deals</h2>
                  </div>

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

            
               <div className="swiper deals-swiper">
                  <div className="swiper-wrapper">

            
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.sixteen} alt=""/>

                     
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Nepal City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

                  
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.seventeen} alt=""/>

                   
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Dhaka City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

                    
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.eighteen} alt=""/>

                  
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Sylhet City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

               
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.ninteen} alt=""/>

                       
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Cox's Bazar City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

              
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.sixteen}alt=""/>

            
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Paro City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

               
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.seventeen} alt=""/>

                
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Galle City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

                   
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.eighteen} alt=""/>

                
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Mumbai City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

          
                     <div className="swiper-slide">
                        <div className="deals-slide">
                           <img src={assets.ninteen} alt=""/>

                
                           <div className="d-flex flex-wrap mt-3 gap-3 justify-content-between align-items-center">
                              <div>
                                 <h4 className="mb-1">Pune City</h4>
                                 <p className="mb-0">$160</p>
                              </div>
                              <span className="badge bg-primary"><i className="ti ti-star"></i> 4.9</span>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

             
               <div className="divider"></div>
            </div>
         </section>
    </div>
  )
}

export default Home_deals