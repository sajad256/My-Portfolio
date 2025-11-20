// FPSCounter.jsx
import { useEffect, useRef, useState } from "react";

export default function FPSCounter() {
  const [fps, setFps] = useState(0);
  const lastFrame = useRef(performance.now());
  const frames = useRef(0);

  useEffect(() => {
    let rafId;

    const tick = () => {
      const now = performance.now();
      frames.current += 1;

      if (now - lastFrame.current >= 1000) {
        setFps(frames.current);
        frames.current = 0;
        lastFrame.current = now;
      }

      rafId = requestAnimationFrame(tick);
    };

    tick();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.5)",
        color: "#0f0",
        padding: "5px 10px",
        borderRadius: "5px",
        fontFamily: "monospace",
        zIndex: 9999,
      }}
    >
      FPS: {fps}
    </div>
  );
}
