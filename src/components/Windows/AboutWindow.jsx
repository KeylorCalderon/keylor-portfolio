import Window from "../UI/Window";

export default function AboutWindow({ onClose }) {
  return (
    <Window title="About Me" onClose={onClose} style={{ width: 280 }}>
      <p>Full Stack Developer</p>
    </Window>
  );
}
