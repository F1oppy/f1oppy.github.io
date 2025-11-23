// src/components/Navbar.jsx
const Navbar = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar glass-card">
      <div className="nav-left">
        <span className="nav-logo">AD</span>
        <span className="nav-name">Aditya Dadheech</span>
      </div>
      <nav className="nav-links">
        {["about", "experience", "skills", "projects", "gaming", "contact"].map(
          (id) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => scrollToId(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          )
        )}
      </nav>
    </header>
  );
};

export default Navbar;
