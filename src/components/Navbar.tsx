import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount: read stored theme or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
        return;
      }
    } catch {
      // ignore
    }

    // fallback: system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Whenever theme changes, sync to DOM + localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sections: string[] = [
    "about",
    "experience",
    "skills",
    "projects",
    "gaming",
    "contact",
  ];

  return (
    <header className="navbar glass-card">
      <div className="nav-left">
        <span className="nav-logo">AD</span>
        <span className="nav-name">Aditya Dadheech</span>
      </div>

      <nav className="nav-links">
        {sections.map((id: string) => (
          <button
            key={id}
            className="nav-link"
            onClick={() => scrollToId(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}

        {/* Theme toggle button */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark/light theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
