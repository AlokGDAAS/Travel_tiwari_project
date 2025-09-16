import React from 'react'
import { assets } from '../../../assets/assets'
import { FaRegStar } from "react-icons/fa6";

const Home_offer_card = ({img,city,cost,rating}) => {
  return (
    <div>
        <div className='bg-white md:p-[1vw] p-[3vw]  rounded-2xl md:w-[16vw] m_font_15'>
            <div className='mb-[0.3vw]'>
            <img src={img} alt='' className='rounded-2xl'/>
            </div>
            <div>
                <p className='font_24 font-bold md:mb-[0.3vw] mb-[1vw] text-[#161920] m_font_21'>{city}</p>
                <p className='text-gray-500 font-semibold  md:mb-[0.3vw] mb-[2vw] font_16'>$ {cost}</p>
                <div className='text-white bg-[var(--primary)] w-fit rounded-full md:px-[1vw] px-[2vw] md:py-[0.3vw] py-[1vw] font-semibold font_16 flex justify-center items-center md:gap-[0.5vw] gap-[1vw] mb-[0.3vw]'>
                    <FaRegStar className='inline'/> <p>{rating}</p>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Home_offer_card