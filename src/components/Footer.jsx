import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../App";

// Simple TryHackMe SVG icon component
const TryHackMeIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="#212529" />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fontSize="13"
      fill="#fff"
      fontFamily="Arial"
      fontWeight="bold"
    >
      THM
    </text>
  </svg>
);

function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer>
      {/* Copyright Text */}
      <p>&copy; {t.footer.copyright}</p>

      {/* GitHub and LinkedIn Links */}
      <div
        className="social-links"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <a
          href="https://github.com/JoulianALS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/joulian-alsuliman-06004535a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://tryhackme.com/p/joulianalsuliman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TryHackMe"
        >
          <TryHackMeIcon size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;