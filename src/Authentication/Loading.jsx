import React from 'react'
import loadingSpinner from '../assets/loading.json'
import Lottie from 'lottie-react'

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center w-full my-20'>
      <Lottie className='h-32' animationData={loadingSpinner}/>
    </div>
  )
}

export default Loading
