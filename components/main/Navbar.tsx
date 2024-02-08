import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0  bg-white z-50 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#inicio"
          className="h-auto w-auto flex flex-row items-center "
        >
          <Image
            src="iconS.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin ml-[10px] lg:hidden  md:block"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          <Image
            src="/name.svg"
            alt="logo"
            width={200}
            height={200}
            className="cursor-pointer hover:animate-slowspin"
          /> 
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between  md:mr-20">
          <div className="flex items-center justify-between w-full h-auto   mr-[15px] px-10 md:px-[20px] py-[10px] rounded-full text-gray-900 font-bold">
            <a href="#projects" className="cursor-pointer">
              Projetos
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#about" className="cursor-not-allowed text-gray-200">
              Sobre mim
            </a>
          </div>
        </div>

        <div className="md:flex md:flex-row gap-5 hidden ">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;