import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string; 
  url: string; 
}

const ProjectCard = ({ src, title, description, url}: Props) => {
  return (
    <div className="group relative m-0 flex h-full w-full rounded-xl shadow-xl ring-gray-900/5 hover:text-dark "> 
    
      <a href={url} target="_blank"> 
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="z-10 h-full w-full object-cover overflow-hidden rounded-xl hover:text-white opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-80"
          />

        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-105 cursor-pointer ">
          <h1 className="font-serif text-2xl font-bold text-black ">{title}</h1>
          <h1 className="text-sm font-light text-black ">{description}</h1>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;