import React from 'react'
import { Slide } from 'react-awesome-reveal'
import groupImage from '../../assets/group/fSix.png'

function Group() {
  return (
    <div className="pt-10">
    <div className="flex flex-col justify-center items-center font-cardFont max-w-7xl mx-auto pb-24 px-4">
      <p className="text-center font-medium text-sm text-gray-600 mt-8 tracking-wide uppercase">
        Not just a study stream room
      </p>
  
      <h1 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-400 text-3xl md:text-4xl md:w-9/12 py-4 leading-snug">
        Find your community. Set Goals. Achieve Them. Get rewarded.
      </h1>
  
      <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2 justify-center items-center pt-8 w-full">
        <div className="h-[400px] w-full">
          <img className="h-full w-full object-cover rounded-xl shadow-md" src={groupImage} alt="Study Group" />
        </div>
  
        <div className="px-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-4 text-center md:text-left">
            Stronger together 
          </h2>
          <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
            Imagine a world in which studying is actually enjoyable. A world where you set goals and actually accomplish them.
            Where you find guidance where you need it, and you feel supported. Where you see progress and can celebrate your
            achievements alongside thousands of peers — where someone is always there for you! OK — enough imagining —
            welcome to <span className="font-semibold text-orange-600">StudyTogether</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Group
