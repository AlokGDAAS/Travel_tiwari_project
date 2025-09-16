import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css"; // pick a theme
import "../../../assets/css/sliding_bg.css";
import styles from "../../../assets/css/home_1.module.scss";
import { MdLocationOn } from "react-icons/md";
import { assets } from "../../../assets/assets";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { MdOutlineTour } from "react-icons/md";

const Home_1 = () => {
  const [range, setRange] = useState(["Start", "to End"]);

  return (
    <div className={`${styles.bg} h-screen md:h-auto m_font_16 relative`}>
      <div className="p-4 flex justify-between md:pt-[12vw] pt-[30vw] mx-auto">
        {/* social media */}
        <div className="basis-1/15 h-full hidden md:block">
          <div className="h-[10vw] border-l-2 border-gray-400 ml-13 "></div>
          <div className=" my-[1vw] flex flex-col gap-4  items-center">
            <div className="h-10 w-10 bg-white/20 rounded-full"></div>
            <div className="h-10 w-10 bg-white/20 rounded-full"></div>
            <div className="h-10 w-10 bg-white/20 rounded-full"></div>
            <div className="h-10 w-10 bg-white/20 rounded-full"></div>
          </div>
          <div className="h-[10vw] border-l-2 border-gray-400 ml-13 "></div>
        </div>

        {/* main content */}
        <div className=" md:basis-13/15 flex flex-col justify-start text-white md:pl-[1vw] pl-[2vw] md:pr-[15vw] pt-[3vw] ">
          <p className="montez font_29 text-[var(--primary)] m_font_24">
            Experience Unmatched Delight With Us
          </p>
          <h1 className="font_80 font-extrabold md:leading-24 leading-[9vw] m_font_28">
            Where Exeptional <br />
            Memories Begin
          </h1>
          <p className="font_17 md:my-[1vw] my-[6vw] pb-[1vw]">
            Welcome to our Vitour website! We are a professional and reliable
            tours company that offers a wide range of printing services are many
            variations of passages.
          </p>

          {/* search box */}
          <div className="flex md:flex-row flex-col w-full md:py-[1.75vw] py-[4vw] md:px-[2vw] px-[4vw] bg-white md:rounded-full rounded-[4vw] justify-between md:mt-[1vw] mt-[8vw]">
            {/* Location */}
            <div className="flex text-gray-500 items-center md:gap-[1vw] gap-[4vw] cursor-pointer w-full ">
              <div className="md:p-[1vw] p-[4vw]  bg-[#CCCCCC] rounded-full">
                <div className="md:p-[0.5vw] p-[2vw] border border-gray-300 bg-[#EFEFEF] rounded-full shadow-none text-[#767676] font_20">
                  <MdLocationOn className="m_font_20"/>
                </div>
              </div>
              <div className="flex flex-col justify-center h-full">
                <p>Location</p>
                <p className="font-bold">New York City</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex text-gray-500 items-center md:gap-[1vw] gap-[4vw] cursor-pointer w-full my-[4vw] md:my-0 ">
              <div className="md:p-[1vw] p-[4vw]  bg-[#CCCCCC] rounded-full">
                <div className="md:p-[0.5vw] p-[2vw] border border-gray-300 bg-[#EFEFEF] rounded-full shadow-none text-[#767676] font_20">
                  <HiOutlineCalendarDateRange className="m_font_20"/>
                </div>
              </div>
              <div className="flex flex-col justify-center h-full ">
                <p>Time Period</p>
                <div className="font-bold">
                  <Flatpickr
                    options={{
                      mode: "range",
                      dateFormat: "d-M",
                      minDate: "today",
                    }}
                    value={range}
                    onChange={(selectedDates) => setRange(selectedDates)}
                    className=" "
                    placeholder="Start to End"
                  />

                </div>
              </div>
            </div>
            {/* Tour */}
            <div className="flex text-gray-500 items-center md:gap-[1vw] gap-[4vw] cursor-pointer w-full ">
              <div className="md:p-[1vw] p-[4vw]  bg-[#CCCCCC] rounded-full">
                <div className="md:p-[0.5vw] p-[2vw] border border-gray-300 bg-[#EFEFEF] rounded-full shadow-none text-[#767676] font_20">
                  <MdOutlineTour className="m_font_20"/>
                </div>
              </div>
              <div className="flex flex-col justify-center  h-full">
                <p>Tour Type</p>
                <p className="font-bold">Family Tour</p>
              </div>
            </div>
            {/* search button */}
            <div className=" w-full flex md:flex-row-reverse mt-[6vw] md:mt-0">
              <div className="bg-[var(--primary)] text-white px-[3.5vw]   hover:bg-black transition-all duration-900 ease-out md:py-[1.5vw] py-[3vw] h-fit my-auto rounded-full font-bold cursor-pointer md:w-fit w-full text-center">
                Search Now
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="basis-1/15 hidden md:block"></div>
      </div>
      <div className="md:relative absolute bottom-0">
        <img src={assets.cloud} alt="" />
      </div>
    </div>
  );
};

export default Home_1;
