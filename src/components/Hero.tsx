import React from "react";

type HeroProps = {
  profile: any; // you can tighten this later if you want
};

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="top" className="hero">
      <div className="hero-content glass-card">
        <div className="hero-main">
          <p className="hero-eyebrow">Project Engineer • Team Lead</p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-chips">
            <span className="chip">Full-Stack & IAM</span>
            <span className="chip">Cloud & Security</span>
            <span className="chip">Team Leadership</span>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn primary-btn">
              Let’s Connect
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn ghost-btn"
            >
              View LinkedIn
            </a>

            {/* NEW: Download Resume button */}
            <a
              href="/resume.pdf"
              className="btn ghost-btn resume-btn"
              download
            >
              ⬇️ Download Resume
            </a>
          </div>

          <div className="hero-meta">
            <span>{profile.location}</span>
            <span>•</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>•</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-card mini-glass">
            <h3>Quick Stats</h3>
            <ul className="hero-list">
              <li>3+ years in enterprise IT & development</li>
              <li>SME for IAM, software management & Azure</li>
              <li>Leading a team of 8 analysts</li>
            </ul>
          </div>

          <div className="hero-card mini-glass hero-game-card">
            <h3>Player Profile 🎮</h3>
            <p className="hero-game-text">
              Favourite titles: <strong>Ghost of Tsushima</strong>,{" "}
              <strong>Assassin’s Creed</strong>,{" "}
              <strong>Counter-Strike</strong>, and more.
            </p>
            <p className="hero-game-text small">
              Style: Strategic, patient, objective-focused — the same approach I
              bring to production incidents and project delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
