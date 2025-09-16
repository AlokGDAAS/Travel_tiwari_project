import { useState, useEffect } from "react";
import '../../../assets/css/home_offer.css'

export default function Timer_box({target_date}) {
  // Target date (e.g., 5 days from now)
  const targetDate = new Date(target_date).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
        <div className='md:mt-[4vw] mt-[8vw] mx-[4vw] flex gap-[1vw] justify-between  m_font_16'>

            <div className=' border border-white rounded-xl overlay_o '>
                <p className='flex justify-center items-center text-white px-[1vw] py-[0.3vw] font_36 font-bold w-[16vw] md:w-[6vw]'>{timeLeft.days}</p>
                <hr className="my-1 border-t-1 border-white/40" />
                <p className='flex justify-center items-center text-white font-semibold px-[1vw] py-[0.3vw]'>Days</p>
            </div>

            <div className=' border border-white rounded-xl overlay_o'>
                <p className='flex justify-center items-center text-white px-[1vw] py-[0.3vw] font_36 font-bold w-[16vw] md:w-[6vw]'>{timeLeft.hours}</p>
                <hr className="my-1 border-t-1 border-white/40" />
                <p className='flex justify-center items-center text-white font-semibold px-[1vw] py-[0.3vw]'>Hours</p>
            </div>

            <div className=' border border-white rounded-xl overlay_o'>
                <p className='flex justify-center items-center text-white px-[1vw] py-[0.3vw] font_36 font-bold w-[16vw] md:w-[6vw]'>{timeLeft.minutes}</p>
                <hr className="my-1 border-t-1 border-white/40" />
                <p className='flex justify-center items-center text-white font-semibold px-[1vw] py-[0.3vw]'>Minutes</p>
            </div>

            <div className=' border border-white rounded-xl overlay_o'>
                <p className='flex justify-center items-center text-white px-[1vw] py-[0.3vw] font_36 font-bold w-[16vw] md:w-[6vw]'>{timeLeft.seconds}</p>
                <hr className="my-1 border-t-1 border-white/40" />
                <p className='flex justify-center items-center text-white font-semibold px-[1vw] py-[0.3vw]'>Seconds</p>
            </div>
        </div>
    </div>
  );
}
