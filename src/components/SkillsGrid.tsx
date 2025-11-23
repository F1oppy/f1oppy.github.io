import React, { useState } from "react";

type SkillItem = {
  category: string;
  level: number; // 1–5
  items: string[];
};

type SkillsGridProps = {
  skills: SkillItem[];
};

const levelLabel = (n: number): string => {
  if (n <= 2) return "Intermediate";
  if (n === 3) return "Advanced";
  if (n === 4) return "Expert";
  return "Lead / SME";
};

type FilterType = "All" | "Tech" | "Leadership";

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const categories: FilterType[] = ["All", "Tech", "Leadership"];

  const filteredSkills = skills.filter((s: SkillItem) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Tech") return s.level <= 4;
    if (activeFilter === "Leadership") return s.level >= 5;
    return true;
  });

  return (
    <div>
      <div className="pill-switch">
        {categories.map((c: FilterType) => (
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
        {filteredSkills.map((skill: SkillItem) => (
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
              {skill.items.map((item: string) => (
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
