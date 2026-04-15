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
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 6,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      />
      <h3>{project.title}</h3>
      <p style={{ fontSize: 14 }}>{project.description}</p>

      <div style={{ fontSize: 12 }}>{project.tech.join(", ")}</div>

      <a href={project.github} target="_blank">
        GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
