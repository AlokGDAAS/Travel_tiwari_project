import React from 'react'
import { assets } from '../../../assets/assets'

const Home_blog = () => {
  return (
    <div>
                
         <section className="blog-section">
        
            <div className="divider"></div>

           
            <div className="container">
               <div className="row g-5 align-items-end">
             
                  <div className="col-12 col-sm-6">
                     <div className="section-heading">
                        <span className="sub-title">News &amp; Updates</span>
                        <h2 className="mb-0">Our Latest News &amp; Articles</h2>
                     </div>
                  </div>

               
                  <div className="col-12 col-sm-6">
                     <div className="text-sm-end">
                        <a href="blog-grid.html" className="btn btn-primary">View All Blogs <i
                              className="icon-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>

      
            <div className="divider-sm"></div>

            <div className="container">
               <div className="row g-4">

                  
                  <div className="col-12 col-md-5 col-xxl-4">
                     {/* verticle card */}
                     <div className="blog-card style-two fadeInUp" data-delay="0.2">
                        <div className="post-img">
                           <img src={assets.twenty_six} alt=""/>
                        </div>
                   
                        <div className="post-body">
                           <div className="blog-meta d-flex flex-wrap align-items-center gap-2">
                              <a href="#">By Admin</a>
                              <div className="dot"></div>
                              <a href="#">26 June 2025</a>
                           </div>
                           <a className="post-title h4" href="blog-details.html">The Ultimate Guide to Traveling</a>
                           <div className="d-block mt-3">
                              <a className="btn btn-link" href="blog-details.html">View Details <i
                                    className="icon-arrow-right"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 col-md-7 col-xxl-8">
                     <div className="d-flex gap-4 flex-column">
                        
                      {/* horizontal card 1 */}
                        <div className="blog-card fadeInUp" data-delay="0.4">
                           <div className="post-img">
                              <img src={assets.twenty_seven} alt=""/>
                           </div>
                          
                           <div className="post-body">
                              <div className="blog-meta d-flex flex-wrap align-items-center gap-2">
                                 <a href="#">Knowledge</a>
                                 <div className="dot"></div>
                                 <a href="#">26 June 2025</a>
                              </div>
                              <a className="post-title h4" href="blog-details.html">The Ultimate Guide to Traveling When You
                                 Have
                                 No Money</a>
                              <div className="d-block mt-4">
                                 <a className="btn btn-link" href="blog-details.html">View Details <i
                                       className="icon-arrow-right"></i></a>
                              </div>
                           </div>
                        </div>


                     {/* horizontal card 2 */}

                        <div className="blog-card fadeInUp" data-delay="0.6">
                           <div className="post-img">
                              <img src={assets.twenty_eight} alt=""/>
                           </div>
                  
                           <div className="post-body">
                              <div className="blog-meta d-flex flex-wrap align-items-center gap-2">
                                 <a href="#">Knowledge</a>
                                 <div className="dot"></div>
                                 <a href="#">26 June 2025</a>
                              </div>
                              <a className="post-title h4" href="blog-details.html">The Ultimate Guide to Traveling When You
                                 Have
                                 No Money</a>
                              <div className="d-block mt-4">
                                 <a className="btn btn-link" href="blog-details.html">View Details <i
                                       className="icon-arrow-right"></i></a>
                              </div>
                           </div>
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

export default Home_blog