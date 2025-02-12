import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <Fade fraction={0.5} className="pt-20">
      <div className="bg-bannerBg bg-cover bg-center h-60 md:h-[510px] lg:h-[600px] w-full font-cardFont ">
        <div className=" flex flex-col justify-center items-center text-center h-full bg-black/60 ">
          <h1 className="font-bold h-14 md:h-20 lg:h-24 text-2xl md:text-4xl lg:text-5xl text-white/90 md:w-7/12">
            <Typewriter
              words={["Welcome To Our All Study Best For Education"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h1>
          <p className="font-semibold text-[#ff5e3b] text-sm md:text-xl lg:text-2xl my-2 md:my-5 ">
            Batter Education For Batter World
          </p>
          <a href="#assignment"  className="px-2 text-sm md:px-6 lg:px-10 text-black/90  font-semibold md:text-xl py-1 md:py-2 lg:py-4 rounded-xl border-2 border-white/70 hover:bg-orange-500 transition-all duration-100 hover:scale-110 bg-[#fda400]  ">
            Explore Now{" "}
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default Banner;
