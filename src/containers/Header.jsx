import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    const initial = getInitialTheme();
    document.documentElement.dataset.theme = initial;
    return initial;
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <header className="Header">
      <button className="ThemeToggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
};
