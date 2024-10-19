import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const showNav = () => {
    setNav(!nav)
  }
  return (
    <div className="flex justify-between items-center h-24  max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00b4d8]">LuA1i</h1>
      <ul className="hidden md:flex">
        <Link
          to='/'
          className="hover:text-[#00b4d8] ease-in-out duration-500"
        >
          <li className="p-4">Home</li>
        </Link>
        <Link className="hover:text-[#00b4d8] ease-in-out duration-500">
          <li className="p-4">About</li>
        </Link>
        <Link
          to="/projects"
          className="hover:text-[#00b4d8] ease-in-out duration-500"
        >
          <li className="p-4">Projects</li>
        </Link>
        <Link className="hover:text-[#00b4d8] ease-in-out duration-500">
          <li className="p-4">Contact</li>
        </Link>
      </ul>
      <div onClick={showNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00b4d8] m-7">LuA1i</h1>
        <ul className="p-4">
          <li className="p-4 border-b border-b-gray-900">Home</li>
          <li className="p-4 border-b border-b-gray-900">About</li>
          <li className="p-4 border-b border-b-gray-900">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
