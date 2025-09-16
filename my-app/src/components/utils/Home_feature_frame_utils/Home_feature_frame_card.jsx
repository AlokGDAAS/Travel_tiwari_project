import React from 'react'
import '../../../assets/css/home_feature_frame_card.css'

const Home_feature_frame_card = () => {
  return (
    <div className='relative'>
      
        <div className='md:w-[26.25vw] w-[80vw] h-[85vw] md:h-[27vw] bg-white  rounded-2xl  m_font_16'>
               
        </div>
        
        <div className='md:w-[26.25vw] w-[80vw] h-[85vw] md:h-[27vw] overlay  rounded-2xl mb-[10vw] absolute top-0 md:p-[2vw] p-[4vw] flex items-end'>
            <div className='flex justify-between w-full text-white'>

               <div>
                 <p className='font_16'>Travel To</p>
                 <p className='font_24 font-semibold m_font_21'>Manhattan</p>
               </div>

               <div className='flex items-end    '>

                <p className='font_16 bg-[var(--primary)] h-fit rounded-full md:px-[1vw] md:py-[0.25vw] px-[4vw] py-[1vw] '>30 hours</p>
               </div> 
            </div>

        </div>

    </div>

  )
}

export default Home_feature_frame_card