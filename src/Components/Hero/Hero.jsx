import React, { useState, useEffect } from "react";
import Particles from "./Particles";
import { heroData } from "../Constants/Constants";
import FPSCounter from "../FPSCounter"; // optional FPS display
import { Link } from "react-router-dom";

export default function Hero({ themeMode }) {
  // <- receive themeMode
  const roles = [
    "Front-End Developer",
    "Back-End Developer",
    "UI & UX Designer",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const typingSpeed = 50;
    const pauseTime = 1000;

    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex];
      if (!deleting) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === fullText.length)
          setTimeout(() => setDeleting(true), pauseTime);
      } else {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <FPSCounter />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 select-none md:pt-0 z-10">
        <h2 className="animate-slideLeft text-2xl md:text-4xl xl:text-2xl 2xl:text-5xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
          {heroData.welcomeText}
        </h2>

        {/* Dynamic color for introText */}
        <h1
          className={`animate-slideLeft text-4xl md:text-6xl 2xl:text-8xl font-bold mb-2 ${
            themeMode === "light" ? "text-black" : "text-white"
          }`}
        >
          {heroData.introText}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
            {heroData.name.map((part, idx) => (
              <span key={idx}>{part.letter}</span>
            ))}
          </span>
        </h1>

        <div className="h-[40px] md:h-[50px] 2xl:h-[60px] flex items-center">
          <h2 className="animate-slideRight text-2xl md:text-3xl 2xl:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500">
            {displayedText}
          </h2>
        </div>

        <p className="animate-slideUp text-gray-400 2xl:text-xl pt-4 font-medium md:w-[500px] xl:w-[500px] text-sm md:text-base leading-relaxed mb-8">
          {heroData.paragraph}
        </p>

        <div className="animate-slideUp flex flex-col sm:flex-row gap-4">
          {heroData.buttons.map((btn, idx) => {
            if (btn.text === "View My Projects") {
              // Use React Router Link for this button
              return (
                <Link to="/projects/all" key={idx}>
                  <button className="px-6 py-2 rounded-full text-white font-semibold transition duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                    {btn.text}
                  </button>
                </Link>
              );
            } else {
              // Keep other buttons unchanged
              return (
                <button
                  key={idx}
                  className="px-6 py-2 rounded-full text-white font-semibold transition duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                >
                  {btn.text}
                </button>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
