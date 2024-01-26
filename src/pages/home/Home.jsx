import React from 'react'
import Hero from '../../component/hero/Hero'
import Enjoy from '../../component/enjoy/Enjoy'
import Download from '../../component/download/Download'
import Watch from '../../component/watch/Watch'
import CreateProfile from '../../component/createProfile/CreateProfile'

function Home() {
  return (
    <div>
      <Hero/>
      <Enjoy/>
      <Download/>
      <Watch/>
      <CreateProfile/>
    </div>
  )
}

export default Home
