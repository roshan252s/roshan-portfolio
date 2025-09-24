"use client"
import { Typewriter } from "react-simple-typewriter";

import React from 'react'
const AnimatedTyping = () => {
    return (
        <Typewriter
            words={[
                "Full-Stack Developer",
                "React & Node.js Specialist",
                "UI/UX Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
        />
    )
}

export default AnimatedTyping
