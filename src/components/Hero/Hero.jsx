import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="h-screen w-full mx-auto text-center flex flex-col max-w-[800px] mt-[-96px] justify-center items-center">
        <h4 className="md:text-5xl  sm:text-4xl text-3xl p-2">
          <span className="text-[#00b4d8]">Aspiring</span> Developer
        </h4>
        <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-6  ">
          Hi, Im<span className="text-[#00b4d8]"> Luqman Ali</span>
        </h1>
        <div className="flex py-3  ">
          <FaGithub size={20} className="mx-3" />
          <FaLinkedin size={20} />
        </div>
      </div>
    </div>
  )
}

export default Hero
