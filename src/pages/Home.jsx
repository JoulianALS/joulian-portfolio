import React from "react";
import PortraitScene from "../three/PortraitScene";

const Home = () => {
  return (
    <div className="home-container">

      {/* Info text */}
      <div className="info-text">
      <h1>Willkommen in meinem Portfolio!</h1>
        <p>
          Hey! Ich bin Joulian Alsuliman, ein Student der IT-Multimedia und Game Development.
          <br/>
          <span className="quote">"Wer aufhört zu lernen, beginnt zu sterben." – Sokrates</span>
          <br/>
          Entdecke meine Arbeit und nimm Kontakt auf!
        </p>
      </div>

      {/* 3D-portrait with border */}
      <div className="portrait-container">
        <div>
          <PortraitScene/>
        </div>
      </div>
    </div>
  );
};

export default Home;