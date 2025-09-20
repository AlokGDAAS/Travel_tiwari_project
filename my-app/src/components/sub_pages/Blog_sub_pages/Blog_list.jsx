import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../../assets/assets'
import BreadCrumb from '../../utils/BreadCrumb'

const Blog_list = () => {
  return (
    <div>

      {/* Breadcrumb Section  */}
      <div>
       <BreadCrumb head="Blog List" link="Home"/>
      </div>


                
         <div class="blog-section">
           
            <div class="divider"></div>

            <div class="container">
               <div class="row g-5 g-md-4 g-xl-5">
                  <div class="col-12 col-md-7 col-lg-8">
                  
                     <div class="blog-list-wrapper pe-lg-3">
                     
                        <div class="blog-card-three fadeInUp" data-delay="0.2">
                          
                           <div class="post-img">
                              <img src={assets.hundred_two_four} alt=""/>
                           </div>
                           
                           <div class="post-body">
                              <div class="blog-meta flex-wrap d-flex align-items-center gap-2 gap-lg-4 mb-3">
                                 <a href="#">
                                    <i class="ti ti-user"></i>
                                    By Admin
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-calendar-week"></i>
                                    09 May, 2025
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-message-circle"></i>
                                    15 Comments
                                 </a>
                              </div>
                              <a class="post-title" href="blog-details.html">The Ultimate Guide to Traveling When You
                                 Have No
                                 Money</a>
                              <p class="mt-3 mb-5">Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in
                                 magna ut
                                 orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque
                                 interdum
                                 mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                                 venenatis.</p>
                              <Link class="btn btn-primary" to="/blog-details">Read More <i class="icon-arrow-right"></i></Link>
                           </div>
                        </div>

                        <div class="blog-card-three fadeInUp" data-delay="0.2">
                          
                           <div class="post-img">
                              <img src={assets.hundred_two_five} alt=""/>
                           </div>
                         
                           <div class="post-body">
                              <div class="blog-meta flex-wrap d-flex align-items-center gap-2 gap-lg-4 mb-3">
                                 <a href="#">
                                    <i class="ti ti-user"></i>
                                    By Admin
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-calendar-week"></i>
                                    09 May, 2025
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-message-circle"></i>
                                    15 Comments
                                 </a>
                              </div>
                              <a class="post-title" href="blog-details.html">Enrich Your Mind Envision Your Future
                                 Education
                                 for</a>
                              <p class="mt-3 mb-5">Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in
                                 magna ut
                                 orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque
                                 interdum
                                 mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                                 venenatis.</p>
                              <Link class="btn btn-primary" to="/blog-details">Read More <i class="icon-arrow-right"></i></Link>
                           </div>
                        </div>

                       
                        <div class="blog-card-three fadeInUp" data-delay="0.2">
                       
                           <div class="post-img">
                             <img src={assets.hundred_two_six} alt=""/>
                           </div>
                          
                           <div class="post-body">
                              <div class="blog-meta flex-wrap d-flex align-items-center gap-2 gap-lg-4 mb-3">
                                 <a href="#">
                                    <i class="ti ti-user"></i>
                                    By Admin
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-calendar-week"></i>
                                    09 May, 2025
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-message-circle"></i>
                                    15 Comments
                                 </a>
                              </div>
                              <a class="post-title" href="blog-details.html">The Ultimate Guide to Traveling When You
                                 Have No
                                 Money</a>
                              <p class="mt-3 mb-5">Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in
                                 magna ut
                                 orci malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque
                                 interdum
                                 mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                                 venenatis.</p>
                              <Link class="btn btn-primary" to="/blog-details">Read More <i class="icon-arrow-right"></i></Link>
                           </div>
                        </div>

                      
                        <ul class="touria-pagination list-unstyled justify-content-start">
                           <li class="active"><a href="#">1</a></li>
                           <li><a href="#">2</a></li>
                           <li><a href="#">3</a></li>
                           <li><a href="#"><i class="ti ti-chevron-right"></i></a></li>
                        </ul>
                     </div>
                  </div>

                  <div class="col-12 col-md-5 col-lg-4">
                     <div class="d-flex flex-column gap-5">
                   
                        <div class="blog-widget">
                           <div class="h4 fw-bold mb-4">Search Here</div>

                         
                           <form action="#" method="get">
                              <input type="search" placeholder="Search here..." class="form-control"/>
                              <button type="submit">
                                 <i class="ti ti-search"></i>
                              </button>
                           </form>
                        </div>

                       
                        <div class="blog-widget">
                           <div class="h4 fw-bold mb-4">Categories</div>

                           <ul class="blog-list style-two">
                              <li>
                                 <a href="blog-grid.html">
                                    Destinations
                                    <span>04</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="blog-grid.html">
                                    Travel
                                    <span>03</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="blog-grid.html">
                                    Tours
                                    <span>02</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="blog-grid.html">
                                    Holidays
                                    <span>05</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="blog-grid.html">
                                    Adventures
                                    <span>06</span>
                                 </a>
                              </li>
                           </ul>
                        </div>

                
                        <div class="blog-widget">
                           <div class="h4 fw-bold mb-4">Recent Posts</div>

                           <div class="d-flex flex-column gap-4">
                         
                              <div class="widget-blog-post">
                                 <div class="blog-thumbnail">
                                    <img src={assets.hundred_one_two} alt=""/>
                                 </div>
                                 <div class="blog-content">
                                    <a href="blog-details.html" class="mb-2">The Ultimate Guide to Traveling When You
                                       Have No
                                       Money</a>
                                    <p class="mb-0 text-primary">14 Feb, 2025</p>
                                 </div>
                              </div>

                             
                              <div class="widget-blog-post">
                                 <div class="blog-thumbnail">
                                    <img src={assets.hundred_one_three} alt=""/>
                                 </div>
                                 <div class="blog-content">
                                    <a href="blog-details.html" class="mb-2">Enrich Your Mind Envision Your Future
                                       Education
                                       for</a>
                                    <p class="mb-0 text-primary">14 Feb, 2025</p>
                                 </div>
                              </div>

                          
                              <div class="widget-blog-post">
                                 <div class="blog-thumbnail">
                                   <img src={assets.hundred_one_three} alt=""/>
                                 </div>
                                 <div class="blog-content">
                                    <a href="blog-details.html" class="mb-2">The Ultimate Guide to Traveling When You
                                       Have No
                                       Money</a>
                                    <p class="mb-0 text-primary">14 Feb, 2025</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                     
                        <div class="blog-widget">
                           <div class="h4 fw-bold mb-4">Tags</div>

                           <ul class="tag-list list-unstyled">
                              <li><a href="#">Adventure</a></li>
                              <li><a href="#">Traveling</a></li>
                              <li><a href="#">Design</a></li>
                              <li><a href="#">Travel</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="#">World</a></li>
                              <li><a href="#">Startup</a></li>
                           </ul>
                        </div>

                        <div class="blog-widget">
                           <div class="h4 fw-bold mb-4">Follow Us</div>

                           <div class="follow-nav">
                              <a href="#"><i class="ti ti-brand-facebook"></i></a>
                              <a href="#"><i class="ti ti-brand-x"></i></a>
                              <a href="#"><i class="ti ti-brand-linkedin"></i></a>
                              <a href="#"><i class="ti ti-brand-instagram"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

           
            <div class="divider"></div>
         </div>
    </div>
  )
}

export default Blog_list