import React from 'react'
import Home_sub_paje_1 from '../sub_pages/Home_sub_pages/Home_sub_paje_1'
import Home_about from '../sub_pages/Home_sub_pages/Home_about'
import Home_feature from '../sub_pages/Home_sub_pages/Home_feature'
import Home_trip from '../sub_pages/Home_sub_pages/Home_trip'
import Home_deals from '../sub_pages/Home_sub_pages/Home_deals'
import Home_why_choose from '../sub_pages/Home_sub_pages/Home_why_choose'
import Home_contact from '../sub_pages/Home_sub_pages/Home_contact'
import Home_follow_insta from '../sub_pages/Home_sub_pages/Home_follow_insta'
import Home_sub_page_first from '../sub_pages/Home_sub_pages/Home_sub_page_first'
import Home_blog_re from '../sub_pages/Home_sub_pages/Home_blog_re'
import Test from '../Test'
import Home_testimonial_re from '../sub_pages/Home_sub_pages/Home_testimonial_re'


const Home = () => {
  return (
    <div>
      <Home_sub_page_first/>
        <Home_sub_paje_1/>
        <Home_about/>
        <Home_feature/>
        <Home_trip/>
        <Home_deals/>
        <Home_why_choose/>
        <Home_testimonial_re/>
        <Home_contact/>
        <Home_blog_re/>
        <Home_follow_insta/>
        <Test/>
    
        
 
    </div>
  )
}

export default Home