"use client"
import { FaArrowRight } from "react-icons/fa";
import React from 'react'

const Button = () => {
    return (

        <button
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
            Learn More <FaArrowRight />
        </button>

    )
}

export default Button
