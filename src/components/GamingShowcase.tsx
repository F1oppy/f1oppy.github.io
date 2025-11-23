// src/components/GamingShowcase.jsx
import { useState } from "react";

const games = [
  {
    name: "Ghost of Tsushima",
    role: "Samurai / Explorer",
    style: "Open-world, story-driven, tactical combat",
    takeaway:
      "Patience, timing, and reading opponents — similar to handling complex incidents calmly.",
  },
  {
    name: "Assassin’s Creed",
    role: "Assassin / Strategist",
    style: "Stealth, parkour, historical worlds",
    takeaway:
      "Planning ahead, using the environment, and adapting quickly to new constraints.",
  },
  {
    name: "Counter-Strike",
    role: "Team Player / Shot-caller",
    style: "Fast-paced, team-based FPS",
    takeaway:
      "Communication, callouts, and trust in the team — just like coordinating with L1/L2/L3 during outages.",
  },
  {
    name: "Other Titles",
    role: "Curious Gamer",
    style: "RPGs, co-op, and competitive games",
    takeaway:
      "Constant learning, experimentation, and working with diverse playstyles and personalities.",
  },
];

const GamingShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGame = games[activeIndex];

  return (
    <div className="gaming-layout">
      <div className="gaming-sidebar">
        <p className="body-text">
          Gaming is my primary hobby — it keeps my reflexes sharp and my
          decision-making fast. These are some of the worlds I spend time in:
        </p>
        <div className="game-list">
          {games.map((g, index) => (
            <button
              key={g.name}
              className={`game-tab ${
                index === activeIndex ? "game-tab-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="game-bullet">▶</span> {g.name}
            </button>
          ))}
        </div>
      </div>

      <div className="gaming-card glass-card">
        <h3 className="gaming-title">{activeGame.name}</h3>
        <p className="gaming-role">
          <strong>In-game role:</strong> {activeGame.role}
        </p>
        <p className="gaming-style">
          <strong>Style:</strong> {activeGame.style}
        </p>
        <p className="gaming-takeaway">
          <strong>What it reflects at work:</strong> {activeGame.takeaway}
        </p>

        <div className="mini-hud">
          <div className="hud-bar">
            <span>Focus</span>
            <div className="hud-meter">
              <div className="hud-fill" />
            </div>
          </div>
          <div className="hud-bar">
            <span>Teamwork</span>
            <div className="hud-meter">
              <div className="hud-fill" />
            </div>
          </div>
          <div className="hud-bar">
            <span>Strategy</span>
            <div className="hud-meter">
              <div className="hud-fill" />
            </div>
          </div>
        </div>
        <p className="gaming-footnote">
          Think of this section as a minimalist game HUD — but for my personality.
        </p>
      </div>
    </div>
  );
};

export default GamingShowcase;
