import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}