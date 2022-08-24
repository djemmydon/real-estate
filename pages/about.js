import Head from 'next/head'
import React from 'react'
import { Hero } from '../Components/PageComponents/About/Hero/Hero'
import HeroForPage from '../Components/Utils/Hero/HeroForPage'

function About() {
  return (
    <div>

<Head>
        <title>Abouts</title>
        <meta name="description" content="W are one of the top Real estate company in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <HeroForPage name="Home / About" title= "About Us" />
        <Hero/>
    </div>
  )
}

export default About