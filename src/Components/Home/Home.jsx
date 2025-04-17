import React from 'react'
import Banner from './Banner'
import Faq from './Faq'
import Feature from './Feature'
import Group from './Group'
import Review from './Review'
import HowItWorks from './HowItWorks'
import AddPage from './AddPage'
import LimitedAssignment from '../../Pages/LimitedAssignment'

function Home() {

  return (
    <div>
      <Banner/>
   <LimitedAssignment/>
   <div className='my-8'>
   <Feature/>
   </div>
   <HowItWorks/>
      <Faq/>
      <AddPage/>
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
