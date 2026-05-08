import { useLanguage } from "../i18n/LanguageContext";
import { projects } from "../assets/projects.js";
import ImageRail from "./ImageRail";
import { FaGithub } from "react-icons/fa";
import "./Project.css";

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects">
      <div className="projects-container">
        <header>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        </header>

        <div className="projects-boxes">
          {projects[lang].map((project, index) => (
            <article className="projects-box" key={index}>
              <div className="project-images">
                <ImageRail images={project.images} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-tags-container">
                {project.tech.map((t, i) => (
                  <span className="tech-tags" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.repo || "#"}
                  className={`repo-button ${!project.repo ? "disabled" : ""}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => !project.repo && e.preventDefault()}
                  aria-disabled={!project.repo}
                  tabIndex={!project.repo ? -1 : 0}
                >
                  <FaGithub size={28} />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo || "#"}
                  className={`demo-button ${!project.demo ? "disabled" : ""}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => !project.demo && e.preventDefault()}
                  aria-disabled={!project.demo}
                  tabIndex={!project.demo ? -1 : 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l10-10" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
