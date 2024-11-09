import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xnjzkvd',
        'template_3x1dz2w',
        form.current,
        'cshFI8vEoNUEzD_vv'
      )
      .then(
        () => {
          toast.success('Email Sent SuccessFully', {
            position: 'bottom-right',
            autoClose: 3000,
          })
        },
        (error) => {
          toast.error(`Failed To Send Email: ${error.text}`, {
            position: 'bottom-right',
            autoClose: 3000,
          })
        }
      )
  }

  return (
    <div className="mt-16 sm:px-10">
      <p className="text-4xl font-bold text-[#00b4d8] sm:text-left">
        Contact Me
      </p>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:px-10 ml-10 gap-2">
        <div className="w-full py-10 sm:w-1/2 text-center sm:text-left">
          <p className="text-lg px-10">Email: luqman.ali270304@outlook.com</p>
        </div>

        <div className="w-full pl-10 px-10 sm:w-1/2">
          <form className="flex flex-col gap-4" onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              required
              name="user_name"
              placeholder="Enter Name"
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            />
            <input
              type="email"
              required
              name="user_email"
              placeholder="Enter Email"
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            />
            <textarea
              placeholder="Message"
              name="message"
              required
              className="p-2 border bg-[#000300] border-gray-300 rounded-md focus:outline-none focus:border-[#00b4d8] focus:duration-500"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="bg-[#00b4d8] text-white py-2 px-4 rounded-md hover:bg-[#0096c7] cursor-pointer transition-colors duration-300"
            />
          </form>
        </div>
      </div>
      <ToastContainer
        theme="dark"
        progressStyle={{
          backgroundColor: '#00b4d8',
        }}
      />
    </div>
  )
}

export default Contact
