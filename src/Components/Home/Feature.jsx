import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { FaUsers } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GiProgression } from 'react-icons/gi'
import { GrDirections } from 'react-icons/gr'
import { IoBookSharp } from 'react-icons/io5'
import { MdOutlineLeaderboard } from 'react-icons/md'
import fOne from '../../assets/f1.png'
import fTwo from '../../assets/f2.png'
import fThree from '../../assets/f3.png'
import fFive from '../../assets/fFive.png'
import fFour from '../../assets/fFour.png'
import fSix from '../../assets/fSix.png'

function Feature() {
  return (
    <div id="assignment">
    <section className="flex flex-col justify-center items-center pb-14 font-cardFont max-w-7xl mx-auto">
  
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ff5e3b]">
          Key Features of Our Application
        </h2>
        <Fade>
          <p className="mt-4 px-2 text-md text-gray-600 max-w-2xl mx-auto">
            These innovative features are designed to enhance your academic workflow and collaboration experience.
          </p>
        </Fade>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Reusable Feature Card */}
        {[
          {
            icon: <IoBookSharp />,
            title: "Assignment Creation",
            desc1: "Easily create assignments with deadlines, file attachments, and rubrics.",
            desc2: "Streamlined for quick setup and organized submissions."
          },
          {
            icon: <GrDirections />,
            title: "Collaborative Grading",
            desc1: "Empower students to evaluate each other’s work effectively.",
            desc2: "Feedback remains transparent and accessible to all."
          },
          {
            icon: <GiProgression />,
            title: "Progress Tracking",
            desc1: "Real-time dashboards show completed vs. pending tasks.",
            desc2: "Never miss a deadline with instant alerts."
          },
          {
            icon: <FaUsers />,
            title: "Discussion Forum",
            desc1: "Integrated Q&A for each assignment or topic.",
            desc2: "Encourage academic interaction and collaboration."
          },
          {
            icon: <MdOutlineLeaderboard />,
            title: "Leaderboards",
            desc1: "Motivate learners via performance-based rankings.",
            desc2: "Badges and rewards encourage consistent participation."
          },
          {
            icon: <FaPeopleGroup />,
            title: "Study Groups",
            desc1: "Create or join topic-based study groups.",
            desc2: "Supports private or public collaboration spaces."
          }
        ].map((feature, index) => (
          <Slide key={index} direction="up" cascade>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between items-center h-[270px] transition-transform hover:scale-[1.02] duration-300">
              <div className="text-5xl text-orange-500 mb-2 text-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#f97316] text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{feature.desc1}</p>
              <p className="text-gray-600 text-sm text-center mt-1">{feature.desc2}</p>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  </div>
  
  
  )
}

export default Feature
