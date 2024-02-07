import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0  bg-white backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#inicio"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/name.svg"
            alt="logo"
            width={200}
            height={200}
            className="cursor-pointer hover:animate-slowspin"
          />

          
        </a>
        
          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto   mr-[15px] px-[20px] py-[10px] rounded-full text-black font-semibold">
              <a href="#projects" className="cursor-pointer">
                📚 Projetos
              </a>
              <a href="#skills" className="cursor-pointer">
                🤹🏽‍♂️ Skills 
              </a>
              <a href="#about" className="cursor-not-allowed text-gray-200">
                👋 Sobre mim (em breve)
              </a> 
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}  
                width={22}
                height={22}
              />
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;