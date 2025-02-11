import React from 'react'
import Banner from './Banner'
import Faq from './Faq'
import Feature from './Feature'
import Group from './Group'

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
    </div>
  )
}

export default Home
