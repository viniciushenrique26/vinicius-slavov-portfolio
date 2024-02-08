
import React from 'react' 
import HeroContent from '../sub/HeroContent' 
import Image from "next/image"
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'



const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="inicio">
       <video autoPlay muted loop className=' absolute top-[-580px] left-0 z-[1] w-full h-ful opacity-20 object-cover'>
            <source src='/dots1.webm' type='video/webm'/>
        </video>      
        
      

        <HeroContent/>  
        <Projects/> 
        
        <Skills/> 
        <Footer/>
    </div>
  )
}

export default Hero