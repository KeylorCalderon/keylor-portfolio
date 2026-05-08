import { useLanguage } from "../i18n/LanguageContext";
import photo from "../assets/Photo.jpg";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section-container">
      <div className="hero-container">
        <header className="greeting-container">
          <p className="greeting">{t.hero.greeting}</p>
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p className="description">{t.hero.description}</p>
        </header>

        <div className="hero-image">
          <img src={photo} alt="Myself" />
        </div>
      </div>
    </section>
  );
}
