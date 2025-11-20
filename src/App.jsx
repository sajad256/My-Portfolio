import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Skill,
  Project,
  AllProjectsPage,
} from "./Components/index";
import Particles from "./Components/Hero/Particles"; // make sure path is correct

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          scrollMarginTop: "96px",
          background:
            "linear-gradient(90deg, #1F1F1F 0%, #2222AA 30%, #3A00AA 65%, #005599 100%)",
        }}
      >
        {/* Particles background */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none", // so it doesn't block clicks
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false} // keep particles in place
            alphaParticles={false}
            disableRotation={false}
            hoverEffect="twinkle" // subtle hover effect
            hoverIntensity={0.3} // how strong the twinkle is
          />
        </div>

        {/* Main content above particles */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skill />
                  <Project limit={3} showButton={true} />
                </>
              }
            />
            <Route path="/projects/all" element={<AllProjectsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
