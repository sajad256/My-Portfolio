import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Skill,
  Project,
  AllProjectsPage,
} from "./Components/index";
import Particles from "./Components/Hero/Particles";
import Lightning from "./Lightning";
import Iridescence from "./Iridescence"; // import Iridescence
import { useState, useEffect } from "react";

export default function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode") || "gradient";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  return (
    <BrowserRouter>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          scrollMarginTop: "96px",
          background:
            themeMode === "light"
              ? "#ffffff"
              : themeMode === "dark"
              ? "#000000"
              : "linear-gradient(90deg, #1F1F1F 0%, #2222AA 30%, #3A00AA 65%, #005599 100%)",
          transition: "background 1s ease",
        }}
      >
        {/* Effects covering the whole page */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          {themeMode === "dark" ? (
            <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
          ) : themeMode === "light" ? (
            <Iridescence
              color={[1, 1, 1]}
              mouseReact={false}
              amplitude={0.1}
              speed={1.0}
            />
          ) : (
            <Particles themeMode={themeMode} />
          )}
        </div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero themeMode={themeMode} />
                  <About themeMode={themeMode} />
                  <Skill themeMode={themeMode} />
                  <Project limit={3} showButton={true} themeMode={themeMode} />
                </>
              }
            />
            <Route
              path="/projects/all"
              element={<AllProjectsPage themeMode={themeMode} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
