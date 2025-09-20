import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

   
   <div className="offcanvas offcanvas-end right-side-touria-offcanvas shadow-lg" tabIndex="-1" id="sideMenuOffcanvas">
    
      <div className="offcanvas-header">
         <div>
            <img src={assets.logo} alt=""/>
         </div>
         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

    
      <div className="offcanvas-body">
         <div className="container-fluid">
            <div className="d-flex flex-column gap-5 mb-5">
            
               <div className="about-card-sm d-flex align-items-center gap-3">
                  <div className="icon">
                     <i className="ti ti-shield-half"></i>
                  </div>
                  <div>
                     <h4>Safety First Always</h4>
                     <p className="mb-0">We believe in the power of travel As avid explorer.</p>
                  </div>
               </div>

            
               <div className="about-card-sm d-flex align-items-center gap-3">
                  <div className="icon">
                     <i className="ti ti-world-star"></i>
                  </div>
                  <div>
                     <h4>Experience the World</h4>
                     <p className="mb-0">We believe in the power of travel As avid explorer.</p>
                  </div>
               </div>

          
               <div className="about-card-sm d-flex align-items-center gap-3">
                  <div className="icon">
                     <i className="ti ti-capture"></i>
                  </div>
                  <div>
                     <h4>Excellence in Service</h4>
                     <p className="mb-0">We believe in the power of travel As avid explorer.</p>
                  </div>
               </div>

              
               <div className="about-card-sm d-flex align-items-center gap-3">
                  <div className="icon">
                     <i className="ti ti-user"></i>
                  </div>
                  <div>
                     <h4>Friendly Guider</h4>
                     <p className="mb-0">We believe in the power of travel As avid explorer.</p>
                  </div>
               </div>

               <a href="about-us.html" className="btn btn-primary">Book Now <i className="icon-arrow-right"></i></a>
            </div>
         </div>
      </div>
   </div>

  
   <div className="search-bg-overlay" id="searchOverlay"></div>

  
   <div className="search-form-popup">
      <h2 className="mb-5 display-6 fw-bold text-white">How can I help you, Today?</h2>
      <button type="button" className="close-btn" id="searchClose" aria-label="Close">
         <i className="ti ti-x"></i>
      </button>
      <form className="search-form">
         <input type="search" className="form-control" placeholder="Search..."/>
         <button type="submit" className="btn btn-primary d-none"><i className="ti ti-search"></i></button>
      </form>
   </div>
            
   <header className="header-area style-three">
      <div className="container-fluid">
         <nav className="navbar navbar-expand-xl">
         
            <a className="navbar-brand" href="index.html">
               <img src={assets.logo} alt=""/>
            </a>

            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#touriaNav"
               aria-controls="touriaNav" aria-expanded="false" aria-label="Toggle navigation">
               <i className="ti ti-menu-deep"></i>
            </button>

       
            <div className="collapse justify-content-xl-end navbar-collapse" id="touriaNav">
               <ul className="navbar-nav align-items-xl-center navbar-nav-scroll">
                  <li className="touria-dd">
                     <Link to="/">Home <i className="ti ti-chevron-down"></i></Link>
                     <ul className="touria-dd-menu">
                        <li>
                           <a href="index.html">Tour Booking</a>
                        </li>
                        <li>
                           <a href="index-2.html">Air Booking</a>
                        </li>
                        <li>
                           <a href="index-3.html">Hotel Booking</a>
                        </li>
                        <li>
                           <a href="index-4.html">Family Tour</a>
                        </li>
                        <li>
                           <a href="index-5.html">Couple Package</a>
                        </li>
                        <li>
                           <a href="index-6.html">Student Travel</a>
                        </li>
                        <li>
                           <a href="index-7.html">Group Tour</a>
                        </li>
                     </ul>
                  </li>
                  <li className="touria-dd">
                     <a href="#">Tours <i className="ti ti-chevron-down"></i></a>
                     <ul className="touria-dd-menu">
                        <li>
                           <Link to="tour-list">Tour List</Link>
                        </li>
                        <li>
                           <Link to="tour-details">Tour Details</Link>
                        </li>
                     </ul>
                  </li>
                  <li className="touria-dd">
                     <a>Destinations <i className="ti ti-chevron-down"></i></a>
                     <ul className="touria-dd-menu">
                        <li>
                           <Link to="destination">Destination</Link>
                        </li>
                        <li>
                           <Link to="/destination-details">Destination Details</Link>
                        </li>
                     </ul>
                  </li>
                  <li className="touria-dd">
                     <a href="#">Pages <i className="ti ti-chevron-down"></i></a>
                     <ul className="touria-dd-menu">
                        <li className="touria-dd">
                           <a href="about-us.html">About Us</a>
                        </li>
                        <li className="touria-dd">
                           <a href="#">Destinations <i className="ti ti-chevron-right"></i></a>
                           <ul className="touria-dd-menu">
                              <li>
                                 <a href="destination.html">Destination</a>
                              </li>
                              <li>
                                 <a href="destination-details.html">Destination Details</a>
                              </li>
                           </ul>
                        </li>
                        <li className="touria-dd">
                           <a href="#">Tours <i className="ti ti-chevron-right"></i></a>
                           <ul className="touria-dd-menu">
                              <li>
                                 <a href="tour-list.html">Tour List</a>
                              </li>
                              <li>
                                 <a href="tour-details.html">Tour Details</a>
                              </li>
                           </ul>
                        </li>
                        <li className="touria-dd">
                           <a href="#">Hotels <i className="ti ti-chevron-right"></i></a>
                           <ul className="touria-dd-menu">
                              <li>
                                 <a href="hotel-list.html">Hotel List</a>
                              </li>
                              <li>
                                 <a href="hotel-details.html">Hotel Details</a>
                              </li>
                           </ul>
                        </li>
                        <li className="touria-dd">
                           <a href="#">Guider <i className="ti ti-chevron-right"></i></a>
                           <ul className="touria-dd-menu">
                              <li>
                                 <a href="guider.html">Guider</a>
                              </li>
                              <li>
                                 <a href="guider-details.html">Guider Details</a>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <a href="faqs.html">FAQs</a>
                        </li>
                        <li>
                           <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                           <a href="404.html">404</a>
                        </li>
                     </ul>
                  </li>
                  <li className="touria-dd">
                     <Link to="/blog-list">Blog 
                        {/* <i className="ti ti-chevron-down"></i> */}
                        </Link>
                     {/* <ul className="touria-dd-menu">
                        <li>
                           <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                           <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                           <a href="blog-details.html">Blog Details</a>
                        </li>
                     </ul> */}
                  </li>
                  <li>
                     <Link to="/contact-us">Contact</Link>
                  </li>
               </ul>

           
               <div className="header-navigation d-flex flex-wrap align-items-center gap-3 mt-4 mt-xl-0">
             
                  <div className="header-search-btn" id="searchButton">
                     <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                           <path d="M12.0774 12.0987L14.6441 14.6654M13.8333 7.58203C13.8333 9.23963 13.1748 10.8293 12.0027 12.0014C10.8306 13.1736 9.24085 13.832 7.58325 13.832C5.92565 13.832 4.33594 13.1736 3.16383 12.0014C1.99173 10.8293 1.33325 9.23963 1.33325 7.58203C1.33325 5.92443 1.99173 4.33472 3.16383 3.16261C4.33594 1.99051 5.92565 1.33203 7.58325 1.33203C9.24085 1.33203 10.8306 1.99051 12.0027 3.16261C13.1748 4.33472 13.8333 5.92443 13.8333 7.58203Z" stroke="#161920" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                     </button>
                  </div>

                 
                  <div className="offcanvas-icon" data-bs-toggle="offcanvas" data-bs-target="#sideMenuOffcanvas"
                     aria-controls="sideMenuOffcanvas">
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                        <path
                           d="M19.5 1.28571C19.5 0.575658 18.9179 0 18.2 0H1.3C0.582056 0 0 0.575658 0 1.28571C0 1.99577 0.582056 2.57143 1.3 2.57143H18.2C18.9179 2.57143 19.5 1.99572 19.5 1.28571ZM1.3 7.71428H24.7C25.4179 7.71428 26 8.28999 26 9C26 9.71006 25.4179 10.2857 24.7 10.2857H1.3C0.582056 10.2857 0 9.71006 0 9C0 8.28999 0.582056 7.71428 1.3 7.71428ZM1.3 15.4286H13C13.7179 15.4286 14.3 16.0042 14.3 16.7143C14.3 17.4243 13.7179 18 13 18H1.3C0.582056 18 0 17.4243 0 16.7143C0 16.0042 0.582056 15.4286 1.3 15.4286Z"
                           fill="#161920" />
                     </svg>
                  </div>

   
                  <a className="btn btn-primary" href="contact.html">Get a Quote <i className="icon-arrow-right"></i></a>
               </div>
            </div>
         </nav>
      </div>
   </header>
    </div>
  )
}

export default Navbar