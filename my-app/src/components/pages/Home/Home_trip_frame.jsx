import React from 'react'
import Home_trip_frame_card from '../../utils/Home_trip_frame_utils/Home_trip_frame_card'

const Home_trip_frame = () => {
  return (
    <div className="md:p-[8vw] p-[12vw] bg-[url('/destination_shape_1.png'),url('/destination_shape_2.png')]   bg-[position:left_center,right_center]   bg-no-repeat">
                 {/* Description */}
         <div className='text-center'>
            <div className=''>
               <p  className="montez font_33 text-[var(--primary)] m_font_24">Explore The World</p>
               <p  className="font_50 font-bold m_font_30">Awesome Trip With Us</p>
            </div>

            {/* Cards */}
            <div className='flex md:gap-[1vw] gap-[4vw] md:mt-[4vw] mt-[8vw] flex-col md:flex-row'>
                <Home_trip_frame_card/>
                <Home_trip_frame_card/>
                <Home_trip_frame_card/>
            </div>


         </div>
    </div>
  )
}

export default Home_trip_frame