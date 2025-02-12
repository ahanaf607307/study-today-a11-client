import React from 'react'
import Banner from './Banner'
import Faq from './Faq'
import Feature from './Feature'
import Group from './Group'
import Review from './Review'

function Home() {

  return (
    <div>
      <Banner/>
   <div className='my-8'>
   <Feature/>
   </div>
      <Faq/>
    <div className=''>
    <Group/>
    </div>
    <div className=''>
    <Review/>
    </div>
    </div>
  )
}

export default Home
