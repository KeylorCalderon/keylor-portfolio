import Window from "../UI/Window";

function ContactWindow({ onClose }) {
  return (
    <Window
      title="Contact"
      onClose={onClose}
      style={{ width: 350, height: 200 }}
    >
      <p>Email: keycal76@gmail.com</p>
    </Window>
  );
}

export default ContactWindow;
