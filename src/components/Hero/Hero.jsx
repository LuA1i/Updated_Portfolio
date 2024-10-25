import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="h-screen w-full mx-auto text-center flex flex-col max-w-[800px] mt-[-96px] justify-center items-center">
        <div className="flex">
          <ReactTyped
            className="md:text-5xl text-[#00b4d8]  sm:text-4xl text-3xl p-2"
            strings={['Aspiring']}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
          <h4 className="md:text-5xl  sm:text-4xl text-3xl p-2">Developer</h4>
        </div>
        <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-6  ">
          Hi, Im<span className="text-[#00b4d8]"> Luqman Ali</span>
        </h1>
        <div className="flex py-3  ">
          <FaGithub size={20} className="mx-3" />
          <FaLinkedin size={20} />
        </div>
        <div className="flex justify-center items-center">
          <button className="border-2 border-[#00b4d8] text-[#00b4d8] text-sm font-bold px-4 py-1 mt-2 ml-4 md:px-6 md:text-base hover:bg-[#00b4d8] hover:text-black ease-in-out duration-500 uppercase">
            My CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
