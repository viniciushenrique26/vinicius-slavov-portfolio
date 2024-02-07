import React from "react"; 
import Image from "next/image";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="w-full flex flex-col h-full bg-gray-100 text-gray-800 shadow-lg py-40 ">
        <div className="w-full flex flex-col items-center justify-center px-11">
            <div className="w-full h-full flex flex-row  justify-between flex-wrap">
                
                    <Image
                src="/blackName.svg"
                alt="work icons"
                height={200}
                width={200}
                />  
                <div className="min-w-[200px] h-auto flex flex-row gap-5 items-center justify-start"> 
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"><a href="https://www.linkedin.com/in/vinicius-slavov-934737185/" target="_blank">Linkedin</a></p> 
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"><a href="https://www.behance.net/vinciushenrique6" target="_blank">Behance</a></p> 
                    <p className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"><a href="https://github.com/viniciushenrique26" target="_blank">Github</a></p> 
                </div>
                
            </div>

            
        </div>
    </div>
  )
}

export default Footer