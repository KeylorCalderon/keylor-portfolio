import { useEffect } from "react";

function Window({ title, onClose, children, style = {} }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.05)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#ffffff",
          padding: 20,
          borderRadius: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          ...style,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <p style={{ fontSize: 26 }}>{title}</p>
          <button className="standard-button" onClick={onClose}>
            X
          </button>
        </div>
        <hr
          style={{
            margin: "10px 0",
            border: "none",
            borderTop: "1px solid #eee",
          }}
        />
        {children}
      </div>
    </div>
  );
}

export default Window;
