import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../../assets/error.jpg'

function ErrorElement() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className='w-full h-96 md:h-[700px]' src={errorImage} alt="" />
      <Link className='btn bg-orange-600 text-white/90 my-10' to='/'>Go to Home</Link>
    </div>
  )
}

export default ErrorElement
