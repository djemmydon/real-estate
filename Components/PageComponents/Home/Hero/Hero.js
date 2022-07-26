import React from 'react'
import Button from '../../../UI/Button/Button'
import { HeroBody, HeroFLex, HeroImage, HeroText } from './HeroStyle'

function Hero() {
  return (
    <HeroBody>
        <HeroFLex>
        <HeroText>
            <span>A new way to find Properties</span>
            <h1>The best place to find your dream house</h1>
       <p>Huge number of propreties availabe here for buy, and sell, also you can find here co-living property, So you have lots of opportunity.</p>

            <Button name="Contact Us"/>
        </HeroText>

        <HeroImage>
            <img src="/Assets/hero.png" alt="" />
        </HeroImage>

        </HeroFLex>

    </HeroBody>
  )
}

export default Hero