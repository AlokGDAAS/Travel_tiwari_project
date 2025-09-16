import React, { useState } from 'react'
import { assets } from '../../../assets/assets'
import { FaRegStar } from "react-icons/fa6";

const Home_testimonial_card = ({id,enable,setEnable}) => {

  return (
    <div>
        <div className='bg-white p-[1vw] cursor-pointer rounded-2xl' onClick={()=>setEnable(enable === id ? null :id)} >

            <div className={` w-full`}     >
            <img src={assets.testimonial_card_2} alt='' className='rounded-t-2xl'/>
            </div>  

            <div>
              <div className='bg-black/30 rounded-b-2xl md:p-[1vw] p-[3vw]'>
              <div className=''>
                <div>
                  {/* <img src={assets.quoter_icon} alt=''/> */}
                </div>
                <p className='text-gray-500 font-semibold mb-[1vw] font_16 text-center m_font_16'>“Working with several word the templates the last years only can                            say
                              this is best every level  use it for my reviews that I hav already are company and reviews that I hav already are
                              company  and the reviews that I have already are all excellent.</p>
                </div> 
                <hr className='md:my-[0.5vw] my-[2vw]'/>             
                <div className='flex flex-col items-end '>
                <p className='text-[#161920] text-bold m_font_20' >Marvin McKKiney</p>
                <p className='text-gray-500 font_16 m_font_16'>Product Manager</p>
                </div>

              </div>
            </div>

          

        </div>
    </div>
  )
}

export default Home_testimonial_card