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

  // All icons keep their original color; only Express.js and Next.js change in dark mode
  const usingNowLogos = [
    { node: <SiHtml5 />, title: "HTML", color: "#E34F26" },
    { node: <SiCss3 />, title: "CSS", color: "#1572B6" },
    { node: <SiJavascript />, title: "JavaScript", color: "#F7DF1E" },
    { node: <SiReact />, title: "React", color: "#61DAFB" },
    { node: <SiTypescript />, title: "TypeScript", color: "#3178C6" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", color: "#38BDF8" },
    { node: <SiBootstrap />, title: "Bootstrap", color: "#7952B3" },
    { node: <SiGit />, title: "Git", color: "#F05032" },
    { node: <SiFigma />, title: "Figma", color: "#F24E1E" },
  ];

  const learningLogos = [
    { node: <SiNodedotjs />, title: "Node.js", color: "#339933" },
    {
      node: <SiExpress />,
      title: "Express.js",
      color: themeMode === "dark" ? "#FFFFFF" : "#000000",
    },
    { node: <SiMysql />, title: "MySQL", color: "#4479A1" },
    { node: <SiMongodb />, title: "MongoDB", color: "#47A248" },
    { node: <SiPhp />, title: "PHP", color: "#777BB4" },
    { node: <SiPython />, title: "Python", color: "#3776AB" },
    {
      node: <SiNextdotjs />,
      title: "Next.js",
      color: themeMode === "dark" ? "#FFFFFF" : "#000000",
    },
  ];

  const otherSkillsLogos = [
    { node: <SiPython />, title: "Python", color: "#3776AB" },
    { node: <SiVuedotjs />, title: "Vue.js", color: "#42B883" },
    { node: <SiAngular />, title: "Angular", color: "#DD0031" },
    { node: <SiCanva />, title: "Canva", color: "#00C4CC" },
    { node: <SiAdobephotoshop />, title: "Photoshop", color: "#31A8FF" },
  ];

  // Helper to render logos correctly with their colors
  const renderLogos = (logos) =>
    logos.map((logo, i) => (
      <div key={i} className="flex flex-col items-center gap-2">
        {React.cloneElement(logo.node, { color: logo.color })}
        <p className={themeMode === "dark" ? "text-white" : "text-black"}>
          {logo.title}
        </p>
      </div>
    ));

  return (
    <section className="pt-28" id="skill">
      <div className="xl:max-w-[1200px] xl:mx-auto">
        <h1 className="text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 fade-section">
          S K I L L S
        </h1>

        {/* USING NOW */}
        <h2
          className={`font-bold px-4 md:mx-12 pt-16 tracking-widest fade-left ${
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
            logos={usingNowLogos.map((logo) => ({
              ...logo,
              node: React.cloneElement(logo.node, { color: logo.color }),
            }))}
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
          className={`font-bold px-4 md:mx-12 tracking-widest fade-left ${
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
            logos={learningLogos.map((logo) => ({
              ...logo,
              node: React.cloneElement(logo.node, { color: logo.color }),
            }))}
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
          className={`font-bold px-4 md:mx-12 tracking-widest fade-left ${
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
            logos={otherSkillsLogos.map((logo) => ({
              ...logo,
              node: React.cloneElement(logo.node, { color: logo.color }),
            }))}
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
