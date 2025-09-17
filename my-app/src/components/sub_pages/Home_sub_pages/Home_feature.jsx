import React from 'react'
import { assets } from '../../../assets/assets'

const Home_feature = () => {
  return (
    <div>
                 
         <section className="featured-destination bg-secondary">
            <div className="shape">
               <img src={assets.shape2} alt=""/>
            </div>

        
            <div className="divider"></div>

            <div className="container">
               <div className="row g-4 g-lg-5 align-items-end">
                  <div className="col-12 col-sm-6">
                     <div className="section-heading">
                        <span className="sub-title">Popular Destination</span>
                        <h2 className="mb-0">Featured Destination</h2>
                     </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 offset-lg-2">
                     <div className="section-heading">
                        <p className="mb-0">At Express Travel, we believe in the transformative power of travel. As avid
                           explorers
                           ourselves, we understand the desire to uncover.</p>
                     </div>
                  </div>
               </div>

               <div className="divider-sm"></div>

               <div className="row g-4 featured-destination-cards">
              
                  <div className="col-12 col-sm-6 col-lg-4">
                     <div className="featured-destination-card fadeInUp" data-delay="0.2">
                        <img src={assets.ten} alt=""/>

                       
                        <div className="overlay-content d-flex flex-wrap gap-4 align-items-end justify-content-between">
                           <div>
                              <p className="mb-1 text-white">Travel To</p>
                              <h4 className="mb-0 text-white">Manhattan</h4>
                           </div>
              
                           <span className="badge bg-primary"><span className="counter">30</span> Tours</span>
                        </div>
                     </div>
                  </div>

              
                  <div className="col-12 col-sm-6 col-lg-4">
                     <div className="featured-destination-card fadeInUp" data-delay="0.4">
                        <img src={assets.eleven} alt=""/>

                     
                        <div className="overlay-content d-flex flex-wrap gap-4 align-items-end justify-content-between">
                           <div>
                              <p className="mb-1 text-white">Travel To</p>
                              <h4 className="mb-0 text-white">Pearland</h4>
                           </div>
                
                           <span className="badge bg-primary"><span className="counter">40</span> Tours</span>
                        </div>
                     </div>
                  </div>

                
                  <div className="col-12 col-sm-6 col-lg-4">
                     <div className="featured-destination-card fadeInUp" data-delay="0.6">
                        <img src={assets.twelve} alt=""/>

                 
                        <div className="overlay-content d-flex flex-wrap gap-4 align-items-end justify-content-between">
                           <div>
                              <p className="mb-1 text-white">Travel To</p>
                              <h4 className="mb-0 text-white">New York</h4>
                           </div>
                         
                           <span className="badge bg-primary"><span className="counter">25</span> Tours</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

        
            <div className="divider"></div>
         </section>
    </div>
  )
}

export default Home_feature