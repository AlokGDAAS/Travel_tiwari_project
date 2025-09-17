import React from 'react'
import { assets } from '../../../assets/assets'

const Home_follow_insta = () => {
  return (
    <div>
               
         <div className="follow-instagram-section">
           
            <div className="divider"></div>

            <div className="container">
               <div className="section-title"><span>Follow Instagram</span></div>
            </div>

   
            <div className="divider-sm"></div>

            <div className="container">
               <div className="row g-4">

          
                  <div className="col-6 col-sm-4 col-md-3">
                     <div className="follow-instagram-card">
                        <img src={assets.thirty} alt=""/>
         
                        <a href="#" className="instagram-btn">
                           <i className="ti ti-brand-instagram"></i>
                        </a>
                     </div>
                  </div>

               
                  <div className="col-6 col-sm-4 col-md-3">
                     <div className="follow-instagram-card">
                        <img src={assets.thirty_one} alt=""/>
                      
                        <a href="#" className="instagram-btn">
                           <i className="ti ti-brand-instagram"></i>
                        </a>
                     </div>
                  </div>

         
                  <div className="col-6 col-sm-4 col-md-3">
                     <div className="follow-instagram-card">
                        <img src={assets.thirty_two} alt=""/>
               
                        <a href="#" className="instagram-btn">
                           <i className="ti ti-brand-instagram"></i>
                        </a>
                     </div>
                  </div>

             
                  <div className="col-6 col-sm-4 col-md-3">
                     <div className="follow-instagram-card">
                        <img src={assets.thirty_three} alt="" />
                      
                        <a href="#" className="instagram-btn">
                           <i className="ti ti-brand-instagram"></i>
                        </a>
                     </div>
                  </div>

               </div>
            </div>

         
            <div className="divider"></div>
         </div>
    </div>
  )
}

export default Home_follow_insta