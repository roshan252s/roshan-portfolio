"use client"

import React from "react";
import Navlinks from "./Navlinks";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { toast, Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form"



const Footer = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.message, {
          duration: 5000,
          style: {
            background: "#fff",
            color: "#333",
            padding: "16px",
            borderRadius: "8px",
          },
        })
        return;
      }

      toast.success(resData.message, {
        duration: 5000,
        style: {
          background: "#fff",
          color: "#333",
          padding: "16px",
          borderRadius: "8px",
        },
      })

      reset()
    } catch (error) {
      toast.error("Network error, please try again later");

    }
  };


  return (
    <>
      <Toaster />
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
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  {...register("name",
                    {
                      required: { value: true, message: "Name is required" },
                      minLength: { value: 3, message: "Min length is 3" },
                      maxLength: { value: 16, message: "Max length is 16" }
                    })} />
                {errors.name && <div className="text-red-600">{errors.name.message}</div>}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                  {...register("email", { required: { value: true, message: "Email is required" } })}
                />
                {errors.email && <div className="text-red-600">{errors.email.message}</div>}

                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none h-20"

                  {...register("message",
                    {
                      required: { value: true, message: "Message is required" }, minLength: { value: 10, message: "Min length is 10" },
                      maxLength: { value: 300, message: "Max length is 300" },
                    })} />
                {errors.message && <div className="text-red-600">{errors.message.message}</div>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 rounded-lg transition shadow-md text-white 
    ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
