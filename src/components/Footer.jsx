import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      {/* Copyright Text */}
      <p>&copy; Joulian Alsuliman 2025. Alle Rechte vorbehalten.</p>

      {/* GitHub Link */}
      <a
        href="https://github.com/JoulianALS"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30}/>
      </a>
    </footer>
  );
}

export default Footer;
