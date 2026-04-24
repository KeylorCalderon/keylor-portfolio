function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-between items-center px-10 py-4 text-sm">
      {/* LEFT */}
      <span>© 2026 Keylor. All rights reserved.</span>

      {/* CENTER */}
      <div className="flex gap-6">
        <span>keycal76@gmail.com</span>
        <span>+506 7212 5875</span>
      </div>

      {/* RIGHT */}
      <div className="flex gap-4">
        <a href="https://github.com/KeylorCalderon" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/keylor-calderon/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Footer;
