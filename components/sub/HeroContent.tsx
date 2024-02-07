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

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#146ef5] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#146ef5] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Front-end Developer & UX/UI
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-dark max-w-[600px] w-auto h-auto"
        >
          <span>
            
            <span className="text-black text-7xl bg-clip-text text-stone-950 ">
              {" "}
              Prazer em conhecer você.{" "}
            </span>
             
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-500 my-5 max-w-[600px] neue"
        >
          👋 Olá! Meu nome é Vinícius Slavov, sou um Cientista da Computação, Desenvolvedor Front-end e UX/UI Design. Confira meus projetos freelancer, de estudo e minhas skills.
        </motion.p>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div> 
    

    
  );
};

export default HeroContent;