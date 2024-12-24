import React from 'react'
import Banner from './Banner'
import Feature from './Feature'
import Faq from './Faq'
import Group from './Group'

function Home() {

  return (
    <div>
      <Banner/>
      <Feature/>
      <Faq/>
    <div className='my-14'>
    <Group/>
    </div>
    </div>
  )
}

export default Home
