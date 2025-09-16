import React from 'react'

const Home_about_us_frame_feature_card = ({ title, description, icon }) => {
  return (
    <div>
            <div className="flex gap-[2vw]">
      {/* Left Icon */}
      <div className="h-30 w-30 rounded-full relative group">
        {/* Hover Background Circle */}
        <div className="w-20 h-20 p-4 bg-[var(--primary)] rounded-full absolute top-[0%] left-[0%] 
                        group-hover:top-[-8%] group-hover:left-[-8%] 
                        transition-all ease-out duration-600">
          {icon}
        </div>
      </div>

      {/* Right Text */}
      <div>
        <p className="font_24 font-bold">{title}</p>
        <p className="text-[#767676] font_16">{description}</p>
      </div>
    </div>
    </div>
  )
}

export default Home_about_us_frame_feature_card