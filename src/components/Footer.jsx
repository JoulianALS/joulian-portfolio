import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      {/* Copyright Text */}
      <p>&copy; Joulian Alsuliman 2025. Alle Rechte vorbehalten.</p>

      {/* GitHub and LinkedIn Links */}
      <div className="social-links" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
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
      </div>
    </footer>
  );
}

export default Footer;