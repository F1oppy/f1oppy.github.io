import React from "react";

type ProjectItem = {
  org: string;
  title: string;
  role: string;
  year: string;
  tech: string[];
  description: string;
};

type ProjectsProps = {
  projects: ProjectItem[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((p: ProjectItem, i: number) => (
        <article key={i} className="project-card glass-card">
          <div className="project-header">
            <h3>{p.title}</h3>
            <span className="project-org">{p.org}</span>
          </div>
          <p className="project-meta">
            {p.role} • {p.year}
          </p>
          <p className="project-desc">{p.description}</p>
          <div className="tag-row">
          {p.tech.map((t: string) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
