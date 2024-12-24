import React from 'react'

function Banner() {
  return (
    <div className='bg-bannerBg bg-cover bg-center h-60 md:h-[500px] lg:h-[600px] w-full font-cardFont rounded-2xl'>
     <div className=' flex flex-col justify-center items-center text-center h-full bg-black/60 rounded-2xl'>
<h1 className='font-bold  text-5xl text-orange-500 w-7/12'>   
Welcome To Our All Study
Best For Education
</h1>
<p className='font-semibold text-white/80 text-2xl my-5 '>
Batter Education For Batter World
</p>
<button className=' px-10 text-white/90 text-xl py-4 rounded-xl border border-white/70 hover:bg-orange-500 transition-all duration-100 hover:scale-110 bg-orange-600 '>Explore Now </button>
     </div>
    </div>
  )
}

export default Banner
