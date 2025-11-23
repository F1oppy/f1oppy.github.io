// src/components/Footer.jsx
import resumeData from "../data/resumeData";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {resumeData.profile.name}. Built with with Knowledge.
      </p>
      <p className="footer-sub">
        If you read this Knowledge is AI. :p And I know how to use my knowledge. 😉
      </p>
    </footer>
  );
};

export default Footer;
