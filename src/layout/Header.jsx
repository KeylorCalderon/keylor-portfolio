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

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        <span className="clock">{time}</span>
      </nav>
    </header>
  );
}
