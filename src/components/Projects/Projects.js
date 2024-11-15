import React from 'react'
import projects from './projectsData'

const Projects = () => {
  return (
    <div id="projects" className="mx-auto px-10 pt-28 mt-52 pb-48 text-white">
      <h2 className="text-4xl text-[#00b4d8] font-bold">Projects</h2>
      <div className="flex flex-wrap justify-center gap-5 pt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#000300] shadow-lg rounded-lg overflow-hidden w-full sm:w-[45%] lg:w-[30%]"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-58 object-cover"
            />

            <div className="p-3 pt-9 ">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#00b4d8] text-sm">{project.description}</p>
            </div>
            <div className="flex items-center justify-center ">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-[#000300] border-2 border-[#00b4d8]  text-white py-1 px-3 mt-2 hover:bg-[#0096c7] transition-colors duration-300 cursor-pointer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
