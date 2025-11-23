import React from "react";

const Navbar: React.FC = () => {
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
      </nav>
    </header>
  );
};

export default Navbar;
