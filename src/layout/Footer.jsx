import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Keylor. All rights reserved.</p>

        <p className="footer-made">Hecho con ♥ y React</p>
      </div>
    </footer>
  );
}
