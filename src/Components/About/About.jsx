import { React, useEffect } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { aboutData } from "../Constants/Constants";

const GradientText = ({ text, gradientPart }) => {
  const parts = text.split(new RegExp(`(${gradientPart})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === gradientPart.toLowerCase() ? (
          <span
            key={index}
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500"
          >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="py-10" id="about">
      <div className="Main-for-img-and-info flex flex-wrap justify-center gap-10">
        {aboutData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 w-[260px] md:mx-4 md:flex-row md:items-start md:w-full md:max-w-[900px] md:gap-10 xl:flex-row xl:items-start xl:w-full xl:max-w-full fade-in"
          >
            {/* LEFT SIDE IMAGE */}
            <div className="w-full md:w-full xl:w-1/2 flex justify-center xl:justify-end fade-in">
              <div className="Img w-full xl:w-[500px] lg:h-[540px] xl:h-[500px] rounded-[16px] overflow-hidden fade-in">
                <img
                  className="w-full h-full object-cover"
                  src={data.img}
                  alt={data.title}
                />
              </div>
            </div>

            {/* RIGHT SIDE INFO */}
            <div className="w-full md:w-full xl:w-[700px] flex flex-col gap-4 fade-in">
              {/* Title */}
              <h1 className="text-xl font-bold text-white mx-2 lg:text-3xl xl:text-4xl fade-in">
                <GradientText
                  text={data.title}
                  gradientPart="Delivers Results"
                />
              </h1>

              {/* Detail */}
              <p className="text-gray-400 md:text-sm lg:text-lg 2xl:w-[700px] fade-in">
                <GradientText text={data.detail} gradientPart="Sajad Danish" />
              </p>

              {/* Icons */}
              <div className="icons flex items-center gap-3 fade-in">
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <FaLinkedin
                    className="text-white px-2 py-2 border rounded-full"
                    size={40}
                  />
                </a>
                <a href="" target="_blank">
                  <FaGithub
                    className="text-white px-2 py-2 border rounded-full"
                    size={40}
                  />
                </a>
                <a href="" target="_blank">
                  <SiGmail
                    className="text-white px-2 py-2 border rounded-full"
                    size={40}
                  />
                </a>
              </div>

              {/* Buttons */}
              <div className="buttons flex flex-col gap-3 md:grid md:grid-cols-2 xl:w-[300px] fade-in">
                <a href="https://wa.me/93728961372" target="_blank">
                  <button className="flex items-center justify-center gap-2 font-semibold text-white px-2 py-2 rounded-full text-sm w-full md:w-[150px] bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
                    What's App
                    <FaWhatsapp size={20} />
                  </button>
                </a>

                <a href="/cv.png" download target="_blank">
                  <button className="flex items-center justify-center gap-2 font-semibold text-white px-2 py-2 rounded-full text-sm w-full md:w-[170px] bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
                    Download CV
                    <FaArrowDown size={15} />
                  </button>
                </a>
              </div>

              {/* Experience */}
              <div className="experience-project flex justify-between xl:w-[290px] fade-in">
                <div>
                  <h1 className="font-bold text-white text-xl">1 years</h1>
                  <h1 className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
                    Experience
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-white text-xl">+10 Done</h1>
                  <h1 className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
                    Projects
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
