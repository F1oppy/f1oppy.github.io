// src/components/Section.jsx
const Section = ({ id, title, children }) => {
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
