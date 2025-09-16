import React from 'react'
import { BsFillGeoAltFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-black/95 text-white font_16  bg-[url('/plane2.png'),url('/tree.png')]  bg-[position:left_center,right_center]   bg-no-repeat m_font_16">
        <div className=' pt-[10vw] px-[10vw]'>
          {/* contacts */}
          <div className='flex md:flex-row flex-col justify-between pb-[8vw] gap-[6vw] md:gap-0' >
            {/* Location */}
          <div className='flex items-center gap-[8vw] md:gap-[2vw] '>
             <div className='md:p-[2vw] p-[6vw] bg-white/20 rounded-full font_20 m_font_16'><BsFillGeoAltFill/></div>
             <div>
              <h1 className='font_24 font-bold mb-[0.5vw] m_font_21'>Location</h1>
              <p className='mb-[0.25vw]'>66 Brooklyn golden<br/></p>
               <p className=''>street line NY, USA</p>
            
             </div>
          </div>
          <div class="border-l border-gray-500 h-24 mx-3 py-2 hidden md:block"></div>
            {/* Phone */}
          <div className='flex items-center gap-[8vw] md:gap-[2vw]  '>
             <div className='md:p-[2vw] p-[6vw] bg-white/20 rounded-full font_24 m_font_20'><MdPhone/></div>
             <div>
              <h1 className='font_24 font-bold  mb-[0.5vw] m_font_21'>Phone</h1>
              <p className=' mb-[0.25vw]'>+869-868-08-68</p>
              <p className=''>+869-868-08-68</p>
            
             </div>
          </div>
          <div class="border-l border-gray-500 h-24 mx-3 py-2 hidden md:block"></div>
            {/* Email */}
          <div className='flex items-center gap-[8vw] md:gap-[2vw]'>
             <div className='md:p-[2vw] p-[6vw] bg-white/20 rounded-full font_24 m_font_20'><MdMail/></div>
             <div>
              <h1 className='font_24 font-bold  mb-[0.5vw] m_font_21'>Mail Us</h1>
              <p className='mb-[0.25vw]'>touria@support.com</p>
              <p className=''>touria@support.com</p>
            
             </div>
          </div>
          </div>

          <hr className=''/>



          {/* Links */}
          <div className='py-[8vw] flex justify-between md:flex-row flex-col'>

            {/* Description */}
            <div className='basis-1/3'>
              {/* logo */}
              <div>
                <img src={assets.logo_three} alt=''/>
              </div>
              <p className='pr-[4vw] md:my-[2vw] my-[6vw] font_18 leading-7 m_font_18'>Targeting consultation Death yet way ndulgence off under folly death 
                wrote cause her yet way yet wayspite.</p>
              {/* social media */}
              <div className='flex md:gap-[1vw] gap-[2vw]'>
                <div className='md:p-[1vw] p-[3vw] border rounded-full w-fit cursor-pointer hover:bg-[var(--primary)] duration-300'></div>
                <div className='md:p-[1vw] p-[3vw] border rounded-full w-fit cursor-pointer hover:bg-[var(--primary)] duration-300'></div>
                <div className='md:p-[1vw] p-[3vw] border rounded-full w-fit cursor-pointer hover:bg-[var(--primary)] duration-300'></div>
                <div className='md:p-[1vw] p-[3vw] border rounded-full w-fit cursor-pointer hover:bg-[var(--primary)] duration-300'></div>
              </div>
               
            </div>

            <div className='basis-2/3 flex justify-between flex-col md:flex-row py-[8vw] md:py-0 gap-[8vw] md:gap-0'>
            {/* Quick Links */}
            <div  className='w-full'>
               <h1  className='font_20 font-bold m_font_20'>Quick Links</h1>
               <div className='flex flex-col mt-[2vw] gap-[1vw] hvr_l '>
                <p className=''>Home</p>
                <p className=''>About Us</p>
                <p className=''>Services</p>
                <p className=''>Blogs</p>
                <p className=''>Tours</p>
               </div>
            </div>


            {/* Service */}
            <div  className='w-full'>
               <h1 className='font_20 font-bold m_font_20'>Services</h1>
               <div className='flex flex-col mt-[2vw] gap-[1vw] hvr_l'>
                <p className=''>Wanderlust Adventures</p>
                <p className=''>Globe Trotters Travel</p>
                <p className=''>Odyssey Travel Services</p>
                <p className=''>Jet Set Journeys</p>
                <p className=''>Dream Destinations Travel</p>
               </div>               
            </div>


            {/* Gallery posts */}
            <div  className='w-full'>
               <h1  className='font_20 font-bold m_font_20'>Gallery Posts</h1>
               <div  className='flex flex-wrap md:mt-[2vw] mt-[6vw] md:gap-[0.5vw] gap-[2vw] hvr_up' >
                
                <div className='md:w-[5.5vw] w-[20vw]'>
                   <img src={assets.sm_frame} alt=''className='rounded-xl '/> 
                </div>
                <div className='md:w-[5.5vw] w-[20vw]'>
                   <img src={assets.sm_frame} alt=''className='rounded-xl'/> 
                </div>
                <div className='md:w-[5.5vw] w-[20vw]'>
                   <img src={assets.sm_frame} alt=''className='rounded-xl'/> 
                </div>
                <div className='md:w-[5.5vw] w-[20vw]'>
                   <img src={assets.sm_frame} alt=''className='rounded-xl'/> 
                </div>
                <div className='md:w-[5.5vw] w-[20vw]'>
                   <img src={assets.sm_frame} alt=''className='rounded-xl'/> 
                </div>
                <div className='md:w-[5.5vw] w-[20vw]'>
                   <img src={assets.sm_frame} alt=''className='rounded-xl'/> 
                </div>
                

               </div>
            </div>
            </div>





          </div>
        <hr className=''/>
        {/* Cpotights */}
        <div className='flex md:flex-row flex-col justify-between md:py-[2vw] py-[4vw] gap-[4vw] md:gap-0 '>
           <div>
             <p>Copyright © 2025 Travel Tiwari All rights reserved.</p>
           </div>

           <div className='flex gap-[1vw]'>
             <p className='hover:text-[var(--primary)] cursor-pointer'>Privacy Policies</p>
             <p className='hover:text-[var(--primary)] cursor-pointer'>Terms of Service</p>
             <p className='hover:text-[var(--primary)] cursor-pointer'>Legal Agreement</p>
           </div>
        </div>          

        </div>

    </div>
  )
}

export default Footer