import React from 'react'
import { assets } from '../../../assets/assets'
import { GrInstagram } from "react-icons/gr";
import Instagram_cards from '../../utils/Home_instagram_frame_utils/Instagram_cards';

const Home_instagram = () => {
  return (
    <div className='px-[8vw] md:py-[8vw] py-[12vw]'>
        <div className='flex items-center'>
        <hr className='md:basis-3/8 basis-1/5' />
        <div  className='md:basis-3/8 basis-3/5 text-center font_36 font-bold m_font_22 pb-[8vw] md:pb-0'>Follow Instagram</div>
        <hr  className='md:basis-3/8 basis-1/5'/>
        </div>

        <div className='flex md:gap-[1vw] gap-[4vw] mt-[4vw] flex-col md:flex-row justify-center items-center'>
          <div className='flex md:gap-[1vw] gap-[4vw]'>
             <Instagram_cards/>
             <Instagram_cards/>
          </div>   
          <div className='flex md:gap-[1vw] gap-[4vw]'>
             <Instagram_cards/>
             <Instagram_cards/>
          </div>   


        </div>
    </div>
  )
}

export default Home_instagram