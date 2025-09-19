import React from 'react'
import Banner from './_components/Banner'
import FirstCarousel from './_components/FirstCarousel'
import Navbar from './_components/Navbar'


const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <FirstCarousel  />
    </div>
  )
}

export default Homepage