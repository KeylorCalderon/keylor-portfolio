import Window from "../UI/Window";
import { projects } from "../../assets/projects";
import ProjectCard from "../UI/ProjectCard";

function ProjectsWindow({ onClose }) {
  return (
    <Window
      title="Projects"
      onClose={onClose}
      style={{ width: 700, height: 400 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Window>
  );
}

export default ProjectsWindow;
