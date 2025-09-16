import React from "react";
import { assets } from "../../../assets/assets";
import { FaArrowRightLong } from "react-icons/fa6";

function Home_news_update() {
  return (
    <div className="px-[8vw] md:py-[8vw] py-[16vw] bg-black/5 font_16">
      <div className="md:flex justify-between">
        <div>
          <p className="montez font_33 text-[var(--primary)] m_font_24">News & Updates</p>
          <p className="font_50 font-extrabold m_font_30">Our Latest News & Articles</p>
        </div>
        <div className="flex items-end group transition-all ease-out duration-300">
          <button className="bg-[var(--primary)] group-hover:bg-[var(--secondary)] font_16 text-white h-fit font-bold md:py-[1vw] py-[2vw] md:px-[2vw] px-[4vw] my-[4vw] md:my-0 rounded-full flex items-center gap-[1vw]  transition-all ease-out duration-300">
            <p className="group-hover:px-[0.3vw]  transition-all ease-out duration-300 m_font_14">View All Blogs</p> <FaArrowRightLong/>
          </button>
        </div>
      </div>
      {/* news boxes */}
      <div className="md:flex gap-[1.5vw] pt-[4vw] md:h-[35vw]">
        {/* vertical card */}
        <div className="basis-1/3">

        <div className=" md:h-[30vw]  mb-[4vw] md:mb-0">
          <div>
            <img src={assets.news_update_1} alt="" className="md:h-[20vw] w-[101vw] md:w-full rounded-t-4xl"/>
          </div>

          <div className="md:pt-[1.5vw] pt-[3vw] md:px-[1.5vw] px-[6vw] pb-[6vw] md:pb-[1vw] bg-black/5 md:rounded-b-4xl rounded-b-2xl">
          <p className="text-gray-500 font-medium m_font_16">By Admin . 26 June 2025</p>
          <p className="font_25 font-bold pt-[0.7vw] pb-[2vw] relative inline-block group m_font_20">The Ultimate Guide To Traveling
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#161819] transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className="font-semibold text-[var(--primary)] font_18 my-[0.5vw] underline underline-offset-8 decoration-2 m_font_14">View Details  <FaArrowRightLong className="inline"/>
          </p>
          </div>
        </div>

        </div>
        {/* horizontal cards */}
        <div  className="basis-2/3 flex flex-col md:gap-[1.5vw] gap-[4vw]">

          <div className="flex ">
            <div className="md:w-full ">
              <img src={assets.md_frame_1} alt="" className=" md:rounded-l-4xl rounded-l-2xl w-[50vw] h-[60vw] md:h-[15vw] md:w-full" />
            </div>
            <div  className="w-full bg-black/5 md:rounded-r-4xl rounded-r-2xl md:p-[1.5vw] p-[4vw]">
            <p className="text-gray-500 font-medium m_font_16">Knowledge . 29 June 2025</p>
            <p className="font_25 font-bold pt-[0.7vw] relative inline-block group m_font_20">The Ultimate Guide To Traveling
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#161819] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="font_25 font-bold  relative inline-block group m_font_20">When You Have no Money
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#161819] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p  className="font-semibold text-[var(--primary)] font_18 md:my-[0.5vw] my-[2vw] underline underline-offset-8 decoration-2 m_font_14">view details <FaArrowRightLong className="inline"/></p>
            </div>
          </div>

          <div className="flex ">
            <div className="md:w-full ">
              <img src={assets.md_frame_1} alt="" className="md:rounded-l-4xl rounded-l-2xl w-[50vw] h-[60vw] md:h-[15vw] md:w-full" />
            </div>
            <div  className="w-full bg-black/5 md:rounded-r-4xl rounded-r-2xl md:p-[1.5vw] p-[4vw]">
            <p className="text-gray-500 font-medium m_font_16">Knowledge . 26 June 2025</p>
            <p className="font_25 font-bold pt-[0.7vw] relative inline-block group m_font_20">The Ultimate Guide To Traveling
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#161819] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p className="font_25 font-bold  relative inline-block group m_font_20">When You Have no Money
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#161819] transition-all duration-300 group-hover:w-full"></span>
            </p>
            <p  className="font-semibold text-[var(--primary)] font_18 md:my-[0.5vw] my-[2vw] underline underline-offset-8 decoration-2 m_font_14">view details <FaArrowRightLong className="inline"/></p>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Home_news_update;
