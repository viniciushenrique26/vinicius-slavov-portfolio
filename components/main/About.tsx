"use client";


import React from "react";
import { motion, useScroll } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const About = () => {
  return ( 
    <div
      className="flex flex-col items-center justify-center  mt-40 w-full h-full z-[20]" 
      id="about"
    >  
      <div className="h-full w-full flex flex-col gap-5 justify-center align-center text-start">
        <div className="flex justify-center items-center">
        <Image
          src="/about.svg"
          alt="work icons"
          height={1000}
          width={1000}
        />
      </div>

        <div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-dark max-w-[600px] w-auto h-auto">
          <span>
            
            <span className="text-black text-xl bg-clip-text text-stone-950 ">
              {" "}
              Quem eu sou?{" "}
            </span>
             
            
          </span>
        </div>

        <p className="text-lg text-gray-500 my-5 max-w-[600px] neue">
          Nascido e criado em Brasília, sou um Cientista da Computação entusiasta de Front-end e UX Design. Sou apaixonado por criar interfaces elegantes e funcionais que tornam a experiência do usuário agradável e fácil e acessível.
        </p>
        
      </div>

      
    </div> 
    
  
    
  );
};

export default About;