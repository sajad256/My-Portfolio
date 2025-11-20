// src/constants.jsx
import {
  sajad,
  reactC,
  suntower,
  monkshub,
  upskill,
  eternal,
  elerana,
  estateRise,
} from "../../assets/Images";

export const navLinks = [
  { logo: "Sajad Danish" },
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skill", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// constants.js
export const heroData = {
  welcomeText: "WELCOME TO MY WORLD",
  introText: "Hi, I'm",
  name: [
    { letter: "S", color: "purple" },
    { letter: "aj", color: "blue" },
    { letter: "ad", color: "purple" },
  ],
  role: "A Front-End Developer",
  paragraph:
    "Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology. Specializing in modern web development with a passion for creating immersive user interfaces.",
  buttons: [
    {
      text: "View My Projects",
      type: "gradient", // can be 'gradient' or 'transparent'
      gradientFrom: "purple-600",
      gradientTo: "blue-500",
    },
    {
      text: "Hire Me Now",
      type: "gradient",
      gradientFrom: "purple-600",
      gradientTo: "blue-500",
    },
  ],
};

export const aboutData = [
  {
    img: sajad,
    title: "The Developer Who Delivers Results",
    detail:
      "Hi, I’m Sajad Danish, a Front-End Developer focused on building fast, modern, and visually refined interfaces. I work with HTML, CSS, JavaScript, React, Vite, Tailwind, GSAP, and Git to create responsive layouts and smooth interactions. I blend clean code with strong UI/UX principles to deliver intuitive, engaging, and performance-driven web experiences.",
  },
];

export const projectsData = [
  {
    img: reactC,
    title: "Project Name :",
    projectName: "React Course Platform",
    live: "https://react-certification-gold.vercel.app/",
    github: "https://github.com/sajad256/React-Certification",
  },
  {
    img: suntower,
    title: "Project Name :",
    projectName: "Sun Tower",
    live: "https://sun-tower-cyan.vercel.app/",
    github: "https://github.com/sajad256/Sun-Tower",
  },
  {
    img: monkshub,
    title: "Project Name :",
    projectName: "Monks Hub",
    live: "https://monks-hub-six.vercel.app/",
    github: "https://github.com/sajad256/Monks-Hub",
  },
  {
    img: upskill,
    title: "Project Name :",
    projectName: "Upskill Academy",
    live: "https://up-skill-jpob.vercel.app/",
    github: "https://github.com/sajad256/Up-Skill",
  },
  {
    img: eternal,
    title: "Project Name :",
    projectName: "Eternal Store",
    live: "https://eternal-livid-six.vercel.app/",
    github: "https://github.com/sajad256/Eternal",
  },
  {
    img: elerana,
    title: "Project Name :",
    projectName: "Elearna",
    live: "https://elearna-wheat.vercel.app/",
    github: "https://github.com/sajad256/Elearna",
  },
  {
    img: estateRise,
    title: "Project Name :",
    projectName: "Estate Rise",
    live: "https://estate-rise.vercel.app/",
    github: "https://github.com/sajad256/Estate-Rise",
  },
];
