import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <Fade fraction={0.5}>
      <div className="bg-bannerBg bg-cover bg-center h-60 md:h-[510px] lg:h-[600px] w-full font-cardFont rounded-2xl">
        <div className=" flex flex-col justify-center items-center text-center h-full bg-black/60 rounded-2xl">
          <h1 className="font-bold  text-5xl text-orange-500 w-7/12">
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
          <p className="font-semibold text-white/80 text-2xl my-5 ">
            Batter Education For Batter World
          </p>
          <button className=" px-10 text-black/90 text-xl py-4 rounded-xl border-2 border-white/70 hover:bg-orange-500 transition-all duration-100 hover:scale-110 bg-lime-400 ">
            Explore Now{" "}
          </button>
        </div>
      </div>
    </Fade>
  );
}

export default Banner;
