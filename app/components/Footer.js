"use client"

import React, { useState } from "react";
import Navlinks from "./Navlinks";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { toast, Toaster } from 'react-hot-toast';


const Footer = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    await res.json();
    toast.success('Messge sent successfully!', {
      duration: 5000,
      style: {
        background: "#fff",
        color: "#333",
        padding: "16px",
        borderRadius: "8px",
      },
    })

    setName("")
    setEmail("")
    setMessage("")
  };


  return (
    <>
      <Toaster/>
      <footer className="flex justify-center items-center py-12 bg-gradient-to-b from-[#f9fafb] to-[#efefef]">
        <div className="w-5/6 bg-white shadow-xl rounded-2xl p-6 space-y-6">


          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Let’s <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-gray-500 mt-2">I’d love to hear from you!</p>
            <div className="h-1 w-16 bg-blue-600 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-18">


            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-700">Message Me</h3>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none h-20"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Quick Links</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <Navlinks className="flex-col justify-start items-start gap-2" />
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">Follow Me</h3>
                <div className="flex space-x-3 mt-2">
                  <a href="https://instagram.com/roshan252s" target="_blank">
                    <FaInstagram className="text-2xl text-pink-500 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://facebook.com/roshan252s" target="_blank">
                    <FaFacebook className="text-2xl text-blue-600 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://twitter.com/roshan252s" target="_blank">
                    <FaTwitter className="text-2xl text-blue-400 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://github.com/roshan252s" target="_blank">
                    <FaGithub className="text-2xl text-gray-800 hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://linkedin.com/in/roshan252s" target="_blank">
                    <FaLinkedin className="text-2xl text-blue-700 hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm border-t pt-3">
            © {new Date().getFullYear()} ❘ Roshan Shah. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
