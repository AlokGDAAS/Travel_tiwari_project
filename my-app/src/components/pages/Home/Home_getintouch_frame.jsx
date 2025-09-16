import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Home_getintouch_frame = () => {
  return (
    <div className="relative">
      <div className=" border text-white font_16 ">
        <div className=" bg-black/50 px-[8vw]  md:pt-[8vw] md:pb-[8vw] pt-[16vw] pb-[110vw]  md:flex md:mb-[6vw] mb-[18vw]">

          {/* second section */}
          <div className="basis-1/2 order-2">
            <div>
              <div className=" md:flex">
                <div className="basis-1/2 flex flex-col md:gap-[3vw] gap-[10vw] justify-center items-center">
                  <div className="">
                    <div className="border md:p-[1vw] p-[4vw] rounded-full  w-fit">
                      <div className="p-[1vw] bg-[var(--primary)] rounded-full md:h-[15vw] h-[50vw] md:w-[15vw] w-[50vw] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                          <p className="font_60 font-bold m_font_42">976+</p>
                          <p className="font_20 font-bold m_font_16">Happy Travellers</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="border md:p-[1vw] p-[4vw] rounded-full  w-fit">
                      <div className="p-[1vw] bg-[var(--primary)] rounded-full md:h-[15vw] h-[50vw] md:w-[15vw] w-[50vw] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                          <p className="font_60 font-bold m_font_42">805+</p>
                          <p className="font_20 font-bold m_font_16">Positive Reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="basis-1/2 flex items-center justify-center md:pt-0 pt-[10vw]">
                  <div className="">
                    <div className="border md:p-[1vw] p-[4vw] rounded-full  w-fit">
                      <div className="p-[1vw] bg-[var(--primary)] rounded-full md:h-[15vw] h-[50vw] md:w-[15vw] w-[50vw] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                          <p className="font_60 font-bold m_font_42">745+</p>
                          <p className="font_20 font-bold m_font_16">Award Winings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>

                    {/* first section */}
          <div className="basis-1/2 order-1 md:mt-0 mt-[10vw]">
            <p className="montez font_33 m_font_24">Get In Touch</p>
            <p className="font_50 font-extrabold md:leading-[4vw] leading-[10vw] m_font_32">
              Do You Need For Your <br />
              Next Projects ?
            </p>
            <p className="font_20 font-medium pt-[2vw] m_font_16">
              At Express Travel, we believe in the transformative power of
              travel. As avid explorers ourselves, we understand the desire to
              uncover experiences, forge understand the desire meaningful.
            </p>
          </div>
        </div>
      </div>
      <div className="md:rounded-[2vw] rounded-[4vw] absolute bottom-0 left-[8vw] md:h-[30vw] md:w-[30vw] h-[120vw] w-[84vw] bg-yellow-700">
        <div className="bg-white p-[4vw] md:p-[1vw] text-gray-900 p-[2vw] md:h-[24vw] md:rounded-t-[1vw] rounded-t-[4vw] flex flex-col justify-evenly  h-[102vw]">
          <div className="bg-gray-300 md:px-[1vw] md:py-[0.8vw] px-[4vw] py-[4vw] md:rounded-[0.5vw] rounded-[2vw] flex justify-between">
            <input type="text" placeholder="First Name*" class="outline-none" />
            <CiUser className="font_24 m_font_24 text-gray-500"/> 
          </div>
          <div className="bg-gray-300 md:px-[1vw] md:py-[0.8vw] px-[4vw] py-[4vw] md:rounded-[0.5vw] rounded-[2vw] flex justify-between">
            <input type="text" placeholder="Email*" class="outline-none" />
            <MdOutlineMailOutline className="font_24 m_font_24 text-gray-500"/> 
          </div>
          <div className="bg-gray-300 md:px-[1vw] md:py-[0.8vw] px-[4vw] py-[4vw] md:rounded-[0.5vw] rounded-[2vw] flex justify-between">
            <input type="text" placeholder="Select subject*" class="outline-none" />
            <IoIosArrowDown className="font_24 m_font_24 text-gray-500"/> 
          </div>
          <div className="bg-gray-300 md:px-[1vw] md:py-[0.8vw] px-[4vw] py-[4vw] md:rounded-[0.5vw] rounded-[2vw] flex justify-between">
            <textarea type="text" placeholder="Your Comments*" class="outline-none "  rows="3"/>
            <BsChatDots className="font_24 m_font_24 text-gray-500"/> 
          </div>
        </div>
        <div className="bg-[var(--primary)] md:h-[6vw] h-[18vw] rounded-b-[1vw]"></div>
      </div>
    </div>
  );
};

export default Home_getintouch_frame;
