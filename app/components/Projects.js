import React from "react";

const projectsData = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js and Tailwind CSS showcasing my projects and skills.",
        tech: ["Next.js", "Tailwind", "React"],
        link: "https://roshan-portfolio-86hj.onrender.com",
    },
    {
        title: "Music Player",
        description: "A fully-featured web-based music player built with HTML, CSS, and JavaScript. Includes play/pause, next/previous track, progress bar, and playlist functionality.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://music-player-lf2q.onrender.com/",
    },
 
];

const Projects = () => {
    return (
        <div className="w-full py-16 flex flex-col items-center gap-12">
            {/* Section Header */}
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    My <span className="text-blue-600">Projects</span>
                </h2>
                <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Projects Grid */}
            <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 flex-1 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
