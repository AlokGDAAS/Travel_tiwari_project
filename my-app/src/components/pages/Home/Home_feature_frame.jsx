import React from 'react'
import Home_feature_frame_card_box from '../../utils/Home_feature_frame_utils/Home_feature_frame_card_box'

const Home_feature_frame = () => {


  return (
    <div>
         <div className="bg-[url('/home_feature_frame_bg.png')]  bg-cover bg-center   bg-gray-200 p-[8vw] m_font_16">
         {/* Description */}
         <div className='flex md:flex-row md:justify-between flex-col'>
            <div className='basis-2/3 '>
               <p  className="montez font_33 text-[var(--primary)] m_font_24">Popular Destination</p>
               <p  className="font_50 font-extrabold m_font_30">Featured Destination</p>
            </div>

            <div className='basis-1/3  flex items-end'>
               <p  className="text-[#767676] font_19 font-medium py-[4vw] md:py-0">At Express Travel, we believe in the<br className='hidden md:block'/> transformative power of travel. As avid explorers ourselves, 
                we understand the desire to uncover.</p>
            </div>
         </div>
         {/* Card */}
         <div>
           <Home_feature_frame_card_box/>
         </div>

         </div>
    </div>
  )
}

export default Home_feature_frame