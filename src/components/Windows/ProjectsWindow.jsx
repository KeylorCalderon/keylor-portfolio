import Window from "../UI/Window";

export default function ProjectsWindow({ onClose }) {
  return (
    <Window
      title="Projects"
      onClose={onClose}
      style={{ width: 600, height: 350 }}
    >
      <p>Aquí irán los proyectos</p>
    </Window>
  );
}
