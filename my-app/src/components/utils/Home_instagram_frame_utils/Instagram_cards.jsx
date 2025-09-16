import React from "react";
import { assets } from '../../../assets/assets'
import { GrInstagram } from "react-icons/gr";

const Instagram_cards = () => {
  return (
    <div>
      <div className="relative group">
        {/* Background image */}
        <div>
          <img
            src={assets.insta_frame}
            alt=""
            className="rounded-2xl md:w-[19.25vw] md:h-[20vw] w-[40vw h-[40vw]]"
          />
        </div>

        {/* Overlay with animation */}
        <div
          className=" w-[19.25vw] h-[20vw] bg-black/50 rounded-2xl absolute top-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                        transition-all duration-600 ease-out"
        >
          <div className="bg-[var(--primary)] p-[1.3vw] rounded-full w-fit opacity-0 -translate-y-[100%] transition-all duration-600 ease-out  group-hover:opacity-100 group-hover:translate-y-0  cursor-pointer hover:bg-black/70  ">
            <GrInstagram className="text-white font_24 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram_cards;
