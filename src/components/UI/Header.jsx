import { useEffect, useState } from "react";

function Header({ darkMode, setDarkMode }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-35 py-8 z-50">
      <h1 className="text-5xl font-bold">KeylorDev</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">{time}</span>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-lg"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default Header;
