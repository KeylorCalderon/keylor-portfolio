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
          top: 100,
          left: 100,
          background: "white",
          padding: 20,
          border: "3px solid black",
          borderRadius: 10,
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
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Window;
