import React, { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-underline" />
      </div>
      {children}
    </section>
  );
};

export default Section;
