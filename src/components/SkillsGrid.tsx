// src/components/SkillsGrid.jsx
import { useState } from "react";

const levelLabel = (n) => {
  if (n <= 2) return "Intermediate";
  if (n === 3) return "Advanced";
  if (n === 4) return "Expert";
  return "Lead / SME";
};

const SkillsGrid = ({ skills }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Tech", "Leadership"];

  const filteredSkills = skills.filter((s) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Tech") return s.level <= 4;
    if (activeFilter === "Leadership") return s.level >= 5;
    return true;
  });

  return (
    <div>
      <div className="pill-switch">
        {categories.map((c) => (
          <button
            key={c}
            className={`pill ${activeFilter === c ? "pill-active" : ""}`}
            onClick={() => setActiveFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div key={skill.category} className="skill-card glass-card">
            <div className="skill-header">
              <h3>{skill.category}</h3>
              <span className="skill-level">{levelLabel(skill.level)}</span>
            </div>
            <div className="skill-meter">
              <div
                className="skill-meter-fill"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
            <ul className="skill-items">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
