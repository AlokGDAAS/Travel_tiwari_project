import React from 'react'
import Home_1 from './pages/Home/Home_1'
import Home_feature_frame from './pages/Home/Home_feature_frame'
import Home_about_us_frame from './pages/Home/Home_about_us_frame'
import Home_trip_frame from './pages/Home/Home_trip_frame'
import Home_instagram from './pages/Home/Home_instagram'
import Home_offer from './pages/Home/Home_offer'
import Home_whychose_frame from './pages/Home/Home_whychose_frame'
import Home_testimaonial_frame from './pages/Home/Home_testimaonial_frame'
import Home_news_update from './pages/Home/Home_news_update'
import Home_getintouch_frame from './pages/Home/Home_getintouch_frame'



const Home = () => {
  return (
    <div>
        <Home_1/>
 
        <Home_about_us_frame/>
        <Home_feature_frame/>
        <Home_trip_frame/>
        <Home_offer/>
        <Home_whychose_frame/>
        <Home_testimaonial_frame/>
        <Home_getintouch_frame/>
        <Home_news_update/>
        <Home_instagram/>

 
    </div>
  )
}

export default Home