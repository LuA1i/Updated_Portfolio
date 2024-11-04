import React from 'react'

const Contact = () => {
  return (
    <div className="container mt-16 px-4 sm:px-10">
      <p className="text-4xl font-bold text-[#00b4d8]  sm:text-left">Contact</p>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:px-10 ml-10 gap-2">
        <div className="w-full py-10 sm:w-1/2 text-center sm:text-left">
          <p className="text-lg px-10">Email: luqman.ali270304@outlook.com</p>
        </div>

        <div className="w-full pl-10 px-10 sm:w-1/2">
          <form className="flex flex-col  gap-4" action="submit">
            <input
              type="text"
              required
              placeholder="Enter Name"
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            />
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            />
            <textarea
              placeholder="Message"
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00b4d8] text-white py-2 px-4 rounded-md hover:bg-[#0096c7] transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
