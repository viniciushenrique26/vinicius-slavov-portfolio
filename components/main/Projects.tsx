import React from "react"; 
import ProjectCard from "../sub/ProjectCard"; 

const Projects = () => {
    return (
      <div
        className="flex flex-col  justify-center py-2"
        id="projects"
      >
        <h1 className=" text-4xl md:text-7xl  text-stone-950 font-bold px-10 md:px-20 py-10 md:py-20">
          📚 Projetos.
        </h1>
        <div className="h-full w-full grid gap-4  md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-1 px-10"> 

          <ProjectCard 
            url="https://www.behance.net/gallery/166731073/UXUI-Case-Study-RHINO-SAFE"
            src="/rhinoSafe.png"
            title="Rhino Safe"
            description="Case Study - ONG de proteção aos animais."
          />
          <ProjectCard 
            url="https://www.behance.net/gallery/166730743/UXUI-Case-Study-Lambeijos"
            src="/bannerLambeijos.png"
            title="Lambeijos"
            description="Case Study - ONG de proteção aos animais."
          />
          <ProjectCard  
            url="https://www.behance.net/gallery/166729205/UXUI-Case-Study-Tailoring"
            src="/tailoring.png"
            title="Tailoring"
            description="Case Study - Plataforma para comprar ou alugar peças de alfaiataria"
          /> 
          
          <ProjectCard  
            url="https://indusparquet-copy-ii.webflow.io/"
            src="/brazilFloors.png"
            title="Brazil Floors"
            description="Projeto desenvolvido para uma companhia de pisos de madeira"
          /> 
          <ProjectCard  
            url="#"
            src="/acalanto.png"
            title="Acalanto"
            description="Portifolio para empresa de design de interiores."
          /> 
        </div>
      </div>
    );
  };
  
  export default Projects;