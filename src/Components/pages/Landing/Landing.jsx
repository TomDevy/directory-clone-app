import React from 'react'
import Footer from '../../footer/Footer'
import Hero from '../../Hero/Hero'
import ImageStrip from '../../imageStrip/ImageStrip'
import MiddleSection from '../../middleSection/MiddleSection'
import MiddleSectionOne from '../../middleSectionOne/MiddleSectionOne'
import MiddleSectionThree from '../../middleSectionThree/MiddleSectionThree'
import MiddleSectionTwo from '../../middleSectionTwo/middleSectionTwo'
import Navbar from '../../NavBar/Navbar'
import Testimonials from '../../testimonials/Testimonials'
import Travel from '../../travel/Travel'
import './Landing.css'
const Landing = () => {
  return (
      <div>
          <Navbar/>
          <Hero />
          <MiddleSection />
          <MiddleSectionOne />
          <MiddleSectionTwo />
          <MiddleSectionThree />
          <Testimonials />
          <Travel />
          <ImageStrip />
          <Footer/>
    </div>
  )
}

export default Landing
