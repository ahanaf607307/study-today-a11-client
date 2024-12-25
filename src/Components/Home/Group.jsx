import Lottie from 'lottie-react'
import React from 'react'
import lottieFile from '../../assets/lottie.json'

function Group() {
  return (
    <div className='flex flex-col justify-center items-center font-cardFont'>
        <p className='text-center font-semibold text-md text-lime-600 my-3'>Not just a study stream room</p>
      <h1 className='text-center font-bold text-orange-600 text-3xl px-1 md:text-4xl lg:text-5xl md:w-9/12 mb-4'>Find your community. Set Goals.
      Achieve Them. Get rewarded.</h1>

      <div className='grid gap-x-10 gap-y-4 lg:grid-cols-2 justify-center items-center'>
        <div>
            <Lottie  animationData={lottieFile}></Lottie>
        </div>
        <div className='px-3'> 
            <h1 className='text-4xl font-semibold font-cardFont text-orange-500 text-center md:text-start'>Stronger together 💪</h1>
            <p className='text-xl font-semibold text-gray-500 my-4'>Imagine a world in which studying is actually enjoyable. A world where you set goals and actually accomplish them. Where you find guidance where you need it, and you feel supported. Where you see progress and can celebrate your achievements alongside thousands of peers - where someone is always there for you! OK - enough imagining - welcome to StudyTogether.</p>
        </div>
      </div>
    </div>
  )
}

export default Group
