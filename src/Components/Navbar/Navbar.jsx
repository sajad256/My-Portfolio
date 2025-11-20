import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../Constants/Constants";
import { IoMenu } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";

export default function NavbarBottom() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoText, setLogoText] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fullLogo = navLinks[0].logo;
  const navRef = useRef(null);
  const lineRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLogoText(fullLogo.substring(0, i + 1));
      i++;
      if (i === 1) setShowLinks(true);
      if (i === fullLogo.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullLogo]);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -30;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Move upper line indicator
  const moveLine = (li) => {
    if (!lineRef.current || !li || !navRef.current) return;
    const rect = li.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    lineRef.current.style.width = rect.width + "px";
    lineRef.current.style.left = rect.left - navRect.left + "px";
  };

  useEffect(() => {
    // Set line to first <li> (Home) on initial load
    if (navRef.current && navRef.current.children[0]) {
      moveLine(navRef.current.children[0]);
    }
  }, []);

  // Click handler for nav links
  const handleClick = (idx, id, e) => {
    setActiveIndex(idx);
    scrollToSection(id);
    moveLine(e.currentTarget);

    // Temporarily disable scroll updates to prevent jumping
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = null;
    }, 500);
  };

  // Scroll listener for updating activeIndex
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) return; // skip if recently clicked
      navLinks.slice(1).forEach((link, idx) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const topOffset = 100; // adjust trigger point
        if (rect.top - topOffset <= 0 && rect.bottom - topOffset > 0) {
          setActiveIndex(idx);
          const li = navRef.current.children[idx];
          if (li) moveLine(li);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[9999] rounded-full px-4 sm:px-6 w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[850px] xl:max-w-[900px]">
      <div className="flex items-center justify-between py-2 container relative rounded-full md:w-[670px] xl:w-[900px] px-4  bg-black/50 backdrop-blur-md">
        <div className="logo">
          <h1 className="text-xl font-bold italic bg-gradient-to-r from-purple-700 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {logoText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        <div className="flex items-center gap-5 rounded-full relative">
          <ul
            ref={navRef}
            className={`hidden md:flex text-white gap-6 justify-center transition-all duration-500 ease-out transform ${
              showLinks
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            } relative`}
          >
            {navLinks.slice(1).map((link, idx) => (
              <li
                key={idx}
                onClick={(e) => handleClick(idx, link.id, e)}
                className="cursor-pointer relative inline-block transition duration-200 ease-out
             hover:text-transparent
             hover:bg-clip-text
             hover:bg-gradient-to-r
             hover:from-purple-700
             hover:via-indigo-500
             hover:to-cyan-400"
              >
                {link.title}
              </li>
            ))}

            {/* Upper line indicator */}
            <span
              ref={lineRef}
              className="absolute -top-1 h-[2px] bg-gradient-to-r from-purple-700 via-indigo-500 to-cyan-400 transition-all duration-300 ease-out"
            />
          </ul>

          <div className="md:flex gap-3 px-2 py-2 rounded-full hidden">
            <FaMoon className="text-white cursor-pointer" />
            <IoIosSunny className="text-white cursor-pointer" />
          </div>
        </div>

        <div className="md:hidden">
          <IoMenu
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {isOpen && (
          <ul
            style={{
              background:
                "linear-gradient(90deg, #1F1F1F 0%, #1A1AFF 50%, #330099 67%, #001A33 100%)",
            }}
            className="absolute bottom-16 right-0 w-40 flex flex-col p-2 space-y-2 text-white rounded-xl transition-transform duration-500 ease-out transform"
          >
            {navLinks.slice(1).map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer px-2 py-1 rounded relative hover:text-purple-400 transition duration-300"
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
              >
                {link.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
