// Loader.jsx
import React, { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onFinish) onFinish();
          return 100;
        }
        return prev + 1; // increment 1% every 20ms (~2s full)
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#11071F] flex flex-col justify-center items-center z-50">
      <h1 className="text-4xl md:text-6xl italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
        Welcome to My World
      </h1>

      {/* Name with gradient */}
      <h1 className="text-5xl md:text-6xl italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
        Sajad Danish
      </h1>

      {/* Role */}
      <p className="mt-4 text-xl md:text-2xl text-center italic bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Front-End Developer
      </p>

      {/* Progress */}
      <p className="mt-6 text-white text-lg md:text-xl font-semibold">
        {progress}%
      </p>

      {/* Initializing Portfolio */}
      <p className="mt-2 text-white text-sm md:text-base text-center">
        Initializing Portfolio
      </p>

      {/* Progress bar */}
      <div className="mt-6 w-72 md:w-96 h-2 bg-purple-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500 rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
