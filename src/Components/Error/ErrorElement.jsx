import React from 'react'
import { Link } from 'react-router-dom'
import errorLottie from '../../assets/errorr.json'
import Lottie from 'lottie-react'

function ErrorElement() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Lottie animationData={errorLottie}></Lottie>
      <Link className='btn bg-orange-600 text-white/90 my-10' to='/'>Go to Home</Link>
    </div>
  )
}

export default ErrorElement
