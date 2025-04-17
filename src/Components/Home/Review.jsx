import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaRegStar, FaStar, FaUserCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Review = () => {
    return (
        <div className="pb-20 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#ff5e3b]">
          -- What People Say --
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <Fade>
          <div className="card w-80 border-2 p-3">
            <div className="flex gap-x-3 items-center">
              <h1 className="text-3xl">
                <FaUserCircle />
              </h1>
              <div className="my-5">
                <h1 className="font-semibold text-xl">
                  <Typewriter
                    words={["Mr. Ayas Bin Ataur"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={200}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </h1>
  
                <p className="font-medium text-gray-600">Ayas LTD</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-5">
            "Study Today has completely transformed the way my friends and I manage our assignments. The ability to create, submit, and grade assignments within a group is fantastic. The interface is clean, user-friendly, . Highly recommended!" – Mr. Ayas Bin Ataur
            </p>
            <hr />
            <div className="flex gap-4 items-center text-sm mt-2">
              <h1>Rating :</h1>{" "}
              <section className="text-orange-400 flex gap-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </section>
            </div>
          </div>
          </Fade>
         <Fade delay={500}>
         <div className="card w-80 border-2 p-3">
            <div className="flex gap-x-3 items-center">
              <h1 className="text-3xl">
                <FaUserCircle />
              </h1>
              <div className="my-5">
                <h1 className="font-semibold text-xl">
                  <Typewriter
                    words={["Mr. Arosh Al Hasan"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={200}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </h1>
                <p className="font-medium text-gray-600">Cricketer</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-5">
            "I love how Study Today makes group study sessions more organized. The real-time feedback and grading system help improve learning efficiency. The website runs smoothly without any lag, and the UI is very intuitive. A must-try for students!" – Mr. Arosh Al Hasan
            </p>
            <hr />
            <div className="flex gap-4 items-center text-sm mt-2">
              <h1>Rating :</h1>{" "}
              <section className="text-orange-400 flex gap-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </section>
            </div>
          </div>
         </Fade>
         <Fade delay={900}>
         <div className="card w-80 border-2 p-3">
            <div className="flex gap-x-3 items-center">
              <h1 className="text-3xl">
                <FaUserCircle />
              </h1>
              <div className="my-5">
                <h1 className="font-semibold text-xl">
                  <Typewriter
                    words={["Mr. Adnan Malik"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={200}
                    deleteSpeed={100}
                    delaySpeed={2000}
                  />
                </h1>
                <p className="font-medium text-gray-600">COO Funder</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-5">
            "The website is very helpful for managing assignments, but I wish there were more customization options for grading criteria. And perfect for students Still, it's a fantastic platform for group studies and assignment management!" – Mr. Adnan Malik
            </p>
            <hr />
            <div className="flex gap-4 items-center text-sm mt-2">
              <h1>Rating :</h1>{" "}
              <section className="text-orange-400 flex gap-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </section>
            </div>
          </div>
         </Fade>
       
        
         
        </div>
      </div>
    );
};

export default Review;