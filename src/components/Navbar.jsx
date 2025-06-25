import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

function Navbar() {
  const { language, setLanguage, t } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <nav className="navbar">
      {/* Left Side - Name */}
      <h1 className="navbar-name">{t.name}</h1>

      {/* Right Side - Links */}
      <div className="navbar-links">
        <Link to="/joulian-portfolio">{t.nav.home}</Link>
        <Link to="/skills">{t.nav.skills}</Link>
        <Link to="/projects">{t.nav.projects}</Link>
        <Link to="/contact">{t.nav.contact}</Link>
        <button
          onClick={toggleLanguage}
          style={{
            marginLeft: "15px",
            border: "none",
            background: "linear-gradient(90deg, #7f5af0, #58a6ff)",
            color: "#0d1117",
            borderRadius: "8px",
            padding: "6px 14px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          aria-label="Sprache wechseln"
        >
          {language === "de" ? "EN" : "DE"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
