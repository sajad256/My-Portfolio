import React, { useState, useRef, useCallback, useEffect } from "react";
import { projectsData } from "../Constants/Constants";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Projects({
  themeMode,
  limit,
  showButton = false,
  backToHome = false,
}) {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className={backToHome ? "pt-4" : "pt-14"}>
      <div className="Main">
        {/* Back To Home Button */}
        {backToHome && (
          <div className="flex justify-center mb-6">
            <Link
              to="/#projects"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 hover:opacity-90 px-3 py-2 rounded-full text-white font-semibold"
            >
              <FaArrowLeft className="text-white" />
              Back To Home
            </Link>
          </div>
        )}

        {/* Section Title */}
        <div className="info text-center">
          <h1
            className={` font-bold text-2xl md:text-3xl lg:text-4xl ${
              themeMode === "light" ? "text-black" : "text-white"
            }`}
          >
            Feature{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 mt-3 flex justify-center">
            <span className="w-[300px] md:w-[450px] xl:w-[570px]">
              A collection of projects demonstrating my passion for building
              smooth, stylish, and functional web interfaces.
            </span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="2xl:flex justify-center">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:w-[900px] gap-8 px-4 md:px-10">
            {displayedProjects.map((project, idx) => {
              const containerRef = useRef(null);
              const imgRef = useRef(null);
              const scrollDistance = useRef(0);
              const [hovered, setHovered] = useState(false);

              const handleImageLoad = useCallback(() => {
                if (!imgRef.current || !containerRef.current) return;

                const containerHeight = containerRef.current.clientHeight;
                const imgHeight = imgRef.current.scrollHeight;

                let distance = imgHeight - containerHeight;

                const width = window.innerWidth;
                if (width < 768) distance -= 3;
                else if (width >= 768 && width < 1024) distance -= 20;
                else if (width >= 1024 && width < 1280) distance -= 20;
                else if (width >= 1280) distance -= 15;

                scrollDistance.current = distance > 0 ? distance : 0;
              }, []);

              useEffect(() => {
                handleImageLoad(); // calculate initially

                const resizeHandler = () => handleImageLoad();
                window.addEventListener("resize", resizeHandler);

                return () =>
                  window.removeEventListener("resize", resizeHandler);
              }, [handleImageLoad]);

              return (
                <div
                  key={idx}
                  className={`card border-0 rounded-xl bg-gradient-to-r from-[#0D0D2B] via-[#2A2AFF] to-[#6B2ACD] p-3 flex flex-col ${
                    themeMode === "light"
                      ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
                      : themeMode === "dark"
                      ? "bg-gradient-to-r from-[#0B0B0B] via-[#1A1A2E] to-[#3D2C8D]"
                      : ""
                  }`}
                >
                  <div
                    ref={containerRef}
                    className="relative overflow-hidden rounded-xl h-[280px] md:h-[300px] lg:h-[330px] 2xl:h-[330px] w-full"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <motion.img
                      ref={imgRef}
                      src={project.img}
                      alt={project.title}
                      className="w-full object-cover select-none pointer-events-none"
                      onLoad={handleImageLoad}
                      animate={{ y: hovered ? -scrollDistance.current : 0 }}
                      transition={{ duration: 6, ease: "easeInOut" }}
                      style={{ willChange: "transform" }}
                    />

                    <div
                      className={`absolute bottom-3 left-0 right-0 flex justify-between mx-3 gap-4 z-20 transition-opacity duration-300 ${
                        hovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-full  transition ${
                          themeMode === "light"
                            ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
                            : "bg-gradient-to-r from-[#0D0D2B] via-[#2A2AFF] to-[#6B2ACD]"
                        }`}
                      >
                        <FaEye
                          className={`${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                          size={18}
                        />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-full bg-gradient-to-r from-[#0D0D2B] via-[#2A2AFF] to-[#6B2ACD] transition ${
                          themeMode === "light"
                            ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
                            : "bg-gradient-to-r from-[#0D0D2B] via-[#2A2AFF] to-[#6B2ACD]"
                        }`}
                      >
                        <FaGithub
                          className={`${
                            themeMode === "light" ? "text-black" : "text-white"
                          }`}
                          size={18}
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 px-1">
                    <h2
                      className={`${
                        themeMode === "light" ? "text-black" : "text-white"
                      } font-semibold`}
                    >
                      {project.title}
                    </h2>
                    <p
                      className={`${
                        themeMode === "light" ? "text-black" : "text-gray-400"
                      } text-sm`}
                    >
                      {project.projectName}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* View All Projects Button */}
      {showButton && (
        <Link to="/projects/all" className="flex justify-center mt-4">
          <span className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 px-2 text-sm py-3 rounded-full text-white font-semibold">
            View All Projects
            <FaArrowRight className="text-white" />
          </span>
        </Link>
      )}
    </section>
  );
}
