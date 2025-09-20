import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../../assets/assets'
import BreadCrumb from '../../utils/BreadCrumb'

const Blog_details = () => {
  return (
    <div>
       
      {/* Breadcrumb Section  */}
      <div>
       <BreadCrumb head="Blog Details" link="Home"/>
      </div>





                 
         <div class="blog-section">
           
            <div class="divider"></div>

            <div class="container">
               <div class="row g-5 g-md-4 g-xxl-5">
                  <div class="col-12">
                     <img class="rounded-4" src={assets.hundred_two_seven} alt=""/>
                  </div>

                 
                  <div class="col-12 col-md-7 col-lg-8">
                     <div class="pe-lg-3">
                      
                        <div class="single-blog-content fadeInUp" data-delay="0.2">
                         
                           <div class="post-body">
                              <div class="blog-meta flex-wrap d-flex align-items-center gap-3 gap-lg-4 mb-3">
                                 <a href="#">
                                    <i class="ti ti-user"></i> By Admin
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-calendar"></i> 9 May, 2025
                                 </a>
                                 <a href="#">
                                    <i class="ti ti-message-circle"></i> 15 Comments
                                 </a>
                              </div>

                          
                              <h3 class="post-title mb-4">The Ultimate Guide to Traveling When You Have No Money</h3>
                              <div class="d-flex flex-column gap-4">
                                 <p>Vast numbers of employees now work remotely, and it's too late to develop a set of
                                    remote-work policies if you didn't already have one. But there are ways to make the
                                    remote-work experience productive and engaging for employees</p>

                                 <p>Use both direct conversations and indirect observations to get visibility into
                                    employees
                                    challenges and concerns. Use every opportunity to make clear to employees that you
                                    support
                                    and care them. To facilitate regular conversations between managers and employees,
                                    provide
                                    managers with guidance on how best to broach sensitive subjects arising from the
                                    COVID-19
                                    pandemic, including alternative work models, job security and prospects, impact on
                                    staffing
                                 </p>

                                 <div class="d-flex flex-column gap-4">
                                    <div class="row g-4">
                                       <div class="col-12 col-lg-6">
                                          <img class="rounded-4" src={assets.hundred_two_eight} alt=""/>
                                       </div>

                                       <div class="col-12 col-lg-6">
                                         
                                          <div class="blog-quote">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 40 40" fill="none">
                                                <path
                                                   d="M16.6426 6.21484V22.7393L11.1191 33.7861H3.66602L9.01855 23.0811L9.38086 22.3574H0.5V6.21484H16.6426Z"
                                                   stroke="#3CB371" />
                                                <path
                                                   d="M39.498 6.21484V22.7393L33.9746 33.7861H26.5215L31.874 23.0811L32.2363 22.3574H23.3555V6.21484H39.498Z"
                                                   stroke="#3CB371" />
                                             </svg>
                                             <p>Use both direct conversations indirect observations to get visibility
                                                employees
                                                challenges and concerns. Use every get opportunity to make clear to
                                                employees
                                                that you support and make clear employees.</p>
                                             <h5 class="mb-0 text-primary"><span class="small-line bg-primary"></span>
                                                Ralph Edwards</h5>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <p>The third Monday of January is supposed to be the most depressing day of the year.
                                    Whether
                                    you believe that or not, the long nights, cold weather, and trying to keep to new
                                    year
                                    resolutions are all probably getting to you a little by now. To make matters worse
                                    many
                                    will
                                    still be recovering from their Christmas spending. So how can you make today a
                                    little
                                    brighter?</p>
                              </div>
                           </div>
                        </div>

                        <div class="divider-sm"></div>

                       
                        <div class="tag-share-wrapper">
                           <ul class="list-unstyled tag-list">
                              <li>Tags:</li>
                              <li><a href="#">Education</a></li>
                              <li><a href="#">Product</a></li>
                              <li><a href="#">Agency</a></li>
                           </ul>

                           <ul class="list-unstyled share-list">
                              <li>Share:</li>
                              <li><a href="#"><i class="ti ti-brand-facebook"></i></a></li>
                              <li><a href="#"><i class="ti ti-brand-x"></i></a></li>
                              <li><a href="#"><i class="ti ti-brand-linkedin"></i></a></li>
                              <li><a href="#"><i class="ti ti-brand-youtube"></i></a></li>
                           </ul>
                        </div>

                        <div class="divider-sm"></div>

                       
                        <div class="blog-comments">
                           <h2 class="mb-5">2 Comments</h2>

                           <ul class="blog-comments-list">
                              <li class="single-comment">
                                 <div class="d-flex gap-4">
                                    <div class="comment-img">
                                       <img class="rounded-4" src={assets.hundred_two_nine} alt=""/>
                                    </div>
                                    <div class="comment-content">
                                       <div
                                          class="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-2">
                                          <div>
                                             <p class="mb-1">Jan 28, 2025</p>
                                             <div class="mb-0 h4 fw-bold">Mariya Dsuza</div>
                                          </div>
                                          <a href="#" class="btn btn-link">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                   d="M9.16927 16.6654L0.835938 9.9987L9.16927 3.33203V7.4987C13.7716 7.4987 17.5026 11.2297 17.5026 15.832C17.5026 16.0594 17.4935 16.2848 17.4756 16.5076C16.2197 14.1239 13.7176 12.4987 10.8359 12.4987H9.16927V16.6654Z"
                                                   fill="#3CB371" />
                                             </svg> Reply
                                          </a>
                                       </div>
                                       <p class="mb-0">The third Monday of January is supposed to be the most depressing
                                          day
                                          of
                                          the year. Whether you believe that or not, the long nights, cold weather, and
                                          trying.
                                       </p>
                                    </div>
                                 </div>

                                 <ul>
                                    <li class="single-comment">
                                       <div class="d-flex gap-4">
                                          <div class="comment-img">
                                             <img class="rounded-4" src={assets.hundred_three_zero} alt=""/>
                                          </div>
                                          <div class="comment-content">
                                             <div
                                                class="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-2">
                                                <div>
                                                   <p class="mb-1">Jan 28, 2025</p>
                                                   <div class="mb-0 h4 fw-bold">Mariya Dsuza</div>
                                                </div>
                                                <a href="#" class="btn btn-link">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                      viewBox="0 0 20 20" fill="none">
                                                      <path
                                                         d="M9.16927 16.6654L0.835938 9.9987L9.16927 3.33203V7.4987C13.7716 7.4987 17.5026 11.2297 17.5026 15.832C17.5026 16.0594 17.4935 16.2848 17.4756 16.5076C16.2197 14.1239 13.7176 12.4987 10.8359 12.4987H9.16927V16.6654Z"
                                                         fill="#3CB371" />
                                                   </svg> Reply
                                                </a>
                                             </div>
                                             <p class="mb-0">The third Monday of January is supposed to be the most
                                                depressing
                                                day of
                                                the year. Whether you believe that or not, the long nights, cold
                                                weather, and
                                                trying.
                                             </p>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </li>

                              <li class="single-comment">
                                 <div class="d-flex gap-4">
                                    <div class="comment-img">
                                       <img class="rounded-4" src={assets.hundred_three_one} alt=""/>
                                    </div>
                                    <div class="comment-content">
                                       <div
                                          class="d-flex flex-wrap gap-3 justify-content-between align-items-center mb-2">
                                          <div>
                                             <p class="mb-1">Jan 28, 2025</p>
                                             <div class="mb-0 h4 fw-bold">Mariya Dsuza</div>
                                          </div>
                                          <a href="#" class="btn btn-link">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                   d="M9.16927 16.6654L0.835938 9.9987L9.16927 3.33203V7.4987C13.7716 7.4987 17.5026 11.2297 17.5026 15.832C17.5026 16.0594 17.4935 16.2848 17.4756 16.5076C16.2197 14.1239 13.7176 12.4987 10.8359 12.4987H9.16927V16.6654Z"
                                                   fill="#3CB371" />
                                             </svg> Reply
                                          </a>
                                       </div>
                                       <p class="mb-0">The third Monday of January is supposed to be the most depressing
                                          day of
                                          the year. Whether you believe that or not, the long nights, cold weather, and
                                          trying.
                                       </p>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        <div class="divider-sm"></div>

                       
                        <div class="comment-form contact-form m-0 p-0">
                           <div class="mb-4">
                              <h2 class="mb-3">Leave a reply</h2>
                              <p class="mb-0">Your email address will not be published. Required fields are marked *</p>
                           </div>

                         
                           <form action="#" method="get">
                              <div class="row g-4">
                                 <div class="col-12 col-lg-6">
                                    <input type="text" class="form-control" placeholder="Your Name"/>
                                 </div>
                                 <div class="col-12 col-lg-6">
                                    <input type="email" class="form-control" placeholder="Email Address"/>
                                 </div>
                                 <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Select website"/>
                                 </div>
                                 <div class="col-12">
                                    <textarea class="form-control" rows="20" cols="30"
                                       placeholder="Type your message"></textarea>
                                 </div>
                                 <div class="col-12">
                                    <button type="submit" class="btn btn-primary rounded-3">Post Comment <i
                                          class="ti ti-arrow-up-right"></i></button>
                                 </div>
                              </div>
                           </form>
                        </div>
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
                                    <img src={assets.hundred_one_four} alt=""/>
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

export default Blog_details