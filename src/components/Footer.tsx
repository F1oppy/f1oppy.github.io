// src/components/Footer.jsx
import resumeData from "../data/resumeData";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {resumeData.profile.name}. Built with React
        + Vite and deployed on Vercel.
      </p>
      <p className="footer-sub">
        Pastel UI • Subtle game vibes • One clean hub for my work.
      </p>
    </footer>
  );
};

export default Footer;
