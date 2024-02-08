
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
        {/* <video autoPlay muted loop className=' absolute top-[-580px] left-0 z-[1] w-full h-ful object-cover'>
            <source src='/dots1.webm' type='video/webm'/>
        </video>      */}
        <Image  
        
          src="/background.png"
          alt="bg shapes" 
          className=" absolute  left-0 z-[1] w-full h-full object-cover"
          width={150} 
          height={100}
        /> 
      

        <HeroContent/>  
        <Projects/> 
        
        <Skills/> 
        <Footer/>
    </div>
  )
}

export default Hero