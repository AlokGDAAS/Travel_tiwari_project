import React from 'react'
import Home_feature_frame_card from './Home_feature_frame_card'

const Home_feature_frame_card_box = () => {

    //     const content = [
    //     {
    //         id:1,
    //         place:"Manhattan",
    //         tours:30
    //     },
    //     {
    //         id:2,
    //         place:"Pearland",
    //         tours:40            
    //     },
    //     {
    //         id:2,
    //         place:"NewYork",
    //         tours:25            
    //     }
    // ]

  return (
    <div>
        <div className='flex md:flex-row flex-col md:gap-[1.5vw] gap-[3vw] mt-[4vw]  items-center'>
        <div className='md:mb-[10vw]'>
          <Home_feature_frame_card/>
        </div>
        <div className='md:mt-[5vw] md:mb-[5vw] '>
          <Home_feature_frame_card/>
        </div>
        <div className='md:mt-[10vw] md:mb-0  '>
          <Home_feature_frame_card/>
        </div>
        </div>
    </div>
  )
}

export default Home_feature_frame_card_box