import { useLanguage } from "../i18n/LanguageContext";
import photo from "../assets/AboutMe.gif";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="section-container">
        <div className="about-me-container">
          <header>
            <h2>{t.aboutMe.title}</h2>
            <p>{t.aboutMe.subtitle}</p>
          </header>

          <article className="about-me-description-container">
            <div className="about-me-image">
              <img src={photo} alt="About me" />
            </div>
            <p>{t.aboutMe.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
