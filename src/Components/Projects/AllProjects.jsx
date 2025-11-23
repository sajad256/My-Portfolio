import React, { useLayoutEffect } from "react";
import Projects from "./Projects";

export default function AllProjectsPage({ themeMode }) {
  useLayoutEffect(() => {
    // Scroll to top immediately before rendering
    window.scrollTo(0, 0);
  }, []);

  return <Projects backToHome={true} themeMode={themeMode} />;
}
