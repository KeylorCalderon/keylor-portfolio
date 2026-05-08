import { useLanguage } from "../i18n/LanguageContext";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ darkMode, setDarkMode }) {
  const { t, lang, toggleLang } = useLanguage();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        {/*<a href="#hero">{t.hero.title}</a>*/}
        <a href="#about">{t.aboutMe.title}</a>
        <a href="#skills">{t.skills.title}</a>
        <a href="#projects">{t.projects.title}</a>
        <a href="#contact">{t.contact.title}</a>

        <button onClick={toggleLang}>{lang === "en" ? "ES" : "EN"}</button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label={
            darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
          }
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffb733"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f5b64d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
            </svg>
          )}
        </button>

        <span className="clock">{time}</span>
      </nav>
    </header>
  );
}
