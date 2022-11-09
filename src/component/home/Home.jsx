import React from 'react'
import HeroEight from '../../container/hero/sectionEight/HeroEight'
import HeroFive from '../../container/hero/sectionFive/HeroFive'
import HeroFour from '../../container/hero/sectionFour/HeroFour'
import HeroNine from '../../container/hero/sectionNine/HeroNine'
import Hero from '../../container/hero/sectionOne/Hero'
import HeroSeven from '../../container/hero/sectionSeven/HeroSeven'
import HeroSix from '../../container/hero/sectionSix/HeroSix'
import HeroThree from '../../container/hero/sectionThree/HeroThree'
import HeroTwo from '../../container/hero/sectionTwo/HeroTwo'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HeroTwo/>
        <HeroThree/>
        <HeroFour/>
        <HeroFive/>
        <HeroSix/>
        <HeroSeven/>
        <HeroEight/>
        <HeroNine/>
    </div>
  )
}

export default Home