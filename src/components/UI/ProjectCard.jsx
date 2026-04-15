function ProjectCard({ project }) {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
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
