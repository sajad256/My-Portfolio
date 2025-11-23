import React, { useEffect } from "react";
import LogoLoop from "./LogoLoop";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPython,
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import { th } from "framer-motion/client";

export default function Skill({ themeMode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".fade-section, .fade-left, .fade-up")
      .forEach((el) => observer.observe(el));
  }, []);

  const usingNowLogos = [
    { node: <SiHtml5 color="#E34F26" />, title: "HTML" },
    { node: <SiCss3 color="#1572B6" />, title: "CSS" },
    { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript" },
    { node: <SiReact color="#61DAFB" />, title: "React" },
    { node: <SiTypescript color="#3178C6" />, title: "TypeScript" },
    { node: <SiTailwindcss color="#38BDF8" />, title: "Tailwind CSS" },
    { node: <SiBootstrap color="#7952B3" />, title: "Bootstrap" },
    { node: <SiGit color="#F05032" />, title: "Git" },
    { node: <SiFigma color="#F24E1E" />, title: "Figma" },
  ];

  const learningLogos = [
    { node: <SiNodedotjs color="#339933" />, title: "Node.js" },
    { node: <SiExpress color="#000000" />, title: "Express.js" },
    { node: <SiMysql color="#4479A1" />, title: "MySQL" },
    { node: <SiMongodb color="#47A248" />, title: "MongoDB" },
    { node: <SiPhp color="#777BB4" />, title: "PHP" },
    { node: <SiPython color="#3776AB" />, title: "Python" },
    { node: <SiNextdotjs color="#000000" />, title: "Next.js" },
  ];

  const otherSkillsLogos = [
    { node: <SiPython color="#3776AB" />, title: "Python" },
    { node: <SiVuedotjs color="#42B883" />, title: "Vue.js" },
    { node: <SiAngular color="#DD0031" />, title: "Angular" },
    { node: <SiCanva color="#00C4CC" />, title: "Canva" },
    { node: <SiAdobephotoshop color="#31A8FF" />, title: "Photoshop" },
  ];

  return (
    <section className="pt-28" id="skill">
      <div className="xl:max-w-[1200px] xl:mx-auto">
        {/* MAIN TITLE */}
        <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 fade-section">
          S K I L L S
        </h1>

        {/* USING NOW */}
        <h2
          className={` font-bold px-4 md:mx-12 pt-16 tracking-widest fade-left ${
            themeMode === "light" ? "text-black" : "text-white"
          }`}
        >
          USING NOW :
        </h2>

        <div
          className="mt-4 px-4 xl:mx-10 cursor-pointer fade-up"
          style={{ height: "100px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={usingNowLogos}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
          />
        </div>

        {/* LEARNING */}
        <h2
          className={` font-bold px-4 md:mx-12 tracking-widest fade-left ${
            themeMode === "light" ? "text-black" : "text-white"
          }`}
        >
          LEARNING :
        </h2>

        <div
          className="mt-2 px-4 xl:mx-10 cursor-pointer fade-up"
          style={{ height: "100px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={learningLogos}
            speed={40}
            direction="right"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
          />
        </div>

        {/* OTHER SKILLS */}
        <h2
          className={` font-bold px-4 md:mx-12 tracking-widest fade-left ${
            themeMode === "light" ? "text-black" : "text-white"
          }`}
        >
          OTHER SKILLS :
        </h2>

        <div
          className="mt-4 px-4 xl:mx-10 cursor-pointer fade-up"
          style={{ height: "100px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={otherSkillsLogos}
            speed={40}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={false}
          />
        </div>
      </div>
    </section>
  );
}
