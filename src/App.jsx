import { useState } from "react";
import AboutWindow from "./components/Windows/AboutWindow";
import ContactWindow from "./components/Windows/ContactWindow";
import ProjectsWindow from "./components/Windows/ProjectsWindow";
import FolderButton from "./components/UI/FolderButton";
import "./index.css";

const WINDOWS = {
  ABOUT: "about",
  PROJECTS: "projects",
  CONTACT: "contact",
};

function App() {
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <div className="h-screen flex bg-[#F4F1E6] bg-[url('/bg_texture.png')] bg-repeat opacity-100 px-80 gap-50">
      <div className="w-24 flex flex-col items-center justify-center gap-6">
        <FolderButton
          label="About"
          onClick={() => setActiveWindow(WINDOWS.ABOUT)}
        />
        <FolderButton
          label="Projects"
          onClick={() => setActiveWindow(WINDOWS.PROJECTS)}
        />
        <FolderButton
          label="Contact"
          onClick={() => setActiveWindow(WINDOWS.CONTACT)}
        />
      </div>

      <div className="flex-1 flex flex-col items-start justify-center px-10">
        <h1 className="text-7xl font-bold">
          I am Keylor <br /> Software developer.
        </h1>
        <p className="text-xl font-normal mt-10 max-w-2xl">
          Hi, welcome to my site! I am a developer that builds interactive and
          user-friendly websites.
        </p>
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

export default App;
