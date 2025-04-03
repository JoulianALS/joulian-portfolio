import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      {/* Copyright Text */}
      <p>&copy; Joulian Alsuliman 2025. Alle Rechte vorbehalten.</p>

      {/* Social Links */}
      <div className="social-links">
        <a
          href="https://github.com/JoulianALS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/joulian-alsuliman-06004535a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
