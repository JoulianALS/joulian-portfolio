import React, { useContext } from "react";
import PortraitScene from "../three/PortraitScene";
import { LanguageContext } from "../App";

const Home = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="home-container">
      {/* Info text */}
      <div className="info-text">
        <h1>{t.home.title}</h1>
        <p>
          {t.home.intro}
          <br />
          <span className="quote">{t.home.quote}</span>
          <br />
          {t.home.cta}
        </p>
      </div>
      {/* 3D-portrait with border */}
      <div className="portrait-container">
        <div>
          <PortraitScene />
        </div>
      </div>
    </div>
  );
};

export default Home;