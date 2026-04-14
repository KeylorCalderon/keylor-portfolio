import { useState } from "react";
import AboutWindow from "./components/Windows/AboutWindow";
import ContactWindow from "./components/Windows/ContactWindow";
import ProjectsWindow from "./components/Windows/ProjectsWindow";

const WINDOWS = {
  ABOUT: "about",
  PROJECTS: "projects",
  CONTACT: "contact",
};

export default function App() {
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div
        style={{
          width: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          paddingLeft: 20,
        }}
      >
        <button onClick={() => setActiveWindow(WINDOWS.ABOUT)}>📁 About</button>
        <button onClick={() => setActiveWindow(WINDOWS.PROJECTS)}>
          📁 Projects
        </button>
        <button onClick={() => setActiveWindow(WINDOWS.CONTACT)}>
          📁 Contact
        </button>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: 48, textAlign: "center" }}>
          I'm Keylor <br /> Full Stack Developer
        </h1>
      </div>

      {activeWindow === WINDOWS.ABOUT && (
        <AboutWindow onClose={() => setActiveWindow(null)} />
      )}

      {activeWindow === WINDOWS.PROJECTS && (
        <ProjectsWindow onClose={() => setActiveWindow(null)} />
      )}

      {activeWindow === WINDOWS.CONTACT && (
        <ContactWindow onClose={() => setActiveWindow(null)} />
      )}
    </div>
  );
}
