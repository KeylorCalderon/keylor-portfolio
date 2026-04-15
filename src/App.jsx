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
    <div className="h-screen flex bg-[#F4F1E6] bg-[url('/bg_texture.png')] bg-repeat opacity-100">
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

      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-6xl text-center font-bold">
          I'm Keylor <br /> Full Stack Developer
        </h1>
        <p className="text-6xl text-center font-bold">
          Hi, welcome to my site! I'm a developer that builds interactive and
          user-friendly websites. Let's work together and make your ideas come
          alive on the internet. Drop me a message.
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
