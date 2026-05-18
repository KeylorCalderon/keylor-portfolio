import { useState } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import { LanguageProvider } from "./i18n/LanguageContext";
import "./index.css";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <LanguageProvider>
        <div className={darkMode ? "dark" : ""}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className="page-container">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
      <Analytics />
    </>
  );
}

export default App;
