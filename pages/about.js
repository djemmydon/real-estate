import React from 'react'
import { Hero } from '../Components/PageComponents/About/Hero/Hero'
import HeroForPage from '../Components/Utils/Hero/HeroForPage'

function About() {
  return (
    <div>
        <HeroForPage name="Home / About" title= "About Us" />
        <Hero/>
    </div>
  )
}

export default About