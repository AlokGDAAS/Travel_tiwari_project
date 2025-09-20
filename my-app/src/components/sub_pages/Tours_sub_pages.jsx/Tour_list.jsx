import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import PriceSlider from "../../utils/PriceSlider";
import BreadCrumb from "../../utils/BreadCrumb";

const Tour_list = () => {

   const duration ={
      start:2,
      end:9,
      max:15,
      head:"Duration",
      symbol:""
   }

   const price ={
      start:1000,
      end:5000,
      max:15000,
      head:"Price",
      symbol:"₹"
   }
  return (
    <div>

      {/* Breadcrumb Section  */}
      <div>
       <BreadCrumb head="Tour List" link="Home"/>
      </div>
  
  {/* --------------------------------------------- */}

  
 
         <div className="tour-list-section">
 
            <div className="divider"></div>

            <div className="container">
               <div className="row g-4">
                  <div className="col-12 col-md-4">
                     <div className="tour-list-sidebar">
                 
                        <div className="sidebar-widget">
                           <h4 className="widget-title mb-4">Destination Category</h4>

                          
                           <ul className="sidebar-checkbox-list list-unstyled">
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="canada"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="canada">Canada</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="france" checked/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="france">France</label>
                                    <span className="text-muted">05</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="europe"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="europe">Europe</label>
                                    <span className="text-muted">03</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="indonesia"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="indonesia">Indonesia</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="nepal"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="nepal">Nepal</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="maldives"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="maldives">Maldives</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                           </ul>
                        </div>

                
                        <div className="">
                           
                       
                           <PriceSlider start={price.start} end={price.end} max={price.max} head={price.head} symbol={price.symbol}/>
                        </div>

                  
                        <div className="sidebar-widget">
                           <h4 className="widget-title mb-4">Activities</h4>

                        
                           <ul className="sidebar-checkbox-list list-unstyled">
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="canada2"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="canada2">Canada</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="france2"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="france2">France</label>
                                    <span className="text-muted">05</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="europe2"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="europe2">Europe</label>
                                    <span className="text-muted">03</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="indonesia2"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="indonesia2">Indonesia</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="nepal2"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="nepal2">Nepal</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="maldives2"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="maldives2">Maldives</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                           </ul>
                        </div>

               
                        <div className="">
                           
                       
                           <PriceSlider start={duration.start} end={duration.end} max={duration.max} head={duration.head} symbol={duration.symbol}/>
                        </div>

                      
                        <div className="sidebar-widget">
                           <h4 className="widget-title mb-4">Tour Type</h4>

                      
                           <ul className="sidebar-checkbox-list list-unstyled">
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="luxury"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="luxury">Luxury</label>
                                    <span className="text-muted">04</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="premium" checked/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="premium">Premium</label>
                                    <span className="text-muted">05</span>
                                 </div>
                              </li>
                              <li>
                                 <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="standard"/>
                                    <label className="form-check-label flex-grow-1 ms-2" for="standard">Standard</label>
                                    <span className="text-muted">03</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-md-8">
                     <div className="tour-list-content">
                        <div className="row g-4">
                        
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.2">
                                 <img src="./assets/img/bg-img/13.jpg" alt=""/>
                               
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Experience The Incredible India With Travolo</h4>
                                  
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                              
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                   
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.4">
                                 <img src="./assets/img/bg-img/14.jpg" alt=""/>
                              
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Discover Our Luxury Tour Thailand & Vietnam</h4>
                       
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                            
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                    
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.6">
                                 <img src={assets.fifteen} alt=""/>
                           
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Adventure South Africa & Mozambique</h4>
                                
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                                   
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                    
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.2">
                                 <img src={assets.thirteen} alt=""/>
                            
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Experience The Incredible India With Travolo</h4>
                               
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                               
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                   
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.4">
                                 <img src={assets.fourteen} alt=""/>
                             
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Discover Our Luxury Tour Thailand & Vietnam</h4>
                                
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                                
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                        
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.6">
                                 <img src={assets.fifteen} alt=""/>
                          
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Adventure South Africa & Mozambique</h4>
                                
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                                    
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                         
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.2">
                                <img src={assets.thirteen} alt=""/>
                             
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Experience The Incredible India With Travolo</h4>
                               
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                              
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>

                           
                           <div className="col-12 col-lg-6">
                              <div className="trip-card fadeInUp" data-delay="0.4">
                                 <img src={assets.fourteen} alt=""/>
                    
                                 <div className="trip-body">
                                    <h4 className="mb-4 trip-title">Discover Our Luxury Tour Thailand & Vietnam</h4>
                                 
                                    <div
                                       className="trip-meta d-flex align-items-center justify-content-between gap-3 gap-xxl-4">
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
                                 
                                    <a href="#" className="btn btn-light w-100">Book Now</a>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="divider-sm"></div>

                    
                        <ul className="touria-pagination list-unstyled justify-content-start">
                           <li className="active"><a href="#">1</a></li>
                           <li><a href="#">2</a></li>
                           <li><a href="#">3</a></li>
                           <li><a href="#"><i className="ti ti-chevron-right"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

         
            <div className="divider"></div>

         </div>



    </div>
  );
};

export default Tour_list;
