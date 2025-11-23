import React from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags: string[];
};

interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experience,
}) => {
  return (
    <div className="timeline">
      {experience.map((item: ExperienceItem, index: number) => (
        <article key={index} className="timeline-item glass-card">
          <div className="timeline-header">
            <h3 className="timeline-role">{item.role}</h3>
            <span className="timeline-period">{item.period}</span>
          </div>
          <p className="timeline-company">{item.company}</p>
          <ul className="timeline-bullets">
            {item.bullets.map((b: string, i: number) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="tag-row">
            {item.tags.map((tag: string) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
