// src/Components/Icon.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Icon({ themeMode }) {
  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        top: "77%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        zIndex: 50,
      }}
    >
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077B5" }}
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/sajad256"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#333" }}
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#C13584" }}
      >
        <FaInstagram size={20} />
      </a>

      <div
        className={`w-[2px] h-[200px] ${
          themeMode === "dark" ? "bg-white" : "bg-black"
        }`}
      ></div>
    </div>
  );
}
