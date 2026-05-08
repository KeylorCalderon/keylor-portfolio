import "../../index.css";

function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: "#f3f3f3",
        borderRadius: 14,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "30vw",
          height: "24vh",
          objectFit: "cover",
          borderRadius: 6,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      />
      <p style={{ fontSize: 22 }}>{project.title}</p>
      <p style={{ fontSize: 16 }}>{project.description}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                fontSize: 12,
                background: "#E8E8E8",
                borderRadius: 14,
                padding: "2px 8px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="demo-button"
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
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
