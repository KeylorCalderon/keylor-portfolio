import { useLanguage } from "../i18n/LanguageContext";
import { mySkills } from "../assets/skills_tech_stack";
import "./Skills.css";

import { SiAngular, SiMysql } from "react-icons/si";

export default function Skills() {
  const { lang, t } = useLanguage();
  const currentSkills = mySkills[lang];

  return (
    <section id="skills" className="section-container-skills">
      <div className="skills-container">
        <header>
          <h2>{t.skills.title}</h2>
          <p>{t.skills.subtitle}</p>
        </header>

        <div className="skills-cards-container">
          {currentSkills.map((category) => {
            return (
              <article className="article-skill" key={category.id}>
                <h3 className="category-name">{category.name}</h3>

                <div className="icons-logo">
                  <ul className="item-card">
                    {category.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <li className="item-box" key={item.label}>
                          <Icon className="item-icon" />
                          <div className="item-box-text">{item.label}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
