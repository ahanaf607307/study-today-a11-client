import React from 'react'
import loadingGif from '../assets/loadingGif.gif'

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center w-full my-20'>
      <img className='w-20 h-20' src={loadingGif} alt="" />
    </div>
  )
}

export default Loading
