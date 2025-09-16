import React from 'react'
import { assets } from '../../../assets/assets'
import { BsClock } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";

const Home_trip_frame_card = () => {
  return (
    <div>
        <div className='font_16 text-start m_font_16'>
            {/* image */}
            <div>
               <img src={assets.md_rectangle_frame_1} alt=''className='rounded-t-2xl w-full'/>
            </div>
            {/* Description */}
            <div className='md:p-[2vw] p-[4vw] bg-gray-100 flex flex-col justify-between md:gap-[2vw] gap-[4vw] rounded-b-2xl'>
                {/* Heading */}
                <div className='group-hover:text-[var(--primary)]'>
                  <p className='font_24 font-bold hover:text-[var(--primary)]  hover:text-[var(--primary)]  transition-all ease-out duration-600 m_font_21'>Experience The Incredible India With Travolo</p>
                </div>
                {/* Desc */}
                <div className='flex justify-between'>

                   <div className='md:border-r border-gray-300 md:w-fit md:pr-[2vw]'>
                    <div className='pt-[1vw] flex items-center md:gap-[0.5vw] gap-[2vw]'><BsFillGeoAltFill className=' font_12'/> <p>Bhutan, India, Pokhara</p></div>
                    <div className='pt-[1vw] flex items-center md:gap-[0.5vw] gap-[2vw]'><BsClock className=' font_12 '/>   <p>6 Days - 2 Nights</p></div>
                   </div>

                   <div className='flex justify-end md:basis-1/3'>
                    <div className=''>
                    <p className='mb-[1vw] bg-[var(--primary)] px-[1vw] py-[0.25vw] rounded-full font-semibold text-white text-center'>50% Off</p>
                    <p className='mt-[1vw] font_36 font-semibold m_font_28'>$450<span className='font_16 text-gray-500 line-through m_font_16'>$650</span></p>
                    </div>
                   </div>

                </div>

                {/* Book Now button */}
                <div className='bg-white rounded-full md:py-[1vw] py-[2vw] text-center font-bold group hover:text-white hover:bg-[var(--primary)] cursor-pointer transition-all ease-out duration-600'>
                    <button >Book now</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home_trip_frame_card